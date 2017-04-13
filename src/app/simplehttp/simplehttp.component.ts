import { Component, OnInit } from '@angular/core';

import { GetmoviesService } from '../getmovies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css'],
  providers: [GetmoviesService]
})
export class SimplehttpComponent implements OnInit {
  public movies : Movie[];

  constructor(private service: GetmoviesService) { 
    service
      .getMovies()
      .subscribe(response => this.movies = response.json().results);
  }

  ngOnInit() {
  }

}
