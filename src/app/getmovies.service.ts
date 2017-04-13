import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable()
export class GetmoviesService {

  constructor(private http: Http) { }

  public getMovies(): Observable<Response> {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=46493737c929707fe41b0a82c38bd029&language=en-US')
    .map(response => response.json().results)
  }

}
