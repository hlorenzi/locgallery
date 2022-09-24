import * as React from "react"
import styled from "styled-components"
import * as Data from "./data"
import { Image } from "./Image"


const StyledPage = styled.div`
    display: grid;
    grid-template: auto / 1fr auto 1fr;
`


const StyledContent = styled.div`
    padding: 0 1rem;
`


const StyledTable = styled.div<{
    rows: number,
    columns: number,
}>`
    display: grid;
    grid-template: ${ props => `repeat(auto, ${ 1 + 2 * props.rows }) / repeat(auto, ${ 1 + props.columns }) [col-end]` };
    grid-column-gap: 0.25rem;
    grid-row-gap: 0.25rem;
    min-width: 0;
    min-height: 0;
    max-width: min-content;
    margin-bottom: 2rem;
`


const StyledTableColumnHeader = styled.div<{
    index: number
}>`
    grid-row: 1;
    grid-column: ${ props => 1 + props.index };
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5em;
    font-weight: bold;
    position: sticky;
    top: 0em;
    background-color: white;
    width: 100%;
    padding: 0.5em;
    z-index: 1;
`


const StyledTableRowHeader = styled.div<{
    index: number,
    columns: number,
}>`
    grid-row: ${ props => 2 + 2 * props.index };
    grid-column: 1 / ${ props => 1 + props.columns };
    justify-self: left;
    align-self: start;
    position: sticky;
    left: 1em;
    background-color: white;
    margin-top: 0.5em;
    max-width: 90vw;
`


const StyledTablePicture = styled.div<{
    columnIndex: number
    rowIndex: number
}>`
    grid-row: ${ props => 3 + 2 * props.rowIndex };
    grid-column: ${ props => 1 + props.columnIndex };
    justify-self: center;
    align-self: start;

    display: grid;
    grid-template: auto auto / auto;
`


const StyledTablePictureImage = styled.div<{
    width: string
    height: string
}>`
    grid-row: 1
    grid-column: 1;
    justify-self: start;
    align-self: center;
    width: ${ props => props.width };
    min-height: ${ props => props.height };
`


const StyledTablePictureNotes = styled.div`
    grid-row: 2;
    grid-column: 1;
    justify-self: start;
    padding: 0 0.5em;
    font-size: 0.9em;
`


export function PageGallery(props: {
    //entries: Data.Records,
    record: Data.Record,
    dataPath: string,
})
{
    document.title = props.record.title + " • LocGallery"

    const [comparingWith, setComparingWith] = React.useState("none")
    const comparingRecord =
        //comparingWith ?
        //    props.entries.find(e => e.id === comparingWith)! :
            null

    return <StyledPage>

        <div/>

        <StyledContent>

            <a href=".">&lt; Back to home</a>
            <br/>
            <br/>

            <h1 style={{ marginBottom: 0 }}>{ props.record.title }</h1>
            <span>{ props.record.year }</span>
            <br/>
            <span>© { props.record.copyright }</span>

            { props.record.compareWith && props.record.compareWith.length > 0 &&
                <>
                <br/>
                <br/>
                <div>
                    Compare with:
                    { " " }
                    <select
                        value={ comparingWith }
                        onChange={ ev => setComparingWith(ev.target.value) }
                    >
                        <option value="none">---</option>
                        
                        { /*props.data.compareWith.map(id =>
                            <option key={ id } value={ id }>
                                { props.entries.find(e => e.id === id)!.title }
                            </option>
                        )*/ }
                    </select>
                </div>
                </>
            }

            { props.record.tables.map((table, t) =>
            {
                return <React.Fragment key={ t }>
                    <h2>{ table.title }</h2>

                    <StyledTable
                        key={ t }
                        rows={ table.rows.length }
                        columns={ table.columns.length }
                    >

                        { table.columns.map((col, c) =>
                            col === "" ? null :
                                <StyledTableColumnHeader
                                    key={ c }
                                    index={ c }
                                >
                                    <ColumnHeader label={ col }/>
                                </StyledTableColumnHeader>
                        )}

                        { table.rows.map((row, r) =>
                            <StyledTableRowHeader
                                key={ r }
                                index={ r }
                                columns={ table.columns.length }
                            >
                                <span style={{ fontWeight: "bold" }}>
                                    { row }
                                </span>
                                <br/>
                                <Notes lang="en-US" notes={ table.rowNotes[r] }/>
                            </StyledTableRowHeader>
                        )}

                        { table.pictures.map((pictureRow, r) =>
                            pictureRow.map((picture, c) =>
                                <StyledTablePicture
                                    key={ r + ":" + c }
                                    columnIndex={ c }
                                    rowIndex={ r }
                                >
                                    <StyledTablePictureImage
                                        width={ "16em" }
                                        height={ `${ 16 / props.record.aspectRatio }em` }
                                    >
                                        <Image
                                            src={ `${ props.dataPath }${ props.record.id }/${ picture.filename }` }
                                            width={ "16em" }
                                            height={ `${ 16 / props.record.aspectRatio }em` }
                                        />
                                    </StyledTablePictureImage>
                                
                                    <StyledTablePictureNotes>
                                        <Notes lang={ table.columns[c] } notes={ picture.notes }/>
                                    </StyledTablePictureNotes>
                                </StyledTablePicture>
                            )
                        )}

                    </StyledTable>
                </React.Fragment>
            })}

        </StyledContent>

    </StyledPage>
}


