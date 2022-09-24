import * as React from "react"
import styled from "styled-components"
import * as Data from "./data"



const StyledPage = styled.div`
    display: grid;
    grid-template: auto / 1fr auto 1fr;
`


const StyledContent = styled.div`
    padding: 0 1rem;
`


export function PageHome(props: {
    records: Data.Records,
})
{
    const entriesSorted = [...Object.values(props.records)]
        .sort((a, b) => a.year - b.year)

    const entriesMovies = entriesSorted.filter(e => e.kind == "movie")
    const entriesGames = entriesSorted.filter(e => e.kind == "game")


    return <StyledPage>
        <div/>

        <StyledContent>

            <h1>LocGallery</h1>
            <a href="https://github.com/hlorenzi/locgallery">
                GitHub Repository
            </a> • <a href="edit">
                Local File Editor
            </a>
            <br/>
            <br/>

            A comprehensive gallery for analyzing the<br/>
            localization efforts in popular media!
            <br/>
            <br/>

            { entriesMovies.map((data, i) =>
                <React.Fragment key={ i }>
                    • <a href={ data.id }>
                        <b>{ data.title }</b>
                    </a>, { data.year.toString() }
                    <br/>
                </React.Fragment>
            )}

            <br/>

            { entriesGames.map((data, i) =>
                <React.Fragment key={ i }>
                    • <a href={ data.id }>
                        <b>{ data.title }</b>
                    </a>, { data.year.toString() }
                    <br/>
                </React.Fragment>
            )}

            <br/>

        </StyledContent>

    </StyledPage>
}