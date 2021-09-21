import * as H from "./helpers"


export const SuperMarioAdvance2: H.Record =
{
    id: "supermarioadvance2",
    kind: "game",
    title: "Super Mario Advance 2",
    year: 2002,
    copyright: "© Nintendo",
    slotWidth: "15em",
    slotHeight: "10em",
    fileExtension: "png",
    tables:
    [{
        title: "Scenes fully localized",
        langs: [
            "us",
            "de",
            "es",
            "fr",
            "ja",
        ],
        pics: [
            "choosefile",
            "erasefile",
            "intro",
            "stage_yoshishouse",
            "yoshi_note",
            "stage_yoshisisland1",
            "msg_spinjump",
            "stage_yellowswitchpalace",
            "switchpalace",
            "pause",
            "gameover_prompt",
        ],
        notes: {
        }
    },
    {
        title: "Scenes localized generically",
        langs: [
            "us",
            "ja",
        ],
        pics: [
            "title",
            "gameselect",
            "title2",
            "yoshi_sign",
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
            "chooselanguage",
            "mariostart",
            "courseclear",
            "timeup",
            "gameover",
        ],
        notes: {
        }
    }]
}