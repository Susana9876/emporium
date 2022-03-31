import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Formato } from 'src/app/interfaces/formato/formato';

@Injectable({
  providedIn: 'root'
})
export class CodigoQRService {
  api = 'http://localhost:80/Prototipo';
  url = 'http://localhost:80/Formato';

  constructor(
    public http: HttpClient
  ) { }

  /*obtenerDatos(ClaveUbicacion: string){
    return this.http.get(`${this.api}ClaveUbicacion=${ClaveUbicacion}`)
  }

  postDatos(formato:Formato){
    return this.http.post(this.api, formato);
  }*/

  getInfoProto(){
    return this.http.get(`${this.api}`)
  }

  getInfoForma(){
    return this.http.get(`${this.url}`)
  }

  postInfo(formato:Formato){
    return this.http.post(this.url, formato)
  }

}
