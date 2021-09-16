import React from "react"
import styled from "styled-components"



const StyledPage = styled.div`
    display: grid;
    grid-template: auto / 1fr auto 1fr;
`


const StyledContent = styled.div`
    padding: 0 1rem;
`


export default function PageHome(props)
{
    const entriesSorted = [...props.entries].sort((a, b) => a.year - b.year)


    return <StyledPage>
        <div/>

        <StyledContent>

            <h1>LocGallery</h1>
            <a href="https://github.com/hlorenzi/locgallery">
                GitHub Repository
            </a>
            <br/>
            <br/>

            A comprehensive gallery for admiring the<br/>
            localization efforts in popular media!
            <br/>
            <br/>

            { entriesSorted.map((data, i) =>
                <React.Fragment key={ i }>
                    • <a href={ data.id }>
                        <b>{ data.title }</b>, { data.year.toString() }
                    </a>
                    <br/>
                </React.Fragment>
            )}

            <br/>

        </StyledContent>

    </StyledPage>
}