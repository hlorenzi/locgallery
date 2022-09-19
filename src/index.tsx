import * as React from "react"
import * as ReactDOMClient from "react-dom/client"
//import * as Data from "./data"
//import PageHome from "./pages/PageHome"
//import PageGallery from "./pages/PageGallery"
import { PageEdit } from "./pages/PageEdit"


/*const path = window.location.href.split("/")

const matchingData = Data.entries.find(data => data.id === path[path.length - 1])

let elem = <PageHome entries={ Data.entries }/>
if (matchingData)
    elem = <PageGallery entries={ Data.entries } data={ matchingData }/>*/

const container = document.getElementById("divApp")!
const root = ReactDOMClient.createRoot(container)
root.render(<PageEdit/>)


window.addEventListener("beforeunload", (ev) =>
{
    ev.preventDefault()
    ev.returnValue = "Lose unsaved changes?"
    return ev.returnValue
})