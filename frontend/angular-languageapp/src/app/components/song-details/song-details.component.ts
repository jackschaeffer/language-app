import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/common/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  song: Song = new Song();

  constructor(private songService: SongService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleSongDetails();
    })
  }

  handleSongDetails() {
    // get id param string
    const songId: number = +this.route.snapshot.paramMap.get('songId')!;

    this.songService.getSong(songId).subscribe(
      data => {
        this.song = data;
      }
    )

  }

}
