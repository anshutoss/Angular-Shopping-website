import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getProductSearch(data:any):Observable<any>{
    return this.http.get<any>(`http://10.85.92.138:8050/searchProduct/${data}`)
  }

}
