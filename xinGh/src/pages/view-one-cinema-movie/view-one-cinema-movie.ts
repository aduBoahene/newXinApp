import { BookingPage } from './../booking/booking';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http} from '@angular/http';

/**
 * Generated class for the ViewOneCinemaMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-one-cinema-movie',
  templateUrl: 'view-one-cinema-movie.html',
})
export class ViewOneCinemaMoviePage {

  times:any
  movieToBeDisplayed:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOneCinemaMoviePage');

    this.movieToBeDisplayed = this.navParams.get('movieTobeViewed')

    console.log('From Previous in var',  this.movieToBeDisplayed)

    //if(this.movieToBeDisplayed==null||this.movieToBeDisplayed=='undefined'){
      if(this.movieToBeDisplayed.MovieId){
        //alert("not null")
        this.getTimesOFMovies(this.movieToBeDisplayed.MovieId)
      }
    
   
  }


  getTimesOFMovies(movieId){
    return this.http.get("http://localhost:27036/api/Movie/GetMovieTime?movieId="+movieId)
    .map(res=>res.json())
    .subscribe(data =>{
     
      this.times = data
      console.log("sands of time",this.times)
    })
  }

  goToBook(movie){
    this.navCtrl.push(BookingPage,{
      'movieToBeDisplayed':movie
    })
  }



}
