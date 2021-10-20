import { Artist } from "./artist";
import { Genre } from "./genre";

export class Song {
    id!: number;
    frTitle!: string;
    enTitle!: string;
    description!: string;
    frLyrics!: string;
    enLyrics!: string;
    imageUrl!: string;
    youtubeUrl!: string;
    yearReleased!: number;
    dateCreated!: Date;
    lastUpdated!: Date;

    genre: Genre = new Genre();
    artist: Artist = new Artist();

    frLyricsArr!: string[];
    enLyricsArr!: string[];

}

