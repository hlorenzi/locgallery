import * as React from "react"
import styled from "styled-components"
import * as H from "../data/helpers"
import { Image } from "./Image"


const StyledPage = styled.div`
    display: grid;
    grid-template: auto / 1fr auto 1fr;
`


const StyledContent = styled.div`
    padding: 0 1rem;
`


const StyledTable = styled.div`
    display: grid;
    grid-template: auto / auto;
    grid-column-gap: 0.15rem;
    grid-row-gap: 0.15rem;
    min-width: 0;
    min-height: 0;
    max-width: min-content;
    margin-bottom: 2rem;
`


const StyledTableLang = styled.div<{
    row: number
    col: number
}>`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: center;
    font-weight: bold;
`


const StyledTablePicHeader = styled.div<{
    row: number
    col: number
}>`
    grid-row: ${ props => props.row + 1 };
    grid-column: 1 / ${ props => props.col + 1 };
    justify-self: start;
    font-weight: bold;
`


const StyledTablePicHeaderNotes = styled.div<{
    row: number
    col: number
}>`
    grid-row: ${ props => props.row + 1 };
    grid-column: 1 / ${ props => props.col + 1 };
    justify-self: start;
    max-width: 90vw;
`


const StyledTablePic = styled.div<{
    row: number
    col: number
}>`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: start;
    align-self: center;
`


const StyledTablePicNotes = styled.div<{
    row: number
    col: number
}>`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: start;
    padding: 0 0.5em;
    margin-bottom: 1em;
    font-size: 0.9em;
`


const preprocessNote = (str: string) =>
{
    if (!str)
        return str

    return (str
        .replace(/\[SAME\]/g, "✔️")
        .replace(/\[ERROR\]/g, "⛔")
        .replace(/\[INC\]/g, "⚠️")
        .replace(/\[WEIRD\]/g, "❓")
    )
}


export default function PageGallery(props: {
    entries: H.Record[],
    data: H.Record,
})
{
    document.title = props.data.title + " • LocGallery"

    const [comparingWith, setComparingWith] = React.useState("none")
    const comparingRecord =
        comparingWith ?
            props.entries.find(e => e.id === comparingWith)! :
            null

    return <StyledPage>

        <div/>

        <StyledContent>

            <a href="index">&lt; Back to home</a>
            <br/>
            <br/>

            <h1 style={{ marginBottom: 0 }}>{ props.data.title }</h1>
            <span>{ props.data.year }</span>
            <br/>
            <span>{ props.data.copyright }</span>

            { props.data.compareWith &&
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
                        
                        { props.data.compareWith.map(id =>
                            <option key={ id } value={ id }>
                                { props.entries.find(e => e.id === id)!.title }
                            </option>
                        )}
                    </select>
                </div>
                </>
            }

            { props.data.tables.map((table: H.Table, t: number) =>
            {
                const langs = [...table.langs]
                const otherTable = comparingRecord?.tables.find(t => t.title === table.title)
                if (otherTable)
                {
                    for (const otherLang of otherTable.langs)
                    {
                        const index = langs.indexOf(otherLang)
                        if (index < 0)
                            langs.push(otherLang + "2")
                        else
                            langs.splice(index + 1, 0, otherLang + "2")
                    }
                }

                return <React.Fragment key={ t }>
                    <h2>{ table.title }</h2>

                    <StyledTable key={ t }>

                    { langs.map((lang: string, l: number) =>
                        <StyledTableLang
                            key={ l }
                            row={ 0 }
                            col={ l }
                        >
                            { lang }
                        </StyledTableLang>
                    )}

                    { table.pics.map((pic: H.Pic, p: number) =>
                    {
                        const picId = typeof pic === "string" ? pic : pic[0]
                        const notesAll = typeof pic === "string" ? table.notes[pic] : pic[1]["all"]?.notes

                        return <React.Fragment key={ p }>

                            <StyledTablePicHeader
                                row={ p * 4 + 1 }
                                col={ langs.length }
                            >
                                { picId }
                            </StyledTablePicHeader>
                            
                            <StyledTablePicHeaderNotes
                                row={ p * 4 + 2 }
                                col={ langs.length }
                            >
                                <Notes notes={ notesAll }/>
                            </StyledTablePicHeaderNotes>

                            { langs.map((lang: string, l: number) =>
                            {
                                let origLang = lang

                                let data = props.data
                                if (lang.endsWith("2"))
                                {
                                    data = comparingRecord!
                                    lang = lang.slice(0, lang.length - 1)

                                    const otherPic = otherTable!.pics.find(p => typeof p === "string" ? p === picId : p[0] === picId)
                                    if (otherPic)
                                        pic = otherPic
                                }

                                const usePicLang = typeof pic === "string" ?
                                    lang :
                                    pic[1][lang]?.usePic || lang

                                const notes = typeof pic === "string" ?
                                    table.notes[picId + "_" + lang] :
                                    pic[1][lang]?.notes

                                return <React.Fragment key={ origLang }>
                                    <StyledTablePic
                                        row={ p * 4 + 3 }
                                        col={ l }
                                    >
                                        <Image
                                            src={ `../assets/${ data.id }/${ picId }${ usePicLang ? "_" + usePicLang : "" }.${ data.fileExtension || "jpg" }` }
                                            width={ data.slotWidth }
                                            height={ data.slotHeight }
                                        />
                                    </StyledTablePic>
                                
                                    <StyledTablePicNotes
                                        row={ p * 4 + 4 }
                                        col={ l }
                                        lang={ lang }
                                    >
                                        <Notes notes={ notes }/>
                                    </StyledTablePicNotes>
                                </React.Fragment>
                            })}
                        
                        </React.Fragment>
                    })}

                    </StyledTable>
                </React.Fragment>
            })}

        </StyledContent>

    </StyledPage>
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
    notes: H.Notes | undefined,
}): JSX.Element | null
{
    if (!props.notes)
        return null

    if (typeof props.notes === "string")
        return <>{ preprocessNote(props.notes) }</>

    const notes: H.Note[] = Array.isArray(props.notes) ? (props.notes as H.Note[]) : [props.notes]

    //console.log(notes)
    const rendered: JSX.Element[] = []
    for (const note of notes)
    {
        switch (note.kind)
        {
            case "details":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        { note.description }
                        { ` ` }
                    </React.Fragment>
                )
                break


            case "transcription":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledTranscription>
                            { `"${ note.text }"` }
                            { !note.reading ? `` : ` [${ note.reading }]` }
                        </StyledTranscription>
                        { ` ` }
                        { !note.standardized ? `` : 
                            <>
                            <StyledLiteralTranslation>
                                <StyledLabel>
                                    { `Standardized` }
                                </StyledLabel>
                                { ` ` }
                                { `"${ note.standardized }"` }
                            </StyledLiteralTranslation>
                            </>
                        }
                    </React.Fragment>
                )
                break
                
            case "literalTranslation":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledLiteralTranslation>
                            <StyledLabel>
                                { `Literally` }
                            </StyledLabel>
                            { ` ` }
                            { note.description }
                        </StyledLiteralTranslation>
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
                            { note.description }
                        </StyledInconsistency>
                    </React.Fragment>
                )
                break
                
            case "mistake":
                rendered.push(
                    <React.Fragment key={ rendered.length }>
                        <StyledMistake>
                            <StyledLabel>
                                { `⛔ Mistake` }
                            </StyledLabel>
                            { ` ` }
                            { note.description }
                        </StyledMistake>
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
                            { note.description }
                        </StyledOddity>
                    </React.Fragment>
                )
                break
        }
    }

    return <>{ rendered }</>
}