import sharp from "sharp"
import fs from "fs"


function getFiles(dir)
{
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file)
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
        if (file.indexOf(".png") < 0)
            continue

        console.log("converting " + file)
        await convertToJpg(file)
    }

    console.log("done")
    process.exit()
}


async function convertToJpg(name)
{
    const img = sharp(name)

    const data = await img.metadata()

    const cropX = 0
    const cropY = 112

    const left = Math.floor(cropX)
    const width = Math.floor(data.width - cropX * 2)
    const top = Math.floor(cropY)
    const height = Math.floor(data.height - cropY * 2)

    const newName = name.replace(".png", ".jpg")
    
    await img
        .extract({ left, top, width, height })
        .toFormat("jpeg")
        .toFile(newName)
}


init()