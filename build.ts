import * as fs from "fs"
import * as Data from "./src/data"


const buildFolder = "./pages/"


function buildHtml()
{
    console.log("building html...")

    const htmlBase = fs.readFileSync("./src/index.html", { encoding: "utf8" })

    if (!fs.existsSync(buildFolder))
        fs.mkdirSync(buildFolder)

    fs.writeFileSync(buildFolder + "index.html", htmlBase)
    for (const entry of Data.entries)
        fs.writeFileSync(buildFolder + entry.id + ".html", htmlBase)
}


function main()
{
    buildHtml()
    console.log("done")
    process.exit(0)
}


main()