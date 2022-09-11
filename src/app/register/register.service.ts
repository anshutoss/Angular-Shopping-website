import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>("http://10.85.92.138:8050/signup",data);
  }
}
