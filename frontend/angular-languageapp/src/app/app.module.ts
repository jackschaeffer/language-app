import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SongService } from './services/song.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'genres/:id', component: SongListComponent},
  {path: 'genre', component: SongListComponent},
  {path: 'songs', component: SongListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent
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
