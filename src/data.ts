export interface Records
{
    [id: string]: Record
}


export interface Record
{
    kind: "movie" | "game"
    title: string
    year: number
    copyright: string
    aspectRatio: number
    compareWith: string[]
    tables: Table[]
}


export interface Table
{
    title: string
    columns: string[]
    rows: string[]
    pictures: Picture[][]
}


export interface Picture
{
    filename: string
    notes: Note[]
}


export type NoteKind =
    "info" |
    "transcription" |
    "standardization" |
    "translation" |
    "inconsistency" |
    "oddity"


export interface Note
{
    kind: NoteKind
    text: string
}


export function makeRecord(): Record
{
    return {
        kind: "movie",
        title: "",
        year: 2000,
        copyright: "",
        aspectRatio: 16 / 9,
        compareWith: [],
        tables: [],
    }
}


export function makeTable(): Table
{
    return {
        title: "",
        columns: ["us"],
        rows: ["pic"],
        pictures: [[makePicture()]],
    }
}


export function makePicture(): Picture
{
    return {
        filename: "",
        notes: [],
    }
}


export function makeNote(): Note
{
    return {
        kind: "transcription",
        text: "",
    }
}