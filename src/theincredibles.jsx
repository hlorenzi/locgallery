import React from "react"
import * as Base from "./common/Base.jsx"
import { PageGallery } from "./common/PageGallery.jsx"


export default function TheIncredibles()
{
    const data =
    {
        title: "The Incredibles",
        year: 2004,
        copyright: "© Disney, Pixar",
        tables: [],
    }

    data.tables.push({
        title: "Scenes fully localized",
        folder: "theincredibles",
        langs: [
            "us",
            "br",
        ],
        pics: [
            "interview_mrincredible",
            "presents1",
            "interview_elastigirl",
            "presents2",
            "interview_frozone",
            "title",
            "bombvoyage1",
            "bombvoyage2",
            "bombvoyage3",
            "newspaper1",
            "newsticker1",
            "newsticker2",
            "newspaper2",
            "newspaper3",
            "newspaper4",
            "newspaper5",
            "newspaper6",
            "newspaper7",
            "newspaper8",
            "fifteenyears",
            "missing",
            "search_elastigirl",
            "search_frozone",
            "search_mrincredible",
            "threemonths",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            interview_mrincredible_us: `"Mr. Incredible". His secret identity is "Robert Parr", or "Bob Parr" for short.`,
            interview_mrincredible_br: `"Sr. Incrível". His secret identity is "Roberto Pêra", or "Beto Pêra" for short.`,
            presents1_us: `"Walt Disney Pictures presents"`,
            presents1_br: `"Walt Disney Pictures apresenta"`,
            interview_elastigirl_us: `"Elastigirl". Her secret identity is "Helen Truax", later "Helen Parr".`,
            interview_elastigirl_br: `"Mulher-Elástica", lit. "Elastic-Woman". Her secret identity is "Helena Pêra".`,
            presents2_us: `"A Pixar Animation Studios film"`,
            presents2_br: `"Um filme Pixar Animation Studios"`,
            interview_frozone_us: `"Frozone". His secret identity is "Lucius Best".`,
            interview_frozone_br: `"Gelado", lit. "Cold" or "Icy". His secret identity is "Lúcio Barros".`,
            title_br: `"Os Incríveis"`,
            bombvoyage1: `"Monsieur Incroyable...!" ` +
                `Even though he still speaks the same lines in French, ` +
                `he's been dubbed over in foreign versions by other actors, ` +
                `presumably so he could react to Incrediboy's localized name.`,
            bombvoyage1_us: `"Mr. Incredible...!"`,
            bombvoyage1_br: `"Sr. Incrível...!"`,
            bombvoyage2: `"Petit mufle va!"`,
            bombvoyage2_us: `"Little oaf...!"`,
            bombvoyage2_br: `"Idiota...!", lit. "Idiot...!"`,
            bombvoyage3: `"Oui et ta tenue est complètement ridicule!"`,
            bombvoyage3_us: `"And your outfit is totally ridiculous!"`,
            bombvoyage3_br: `"E sua roupa é totalmente ridícula!"`,
            newspaper1_us: `"Mr. Incredible sued"`,
            newspaper1_br: `"Sr. Incrível processado"`,
            newsticker1_us: `"Rescue ends in legal battle"`,
            newsticker1_br: `"Resgate termina em disputa judicial"`,
            newspaper2_us: `"X-ray vision peeping tom?"`,
            newspaper2_br: `"Xereta com visão de raio-X?". [ERROR] The preferred spelling would be "raios X" (plural, no hyphen).`,
            newspaper3_us: `"$uper damage$ / Another bold rescue ends in disaster, landmark damaged, scores injured".`,
            newspaper3_br: `"Super prejuízos". Missing dollar signs and second line.`,
            newspaper4_us: `"Dynaguy sued"`,
            newspaper4_br: `"Dínamo processado". [INC] Edna Mode later refers to him as "Dinamite" in the dub.`,
            newspaper5_us: `"Government hides heroes"`,
            newspaper5_br: `"Governo esconde heróis"`,
            newspaper6_us: `"Public Safe Again / Public Opinion Polls Show 85% in favor of Super Relocation Act".`,
            newspaper6_br: `"Público em Segurança Novamente". Missing elaboration. [WEIRD] Text squeezed by a lot to fit.`,
            newspaper7_us: `"Not so super anymore".`,
            newspaper7_br: `"Já não tão super". [ERROR] If we consider "super" to be a noun that has been fully incorporated into Portuguese, the correct spelling would be "súper" (with an acute accent).`,
            newspaper8_us: `"Supers: where are they now?"`,
            newspaper8_br: `"Supers: onde estão eles agora?". [INC] The narrator reads this more naturally as "onde eles estão agora?" (swapped word order) in the dub.`,
            fifteenyears_us: `"15 years later"`,
            fifteenyears_br: `"15 anos depois"`,
            missing_us: `"Man missing"`,
            missing_br: `"Desaparecido", lit. "Missing".`,
            threemonths_us: `"3 months later"`,
            threemonths_br: `"Três meses depois". Number is spelled out as is preferred in Portuguese.`,
            credits_cast: `Cast section is localized in an extra screen after the original credits.`,
            credits_cast_br: `[WEIRD] Still only reflects the first dub, which isn't the currently distributed version.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes localized generically",
        folder: "theincredibles",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "pursuit1",
            "pursuit2",
            "pursuit3",
            "protest",
            "denied",
            "wall",
            "wall_detail1",
            "location_unknown1",
            "location_unknown2",
            "location_known1",
            "location_known2",
            "terminated",
        ],
        notes: {
            pursuit1: `Removed overlay text.`,
            pursuit1_us: `"Isolate pursuit".`,
            pursuit2: `Removed overlay text.`,
            pursuit2_us: `"Merge pursuit / Auto drive".`,
            pursuit3: `Removed overlay text.`,
            pursuit3_us: `"Intercept mode / Convert".`,
            wall: `Foreign versions include assets in a variety of languages in the same shot, but the original only features English text. The "Doing our part!" poster has the American flag background removed.`,
            wall_detail1_us: `"Thank you Mr. Incredible"`,
            location_unknown1: `Text is replaced by graphics. The original shot also includes a camera pan, which is not present in foreign versions.`,
            location_known1: `Text is replaced by graphics. The original shot also includes a camera pan, which is not present in foreign versions.`,
        }
    })

    data.tables.push({
        title: "Scenes left unlocalized",
        folder: "theincredibles",
        langs: [
            "us",
        ],
        pics: [
            "commanddial",
            "autodrive",
            "targetapproach",
            "bank",
            "insuricare1",
            "school",
            "insuricare2",
            "holdstill",
            "robotvision1",
            "kronos",
            "password",
            "mainmenu",
            "opkronos",
            "countdown",
            "danger",
            "powergrid1",
            "powergrid2",
            "robotvision2",
            "robotvision3",
        ],
        notes: {
            autodrive: `Screen is not localized on scenes where it's not the main focus.`,
            bank: `"Municiberg Bank".`,
            school: `"Western View Junior High".`,
            insuricare2: `"Rules & Regulations / Insuricare / Employee Handbook / Volume XI".`,
            holdstill: `"Hold still".`,
            robotvision1: `"Target lock".`,
            mainmenu: `"Island operations / Finances / Omnidroid metatraining / Supers".`,
            opkronos: `"Operation Kronos / Phase: 1 2 3".`,
            countdown: `"Project Kronos Countdown / 08 hours : 10 minutes : 42 seconds until launch".`,
            powergrid1: `"Energy Level".`,
            powergrid2: `"Cell Block Power Grid".`,
            robotvision2: `"Control stolen by external signal".`,
            robotvision3: `"Signal source: remote control / Destroy remote".`,
        }
    })

    return <PageGallery data={ data }/>
}


Base.main(<TheIncredibles/>)