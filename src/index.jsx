import React from "react"
import ReactDOM from "react-dom"
import * as Data from "./data/index.js"
import PageHome from "./pages/PageHome.jsx"
import PageGallery from "./pages/PageGallery.jsx"


const path = window.location.href.split("/")
console.log(path)

const entries = Object.values(Data)
const matchingData = entries.find(data => data.id === path[path.length - 1])

let elem = <PageHome entries={ entries }/>
if (matchingData)
    elem = <PageGallery data={ matchingData }/>

ReactDOM.render(elem, document.getElementById("divApp"))