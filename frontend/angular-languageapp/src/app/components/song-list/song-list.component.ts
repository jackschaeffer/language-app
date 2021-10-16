import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/common/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs!: Song[];
  currentGenreId!: number;
  currentArtistId!: number;
  searchMode!: boolean;

  constructor(private songService: SongService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listSongs();
    });
  }

  listSongs(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log(this.searchMode);
    if (this.searchMode) {
      this.handleSearchSongs();
    }
    else {
      this.handleListSongs();
    }

  }


  handleSearchSongs(){
    const theKeyword = this.route.snapshot.paramMap.get('keyword');

    this.songService.searchSongs(theKeyword!).subscribe(
      data => {
        this.songs = data;
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
      
          if (hasGenreId) {
              this.currentGenreId = +this.route.snapshot.paramMap.get('genreId')!;
              console.log("Has Genre Id");
      
              // get songs for given genre id
              this.songService.getSongListByGenre(this.currentGenreId).subscribe(
                data => {
                  this.songs = data;
                }
              )
          }
          else if (hasArtistId){
            this.currentArtistId = +this.route.snapshot.paramMap.get('artistId')!;
              console.log("Has Artist Id");
      
              // get songs for given artist id
              this.songService.getSongListByArtist(this.currentArtistId).subscribe(
                data => {
                  this.songs = data;
                }
              )
          }
          else {
            // no genre id or artist id 
            this.songService.getSongList().subscribe(
              data => {
                this.songs = data;
              }
            )
          }
  }

}
