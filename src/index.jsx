import React from "react"
import * as Base from "./common/Base.jsx"
import styled from "styled-components"



const StyledPage = styled.div`
    display: grid;
    grid-template: auto / 1fr auto 1fr;
`


const StyledContent = styled.div`
    padding: 0 1rem;
`


export default function Index()
{
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

            • <a href="theincredibles">
                <b>The Incredibles</b>, 2004
            </a>
            <br/>

            • <a href="up">
                <b>Up</b>, 2009
            </a>
            <br/>

            • <a href="frozen">
                <b>Frozen</b>, 2013
            </a>
            <br/>

            • <a href="insideout">
                <b>Inside Out</b>, 2015
            </a>
            <br/>

            • <a href="zootopia">
                <b>Zootopia</b>, 2016
            </a>
            <br/>

            • <a href="coco">
                <b>Coco</b>, 2017
            </a>
            <br/>

            • <a href="incredibles2">
                <b>Incredibles 2</b>, 2018
            </a>
            <br/>

            • <a href="toystory4">
                <b>Toy Story 4</b>, 2019
            </a>
            <br/>

            • <a href="onward">
                <b>Onward</b>, 2020
            </a>
            <br/>

        </StyledContent>

    </StyledPage>
}


Base.main(<Index/>)