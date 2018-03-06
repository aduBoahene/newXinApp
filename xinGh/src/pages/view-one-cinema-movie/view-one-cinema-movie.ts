import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  movieToBeDisplayed:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad ViewOneCinemaMoviePage', this.navParams.get('movieTobeViewed'))

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOneCinemaMoviePage');

  }

  ionViewWillLoad(){
    console.log("holla")


    this.movieToBeDisplayed = this.navParams.get('movieTobeViewed')
    console.log("movie from previous page", this.movieToBeDisplayed)
  }



}
