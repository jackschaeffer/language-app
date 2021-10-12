import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/common/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs!: Song[];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.listSongs();
  }

  listSongs(){
    this.songService.getSongList().subscribe(
      data => {
        this.songs = data;
      }
    )
  }

}
