import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private http: HttpClient) { }
  url : string = "http://localhost:3000/"

  getAllFilms(): Observable<any>{
    return this.http.get(this.url)
  }

  getOnFilm(id:string):Observable<any>{
    return this.http.get(`${this.url}/film/${id}`)
  }
}


