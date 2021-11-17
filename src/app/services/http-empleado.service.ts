import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getEmpleado(cedula: number) {
    return this.http.get<Empleado>(`${URL}/empleados/${cedula}`);
  }

  crearEmpleado(cuerpo: object) {
    return this.http.post(`${URL}/empleados`, cuerpo);
  }

  modificarEmpleado(cuerpo: Empleado) {
    const cedula = cuerpo.cedula;

    return this.http.put(`${URL}/empleados/${cedula}`, cuerpo);
  }
}
