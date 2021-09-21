import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Data from "./data"
import PageHome from "./pages/PageHome"
import PageGallery from "./pages/PageGallery"


const path = window.location.href.split("/")
console.log(path)

const entries = Object.values(Data)
const matchingData = entries.find(data => data.id === path[path.length - 1])

let elem = <PageHome entries={ entries }/>
if (matchingData)
    elem = <PageGallery data={ matchingData }/>

ReactDOM.render(elem, document.getElementById("divApp"))