const StyledFlag = styled.img`
    width: 1.5em;
    border-radius: 0.2em;
`


export function ColumnHeader(props: {
    label: string,
})
{
    const makeFlag = (code: string) =>
        <StyledFlag
            src={ `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${ code }.svg` }
        />

    const expansionTable: { [id: string]: [string, string, string] } = {
        "en-GB": ["gb", "English", "United Kingdom"],
        "en-US": ["us", "English", "US"],
        "de-DE": ["de", "German", "Germany"],
        "es-ES": ["es", "Spanish", "Spain"],
        "es-419": ["mx", "Spanish", "Latin America"],
        "fr-FR": ["fr", "French", "France"],
        "he-IL": ["il", "Hebrew", "Israel"],
        "it-IT": ["it", "Italian", "Italy"],
        "ja-JP": ["jp", "Japanese", "Japan"],
        "ko-KR": ["kr", "Korean", "South Korea"],
        "nl-NL": ["nl", "Dutch", "The Netherlands"],
        "pl-PL": ["pl", "Polish", "Poland"],
        "pt-BR": ["br", "Portuguese", "Brazil"],
        "ru-RU": ["ru", "Russian", "Russia"],
        "zh-CN": ["cn", "Simpl. Chinese", "China"],
        "zh-TW": ["tw", "Trad. Chinese", "Taiwan"],
    }

    const expanded = expansionTable[props.label]

    if (expanded)
    {
        return <>
            { makeFlag(expanded[0]) }
            <div>
                { expanded[1] }
                { expanded[2] &&
                    <>
                    <br/>
                    <span style={{ fontSize: "0.8em" }}>
                        ({ expanded[2] })
                    </span>
                    </>
                }
            </div>
        </>
    }
    else
    {
        return <>
            { props.label }
        </>
    }
}


const StyledTranscription = styled.span`
    display: inline-block;
    margin-bottom: 0.25em;
`


const StyledLiteralTranslation = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #eee;
    border: 1px solid #aaa;
    border-radius: 0.25em;
    margin-bottom: 0.25em;
`


const StyledInconsistency = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #ff6;
    border: 1px solid #cc2;
    border-radius: 0.25em;
    margin-bottom: 0.25em;
`


const StyledMistake = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #f66;
    border: 1px solid #c22;
    border-radius: 0.25em;
    margin-bottom: 0.25em;
`


const StyledOddity = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #f66;
    border: 1px solid #c22;
    border-radius: 0.25em;
    margin-bottom: 0.25em;
`


const StyledLabel = styled.span`
    font-size: 0.85em;
    opacity: 0.8;
`


function Notes(props: {
    lang: string,
    notes: Data.Note[],
})
{
    const rendered: JSX.Element[] = []
    for (const note of props.notes)
    {
        switch (note.kind)
        {
            case "info":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        { note.text }
                        <br/>
                    </React.Fragment>
                )
                break

            case "transcription":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledTranscription lang={ props.lang }>
                            { `"${ note.text }"` }
                        </StyledTranscription>
                        <br/>
                    </React.Fragment>
                )
                break

            case "reading":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledLiteralTranslation>
                            <StyledLabel>
                                { `Read as` }
                            </StyledLabel>
                            { ` ` }
                            { `"${ note.text }"` }
                        </StyledLiteralTranslation>
                        <br/>
                    </React.Fragment>
                )
                break
                
            case "standardization":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledLiteralTranslation>
                            <StyledLabel>
                                { `Standardized` }
                            </StyledLabel>
                            { ` ` }
                            <span lang={ props.lang }>
                                { `"${ note.text }"` }
                            </span>
                        </StyledLiteralTranslation>
                        <br/>
                    </React.Fragment>
                )
                break
                
            case "translation":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledLiteralTranslation>
                            <StyledLabel>
                                { `Literally` }
                            </StyledLabel>
                            { ` ` }
                            { note.text }
                        </StyledLiteralTranslation>
                        <br/>
                    </React.Fragment>
                )
                break
                
            case "inconsistency":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledInconsistency>
                            <StyledLabel>
                                { `⚠️ Inconsistency` }
                            </StyledLabel>
                            { ` ` }
                            { note.text }
                        </StyledInconsistency>
                        <br/>
                    </React.Fragment>
                )
                break
                
            case "oddity":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledOddity>
                            <StyledLabel>
                                { `❓ Oddity` }
                            </StyledLabel>
                            { ` ` }
                            { note.text }
                        </StyledOddity>
                        <br/>
                    </React.Fragment>
                )
                break
        }
    }

    return <>{ rendered }</>
}