import * as React from "react"
import styled from "styled-components"
import * as Data from "../data"


const Page = styled.div`

`


const TableSeparator = styled.hr`
    margin: 2em 0em;
`


export interface Image
{
    filename: string
    buffer: ArrayBuffer
    data: string
}


export function PageEdit(props: {
})
{
    const [record, setRecord] = React.useState<Data.Record>(null!)
    const [images, setImages] = React.useState<Image[]>([])


    return <Page>

        <FilesystemHandler
            record={ record }
            setRecord={ setRecord }
            images={ images }
            setImages={ setImages }
        />

        { !!record &&

            <>

            <ImageTray
                record={ record }
                setRecord={ setRecord }
                images={ images }
                setImages={ setImages }
            />

            <br/>

            <TextInput
                label="Title"
                value={ record.title }
                setValue={ title => setRecord(r => ({ ...r, title })) }
                width="20em"
                style={{
                    fontSize: "2em",
                    fontWeight: "bold",
                }}
            />

            <br/>

            <Select
                label="Media type"
                value={ record.kind }
                setValue={ kind => setRecord(r => ({ ...r, kind: kind as Data.Record["kind"] })) }
            >
                <option value="movie">Movie</option>
                <option value="game">Game</option>
            </Select>

            <br/>

            <IntegerInput
                label="Year"
                value={ record.year }
                setValue={ year => setRecord(r => ({ ...r, year })) }
            />

            <br/>

            <TextInput
                label="Copyright"
                value={ record.copyright }
                setValue={ copyright => setRecord(r => ({ ...r, copyright })) }
            />

            <br/>
            <br/>

            <Tables
                tables={ record.tables }
                setTables={ tables => setRecord(r => ({ ...r, tables })) }
                images={ images }
                setImages={ setImages }
            />

            <div style={{ height: "20em" }}/>

        </>
    }    
    
    </Page>
}


export function FilesystemHandler(props: {
    record: Data.Record | null,
    setRecord: (records: Data.Record) => void,
    images: Image[],
    setImages: (images: Image[]) => void,
})
{
    const folderHandle = React.useRef<FileSystemDirectoryHandle | null>(null)


    const dataFilename = "data.json"


    const onRefresh = async () =>
    {
        if (!folderHandle.current)
            return
        
        try
        {
            const dataFile = await folderHandle.current.getFileHandle(dataFilename)
            const dataStr = await dataFile.getFile().then(f => f.text())
            const data: Data.Record = JSON.parse(dataStr)
            props.setRecord(data)
        }
        catch
        {
            props.setRecord(Data.makeRecord())
        }

        const images: Image[] = []        
        for await (const entry of folderHandle.current)
        {
            const filename = entry[0]
            const imageHandle = entry[1]

            if (imageHandle.kind === "directory")
                continue

            if (!filename.endsWith(".png") &&
                !filename.endsWith(".jpg") &&
                !filename.endsWith(".bmp"))
                continue

            const imageData = await imageHandle.getFile()
                .then(f => f.arrayBuffer())
            
            images.push({
                filename,
                buffer: imageData,
                data: "data:image/png;base64," + arrayBufferToBase64(imageData)
            })
        }

        props.setImages(images)
    }


    const onOpen = async () =>
    {
        const handle = await window.showDirectoryPicker({
            id: "dataFolder",
        })
        if (!handle)
            return

        folderHandle.current = handle
        onRefresh()
    }


    const onSave = async () =>
    {
        if (!folderHandle.current)
        {
            window.alert("Please open a folder first.")
            return
        }

        if (!props.record)
            return
            
        for (const table of props.record.tables)
        {
            const rowSet = new Set<string>()
            for (const row of table.rows)
            {
                if (rowSet.has(row))
                {
                    window.alert("Duplicate row `" + row + "` in table `" + table.title + "`.")
                    return
                }

                rowSet.add(row)
            }
            
            const colSet = new Set<string>()
            for (const col of table.columns)
            {
                if (colSet.has(col))
                {
                    window.alert("Duplicate column `" + col + "` in table `" + table.title + "`.")
                    return
                }

                colSet.add(col)
            }
        }

        const usedImages = new Set<string>()
        const toDeleteImages = new Set<string>()

        const newRecord = { ...props.record }

        for (const table of newRecord.tables)
        {
            for (let row = 0; row < table.rows.length; row++)
            {
                for (let column = 0; column < table.columns.length; column++)
                {
                    const picture = table.pictures[row][column]
                    if (!picture.filename)
                        continue
                    
                    const image = props.images.find(img => img.filename === picture.filename)
                    if (!image)
                    {
                        picture.filename = ""
                        continue
                    }

                    const fileExtensionIndex = picture.filename.lastIndexOf(".")
                    if (fileExtensionIndex < 0)
                        continue

                    const fileExtension = picture.filename.slice(fileExtensionIndex)

                    const standardizedFilename =
                        table.rows[row] +
                        "[" + table.columns[column] + "]" +
                        fileExtension

                    usedImages.add(standardizedFilename)

                    if (picture.filename === standardizedFilename)
                        continue

                    try
                    {
                        const imgFile = await folderHandle.current.getFileHandle(
                            standardizedFilename,
                            { create: true })

                        const imgStream = await imgFile.createWritable()
                        await imgStream.write(image.buffer)
                        await imgStream.close()
                    }
                    catch (e)
                    {
                        window.alert("Could not update an image file.\n\n" + e)
                        console.error(e)
                    }
                    
                    toDeleteImages.add(picture.filename)
                    picture.filename = standardizedFilename
                }
            }
        }

        for (const image of props.images)
        {
            if (usedImages.has(image.filename))
                continue

            if (!toDeleteImages.has(image.filename))
                continue
            
            try
            {
                await folderHandle.current.removeEntry(
                    image.filename)
            }
            catch (e)
            {
                window.alert("Could not delete an image file.\n\n" + e)
                console.error(e)
            }
        }

        props.setRecord(newRecord)

        const dataFile = await folderHandle.current.getFileHandle(
            dataFilename,
            { create: true })

        const dataStr = JSON.stringify(newRecord, null, 2)
        const dataStream = await dataFile.createWritable()
        await dataStream.write(dataStr)
        await dataStream.close()

        await onRefresh()
    }


    return <div>
        <button
            onClick={ onOpen }
        >
            Open data folder...
        </button>

        <button
            onClick={ onSave }
        >
            Save
        </button>
    </div>
}


