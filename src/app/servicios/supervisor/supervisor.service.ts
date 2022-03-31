import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  api = 'http://localhost:80';

  constructor(
    public http: HttpClient
  ) { }

  getSupervisor(){
    return this.http.get(`${this.api}/Supervisor`)
  }
}
