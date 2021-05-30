import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function Incredibles2()
{
    const data =
    {
        title: "Incredibles 2",
        year: 2018,
        copyright: "© Disney, Pixar",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "incredibles2",
        langs: [
            "us",
            "br",
            "nl",
        ],
        pics: [
            "title",
            "note",
            "math",
            "welcomeback",
            "stilloutthere",
            "news_savestrain",
            "teleprompter",
            "news_exclusive",
            "accord",
            "camera",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            title_br: `"Os Incríveis 2", lit. "The Incredibles 2".`,
            credits_cast: `Cast section is localized amid the original credits.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes localized generically",
        folder: "incredibles2",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "fourthdimension",
            "followboat1",
            "followboat2",
            "followboat3",
            "commanddial",
        ],
        notes: {
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "incredibles2",
        langs: [
            "us",
        ],
        pics: [
            "banks",
            "safaricourt",
            "businesscard",
            "happyplatter",
            "zzzzzz",
            "everjust",
            "news_everjust",
        ],
        notes: {
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<Incredibles2/>)