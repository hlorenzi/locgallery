import * as H from "./helpers"


export const SuperMarioWorld: H.Record =
{
    id: "supermarioworld",
    kind: "game",
    title: "Super Mario World",
    year: 1990,
    copyright: "© Nintendo",
    slotWidth: "18em",
    slotHeight: "16em",
    fileExtension: "bmp",
    compareWith: ["supermarioadvance2"],
    tables:
    [{
        title: "Scenes fully localized",
        langs: [
            "us",
            "ja",
        ],
        pics: [
            "title",
            "choosefile",
            "erasefile",
            ["intro", {
                "us": { notes: H.transcription(
                    `Welcome! This is Dinosaur Land. In ` +
                    `this strange land we find that Princess ` +
                    `Toadstool is missing again! Looks like ` +
                    `Bowser is at it again!`)
                },
                "ja": { notes: [
                    H.transcription(
                        `こんどのぶたいは　きょうりゅうランド　` +
                        `なにやらあやしい　このしまで　` +
                        `またもやピーチが　すがたをけした。` +
                        `こいつはきっと　クッパのしわざ！`,
                        undefined,
                        `今度の舞台は恐竜ランド。` +
                        `なにやら怪しいこの島でまたもや` +
                        `ピーチが姿を消した。` +
                        `こいつはきっとクッパの仕業！`),
                    H.literally(
                        `"This time, the setting is Dinosaur Land. ` +
                        `Somehow, on this strange island, ` +
                        `Peach has once again vanished. ` +
                        `This is surely Koopa's doing!"`)
                    ]
                },
            }],
            "stage_yoshishouse",
            "yoshi_sign",
            "msg_yoshi",
            "stage_yoshisisland1",
            "msg_itembox",
            "msg_pickup",
            ["stage_yellowswitchpalace", {
                "ja": { notes: [
                    H.transcription(
                        `かっぱやま　きいろスイッチ`,
                        undefined,
                        `河童山　黄色スイッチ`),
                    H.literally(
                        `"Kappa Mountain - Switch (Yellow)"`),
                ]},
            }],
            "msg_switchpalace",
            "save_prompt",
            "gameover_prompt",
        ],
        notes: {
        }
    },
    {
        title: "Scenes left unlocalized",
        langs: [
            "",
        ],
        pics: [
            "selectplayers",
            "mariostart",
            "courseclear",
            "timeup",
            "gameover",
        ],
        notes: {
        }
    }],
}