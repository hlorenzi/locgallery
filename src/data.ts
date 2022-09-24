export interface Records
{
    [id: string]: Record
}


export interface Record
{
    id?: string
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
    rowNotes: Note[][]
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
    "reading" |
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
        columns: ["en-US"],
        rows: ["pic1"],
        rowNotes: [[]],
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