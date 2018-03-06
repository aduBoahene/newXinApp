import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllMoviesPage } from './all-movies';

@NgModule({
  declarations: [
    AllMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllMoviesPage),
  ],
})
export class AllMoviesPageModule {}
