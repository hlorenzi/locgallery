import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function Coco()
{
    const data =
    {
        title: "Coco",
        year: 2017,
        copyright: "© Disney, Pixar",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "coco",
        langs: [
            "us",
            "br",
            "fr",
            "nl",
            "jp",
        ],
        pics: [
            "presents1",
            "presents2",
            "title",
            "poster",
            "record1",
            "record2",
            "inscription",
            "reentry",
            "show1",
            "show2",
            "oneyear",
            "mausoleum",
            "forgetyou",
            "departures",
            "credits_cast",
            "dedication",
            "credits_version",
        ],
        notes: {
            presents1_us: `"Disney presents"`,
            presents1_br: `"Disney apresenta"`,
            presents2_us: `"A Pixar Animation Studios film"`,
            presents2_br: `"Um filme da Pixar Animation Studios"`,
            title_us: `"Coco", which is the name of a central character in the movie.`,
            title_br: `"Viva - A Vida é uma Festa", lit. a pun on "(Let) live" and "Hooray", with the subtitle "Life is a party".`,
            poster_us: `"Día de Muertos / Talent Show / Plaza Santa Cecilia - 7 PM"`,
            poster_br: `"Día de los Muertos / Show de Talentos / Plaza Santa Cecilia - 7 PM"`,
            record1_us: `"Remember Me"`,
            record1_br: `"Lembre de Mim"`,
            record1_fr: `"Ne m'oublie pas"`,
            record1_nl: `"Vergeet me niet"`,
            record2_us: `"Ernesto de la Cruz / Remember Me"`,
            record2_br: `"Ernesto de la Cruz / Lembre de Mim"`,
            inscription_us: `"Seize your moment!"`,
            inscription_br: `"Agarre seu momento!", lit. "Grab your moment!"`,
            reentry_us: `"Re-entry"`,
            reentry_br: `"Retorno", lit. "Return".`,
            show1_us: `"Ernesto de la Cruz's Sunrise Spectacular! / One night only!"`,
            show1_br: `"Ernesto de la Cruz / Aurora Espetacular! / Uma noite apenas!"`,
            show2_us: `"Sunrise Spectacular!"`,
            show2_br: `"Aurora Espetacular!"`,
            oneyear_us: `"One year later"`,
            oneyear_br: `"Um ano depois"`,
            mausoleum_us: `"Remember Me"`,
            mausoleum_br: `"Lembre de Mim"`,
            forgetyou_us: `"Forget you"`,
            forgetyou_br: `"Esquecido", lit. "Forgotten".`,
            forgetyou_jp: `"忘れてやる" [wasurete yaru], lit. "Will forget (you)".`,
            departures_us: `"Departures"`,
            departures_br: `"Travessia", lit. "Crossing".`,
            dedication_br: `"Para as pessoas que cruzaram nosso caminho, que nos ajudaram e inspiraram, não os esqueceremos."`,
            credits_cast: `Cast section is fully localized amid the original credits.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes localized generically",
        folder: "coco",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "vhs",
        ],
        notes: {
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "coco",
        langs: [
            "us",
        ],
        pics: [
            "panteon",
            "departures_glimpse",
            "rivera",
        ],
        notes: {
            panteon: `"Panteón Santa Cecilia".`,
            departures_glimpse: `Gate inscriptions aren't localized in quick scenes where they're not the main focus.`,
            rivera: `"Rivera / Familia de Zapateros / Desde 1921".`,
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<Coco/>)