import * as H from "./helpers"


export const SuperMarioAdvance2: H.Record =
{
    id: "supermarioadvance2",
    kind: "game",
    title: "Super Mario Advance 2",
    year: 2001,
    copyright: "© Nintendo",
    slotWidth: "15em",
    slotHeight: "10em",
    fileExtension: "png",
    compareWith: ["supermarioworld"],
    tables:
    [{
        title: "Scenes fully localized",
        langs: [
            "us",
            "de",
            "es",
            "fr",
            "ja",
            "zh",
        ],
        pics: [
            "choosefile",
            "erasefile",
            ["intro", {
                "us": { notes: H.transcription(
                    `Welcome to Dinosaur Land! It seems that Princess ` +
                    `Toadstool is missing...and that means Bowser must ` +
                    `be up to his old tricks again!`)
                },
                "ja": { notes: [
                    H.transcription(
                        `こんどのぶたいは　きょうりゅうランド　` +
                        `なにやらあやしいこのしまで　またもや　` +
                        `ピーチひめが　すがたをけした。` +
                        `こいつはきっと　クッパのしわざ！`,
                        undefined,
                        `今度の舞台は恐竜ランド。` +
                        `なにやら怪しいこの島でまたもや` +
                        `ピーチ姫が姿を消した。` +
                        `こいつはきっとクッパの仕業！`),
                    H.literally(
                        `"This time, the setting is Dinosaur Land. ` +
                        `Somehow, on this strange island, Princess ` +
                        `Peach has once again vanished. ` +
                        `This is surely Koopa's doing!"`)
                    ]
                },
                "zh": { notes: [
                    H.transcription(
                        `欢迎来到恐龙大陆！看起来，` +
                        `桃花公主似乎又失踪了……` +
                        `一定是酷霸王又在耍他的老把戏了。`),
                    H.literally(
                        `"Welcome to Dinosaur Land! It seems that Princess Peach ` +
                        `has disappeared again... It must be King Koopa playing ` +
                        `his old tricks again."`),
                    ]
                },
            }],
            "stage_yoshishouse",
            "msg_yoshi",
            "stage_yoshisisland1",
            "msg_spinjump",
            "msg_itembox",
            "msg_pickup",
            ["stage_yellowswitchpalace", {
                "de": { notes: H.transcription(
                    `Glb. Schalterpalast`,
                    undefined,
                    `Gelber Schalterpalast`),
                },
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
            "pause1",
            "pause2",
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
            "zh",
        ],
        pics: [
            "title",
            "gameselect",
            "title2",
            "yoshi_sign",
            "stageselected",
            ["mariostart", {
                "ja": { usePic: "us" } }
            ],
            ["courseclear", {
                "ja": { usePic: "us" } }
            ],
            ["timeup", {
                "ja": { usePic: "us" } }
            ],
            ["gameover", {
                "ja": { usePic: "us" } }
            ],
        ],
        notes: {
        }
    },
    {
        title: "Other scenes",
        langs: [
            "",
        ],
        pics: [
            "chooselanguage",
        ],
        notes: {
        }
    }]
}