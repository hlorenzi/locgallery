import * as React from "react"
import * as ReactDOMClient from "react-dom/client"
import * as Data from "./data"
import { PageHome } from "./PageHome"
import { PageGallery } from "./PageGallery"
import { PageEdit } from "./PageEdit"


const path = window.location.href.split("/")

const id = path[path.length - 1]
console.log(path, id)

window.requestAnimationFrame(async () =>
{
    let elem: React.ReactNode

    if (id === "edit")
    {
        elem = <PageEdit/>
    }

    else if (id === "index" || id === "")
    {
        const records: Data.Records = 
            await fetch("./data.json").then(f => f.json())

        elem = <PageHome records={ records }/>
    }

    else
    {
        const dataPath = path.some(c => c === "build") ? "../data/" : "./data/"

        const record: Data.Record = 
            await fetch(`${ dataPath }${ id }/data.json`).then(f => f.json())

        record.id = id

        elem = <PageGallery
            record={ record }
            dataPath={ dataPath }
        />
    }
    
    const container = document.getElementById("divApp")!
    const root = ReactDOMClient.createRoot(container)
    root.render(elem)
})