import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../common/song';
import { map } from 'rxjs/operators';
import { Genre } from '../common/genre';
import { Artist } from '../common/artist';
import { Phrase } from '../common/phrase';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl = "http://localhost:8080/api/songs";

  private genresUrl = "http://localhost:8080/api/genres";

  private artistsUrl = "http://localhost:8080/api/artists";

  constructor(private httpClient: HttpClient) { }


  // QUERY ALL SONGS
  // Query songs without genre, artist, or keyword specified
  getSongList(page: number,
              pageSize:number): Observable<GetResponseSongs>{

    const searchUrl = this.baseUrl + `?page=${page}&size=${pageSize}`;
    return this.httpClient.get<GetResponseSongs>(searchUrl);

  }

  // QUERY BY GENRE
  // Query songs by genre id
  getSongListByGenre(page: number,
                    pageSize:number,
                    theGenreId: number): Observable<GetResponseSongs>{
    
    const genreSearchUrl = `${this.baseUrl}/search/findByGenreId?id=${theGenreId}&page=${page}&size=${pageSize}`;
    return this.httpClient.get<GetResponseSongs>(genreSearchUrl);

  }

  // QUERY BY ARTIST
  // Query songs by artist id
  getSongListByArtist(page: number,
                      pageSize:number,
                      theArtistId: number): Observable<GetResponseSongs> {

    const artistSearchUrl = `${this.baseUrl}/search/findByArtistId?id=${theArtistId}&page=${page}&size=${pageSize}`;
    return this.httpClient.get<GetResponseSongs>(artistSearchUrl);

  }

  searchSongs(page: number,
              pageSize:number,
              theKeyword: string): Observable<GetResponseSongs> {

    const searchUrl = `${this.baseUrl}/search/findByFrTitleContaining?frTitle=${theKeyword}&page=${page}&size=${pageSize}`;
    return this.httpClient.get<GetResponseSongs>(searchUrl);

  }


  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<GetResponseGenres>(this.genresUrl).pipe(
      map(response => response._embedded.genres)
    );
  }

  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<GetResponseArtists>(this.artistsUrl).pipe(
      map(response => response._embedded.artists)
    );
  }

  getSong(songId: number): Observable<Song> {
    const songUrl = `${this.baseUrl}/${songId}`;
    const song = this.httpClient.get<Song>(songUrl);
    return song;
  }

  getGenreFromSong(songId: number): Observable<Genre>{
    const songUrl = `${this.baseUrl}/${songId}`;
    const genreUrl = `${songUrl}/genre`;
    const genre = this.httpClient.get<Genre>(genreUrl);
    return genre;
  }

  getArtistFromSong(songId: number): Observable<Artist> {
    const songUrl = `${this.baseUrl}/${songId}`;
    const artistUrl = `${songUrl}/artist`;
    const artist = this.httpClient.get<Artist>(artistUrl);
    return artist;
  }

  getPhrasesFromSong(songId: number):  Observable<Phrase[]>  {
    const songUrl = `${this.baseUrl}/${songId}`;
    const phrasesUrl = `${songUrl}/phrases`;
    return this.httpClient.get<GetResponsePhrases>(phrasesUrl).pipe(
      map(response => response._embedded.phrases)
    );
  }

  getGenre(genreUrl: string): Observable<Genre> {
    return this.httpClient.get<Genre>(genreUrl);
  }

  private getSongs(searchUrl: string): Observable<Song[]> {
    return this.httpClient.get<GetResponseSongs>(searchUrl).pipe(
      map(response => response._embedded.songs)
    );
  }
  
}


interface GetResponseSongs {
  _embedded: {
    songs: Song[];
  }
  page:{
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseGenres {
  _embedded: {
    genres: Genre[];
  }
}

interface GetResponseArtists {
  _embedded: {
    artists: Artist[];
  }
}

interface GetResponsePhrases {
  _embedded: {
    phrases: Phrase[];
  }
}
