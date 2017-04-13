import { Component, OnInit } from '@angular/core';

import { GetfilmstarsService } from '../getfilmstars.service';
import { Filmstar } from '../filmstar';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css'],
  providers: [GetfilmstarsService]
})
export class SimplehttpComponent implements OnInit {
  public filmstars : Filmstar[];

  onClick(e){
    console.log(e.target.innerHTML);
  }

  constructor(private service: GetfilmstarsService) { 
    service
      .getfilmstars()
      .subscribe(response => this.filmstars = response);
  }

  ngOnInit() {
    this.filmstars
  }

}
