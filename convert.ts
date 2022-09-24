import * as sharp from "sharp"
import * as fs from "fs"


function getFiles(dir: string)
{
    var results: string[] = []
    var list = fs.readdirSync(dir)
    list.forEach((file) =>
    {
        file = dir + "/" + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory())
            results = results.concat(getFiles(file))
        else
            results.push(file)
    })
    return results
}


export async function init()
{
    const folder = "./convert/"

    for (const file of getFiles(folder))
    {
        console.log("converting " + file)
        await convert(file)
    }

    console.log("done")
    process.exit()
}


async function convert(name: string)
{
    const img = sharp(name)

    const data = await img.metadata()

    const newName = name
        .replace("convert", "converted")
        //.replace("//", "//_")

    let box2X = 0
    if (name.indexOf("es-ES") > 0)
        box2X = 9
    if (name.indexOf("fr-CA") > 0)
        box2X = 6
    if (name.indexOf("it-IT") > 0)
        box2X = 6
    if (name.indexOf("nl-NL") > 0)
        box2X = 12

    const svgText = `
        <svg width="${data.width}" height="${data.height}">
            <rect x="595" y="225" width="201" height="46" color="black"></rect>
            <rect x="${485 + box2X}" y="295" width="39" height="19" color="black"></rect>
        </svg>
    `

    const svgBuffer = Buffer.from(svgText)

    await img
        .composite([{input: svgBuffer, left: 0, top: 0}])
        .toFormat("jpeg")
        .toFile(newName)
}


init()