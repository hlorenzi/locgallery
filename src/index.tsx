import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Data from "./data"
import PageHome from "./pages/PageHome"
import PageGallery from "./pages/PageGallery"


const path = window.location.href.split("/")

const matchingData = Data.entries.find(data => data.id === path[path.length - 1])

let elem = <PageHome entries={ Data.entries }/>
if (matchingData)
    elem = <PageGallery entries={ Data.entries } data={ matchingData }/>

ReactDOM.render(elem, document.getElementById("divApp"))