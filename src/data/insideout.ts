import * as H from "./helpers"


export const InsideOut: H.Record =
{
    id: "insideout",
    kind: "movie",
    title: "Inside Out",
    year: 2015,
    copyright: "© Disney, Pixar",
    slotHeight: "12em",
    tables: [
    {
        title: "Scenes fully localized",
        langs: [
            "us",
            "br",
            "es",
            "jp",
            "he",
        ],
        pics: [
            "plate1",
            "plate2",
            "plate3",
            "plate4",
            "plate5",
            "plate6",
            "newspaper1",
            "sold",
            "presents1",
            "presents2",
            "title",
            "newspaper2",
            "pizza1",
            "pizza2",
            "newspaper3",
            "distraction",
            "newspaper4",
            "gum",
            "newspaper5",
            "danger",
            "imagination",
            "crates",
            "newspaper6",
            "studio",
            "movies",
            "door",
            "fear",
            "sleepometer",
            "puberty",
            "dogs1",
            "dogs2",
            "dogs3",
            "credits_cast",
            "credits_version",
        ],
        notes: {
            presents1_br: `"Disney apresenta"`,
            presents2_br: `"Um filme Pixar Animation Studios"`,
            newspaper1_br: `"Diário Mental / Sem sobremesa! / Especialistas concordam que sobremesa é bom. / Conteúdo / Índice / Editoriais / Por que não é legal comer bala no jantar? / Classificados"`,
            sold_us: `"[For Sale / [...] Real Estate / Call: 555-0175] Sold"`,
            sold_br: `"[Vende-se / [...] / 555-0175] Vendida"`,
            title_br: `"Divertida Mente", lit. a pun on the adverbial form of "fun" ("funly") and "fun mind".`,
            newspaper2_br: `"O futuro é duvidoso! / Só tem ladeira / Por que tudo aqui tem cheiro ruim?"`,
            newspaper3_br: `"Primeiro dia de aula"`,
            newspaper4_br: `"O mundo está desabando"`,
            gum_us: `"New / Long Lasting Flavor / TripleDent spearmint flavored gum"`,
            gum_br: `"Chiclete TripleDent"`,
            newspaper5_br: `"Substituída! Não precisam da Riley / As coisas podem piorar? / Amigos. Quem precisa deles?"`,
            danger_us: `"Danger / Keep out!"`,
            danger_br: `"Perigo / Afaste-se!"`,
            danger_es: `"Peligro / ¡No pasar!"`,
            imagination_us: `"Imagination Land"`,
            imagination_br: `"Terra da Imaginação"`,
            imagination_es: `"Imaginalandia"`,
            crates_br: `"Fatos / Opiniões"`,
            newspaper6_br: `"Riley abandona o hóquei! / Escola. Quem precisa dela? / Por que [...]?"`,
            studio_us: `"Dream Productions"`,
            studio_br: `"Produção de Sonhos"`,
            movies_br: `"A Queda na Escuridão do Poço / Riley Andersen em Posso Voar! / Tem Algo Atrás de Mim!"`,
            door_br: `"Não entre quando a luz estiver acesa"`,
            sleepometer_br: `"Dormindo / Acordada"`,
            puberty_br: `"Puberdade"`,
            dogs1_br: `"Cheirinho de comida."`,
            dogs2_br: `"Esse cara tem comida."`,
            dogs3_br: `"Pega a comida."`,
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
            "cellphone",
        ],
        notes: {
            cellphone_us: `"Mom"`,
        }
    },
    {
        title: "Scenes left unlocalized",
        langs: [
            "us",
        ],
        pics: [
            "defcon",
            "bus",
            "signs",
            "girl",
        ],
        notes: {
        }
    }]
}