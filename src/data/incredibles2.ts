import * as H from "./helpers"


export const Incredibles2: H.Record =
{
    id: "incredibles2",
    kind: "movie",
    title: "Incredibles 2",
    year: 2018,
    copyright: "© Disney, Pixar",
    tables: [
    {
        title: "Scenes fully localized",
        langs: [
            "us",
            "br",
            "nl",
        ],
        pics: [
            "title",
            "businesscard",
            "note",
            "math",
            "welcomeback",
            "stilloutthere",
            "news_savestrain",
            "teleprompter",
            "news_onthephone",
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
    },
    {
        title: "Scenes localized generically",
        langs: [
            "us",
            "other",
        ],
        pics: [
            "fourthdimension",
            "doozles",
            "followboat1",
            "followboat2",
            "followboat3",
            "commanddial",
        ],
        notes: {
        }
    },
    {
        title: "Scenes left unlocalized",
        langs: [
            "us",
        ],
        pics: [
            "banks",
            "safaricourt",
            "happyplatter",
            "everjust",
            "news_everjust",
        ],
        notes: {
        }
    }]
}