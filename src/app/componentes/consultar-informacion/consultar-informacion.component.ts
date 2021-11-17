import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Empleado } from 'src/app/entidades/empleado';
import { HttpEmpleadoService } from 'src/app/services/http-empleado.service';

@Component({
  selector: 'app-consultar-informacion',
  templateUrl: './consultar-informacion.component.html',
  styleUrls: ['./consultar-informacion.component.css']
})
export class ConsultarInformacionComponent implements OnInit {
  cedulaForm = this.fb.group({
    cedula: ['', [Validators.required]]
  });

  public empleado: Empleado = {};
  public isLoading: boolean = false;
  public hayEmpleados: boolean = true;

  constructor(private fb: FormBuilder, private httpEmpleado: HttpEmpleadoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    const cedula: number = this.cedulaForm.get('cedula')?.value;

    const params = {
      cedula: cedula
    }

    this.httpEmpleado.getEmpleado(cedula).subscribe(
      (empleado) => {
        this.isLoading = false;
        this.empleado = empleado;

      },
      (error) => {
        this.hayEmpleados = false;
        this.isLoading = false;
        console.log(error);
      }
    );
  }

}