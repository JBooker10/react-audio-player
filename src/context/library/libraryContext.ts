import { createContext } from "react";


export interface Album {
    SpotifyID: string,
    Title: string,
    Hash: string,
    DiscCount: number,
    Cover: string,
    CoverBig: string,
    CoverXL: string,
    ReleaseDate: Date,
    TrackCount: number,
    TrackNumber: number,
    TrackList: string,
    RecordLabel: string,
    Type: string,
    Tracks: Track[]
}

export interface Track {
    SpotifyID: string,
    Hash: string,
    Country: string,
    AlbumTitle: string,
    Title: string,
    Genre: string,
    Size: number,
    Duration: number,
    Stream: string,
    ReleaseDate: Date,
    Collection: string,
    Explicit: boolean,
    Lyrics: string,
    Popularity: number
}

export interface User {
    FirstName: string;
    LastName: string;
    Avatar: string;
    DOB: Date;
    Email: string;
    CreatedAt: Date;
}




export interface IState {
    user: User;
    errors: any;
    payload: any;
    loading: boolean;
    tracks: any;
    artists: any;
    albums: any;
    album: any;
}

export interface IAction {
    type: string;
    payload: {};
    errors: any;
}

const defaultValue = {} as any;

const libraryContext = createContext(defaultValue);
export default libraryContext;