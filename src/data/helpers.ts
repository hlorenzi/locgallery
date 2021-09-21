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
    tables:
    {
        title: string
        langs: string[]
        pics: string[]
        notes: {
            [id: string]: Notes
        }
    }[]
}


export type Notes = string | Note | Note[]


export type Note =
    Details |
    Transcription |
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
    literalTranslation?: string
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
    literalTranslation?: string)
    : Transcription
{
    return {
        kind: "transcription",
        text,
        reading: undefined,
        literalTranslation,
    }
}


export function transcriptionReading(
    text: string,
    reading: string,
    literalTranslation?: string)
    : Transcription
{
    return {
        kind: "transcription",
        text,
        reading,
        literalTranslation,
    }
}


export const inconsistency = (description: string): Inconsistency =>
{
    return {
        kind: "inconsistency",
        description,
    }
}


export const mistake = (description: string): Mistake =>
{
    return {
        kind: "mistake",
        description,
    }
}


export const oddity = (description: string): Oddity =>
{
    return {
        kind: "oddity",
        description,
    }
}