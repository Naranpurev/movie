import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/modals/movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movies[];
  searchInput:string;
  allMovies:Movies[];
  overview:string;
  loaded:boolean=false
  show:boolean=false;
  sort:boolean=false;
  IMG_PATH:string = "https://image.tmdb.org/t/p/w1280"
  constructor(private movieService:MoviesService) { }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(obj=> {
          setTimeout(() => {
            this.movies = obj.results    
            this.allMovies = obj.results   
            this.loaded = true
          }, 1500);
        
        } )
    }
    Search() {
      this.movies = this.allMovies.filter(res=> {
       return res.title.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    }
    ReadMore(movie:any) {
      this.show = !this.show
      this.overview = movie.overview
    }
    dropdown() {
      this.sort = !this.sort
    }
  
    SortByAverage() {
      this.movies = this.allMovies.sort((a,b)=>{ 
           if(a.vote_average > b.vote_average) {
          return -1
        }
        if(a.vote_average < b.vote_average) {
          return 1
        }
        return 0
      })
    }
    SortByCount(){
      this.movies = this.allMovies.sort((a,b)=>{ 
      if(a.vote_count > b.vote_count) {
        return -1
      }
      if(a.vote_count < b.vote_count) {
        return 1
      }
      return 0
    }
      )}
      SortByFeatured() {
        this.movies = this.allMovies.sort((a,b)=> {
          if(a.popularity > b.popularity) {
            return -1
          }
          if(a.popularity < b.popularity) {
            return 1
          }
          return 0
        })
      }
}
