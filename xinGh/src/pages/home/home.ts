import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewOneCinemaMoviesPage } from '../view-one-cinema-movies/view-one-cinema-movies';

import { Http} from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies:any
  houses:any

  constructor(public navCtrl: NavController, public http:Http) {
  }


  ionViewDidLoad(){
    console.log("hellloooooo")

    this.getAllHouses()


    this.movies=[
      {
        "name":"Black Panther",
        "posterUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQPpcKQ9eWZGxJe6eXyCW91eayLVm4KqruvJz3GP0F2T2w46yKZ",
        "videoUrl":"https://www.youtube.com/watch?v=U0D3AOldjMU"
      },
      {
        "name":"Red Sparrow",
        "posterUrl":"data:image/jpeg;base64,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",
        "videoUrl":"https://www.youtube.com/watch?v=U0D3AOldjMU"
      },
      {
        "name":"Toy Story",
        "posterUrl":"http://cdn-static.denofgeek.com/sites/denofgeek/files/2017/05/toy_story_3_main.jpg",
        "videoUrl":"https://www.youtube.com/watch?v=U0D3AOldjMU"
      },
      {
        "name":"Justice League",
        "posterUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fPu_n_DjGXSbLIVi5BRjKQRrTRNBQ-WCzmJi23hmx6FsihkWQg",
        "videoUrl":"https://www.youtube.com/watch?v=U0D3AOldjMU"
      },
      {
        "name":"Thor",
        "posterUrl":"assets/img/thor.jpeg",
        "videoUrl":"https://www.youtube.com/watch?v=U0D3AOldjMU"
      }
    ]
  }

  goToHouseMovies(house){
    this.navCtrl.push(ViewOneCinemaMoviesPage,{'house':house})

    console.log("house", house)
  }

  getAllHouses(){
    return this.http.get("http://localhost:27036/api/House/GetAllHouses")
    .map(res=>res.json())
    .subscribe(data =>{
     
      this.houses = data
      console.log("all houses",this.houses)
    })
  }

}
