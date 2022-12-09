import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'done-list', component: DoneListComponent },
    ]),
  ],
  declarations: [ AppComponent, HelloComponent, ListComponent, DoneListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
