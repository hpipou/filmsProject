import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private filmService: FilmServiceService) { }
  listfilm:any;
  ngOnInit(): void {
    this.fetchFilms();
  }

  fetchFilms(): void {
    this.filmService.getAllFilms().subscribe(
      (data)=>{this.listfilm=data; this.POSTS=data;},
      (error)=>{console.log(error)},
      ()=>{console.log("Opération GET ALL FILMS REUSSIE")}
    )
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchFilms();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchFilms();
  }

}
