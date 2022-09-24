import * as fs from "fs"
import * as Data from "./src/data"


const dataFolder = "./data/"
const buildFolder = "./build/"


function main()
{
    const records = gatherRecords()
    buildHtml(records)
    console.log("done")
    process.exit(0)
}


function gatherRecords(): Data.Records
{
    const records: Data.Records = {}

    const dir = fs.readdirSync(dataFolder)
    for (const entry of dir)
    {
        const dataFilename = dataFolder + entry + "/data.json"
        if (!fs.existsSync(dataFilename))
            continue
        
        console.log("reading data folder: " + entry)

        const record: Data.Record = JSON.parse(fs.readFileSync(dataFilename, "utf-8"))

        record.id = entry
        records[entry] = record
    }

    return records
}


function buildHtml(records: Data.Records)
{
    console.log("building html...")

    const htmlBase = fs.readFileSync("./src/index.html", "utf-8")

    if (!fs.existsSync(buildFolder))
        fs.mkdirSync(buildFolder)

    fs.writeFileSync(buildFolder + "data.json", JSON.stringify(records))
    
    fs.writeFileSync(buildFolder + "index.html", htmlBase)
    fs.writeFileSync(buildFolder + "edit.html", htmlBase)

    for (const [id, record] of Object.entries(records))
    {
        fs.writeFileSync(buildFolder + id + ".html", htmlBase)
    }
}


main()