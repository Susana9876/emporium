import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Trazo } from 'src/app/interfaces/trazo/trazo';

@Injectable({
  providedIn: 'root'
})
export class TrazoService {
  api = 'http://localhost:80';

  constructor(
    public http: HttpClient
  ) { }

  getTrazo(){
    return this.http.get(`${this.api}/Trazo`)
  }

  postTrazo(trazo:Trazo){
    const url = `${this.api}/Trazo`;
    return this.http.post(url,trazo)
  }

}