export function ImageTray(props: {
    record: Data.Record,
    setRecord: (records: Data.Record) => void,
    images: Image[],
    setImages: (images: Image[]) => void,
})
{
    const onDragStart = (ev: React.DragEvent<HTMLElement>, image: Image) =>
    {
        ev.dataTransfer.setData("text/plain", image.filename)
    }


    const usedImages = new Set<string>()
    for (const table of props.record.tables)
        for (const pictureRow of table.pictures)
            for (const picture of pictureRow)
                if (picture.filename)
                    usedImages.add(picture.filename)


    const unassignedImages = props.images
        .filter(img => !usedImages.has(img.filename))


    return <div
        style={{
            zIndex: 1000,
            position: "fixed",
            left: "0",
            top: "calc(100vh - 12em)",
            backgroundColor: "#222222",
            height: "12em",
            padding: "0.5em",
            overflowY: "scroll",
        }}
    >

        <div style={{
            fontWeight: "bold",
            color: "white",
            marginBottom: "0.5em"
        }}>
            Unassigned images ({ unassignedImages.length })
        </div>

        { unassignedImages.map((image, i) =>
            <img
                key={ image.filename }
                title={ image.filename }
                src={ image.data }
                draggable="true"
                onDragStart={ ev => onDragStart(ev, image) }
                style={{
                    aspectRatio: "auto",
                    width: "auto",
                    height: "9em",
                    marginRight: "0.5em",
                    marginBottom: "0.5em",
                }}
            />
        )}

    </div>
}


export function Label(props: {
    text?: string,
    children: React.ReactNode,
})
{
    if (!props.text)
        return <>{ props.children }</>

    
    return <div style={{
        display: "inline-block"
    }}>
        <div style={{
            display: "grid",
            gridTemplate: "auto auto / auto",
            alignSelf: "baseline",
            alignContent: "baseline",
            alignItems: "baseline",
        }}>

            <div style={{
                gridColumn: 1,
                gridRow: 1,
                fontStyle: "italic",
                fontSize: "0.75rem",
                opacity: 0.6,
            }}>
                { props.text }
            </div>

            <div style={{
                gridColumn: 1,
                gridRow: 2,
            }}>
                { props.children }
            </div>

        </div>
    </div>
}


