import { StringLiteral } from "typescript";

export interface Movie {
    id: string;
    name: string;
}

export interface MovieName {
    name: string;
}

export interface ChuckNorrisJoke {
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}