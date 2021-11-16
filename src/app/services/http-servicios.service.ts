import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../entidades/servicio';
import { environment } from 'src/environments/environment';

const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class HttpServiciosService {

  constructor(private http: HttpClient) { }

  getServicios() {
    return this.http.get<Servicio[]>(`${URL}/servicios`);
  }
}
