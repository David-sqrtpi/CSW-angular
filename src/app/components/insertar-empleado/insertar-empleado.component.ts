import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  public onSubmit(): void {
    console.log('Hola, formulario');
    console.log(this.empleadoForm.get('name')?.value);
    console.log(this.empleadoForm.get('cedula')?.value);
    console.log(this.empleadoForm.get('gender')?.value);
  }

  ngOnInit(): void {
  }

}
