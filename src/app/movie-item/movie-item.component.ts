import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  inputs: ['movie']
})
export class MovieItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
