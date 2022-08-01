import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';
import { EditfilmComponent } from './pages/editfilm/editfilm.component';
import { AddfilmComponent } from './pages/addfilm/addfilm.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    EditfilmComponent,
    AddfilmComponent,
    PagenotfoundComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
