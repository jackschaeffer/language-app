import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/common/genre';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-genre-sidebar',
  templateUrl: './genre-sidebar.component.html',
  styleUrls: ['./genre-sidebar.component.css']
})
export class GenreSidebarComponent implements OnInit {

  genres!: Genre[];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.listGenres();
  }

  listGenres() {
    this.songService.getGenres().subscribe(
      data => {
        this.genres = data;
      }
    );
  }

}
