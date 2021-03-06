import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Gerencias } from 'src/app/entidades/gerencias';
import { Servicio } from 'src/app/entidades/servicio';
import { HttpEmpleadoService } from 'src/app/services/http-empleado.service';
import { HttpGerenciasService } from 'src/app/services/http-gerencias.service';
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
    idGenero: ['1', Validators.required],
    fechaIngreso: ['', Validators.required],
    idServicio: ['1', Validators.required],
    idGerencia: ['1', Validators.required]
  });

  public servicios: Servicio[] = [];
  public gerencias: Gerencias[] = [];

  constructor(private fb: FormBuilder,
    private httpEmpleado: HttpEmpleadoService,
    private httpServicio: HttpServiciosService,
    private httpGerencia: HttpGerenciasService
  ) { }

  public onSubmit(): void {
    const empleado = this.empleadoForm.value;

    this.httpEmpleado.crearEmpleado(empleado).subscribe(
      () => {
        this.empleadoForm.reset();
        alert("Se ha insertado el empleado");
        console.log("Hubo respuesta");
      },
      (error) => {
        console.log(error);
        alert(`El empleado con cédula ${this.empleadoForm.get("cedula")?.value} ya está registrado`);
      }
    );
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

    this.httpGerencia.obtenerGerencias().subscribe(
      (gerencias) => {
        this.gerencias = gerencias;
        console.log(gerencias);

      },
      (error) => {
        console.log(error);
        console.log("Ocurrió un error");
      }
    );
  }
}
