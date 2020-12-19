import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function Zootopia()
{
    const data =
    {
        title: "Zootopia",
        year: 2016,
        copyright: "© Disney",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "zootopia",
        langs: [
            "us",
            "br",
        ],
        pics: [
            "presents",
            "title",
            "boxes",
            "banner",
            "academy",
            "fifteenyears",
            "ceremony",
            "welcome",
            "refuseservice",
            "bank",
            "carrotforone",
            "file",
            "mug",
            "news1",
            "news2",
            "news2b",
            "news3",
            "poster",
            "news4",
            "news5",
            "news6",
            "credits_characters1",
            "credits_characters2",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            presents_us: `"Disney presents"`,
            presents_br: `"Disney apresenta"`,
            title_us: `"Zootopia"`,
            title_br: `"Zootopia"`,
            boxes_us: `"[Visious] Vicious predator / Meek prey"`,
            boxes_br: `"[Vorases] Vorazes predadores / Presas fáceis"`,
            banner_us: `"Carrot Days / Talent Show / Where anyone can be anything!"`,
            banner_br: `"Show de Talentos / Dia das Cenouras / Onde você pode ser o que quiser!", lit. "Talent Show / Carrots Day / Where you can be whatever you want!"`,
            academy_us: `"Zootopia Police Academy"`,
            academy_br: `"Zootopia Academia de Polícia". [WEIRD] A more natural inscription would be "Academia de Polícia de Zootopia".`,
            fifteenyears_us: `"15 years later"`,
            fifteenyears_br: `"15 anos depois"`,
            ceremony_us: `"Zootopia / Police Academy"`,
            ceremony_br: `"Zootopia / Academia de Polícia"`,
            welcome_us: `"Zootopia welcomes you!"`,
            welcome_br: `"Zootopia / Seja bem-vindo!", lit. "Zootopia / Welcome!"`,
            refuseservice_us: `"We reserve the right to refuse service to anyone"`,
            refuseservice_br: `"Nos reservamos o direito de recusar serviço a qualquer um"`,
            bank_us: `"Lemming Brothers Bank"`,
            bank_br: `"Banco Irmãos Roedores", lit. "Rodent Brothers Bank".`,
            carrotforone_us: `"Carrots for One"`,
            carrotforone_br: `"Cenoura pra Um", lit. "Carrot for One".`,
            file: "[WEIRD] A strange mix of languages. The bigger title is left in English, while the subtitle is localized, for example.",
            file_us: `"Missing Mammal Report / Leads: Zero / Witnesses: Zero / Evidence: Zero / Last known sighting".`,
            file_br: `"Relatório de Mamíferos Desaparecidos / Pistas: Zero / Testemunhas: Zero / Evidências: Zero / Lugar da última aparição".`,
            mug_us: `"World's greatest [dad] assistant mayor"`,
            news1_us: `"Developing / Tundratown tragedy"`,
            news1_br: `"Em andamento / Tragédia em Tundralândia". News anchor is changed to a Brazilian jaguar.`,
            news2_us: `"Earlier / Tensions flare at peace rally"`,
            news2_br: `"Mais cedo / Explode tensão em protesto pacífico"`,
            news3_us: `"Earlier / Gazelle takes a stand"`,
            news3_br: `"Mais cedo / Gazella se posiciona"`,
            poster_us: `"Integrity. / Honesty. / Bravery."`,
            poster_br: `"Integridade / Honestidade / Bravura". Missing punctuation. [WEIRD] Fainter drop-shadows.`,
            news4_us: `"Breaking news / Former mayor Bellwether in prison"`,
            news4_br: `"Últimas notícias / Ex-prefeita Bellwether é presa"`,
            news5_us: `"Breaking news / Lionheart breaks silence"`,
            news5_br: `"Últimas notícias / Leãonardo quebra o silêncio"`,
            news6_us: `"Developing / 'Night howler' treatment proves successful"`,
            news6_br: `"Em andamento / Tratamento contra as 'uivantes' obtém sucesso"`,
            credits_characters1: `Voice actors are superimposed on animation.`,
            credits_cast: `Cast section is fully localized amid the original credits.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "zootopia",
        langs: [
            "us",
        ],
        pics: [
            "carnival",
            "goodluck",
            "bunnyburrow",
            "tundratown",
            "juicebar",
            "foxaway",
            "expired",
            "refuseservice_glimpse",
            "pawpsicle",
            "cellphone",
            "littlerodentia",
            "dmv",
            "printout",
            "trafficsystem",
            "application",
            "newspaper",
            "truck",
            "stand",
            "bootleg1",
            "bootleg2",
            "credits_gazelle",
            //"credits_origcast",
        ],
        notes: {
            goodluck: `"Good luck, Judy!"`,
            bunnyburrow: `"You are now leaving Bunnyburrow / Population"`,
            juicebar: `"Pick Up / Juice Bar"`,
            foxaway: `None of the Fox Away-branded products is localized.`,
            expired: `"Expired / Limit 2 hours"`,
            refuseservice_glimpse: `The sign isn't localized on scenes where it's not the main focus.`,
            pawpsicle: `"Pawpsicle"`,
            littlerodentia: `"Little Rodentia"`,
            dmv: `"DMV / Department of Mammal Vehicles"`,
            newspaper: `"Growing unrest divides city"`,
            stand: `"Duke's officially licensed movies"`,
            credits_gazelle: `Foreign voice actors for regular dialogue aren't superimposed on animation.`,
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<Zootopia/>)