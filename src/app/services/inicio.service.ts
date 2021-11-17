import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }


  inicio(cuerpo: object) {
    return this.http.post<number>(`${URL}/login`, cuerpo);
  }
}
