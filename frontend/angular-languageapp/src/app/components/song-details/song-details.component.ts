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
    const phrasesFromSong = this.songService.getPhrasesFromSong(songId);

    forkJoin([song, genreFromSong, artistFromSong, phrasesFromSong]).subscribe(
      data => {
        this.song = data[0];
        this.song.genre = data[1];    
        this.song.artist = data[2];  
        this.song.phrases = data[3];

        this.song.frLyricsArr = this.song.frLyrics.split('\n');
        this.song.enLyricsArr = this.song.enLyrics.split('\n');
             
      }
    )

  }

}
