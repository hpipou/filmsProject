import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private filmServer : FilmServiceService, private activatedRoute: ActivatedRoute) { }
  id : any;
  film:any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmServer.getOnFilm(this.id).subscribe(
      (data)=>{this.film = data},
      (error)=>{console.log(error)},
      ()=>{console.log("Operation reussie")}
    )
  }

}