export function TextInput(props: {
    value: string,
    setValue: (text: string) => void,
    label?: string,
    width?: string,
    style?: React.CSSProperties,
})
{
    return <Label text={ props.label }>
        <input
            type="text"
            value={ props.value }
            onChange={ ev => props.setValue(ev.target.value) }
            style={{
                fontFamily: "inherit",
                width: props.width ?? "auto",
                ...props.style,
            }}
        />
    </Label>
}


export function IntegerInput(props: {
    value: number,
    setValue: (num: number) => void,
    label?: string,
    width?: string,
    style?: React.CSSProperties,
})
{
    return <Label text={ props.label }>
        <input
            type="text"
            value={ props.value.toString() }
            onChange={ ev => props.setValue(parseInt(ev.target.value)) }
            style={{
                fontFamily: "inherit",
                width: props.width ?? "auto",
                ...props.style,
            }}
        />
    </Label>
}


export function Select(props: {
    value: string,
    setValue: (text: string) => void,
    label?: string,
    children: React.ReactNode,
    style?: React.CSSProperties,
})
{
    return <Label text={ props.label }>
        <select
            value={ props.value }
            onChange={ ev => props.setValue(ev.target.value) }
            style={{
                fontFamily: "inherit",
                ...props.style,
            }}
        >
            { props.children }
        </select>
    </Label>
}


export function Tables(props: {
    tables: Data.Table[],
    setTables: (tables: Data.Table[]) => void,
    images: Image[],
    setImages: (images: Image[]) => void,
})
{
    const onAdd = (index: number) =>
    {
        props.setTables([
            ...props.tables.slice(0, index),
            Data.makeTable(),
            ...props.tables.slice(index),
        ])
    }


    const onRemove = (index: number) =>
    {
        if (!window.confirm("Remove table?"))
            return

        props.setTables([
            ...props.tables.slice(0, index),
            ...props.tables.slice(index + 1),
        ])
    }


    const onSet = (index: number, table: Data.Table) =>
    {
        props.setTables([
            ...props.tables.slice(0, index),
            table,
            ...props.tables.slice(index + 1),
        ])
    }


    return <>
        { props.tables.map((table, i) =>
        {
            return <React.Fragment key={ i }>

                <TableSeparator/>

                <button
                    onClick={ () => onRemove(i) }
                >
                    x
                </button>
                
                <br/>

                <Table
                    table={ table }
                    setTable={ table => onSet(i, table) }
                    images={ props.images }
                    setImages={ props.setImages }
                />
            
            </React.Fragment>
        })}
        
        <TableSeparator/>

        <button
            onClick={ () => onAdd(props.tables.length) }
        >
            + Table
        </button>
    </>
}


