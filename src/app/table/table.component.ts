import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../Interfaces/product';
import { DataService } from '../service/service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    errorMessage: string;
    filteredProducts: IProduct[];
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    products: IProduct[] = [];

  constructor(private _dataService: DataService) { 
     
  }

  ngOnInit() {
      this._dataService.getProducts()
        .subscribe(products => {
            this.products = products
            this.filteredProducts = this.products;
        }, 

        error => this.errorMessage = <any>error);
  }

}
