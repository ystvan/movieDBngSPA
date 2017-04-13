import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  inputs: ['movie']
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