export function Table(props: {
    table: Data.Table,
    setTable: (table: Data.Table) => void,
    images: Image[],
    setImages: (images: Image[]) => void,
})
{
    const onAddColumn = (index: number) =>
    {
        props.setTable({
            ...props.table,
            columns: [
                ...props.table.columns.slice(0, index),
                "",
                ...props.table.columns.slice(index),
            ],
            pictures: insertColumn(props.table.pictures, index, Data.makePicture()),
        })
    }


    const onRemoveColumn = (index: number) =>
    {
        if (!window.confirm("Remove column?"))
            return

        props.setTable({
            ...props.table,
            columns: [
                ...props.table.columns.slice(0, index),
                ...props.table.columns.slice(index + 1),
            ],
            pictures: removeColumn(props.table.pictures, index),
        })
    }


    const onSetColumn = (index: number, col: string) =>
    {
        props.setTable({
            ...props.table,
            columns: [
                ...props.table.columns.slice(0, index),
                col,
                ...props.table.columns.slice(index + 1),
            ],
        })
    }


    const onAddRow = (index: number) =>
    {
        props.setTable({
            ...props.table,
            rows: [
                ...props.table.rows.slice(0, index),
                "",
                ...props.table.rows.slice(index),
            ],
            pictures: insertRow(props.table.pictures, index, Data.makePicture()),
        })
    }


    const onRemoveRow = (index: number) =>
    {
        if (!window.confirm("Remove row?"))
            return

        props.setTable({
            ...props.table,
            rows: [
                ...props.table.rows.slice(0, index),
                ...props.table.rows.slice(index + 1),
            ],
            pictures: removeRow(props.table.pictures, index),
        })
    }


    const onSetRow = (index: number, col: string) =>
    {
        props.setTable({
            ...props.table,
            rows: [
                ...props.table.rows.slice(0, index),
                col,
                ...props.table.rows.slice(index + 1),
            ],
        })
    }


    return <div>
        
        <TextInput
            label="Table Title"
            value={ props.table.title }
            setValue={ title => props.setTable({ ...props.table, title }) }
            width="20em"
            style={{
                fontSize: "1.5em",
                fontWeight: "bold",
            }}
        />

        <br/>
        
        <div style={{
            display: "grid",
            gridTemplate: `repeat(auto, ${ 2 + props.table.rows.length }) / repeat(auto, ${ 2 + props.table.columns.length })`,
            justifyContent: "start",
            justifyItems: "stretch",
            alignItems: "stretch",
            columnGap: "0.5em",
            rowGap: "0.5em",
            width: "max-content",
        }}>
            <div style={{
                gridColumn: 2 + props.table.columns.length,
                gridRow: 1,
                backgroundColor: "white",
                position: "sticky",
                top: "0px",
            }}>

                <button
                    onClick={ () => onAddColumn(props.table.columns.length) }
                >
                    + Language Column
                </button>

            </div>
                
            <div style={{
                gridColumn: 1,
                gridRow: 2 + props.table.rows.length,
                backgroundColor: "white",
                position: "sticky",
                left: "0px",
            }}>

                <button
                    onClick={ () => onAddRow(props.table.rows.length) }
                >
                    + Picture Row
                </button>

            </div>

            { props.table.columns.map((col, i) =>
            {
                return <div
                    key={ i }
                    style={{
                        gridColumn: 2 + i,
                        gridRow: 1,
                        backgroundColor: "white",
                        position: "sticky",
                        top: "0px",
                    }}
                >

                    { col !== null &&
                        <>
                        <TextInput
                            value={ col }
                            setValue={ c => onSetColumn(i, c) }
                            width="4em"
                        />

                        <button
                            onClick={ () => onRemoveColumn(i) }
                        >
                            x
                        </button>
                        </>
                    }

                </div>
            })}
            
            { props.table.rows.map((row, i) =>
            {
                return <div
                    key={ i }
                    style={{
                        gridColumn: 1,
                        gridRow: 2 + i,
                        backgroundColor: "white",
                        position: "sticky",
                        left: "0px",
                    }}
                >

                    { row !== null &&
                        <>
                        <TextInput
                            value={ row }
                            setValue={ r => onSetRow(i, r) }
                            width="8em"
                        />

                        <button
                            onClick={ () => onRemoveRow(i) }
                        >
                            x
                        </button>
                        </>
                    }

                </div>
            })}

            { props.table.columns.map((col, i) =>
            {
                return props.table.rows.map((row, j) =>
                {
                    return <Picture
                        key={ i + ":" + j }
                        table={ props.table }
                        setTable={ props.setTable }
                        images={ props.images }
                        setImages={ props.setImages }
                        columnIndex={ i }
                        rowIndex={ j }
                        style={{
                            gridColumn: 2 + i,
                            gridRow: 2 + j,
                        }}
                    />
                })

            })}

        </div>

    </div>
}


