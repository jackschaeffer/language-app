import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/common/artist';
import { Genre } from 'src/app/common/genre';
import { Song } from 'src/app/common/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  currentGenreId!: number;
  previousGenreId!: number;

  currentArtistId!: number;
  previousArtistId!: number;

  previousKeyword!: string;

  searchMode: boolean = false;

  // properties for pagination
  pageNumber: number = 1;
  pageSize: number = 20;
  totalElements: number = 0;

  constructor(private songService: SongService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listSongs();
    });
  }

  listSongs(){

    // Check if user is searching songs by keyword
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchSongs();
    }
    else {
      this.handleListSongs();
    }

  }

  // QUERY SONG WITH KEYWORD
  handleSearchSongs(){
    const keyword = this.route.snapshot.paramMap.get('keyword');

    // If we have a different keyword than previously queried
    // then we need to set the pageNumber back to 1
    if (this.previousKeyword != keyword){
      this.pageNumber = 1;
    }
    this.previousKeyword = keyword!;

    this.songService.searchSongs(this.pageNumber-1, this.pageSize, keyword!).subscribe(
      data => {

        this.songs = data._embedded.songs;
        this.pageNumber = data.page.number + 1;
        this.pageSize = data.page.size;
        this.totalElements = data.page.totalElements;

        data._embedded.songs.forEach((song) => {
          const genre: Observable<Genre> = this.songService.getGenreFromSong(song.id);
          const artist: Observable<Artist> = this.songService.getArtistFromSong(song.id);
          genre.subscribe(
            data => {
              song.genre = data;
            }
          )
          artist.subscribe(
            data => {
              song.artist = data;
            }
          )
        });
      }
    )
  }

  handleListSongs(){
        // check if parameters are available
          // route = activated route
          // snapshot = state of route at the given momenent in time
          // paraMap = map of all route params (params name based on route configs)
          const hasGenreId: boolean = this.route.snapshot.paramMap.has('genreId');

          const hasArtistId: boolean = this.route.snapshot.paramMap.has('artistId');
      

          // SEARCH BY GENRE
          // handle querying songs if a genre id has been speicifed
          if (hasGenreId) {
              this.currentGenreId = +this.route.snapshot.paramMap.get('genreId')!;
            
              // If we have a different genre id than previously queried
              // then we need to set the pageNumber back to 1
              if (this.previousGenreId != this.currentGenreId){
                this.pageNumber = 1;
              }
              this.previousGenreId = this.currentGenreId;

              // get songs for given genre id
              this.songService.getSongListByGenre(this.pageNumber-1, this.pageSize, this.currentGenreId).subscribe(
                data => {

                  this.songs = data._embedded.songs;
                  this.pageNumber = data.page.number + 1;
                  this.pageSize = data.page.size;
                  this.totalElements = data.page.totalElements;
  
                  data._embedded.songs.forEach((song) => {
                    const genre: Observable<Genre> = this.songService.getGenreFromSong(song.id);
                    const artist: Observable<Artist> = this.songService.getArtistFromSong(song.id);
                    genre.subscribe(
                      data => {
                        song.genre = data;
                      }
                    )
                    artist.subscribe(
                      data => {
                        song.artist = data;
                      }
                    )
                  });

                }
              )
          }


          // SEARCH BY ARTIST
          // handle querying songs if a artist id has been speicifed
          else if (hasArtistId){
            this.currentArtistId = +this.route.snapshot.paramMap.get('artistId')!;

            // If we have a different artist id than previously queried
            // then we need to set the pageNumber back to 1
            if (this.previousArtistId != this.currentArtistId){
              this.pageNumber = 1;
            }
            this.previousArtistId = this.currentArtistId;
    
            // get songs for given artist id
            this.songService.getSongListByArtist(this.pageNumber-1, this.pageSize, this.currentArtistId).subscribe(
              data => {

              this.songs = data._embedded.songs;
              this.pageNumber = data.page.number + 1;
              this.pageSize = data.page.size;
              this.totalElements = data.page.totalElements;

              data._embedded.songs.forEach((song) => {
                const genre: Observable<Genre> = this.songService.getGenreFromSong(song.id);
                const artist: Observable<Artist> = this.songService.getArtistFromSong(song.id);
                genre.subscribe(
                  data => {
                    song.genre = data;
                  }
                )
                artist.subscribe(
                  data => {
                    song.artist = data;
                  }
                )
              });
                
              }
            )
          }

          // SEARCH ALL SONGS
          // handle querying songs when no artist or genre has been specified 
          else {
            const songs = this.songService.getSongList(this.pageNumber-1, this.pageSize);
            songs.subscribe(
              data => {

                this.songs = data._embedded.songs;
                this.pageNumber = data.page.number + 1;
                this.pageSize = data.page.size;
                this.totalElements = data.page.totalElements;

                data._embedded.songs.forEach((song) => {
                  const genre: Observable<Genre> = this.songService.getGenreFromSong(song.id);
                  const artist: Observable<Artist> = this.songService.getArtistFromSong(song.id);
                  genre.subscribe(
                    data => {
                      song.genre = data;
                    }
                  )
                  artist.subscribe(
                    data => {
                      song.artist = data;
                    }
                  )
                });
        
              }
            )
          }
  }

}
