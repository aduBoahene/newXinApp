import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMovieTrailerPage } from './view-movie-trailer';

@NgModule({
  declarations: [
    ViewMovieTrailerPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMovieTrailerPage),
  ],
})
export class ViewMovieTrailerPageModule {}