export function Picture(props: {
    table: Data.Table,
    setTable: (table: Data.Table) => void,
    images: Image[],
    setImages: (images: Image[]) => void,
    columnIndex: number,
    rowIndex: number,
    style: React.CSSProperties,
})
{
    const picture = props.table.pictures[props.rowIndex][props.columnIndex]
    const image = props.images.find(img => img.filename === picture.filename)


    const onDragStart = (ev: React.DragEvent<HTMLElement>) =>
    {
        if (!image)
            return
        
        ev.dataTransfer.setData("text/plain", image.filename)
    }


    const onDragOver = (ev: React.DragEvent<HTMLElement>) =>
    {
        ev.preventDefault()
    }


    const onDrop = (ev: React.DragEvent<HTMLElement>) =>
    {
        const imageFilename = ev.dataTransfer.getData("text/plain")
        
        props.setTable({
            ...props.table,
            pictures: setCell(
                props.table.pictures,
                props.columnIndex,
                props.rowIndex,
                {
                    ...picture,
                    filename: imageFilename,
                }
            ),
        })
    }


    const setPicture = (newPicture: Data.Picture) =>
    {
        props.setTable({
            ...props.table,
            pictures: setCell(
                props.table.pictures,
                props.columnIndex,
                props.rowIndex,
                newPicture,
            ),
        })
    }


    const onRemoveImage = () =>
    {
        setPicture({
            ...picture,
            filename: "",
        })
    }


    const onAddNote = (index: number) =>
    {
        setPicture({
            ...picture,
            notes: [
                ...picture.notes,
                Data.makeNote(),
            ]
        })
    }


    const onRemoveNote = (index: number) =>
    {
        if (!window.confirm("Remove note?"))
            return

        setPicture({
            ...picture,
            notes: [
                ...picture.notes.slice(0, index),
                ...picture.notes.slice(index + 1),
            ]
        })
    }


    const onSetNote = (index: number, note: Data.Note) =>
    {
        setPicture({
            ...picture,
            notes: [
                ...picture.notes.slice(0, index),
                note,
                ...picture.notes.slice(index + 1),
            ]
        })
    }


    return <div
        onDragOver={ onDragOver }
        onDrop={ onDrop }
        style={{
            backgroundColor: "#dddddd",
            minWidth: "8em",
            minHeight: "5em",
            padding: "0.25em",
            ...props.style,
        }}
    >
        { !!picture.filename && !!image &&
            <>
            <img
                title={ picture.filename }
                src={ image.data }
                draggable="true"
                onDragStart={ onDragStart }
                style={{
                    aspectRatio: "auto",
                    objectFit: "contain",
                    maxWidth: "10em",
                    maxHeight: "auto",
                }}
            />
            <br/>
            <button
                onClick={ onRemoveImage }
            >
                Remove Image
            </button>
            <br/>
            </>
        }

        <br/>

        { picture.notes.map((note, i) =>
            <React.Fragment key={ i }>
                <select
                    value={ note.kind }
                    onChange={ ev => onSetNote(i, { ...note, kind: ev.target.value as Data.NoteKind }) }
                >
                    <option value="info">Info</option>
                    <option value="transcription">Transcription</option>
                    <option value="standardization">Standardization</option>
                    <option value="translation">Translation</option>
                    <option value="inconsistency">Inconsistency</option>
                    <option value="oddity">Oddity</option>
                </select>
                <button
                    onClick={ () => onRemoveNote(i) }
                >
                    x
                </button>
                <br/>
                <textarea
                    value={ note.text }
                    onChange={ ev => onSetNote(i, { ...note, text: ev.target.value }) }
                    style={{
                        fontFamily: "inherit",
                        width: "calc(100% - 0.5em)",
                    }}
                />
                <br/>
            </React.Fragment>
        )}

        <button
            onClick={ () => onAddNote(picture.notes.length) }
        >
            + Note
        </button>

    </div>
}


function setCell<T>(array2d: T[][], x: number, y: number, item: T): T[][]
{
    return [
        ...array2d.slice(0, y),
        [
            ...array2d[y].slice(0, x),
            item,
            ...array2d[y].slice(x + 1),
        ],
        ...array2d.slice(y + 1),
    ]
}


function insertRow<T>(array2d: T[][], y: number, item: T): T[][]
{
    return [
        ...array2d.slice(0, y),
        new Array<T>(array2d[0]?.length || 0).fill(item),
        ...array2d.slice(y + 1),
    ]
}


function removeRow<T>(array2d: T[][], y: number): T[][]
{
    return [
        ...array2d.slice(0, y),
        ...array2d.slice(y + 1),
    ]
}


function insertColumn<T>(array2d: T[][], x: number, item: T): T[][]
{
    return array2d.map(row => [
        ...row.slice(0, x),
        item,
        ...row.slice(x + 1),
    ])
}


function removeColumn<T>(array2d: T[][], x: number): T[][]
{
    return array2d.map(row => [
        ...row.slice(0, x),
        ...row.slice(x + 1),
    ])
}


function arrayBufferToBase64(buffer: ArrayBuffer)
{
    const bytes = new Uint8Array(buffer)

    let result = ""
    for (let i = 0; i < bytes.byteLength; i++)
        result += String.fromCharCode(bytes[i])

    return window.btoa(result)
}