import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContratistaService {
  api = 'http://localhost:80';

  constructor(
    public http: HttpClient
  ) { }

  getContratista(){
    return this.http.get(`${this.api}/Contratista`)
  }
}
