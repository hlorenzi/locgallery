import fs from "fs"


const buildFolder = "./pages/"


function buildHtml()
{
    console.log("building html...")


    const htmlBase = fs.readFileSync("./src/index.html", { encoding: "utf8" })


    if (!fs.existsSync(buildFolder))
        fs.mkdirSync(buildFolder)


    for (const file of fs.readdirSync("./src"))
    {
        if (!file.endsWith(".jsx"))
            continue

        const name = file.replace(".jsx", "")

        const html = htmlBase
            .replace(
                `<!--INJECT_SCRIPT-->`,
                `<script src="${ name }.js"></script>`)

        fs.writeFileSync(buildFolder + name + ".html", html)
    }
}


function main()
{
    buildHtml()
    console.log("done")
    process.exit(0)
}


main()