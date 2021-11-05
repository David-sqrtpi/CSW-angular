import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../entidades/empleado';

@Injectable({
  providedIn: 'root'
})
export class HttpEmpleadoService {
  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get<Empleado[]>("http://localhost:8080/empleados");
  }

  crearEmpleado(cuerpo: object) {
    return this.http.post("http://localhost:8080/empleados", cuerpo);
  }

  modificarEmpleado() {

  }
}
