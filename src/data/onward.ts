import * as H from "./helpers"


export const Onward: H.Record =
{
    id: "onward",
    kind: "movie",
    title: "Onward",
    year: 2020,
    copyright: "© Disney, Pixar",
    tables: [
    {
        title: "Scenes fully localized",
        langs: [
            "us",
            "br",
            "de",
            "mx",
            "nl",
        ],
        pics: [
            "title",
            "hand",
            "list1",
            "cassette",
            "letter1",
            "letter2",
            "letter3",
            "plaque",
            "puzzle",
            "plate1",
            "list2",
            "list2b",
            "plate2",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            title_br: `"Dois Irmãos - Uma Jornada Fantástica", lit. "Two Brothers - A Fantastic Journey".`,
            title_de: `"Onward - Keine Halben Sachen", lit. "Onward - No Half Things" or "Onward - No Half Measures".`,
            title_mx: `"Unidos", lit. "United" or "Bonded".`,
            hand_us: `"Hey / Dudes / Gang / Party / Cake".`,
            hand_br: `"E aí, / Caras / Galera? / Festa / Bolo".`,
            hand_de: `"Hey / Checker / Gang / Party / Kuchen".`,
            hand_mx: `"Hola / Chicos / Amigos / Fiesta / Pastel".`,
            hand_nl: `"Hey / Dudes / Jongens / Feestje / Taart".`,
            list1: `The underlining seems to be the same length, disregarding the actual text, in all foreign versions.`,
            list1_us: `"New me / Speak up more / Learn to drive / Invite people to party / Be like dad".`,
            list1_br: `"Novo eu / Falar mais / Aprender a dirigir / Convidar pessoas pra festa / Ser como o papai".`,
            list1_de: `"Das neue ich / Mich mehr trauen / Autofahren lernen / Leute zur Party einladen / Sein wie Dad".`,
            list1_mx: `"Nuevo yo / Hablar más en voz alta / Aprender a manejar / Invitar gente a la fiesta / Ser como papá".`,
            list1_nl: `"Nieuwe ik / Voor mezelf opkomen / Leren autorijden / Mensen uitnodigen voor feestje / Zijn zoals papa".`,
            cassette_us: `"Dad"`,
            cassette_br: `"Pai"`,
            cassette_de: `"Dad"`,
            cassette_mx: `"Papá"`,
            cassette_nl: `"Papa"`,
            letter1_us:
                `"Dear Ian & Barley, / Long ago, the world was full of wonder. It was adventurous, ` +
                `exciting, and best of all, there was magic. And that magic [...]"`,
            letter1_br:
                `"Queridos Ian e Barley, / Há muito tempo, o mundo era cheio de maravilhas. ` +
                `Tinha aventura, emoção e, melhor de tudo, tinha magia. E essa magia era [...]"`,
            letter1_mx:
                `"Queridos Ian y Barley / Hace mucho tiempo, el mundo estaba lleno de maravillas. ` +
                `Había aventuras, emociones, y lo más importante, existía la magia. [...]"`,
            letter2_us: `"I wrote this spell so I could see for myself who my boys grew up to be."`,
            letter2_br:
                `"Esta magia é para que eu consiga ver, pessoalmente, os homens que meus meninos se tornaram.", ` +
                `lit. "This magic is for me to be able to see, for myself, the men my boys have become."`,
            letter2_mx:
                `"Escribí este embrujo con el que veré personalmente qué ha sido de mis muchachos.", ` +
                `lit. "I wrote this enchantment with which I will personally see what has become of my boys."`,
            letter3_us: `"Visitation Spell".`,
            letter3_br: `"Magia da Aparição", lit. "Magic of Apparition" or "Magic for Showing Up".`,
            letter3_de: `"Erscheinungszauber", lit. "Apparition Spell".`,
            letter3_mx: `"Hechizo de Visita", lit. the same as original.`,
            letter3_nl: `"Visitatiespreuk", lit. the same as original.`,
            plaque_us: `"You have to take risks in life to have an adventure."`,
            plaque_br:
                `"Você têm que se arriscar na vida para ter uma aventura". ` +
                `[ERROR] "Têm" should be spelled "tem" (without an accent).`,
            plaque_de: `"Man muss Risiken eingehen, um Abenteuer zu erleben."`,
            plaque_mx: `"En la vida tienes que arriesgarte para vivir una aventura."`,
            plaque_nl: `"Je kunt geen avontuur beleven zonder risico."`,
            puzzle:
                "Unimportant English text is replaced by graphics. " +
                "Each letter in the English solution is underlined separately, " +
                "but there's a single long underscore for other languages.",
            puzzle_us: `"Raven's Point".`,
            puzzle_br: `"Ponto do Corvo".`,
            puzzle_de: `"Rabensblick".`,
            puzzle_mx: `"Raven's Point". Uses the English name both in writing and the dub.`,
            puzzle_nl: `"Ravenspunt".`,
            plate1_us: `"GWNIVER", from "Guinevere".`,
            plate1_br: `Same as original.`,
            plate1_de: `"KRIMHLD".`,
            plate1_mx: `"GINEBRA".`,
            plate1_nl: `Same as original.`,
            list2b: `The strikethrough lines seem to be the same length, disregarding the actual text, in all foreign versions.`,
            list2b_de: `[WEIRD] The strikethrough doesn't quite reach the end of the third sentence.`,
            plate2_us: `"GWNIVR2", from "Guinevere 2".`,
            plate2_br: `Same as original.`,
            plate2_de: `"KRMHLD2".`,
            plate2_nl: `Same as original.`,
            credits_cast: `Cast section is fully localized amid the original credits.`,
            credits_version: `Extra credit screens at the end of the movie in foreign versions.`,
        }
    },
    {
        title: "Scenes localized generically",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "calendar",
            "godragons",
            "card1",
            "card2",
            "dashboard",
            "highway",
            "map",
        ],
        notes: {
            card1: "Text is replaced by graphics. The backs of the cards are also changed.",
            dashboard_us: `Explained as "'O' is for 'Onward'".`,
            map: "Text is removed.",
        }
    },
    {
        title: "Scenes left unlocalized",
        langs: [
            "us",
        ],
        pics: [
            "cellphone",
            "school",
            "pinboard",
            "sweater",
            "wristwatch",
            "gaspump",
            "spellbook",
            "stone",
        ],
        notes: {
        },
    }]
}