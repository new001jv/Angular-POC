import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { DataService } from './service/service';

declare var $:any;

@Component({

  selector: 'poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent {
  pageTitle: string = 'GM proof of concept';
  pageSubTitle: string = 'with Angular 4, Bootstrap 3, and jQuery 3'
}
