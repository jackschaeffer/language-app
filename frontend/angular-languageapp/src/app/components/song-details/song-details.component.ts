import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Artist } from 'src/app/common/artist';
import { Genre } from 'src/app/common/genre';
import { Song } from 'src/app/common/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  song: Song = new Song();
  genre: Genre = new Genre();
  artist: Artist = new Artist();

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

    const song = this.songService.getSong(songId);
    const genreFromSong = this.songService.getGenreFromSong(songId);
    const artistFromSong = this.songService.getArtistFromSong(songId);

    forkJoin([song, genreFromSong, artistFromSong]).subscribe(
      data => {
        this.song = data[0];
        this.genre = data[1];    
        this.artist = data[2];       
      }
    )

  }

}
