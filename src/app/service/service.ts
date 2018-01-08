import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from '../interfaces/product';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class DataService {
    private _productUrl = ' ../../../api/products.json'

    constructor(private _http: HttpClient) {}
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
                    .catch(this.handleError);
    }


    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}