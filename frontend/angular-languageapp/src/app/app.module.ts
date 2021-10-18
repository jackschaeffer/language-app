import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SongService } from './services/song.service';
import { Routes, RouterModule } from '@angular/router';
import { GenreSidebarComponent } from './components/genre-sidebar/genre-sidebar.component';
import { ArtistSidebarComponent } from './components/artist-sidebar/artist-sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';


const routes: Routes = [
  {path: 'songs/:songId', component: SongDetailsComponent},
  {path: 'search/:keyword', component: SongListComponent},
  {path: 'genres/:genreId', component: SongListComponent},
  {path: 'genres', component: SongListComponent},
  {path: 'artists/:artistId', component: SongListComponent},
  {path: 'artists', component: SongListComponent},
  {path: 'songs', component: SongListComponent},
  {path: '', redirectTo: '/songs', pathMatch: 'full'},
  {path: '**', redirectTo: '/songs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    GenreSidebarComponent,
    ArtistSidebarComponent,
    SearchComponent,
    SongDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
