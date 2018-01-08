import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [DataService]
})
export class NavComponent implements OnInit {
  userData: any;
  userKey: number;
  errorMessage: string;
  users: any[];

  constructor(private _dataService: DataService) {
    this.userKey = 111111;
  }

  ngOnInit() {
    this._dataService.getUsers()
    .subscribe(users => {
        this.users = users;
        this.userData = this.findUser(this.userKey);
        console.log(this.userData);
    }, 
    error => this.errorMessage = <any>error);
  }

  findUser(key: number): any {
    return this.users.filter(user => user.userId == this.userKey)[0];
  }

}
