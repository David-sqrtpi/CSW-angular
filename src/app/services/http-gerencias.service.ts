import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gerencias } from '../entidades/gerencias';

const URL = environment.urlApi
@Injectable({
  providedIn: 'root'
})
export class HttpGerenciasService {

  constructor(private http: HttpClient) { }

  obtenerGerencias() {

    return this.http.get<Gerencias[]>(`${URL}/gerencias`);

  }

}
