import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenrePage } from '../pages/genre/genre';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { MyMoviesPage } from '../pages/my-movies/my-movies';
import { ViewOneCinemaMoviePage } from '../pages/view-one-cinema-movie/view-one-cinema-movie';
import { ViewOneCinemaMoviesPage } from '../pages/view-one-cinema-movies/view-one-cinema-movies';
import { ViewMovieTrailerPage } from '../pages/view-movie-trailer/view-movie-trailer';
import { RegisterPage } from '../pages/register/register';
import { AllMoviesPage } from '../pages/all-movies/all-movies';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GenrePage,
    SettingsPage,
    AboutPage,
    MyMoviesPage,
    ViewOneCinemaMoviePage,
    ViewOneCinemaMoviesPage,
    ViewMovieTrailerPage,
    RegisterPage,
    AllMoviesPage
  ],
  imports: [
    BrowserModule,
    //IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GenrePage,
    SettingsPage,
    AboutPage,
    MyMoviesPage,
    ViewOneCinemaMoviePage,
    ViewOneCinemaMoviesPage,
    ViewMovieTrailerPage,
    RegisterPage,
    AllMoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
