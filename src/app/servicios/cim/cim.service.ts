import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cim } from 'src/app/interfaces/cim/cim';

@Injectable({
  providedIn: 'root'
})
export class CimService {
  api = 'http://localhost:80';

  constructor(
    public http: HttpClient
  ) { }

  postCim(cim:Cim){
    const url = `${this.api}/CIM`;
    return this.http.post(url,cim)
  }
} 
