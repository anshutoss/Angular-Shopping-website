import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private http: HttpClient) { }

  getLoginUsers(data:any):Observable<any>{
    return this.http.post<any>("http://10.85.92.138:8050/login",data)
  }

}
