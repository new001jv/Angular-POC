import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { DataService } from './service';

@Injectable()
export class AuthService {
  errorMessage: any;
  userData: any;
  users: any;
  userKey: number;
  isLoggedIn: boolean = false;
  
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

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}