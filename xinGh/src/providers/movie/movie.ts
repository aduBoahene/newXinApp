import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }


  getMovieByHouse(houseId){
    return this.http.get("http://localhost:27036/api/Movie/GetMovieTime?movieId=2")
    .map((res: Response) =>res.json())
  }

  getTimeOfMovie(movieId){
    return this.http.get("http://localhost:27036/api/Movie/GetMovieTime?movieId="+movieId)
    .map((res: Response) =>res.json())
  }
  
}
