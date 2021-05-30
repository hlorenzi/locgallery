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
            "other",
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
            nineyearsago_us: `"Nine years ago"`,
            nineyearsago_br: `"Nove anos atrás"`,
            presents1_us: `"Disney presents"`,
            presents1_br: `"Disney apresenta"`,
            presents2_us: `"A Pixar Animation Studios film"`,
            presents2_br: `"Um filme da Pixar Animation Studios"`,
            title_us: `"Toy Story 4"`,
            title_br: `"Toy Story 4"`,
            carnivaldays_us: `"Last week of August / Welcome to the town of Grand Basin / Carnival Days / A week of games, rides, and celebration / For the whole family"`,
            carnivaldays_br: `"Dias de Diversão", lit "Days of Fun".`,
            carnivaldays_other: `"Carnival Days"`,
            antiques1_us: `"Antiques"`,
            antiques1_br: `"Antiquário"`,
            antiques2_us: `"Sorry, we're closed / Second Chance Antiques / Est. 1986"`,
            antiques2_br: `"Desculpe, estamos fechados / Segunda Chance Antiquário / Desde 1986". [WEIRD] More naturally worded as "Antiquário Segunda Chance" (swapped word order) as in the dub.`,
            book1_us: `"Gabby Gabby / Let's be friends!"`,
            book1_br: `"Gabby Gabby / Vamos ser amigas!"`,
            book2_us: `"We are best friends, my Gabby and me. Each afternoon we break for tea."`,
            book2_br: `"Nós somos melhores amigas, minha Gabby e eu. Todas as tardes tomamos chá juntas." [WEIRD] Translated literally, without any rhymes or meter pattern.`,
            book3_us: `"I tell her my [problems.] She always [listens.] / In [...] we're always [...]"`,
            book3_br: `"Eu falo dos meus [problemas.] Ela sempre me [escuta.]". [WEIRD] The space for the second stanza has been left blank.`,
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
            sign_us: `"Grand Basin / Rest Area"`,
            sign_other: `"Grand Basin"`,
            grandbasin_us: `"Historic Downtown / Grand Basin / Est. 1886"`,
            grandbasin_other: `"Est. 1886 / Grand Basin"`,
            rvpark_us: `"RV Park"`,
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