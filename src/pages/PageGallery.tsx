import * as React from "react"
import styled from "styled-components"
import * as H from "../data/helpers"


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
    data: H.Record,
})
{
    document.title = props.data.title + " • LocGallery"

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

            { props.data.tables.map((table: any, t: number) =>
                <React.Fragment key={ t }>
                    <h2>{ table.title }</h2>

                    <StyledTable key={ t }>

                    { table.langs.map((lang: string, l: number) =>
                        <StyledTableLang
                            key={ l }
                            row={ 0 }
                            col={ l }
                        >
                            { lang }
                        </StyledTableLang>
                    )}

                    { table.pics.map((pic: string, p: number) =>
                        <React.Fragment key={ p }>

                            <StyledTablePicHeader
                                row={ p * 4 + 1 }
                                col={ table.langs.length }
                            >
                                { pic }
                            </StyledTablePicHeader>
                            
                            <StyledTablePicHeaderNotes
                                row={ p * 4 + 2 }
                                col={ table.langs.length }
                            >
                                <Notes notes={ table.notes[pic] }/>
                            </StyledTablePicHeaderNotes>

                            { table.langs.map((lang: string, l: number) =>
                                <React.Fragment key={ l }>
                                    <StyledTablePic
                                        row={ p * 4 + 3 }
                                        col={ l }
                                    >
                                        <img
                                            src={ `../assets/${ props.data.id }/${ pic }_${ lang }.${ props.data.fileExtension || "jpg" }` }
                                            style={{
                                                objectFit: "contain",
                                                width: props.data.slotWidth ?? "20em",
                                                height: props.data.slotHeight ?? "9em",
                                        }}/>
                                    </StyledTablePic>
                                
                                    <StyledTablePicNotes
                                        row={ p * 4 + 4 }
                                        col={ l }
                                        lang={ lang }
                                    >
                                        <Notes notes={ table.notes[pic + "_" + lang] }/>
                                    </StyledTablePicNotes>
                                </React.Fragment>
                            )}
                        
                        </React.Fragment>
                    )}

                    </StyledTable>
                </React.Fragment>
            )}

        </StyledContent>

    </StyledPage>
}


const StyledLiteralTranslation = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #eee;
    border: 1px solid #aaa;
    border-radius: 0.25em;
`


const StyledInconsistency = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #ff6;
    border: 1px solid #cc2;
    border-radius: 0.25em;
`


const StyledMistake = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #f66;
    border: 1px solid #c22;
    border-radius: 0.25em;
`


const StyledOddity = styled.div`
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    background-color: #f6f;
    border: 1px solid #c2c;
    border-radius: 0.25em;
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

    console.log(notes)
    const rendered: JSX.Element[] = []
    for (const note of notes)
    {
        switch (note.kind)
        {
            case "details":
                rendered.push(
                    <>
                    { note.description }
                    { ` ` }
                    </>
                )
                break


            case "transcription":
                rendered.push(
                    <>
                    { `"${ note.text }"` }
                    { !note.reading ? `` : ` [${ note.reading }]` }
                    { `. ` }
                    { !note.literalTranslation ? `` : 
                        <>
                        <StyledLiteralTranslation>
                            <StyledLabel>
                                { `Literally ` }
                            </StyledLabel>
                            { `"${ note.literalTranslation }"` }
                        </StyledLiteralTranslation>
                        </>
                    }
                    </>
                )
                break
                
            case "inconsistency":
                rendered.push(
                    <>
                    <StyledInconsistency>
                        <StyledLabel>
                            { `⚠️ Inconsistency ` }
                        </StyledLabel>
                        { note.description }
                    </StyledInconsistency>
                    </>
                )
                break
                
            case "mistake":
                rendered.push(
                    <>
                    <StyledMistake>
                        <StyledLabel>
                            { `⛔ Mistake ` }
                        </StyledLabel>
                        { note.description }
                    </StyledMistake>
                    </>
                )
                break
                
            case "oddity":
                rendered.push(
                    <>
                    <StyledOddity>
                        <StyledLabel>
                            { `❓ Oddity ` }
                        </StyledLabel>
                        { note.description }
                    </StyledOddity>
                    </>
                )
                break
        }
    }

    return <>{ rendered }</>
}