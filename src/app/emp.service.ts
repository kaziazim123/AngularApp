import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) 
  { }

  select()
  {
    return this.http.get("http://192.168.0.115:9898/emps");
  }
}
