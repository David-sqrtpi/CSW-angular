import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Empleado } from 'src/app/entidades/empleado';
import { Servicio } from 'src/app/entidades/servicio';
import { HttpEmpleadoService } from 'src/app/services/http-empleado.service';
import { HttpServiciosService } from 'src/app/services/http-servicios.service';

@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.css']
})
export class InsertarEmpleadoComponent implements OnInit {

  empleadoForm = this.fb.group({
    nombre: ['', Validators.required],
    cedula: ['', Validators.required],
    genero: ['', Validators.required],
    fechaIngreso: ['', Validators.required],
    idServicio: ['', Validators.required],
    idGerencia: ['', Validators.required]
  });

  private empleado: Empleado = {};
  public servicios: Servicio[] = [];

  constructor(private fb: FormBuilder,
    private httpEmpleado: HttpEmpleadoService,
    private httpServicio: HttpServiciosService) { }

  public onSubmit(): void {
    console.log('Hola, formulario');

    this.empleado = this.empleadoForm.value;

    console.log(this.empleado);

    this.httpEmpleado.crearEmpleado(this.empleado).subscribe(
      (respuesta) => {
        console.log(respuesta);

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
    this.httpServicio.getServicios().subscribe(
      (servicios) => {
        this.servicios = servicios;
        console.log(servicios);

      },
      (error) => {
        console.log(error);
        console.log("Ocurrió un error");
      }
    );
  }

}
