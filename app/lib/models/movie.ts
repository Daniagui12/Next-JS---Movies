// This file has the information of the movie Type

export type Movie = {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string;
    thumbnail_height: number;
    thumbnail_width: number;
}

// Movie interface
// This is the interface for the movie object, which will be used to create the movie object
// The movie object will have the following properties:

export interface MovieInterface {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
    href: string;
    extract: string;
    thumbnail: string;
    thumbnail_height: number;
    thumbnail_width: number;
}

