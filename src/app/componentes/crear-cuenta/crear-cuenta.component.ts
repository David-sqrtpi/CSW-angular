import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formularioCuenta = this.fb.group({
    rol: ['', Validators.required],
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    clave: ['', Validators.required]
  })


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("esta funcionando");



  }
}
