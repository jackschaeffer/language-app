import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/common/artist';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-artist-sidebar',
  templateUrl: './artist-sidebar.component.html',
  styleUrls: ['./artist-sidebar.component.css']
})
export class ArtistSidebarComponent implements OnInit {

  artists!: Artist[];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.listArtists();
  }

  listArtists() {
    this.songService.getArtists().subscribe(
      data => {
        this.artists = data;
      }
    );
  }

}
