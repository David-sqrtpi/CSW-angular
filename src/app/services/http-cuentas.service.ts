import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrearCuentaComponent } from '../componentes/crear-cuenta/crear-cuenta.component';
import { environment } from 'src/environments/environment';
const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class HttpCuentasService {

  constructor(private http: HttpClient) { }


  crearCuenta(cuerpo: object) {
    return this.http.post(`${URL}/cuentas`, cuerpo);
  }
}
