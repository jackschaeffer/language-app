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

  constructor(private songService: SongService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listSongs();
    });
  }

  listSongs(){

    // check if id parameter is available
          // route = activated route
          // snapshot = state of route at the given momenent in time
          // paraMap = map of all route params (params name based on route configs)
    const hasGenreId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasGenreId) {
        this.currentGenreId = +this.route.snapshot.paramMap.get('id')!;
        

        // get songs for given genre id
        this.songService.getSongListByGenre(this.currentGenreId).subscribe(
          data => {
            this.songs = data;
          }
        )
    }
    else {
      // no genre id available set default to 1
      // get songs dont pass id
      this.songService.getSongList().subscribe(
        data => {
          this.songs = data;
        }
      )
    }
  }

}
