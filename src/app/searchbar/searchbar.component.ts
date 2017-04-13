import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Movie } from '../movie';
import { SimplehttpComponent } from '../simplehttp/simplehttp.component';
import { GetmoviesService } from '../getmovies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [GetmoviesService]
})
export class SearchbarComponent implements OnInit {
  currentMovie: Movie;
  public movies : Movie[];

  showMovie(item){
    this.currentMovie = item;
  }
  constructor(private service: GetmoviesService) { 
    service
      .getMovies()
      .subscribe(response => this.movies = response);
  }

  ngOnInit() {
  }

}
