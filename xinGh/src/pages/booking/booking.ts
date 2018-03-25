import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http} from '@angular/http';


/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  times:any
  movie:any

  public movieTitle:any

  private bookingDetails : FormGroup;

  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController, public navParams: NavParams,private formBuilder: FormBuilder,public http:Http) {
    // this.bookingDetails = this.formBuilder.group({
    //   //title: ['', Validators.required],
    //   title: ['', Validators.required],
    //   custName: [''],
    //   time: ['', Validators.required],
    //   payment: ['']
    // });
  }

  todo = {}
  logForm() {
    console.log(this.todo)
    alert("booking has been sent")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');

    console.log("from previous to booking", this.navParams.get('movieToBeDisplayed'))
    this.movie = this.navParams.get('movieToBeDisplayed')
    console.log("from previous vag", this.movie)
    this.getTimesOfMovies(this.movie.MovieId)

    this.movieTitle = this.movie.Title

    this.todo={
      "title":this.movie.Title,
      "amount":this.movie.Amount
    }
  
   
  }

  getTimesOfMovies(movieId){

    let loading = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loading.present();

    return this.http.get("http://localhost:27036/api/Movie/GetMovieTime?movieId="+movieId)
    .map(res=>res.json())
    .subscribe(data =>{
     
      loading.dismiss()
      this.times = data
      console.log("sands of time 2",this.times)
    })
  }

}
