import React from "react"
import styled from "styled-components"


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


const StyledTableLang = styled.div`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: center;
    font-weight: bold;
`


const StyledTablePicHeader = styled.div`
    grid-row: ${ props => props.row + 1 };
    grid-column: 1 / ${ props => props.col + 1 };
    justify-self: start;
    font-weight: bold;
`


const StyledTablePicHeaderNotes = styled.div`
    grid-row: ${ props => props.row + 1 };
    grid-column: 1 / ${ props => props.col + 1 };
    justify-self: start;
    font-style: oblique;
    max-width: 90vw;
`


const StyledTablePic = styled.div`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: start;
    align-self: center;
`


const StyledTablePicNotes = styled.div`
    grid-row: ${ props => props.row + 1 };
    grid-column: ${ props => props.col + 1 };
    justify-self: start;
    font-style: oblique;
    padding: 0 0.5em;
    margin-bottom: 1em;
`


export function PageGallery(props)
{
    document.title = props.data.title + " • LocGallery"


    const preprocessNote = (str) =>
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

            { props.data.tables.map((table, t) =>
                <React.Fragment key={ t }>
                    <h2>{ table.title }</h2>

                    <StyledTable key={ t }>

                    { table.langs.map((lang, l) =>
                        <StyledTableLang
                            key={ l }
                            row={ 0 }
                            col={ l }
                        >
                            { lang }
                        </StyledTableLang>
                    )}

                    { table.pics.map((pic, p) =>
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
                                { preprocessNote(table.notes && table.notes[pic] || null) }
                            </StyledTablePicHeaderNotes>

                            { table.langs.map((lang, l) =>
                                <React.Fragment key={ l }>
                                    <StyledTablePic
                                        row={ p * 4 + 3 }
                                        col={ l }
                                    >
                                        <img
                                            src={ "../assets/" + table.folder + "/" + pic + "_" + lang + ".jpg" }
                                            style={{
                                                maxWidth: "20em",
                                                height: "auto",
                                        }}/>
                                    </StyledTablePic>
                                
                                    <StyledTablePicNotes
                                        row={ p * 4 + 4 }
                                        col={ l }
                                        lang={ lang }
                                    >
                                        { preprocessNote(table.notes && table.notes[pic + "_" + lang] || null) }
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