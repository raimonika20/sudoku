import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartgameComponent } from './startgame/startgame.component';
import { CleargridComponent } from  './cleargrid/cleargrid.component';
import { ReloadsampleComponent } from './reloadsample/reloadsample.component';
import { SolvegridComponent } from './solvegrid/solvegrid.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'startgame',component: StartgameComponent},
  {path: 'cleargrid', component: CleargridComponent},
  {path: 'reloadsample', component: ReloadsampleComponent},
  {path: 'solvegrid', component: SolvegridComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
