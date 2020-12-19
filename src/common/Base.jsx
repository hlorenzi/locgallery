import ReactDOM from "react-dom"


export async function main(elem)
{
    //const ReactDOM = await import("react-dom")
    ReactDOM.render(elem, document.getElementById("divApp"))
}