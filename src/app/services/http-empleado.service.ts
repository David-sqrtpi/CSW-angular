import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../entidades/empleado';
import { environment } from 'src/environments/environment';

const URL = environment.urlApi;

@Injectable({
  providedIn: 'root'
})

export class HttpEmpleadoService {
  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get<Empleado[]>(`${URL}/empleados`);
  }

  crearEmpleado(cuerpo: object) {
    return this.http.post(`${URL}/empleados`, cuerpo);
  }

  modificarEmpleado() {

  }
}
