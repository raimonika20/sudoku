import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartgameComponent } from './startgame/startgame.component';
import { CleargridComponent } from './cleargrid/cleargrid.component';
import { ReloadsampleComponent } from './reloadsample/reloadsample.component';
import { SolvegridComponent } from './solvegrid/solvegrid.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartgameComponent,
    CleargridComponent,
    ReloadsampleComponent,
    SolvegridComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
