import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gerencias } from 'src/app/entidades/gerencias';
import { Servicio } from 'src/app/entidades/servicio';
import { HttpEmpleadoService } from 'src/app/services/http-empleado.service';
import { HttpGerenciasService } from 'src/app/services/http-gerencias.service';
import { HttpServiciosService } from 'src/app/services/http-servicios.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {
  public gerencias: Gerencias[] = [];
  public servicios: Servicio[] = [];

  empleadoForm = this.fb.group({
    nombre: ['', Validators.required],
    cedula: ['', Validators.required],
    idGenero: ['', Validators.required],
    fechaIngreso: ['', Validators.required],
    idServicio: ['0', Validators.required],
    idGerencia: ['0', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private httpEmpleado: HttpEmpleadoService,
    private httpServicio: HttpServiciosService,
    private httpGerencia: HttpGerenciasService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    const cedula: number = +this.router.snapshot.paramMap.get("cedula")!;

    this.empleadoForm.get("cedula")?.disable();
    this.httpEmpleado.getEmpleado(cedula).subscribe(
      (empleado) => {
        this.empleadoForm.setValue(empleado);
      },
      (error) => {
        console.log(error);
      }
    );

    this.httpGerencia.obtenerGerencias().subscribe(
      (gerencias) => {
        this.gerencias = gerencias;
      },
      (error) => {
        console.log(error);
      }
    );

    this.httpServicio.getServicios().subscribe(
      (servicios) => {
        this.servicios = servicios;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarEmpleado() {
    this.empleadoForm.get("cedula")?.enable();
    const empleado = this.empleadoForm.value;
    this.empleadoForm.get("cedula")?.disable();
    console.log(empleado);

    this.httpEmpleado.modificarEmpleado(empleado).subscribe(
      (empleado) => {
        console.log(empleado);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
