import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../common/song';
import { map } from 'rxjs/operators';
import { Genre } from '../common/genre';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl = "http://localhost:8080/api/songs";

  private genresUrl = "http://localhost:8080/api/genres";

  constructor(private httpClient: HttpClient) { }


  getSongListByGenre(theGenreId: number): Observable<Song[]>{
    const genreSearchUrl = `${this.baseUrl}/search/findByGenreId?id=${theGenreId}`;

    return this.httpClient.get<GetResponseSongs>(genreSearchUrl).pipe(
      map(response => response._embedded.songs)
    );
  }



  getSongList(): Observable<Song[]>{
    return this.httpClient.get<GetResponseSongs>(this.baseUrl).pipe(
      map(response => response._embedded.songs)
    );
  }


  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<GetResponseGenres>(this.genresUrl).pipe(
      map(response => response._embedded.genres)
    );
  }

}


interface GetResponseSongs {
  _embedded: {
    songs: Song[];
  }
}

interface GetResponseGenres {
  _embedded: {
    genres: Genre[];
  }
}