import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SimplehttpComponent } from './simplehttp/simplehttp.component';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SimplehttpComponent,
    
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'top-rated', component: SimplehttpComponent },
            { path: 'search', component: SimplehttpComponent },
            { path: 'fun', component: SimplehttpComponent },
            { path: '**', redirectTo: 'hello' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
