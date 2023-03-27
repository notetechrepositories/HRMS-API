import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }
  // getPost(data:any){
  //   return this.http.post<any>("https://localhost:7078/api/employeee",data);
  // }
}
