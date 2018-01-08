import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent,
  ]
})
export class AppModule { }
