import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Results } from 'src/app/modals/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL:string = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bbcdd578630c1c801a3bba6c4b9e791&page=1"
  SEARCH_URL:string = 'https://api.themoviedb.org/3/search/movie?api_key=4bbcdd578630c1c801a3bba6c4b9e791&query="'

  constructor(private http:HttpClient) {  }
    getMovies():Observable<Results>{
      return this.http.get<Results>(this.API_URL)
    }
 

}
