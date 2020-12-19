import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function Up()
{
    const data =
    {
        title: "Up",
        year: 2009,
        copyright: "© Disney, Pixar",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "up",
        langs: [
            "us",
            "br",
            "jp",
        ],
        pics: [
            "news1",
            "news2",
            "presents1",
            "presents2",
            "title",
            "book1",
            "book4",
            "book5",
            "sold",
            "book6",
            "book7",
            "credits_version",
        ],
        notes: {
            news1_us: `"Movietown News"`,
            news1_br: `"Notícias da Cidade do Cinema"`,
            news2_us: `"Spotlight on Adventure"`,
            news2_br: `"Almanaque de Aventuras", lit. "Adventure Almanac".`,
            presents1_us: `"Walt Disney Pictures presents"`,
            presents1_br: `"Walt Disney Pictures apresenta"`,
            presents2_us: `"A Pixar Animation Studios film"`,
            presents2_br: `"Um filme Pixar Animation Studios"`,
            title_us: `"Up"`,
            title_br: `"Up - Altas Aventuras", lit. a pun on "Up - High Adventures" and "Up - Lots of Adventure".`,
            book1_us: `"My Adventure Book"`,
            book1_br: `"Meu Livro de Aventuras"`,
            book1_jp: `"わたしの冒険ブック" [watashi no bōken bukku]`,
            book4_us: `"Paradise Falls, a land lost in time"`,
            book4_br: `"Paraíso das Cachoeiras, um lugar perdido no tempo", lit. "Waterfall Paradise, a place lost in time". [INC] Ellie reads this out loud in the dub as "Paraíso das Cachoeiras, uma terra perdida no tempo", which would, in fact, be a closer translation to the original.`,
            book5_us: `"Stuff I'm going to do"`,
            book5_br: `"Coisas que vou fazer"`,
            sold_br: `"[Vende-se] Vendido"`,
            book6_us: `"Thanks for the adventure — now go have a new one! Love, Ellie"`,
            book6_br: `"Obrigada pela aventura. Agora parta pra próxima! Com amor, Ellie"`,
            book7_br: `"Meu Novo Livro de Aventuras"`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes localized generically",
        folder: "up",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "jar",
        ],
        notes: {
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "up",
        langs: [
            "us",
        ],
        pics: [
            "spiritofadventure",
            "balloon",
            "door",
            "clippings",
            "badge",
            "book2",
            "book3",
            "mailbox",
            "zoo",
            "balloons",
            "travel",
            "tickets",
            "summons",
            "retirement",
            "credits_cast",
        ],
        notes: {
            credits_cast: "Cast section is left unlocalized amid the original credits.",
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<Up/>)