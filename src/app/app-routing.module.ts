import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfilmComponent } from './pages/addfilm/addfilm.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { EditfilmComponent } from './pages/editfilm/editfilm.component';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'film/:id', component:FilmComponent},
  {path:'editfilm/:id', component:EditfilmComponent},
  {path:'addfilm', component:AddfilmComponent},
  {path:'apropos', component:AproposComponent},
  {path:'**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
