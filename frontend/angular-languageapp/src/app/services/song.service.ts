import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../common/song';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl = "http://localhost:8080/api/songs"

  constructor(private httpClient: HttpClient) { }

  getSongList(theGenreId: number): Observable<Song[]>{

    // 

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.songs)
    );
  }
}

interface GetResponse {
  _embedded: {
    songs: Song[];
  }
}