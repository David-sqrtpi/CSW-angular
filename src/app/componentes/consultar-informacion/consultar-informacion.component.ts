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

  public empleados: Empleado[] = [];
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

    this.httpEmpleado.getEmpleados(cedula).subscribe(
      (empleados) => {
        this.isLoading = false;
        this.empleados = empleados;

        this.hayEmpleados = empleados.length > 0;

      },
      (error) => {
        this.hayEmpleados = false;
        this.isLoading = false;
        console.log(error);
      }
    );
  }

}
