import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import 'rxjs/add/operator/map';

@Injectable()
export class GetmoviesService {
  private request$: Observable<Movie[]>
  constructor(private http: Http) { 
    this.request$ = http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=46493737c929707fe41b0a82c38bd029&language=en-US')
      .map(response => response.json().results)
  }

  public getMovies(): Observable<Movie[]> {
    return this.request$;
  }

}
