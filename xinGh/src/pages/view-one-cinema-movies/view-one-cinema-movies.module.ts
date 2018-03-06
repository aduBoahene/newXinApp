import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewOneCinemaMoviesPage } from './view-one-cinema-movies';

@NgModule({
  declarations: [
    ViewOneCinemaMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewOneCinemaMoviesPage),
  ],
})
export class ViewOneCinemaMoviesPageModule {}
