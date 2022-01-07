export interface Record
{
    id: string
    kind: "movie" | "game"
    title: string
    year: number
    copyright: string
    slotWidth?: string
    slotHeight?: string
    fileExtension?: string
    compareWith?: string[]
    tables: Table[]
}


export interface Table
{
    title: string
    langs: string[]
    pics: Pic[]
    notes: {
        [id: string]: Notes
    }
}


export type Language = string


export type Pic = string | [string, PicNotes]


export interface PicNotes
{
    [lang: string]: LanguageNote
}


export interface LanguageNote
{
    usePic?: Language
    notes?: Notes
}


export type Notes = string | Note | Note[]


export type Note =
    Details |
    Transcription |
    LiteralTranslation |
    Inconsistency |
    Mistake |
    Oddity


export interface Details
{
    kind: "details"
    description: string
}


export interface Transcription
{
    kind: "transcription"
    text: string
    reading?: string
    standardized?: string
}


export interface LiteralTranslation
{
    kind: "literalTranslation"
    description: string
}


export interface Inconsistency
{
    kind: "inconsistency"
    description: string
}


export interface Mistake
{
    kind: "mistake"
    description: string
}


export interface Oddity
{
    kind: "oddity"
    description: string
}


export function details(
    description: string)
    : Details
{
    return {
        kind: "details",
        description,
    }
}


export function transcription(
    text: string,
    reading?: string,
    standardized?: string)
    : Transcription
{
    return {
        kind: "transcription",
        text,
        reading,
        standardized,
    }
}


export function literally(description: string): LiteralTranslation
{
    return {
        kind: "literalTranslation",
        description,
    }
}


export function inconsistency(description: string): Inconsistency
{
    return {
        kind: "inconsistency",
        description,
    }
}


export function mistake(description: string): Mistake
{
    return {
        kind: "mistake",
        description,
    }
}


export function oddity(description: string): Oddity
{
    return {
        kind: "oddity",
        description,
    }
}