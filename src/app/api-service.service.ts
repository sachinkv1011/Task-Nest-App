import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/emplogin",data)
  }
}
