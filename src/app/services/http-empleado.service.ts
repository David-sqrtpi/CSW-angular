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

  getEmpleados(cedula: number) {
    const params = new HttpParams()
      .set('cedula', cedula)
    return this.http.get<Empleado[]>(`${URL}/empleados`, { params });
  }

  crearEmpleado(cuerpo: object) {
    return this.http.post(`${URL}/empleados`, cuerpo);
  }

  modificarEmpleado() {

  }
}
