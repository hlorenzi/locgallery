import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function Frozen()
{
    const data =
    {
        title: "Frozen",
        year: 2013,
        copyright: "© Disney",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "frozen",
        langs: [
            "us",
            "br",
        ],
        pics: [
            "title",
            "threeyearslater",
            "tradingpost",
            "credits_version",
        ],
        notes: {
            title_br: `"Frozen - Uma Aventura Congelante", lit. "Frozen - A Freezing Adventure".`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "frozen",
        langs: [
            "us",
        ],
        pics: [
            "credits_cast",
        ],
        notes: {
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<Frozen/>)