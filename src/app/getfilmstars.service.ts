import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Filmstar } from './filmstar';
import 'rxjs/add/operator/map';


@Injectable()
export class GetfilmstarsService {
  private request$: Observable<Filmstar[]>
  constructor(private http: Http) { 
    this.request$ = http.get('http://api.themoviedb.org/3/person/popular?api_key=46493737c929707fe41b0a82c38bd029&language=en-US')
    .map(response => response.json().results)
  }

  public getfilmstars(): Observable<Filmstar[]> {
    return this.request$;
  }

}
