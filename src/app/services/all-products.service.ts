import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do'
import { Product } from '../classes/product'

@Injectable()
export class AllProductsService {

  constructor(public http: HttpClient) { }
  private getAllUrl: string = "http://<{enter your URL}/getAllProducts";

  // this is the REAL function used to make http request and get all products from the database
  // getProducts(): Observable<Product[]> {
  //   return this.http.get(this.getAllUrl)
  //     .map((response: Response) => <Product[]>response.json())
  //     // .do(data => console.log("All: " + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  // this is the replicate getProducts() that uses dummy data from "./assets/test.json"
  response !: HttpResponse<any>
  getProducts(): Observable<Product[]> {
    return this.http.get("./assets/dummyProducts.json")
      .pipe(map((response) => <Product[]>response))
      //.do(data => console.log("All: " + JSON.stringify(data)))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(() => new Error(errMsg));
  }
}
