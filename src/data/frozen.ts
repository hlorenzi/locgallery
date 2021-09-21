import * as H from "./helpers"


export const Frozen: H.Record =
{
    id: "frozen",
    kind: "movie",
    title: "Frozen",
    year: 2013,
    copyright: "© Disney",
    tables: [
    {
        title: "Scenes fully localized",
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
    },
    {
        title: "Scenes left unlocalized",
        langs: [
            "us",
        ],
        pics: [
            "credits_cast",
        ],
        notes: {
        }
    }]
}