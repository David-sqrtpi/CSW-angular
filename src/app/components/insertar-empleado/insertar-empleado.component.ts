import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpEmpleadoService } from 'src/app/services/http-empleado.service';

@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.css']
})
export class InsertarEmpleadoComponent implements OnInit {

  empleadoForm = this.fb.group({
    name: ['', Validators.required],
    cedula: ['', Validators.required],
    gender: ['', Validators.required]
  });

  private empleado: object = {};

  constructor(private fb: FormBuilder, private http: HttpEmpleadoService) { }

  public onSubmit(): void {
    console.log('Hola, formulario');

    this.empleado = this.empleadoForm.value;

    this.http.crearEmpleado(this.empleado).subscribe(
      (respuesta) => {
        console.log("Hubo respuesta");
      },
      (error) => {
        console.log(error);
        console.log("Ocurrió un error");
      }
    );

    console.log("Hola");

  }

  ngOnInit(): void {
  }

}
