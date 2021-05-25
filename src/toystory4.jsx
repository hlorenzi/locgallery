import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function ToyStory4()
{
    const data =
    {
        title: "Toy Story 4",
        year: 2019,
        copyright: "© Disney, Pixar",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "toystory4",
        langs: [
            "us",
            "br",
        ],
        pics: [
            "nineyearsago",
            "presents1",
            "presents2",
            "title",
            "carnivaldays",
            "antiques1",
            "antiques2",
            "book1",
            "book2",
            "book3",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            nineyearsago_br: `"Nove anos atrás"`,
            presents1_us: `"Disney presents"`,
            presents1_br: `"Disney apresenta"`,
            presents2_us: `"A Pixar Animation Studios film"`,
            presents2_br: `"Um filme da Pixar Animation Studios"`,
            title_us: `"Toy Story 4"`,
            title_br: `"Toy Story 4"`,
            credits_cast: `Cast section is fully localized amid the original credits.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes localized generically",
        folder: "toystory4",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "sign",
            "grandbasin",
            "rvpark",
        ],
        notes: {
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "toystory4",
        langs: [
            "us",
        ],
        pics: [
            "name",
        ],
        notes: {
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<ToyStory4/>)