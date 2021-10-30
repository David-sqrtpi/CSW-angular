import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-inciar-sesion',
  templateUrl: './inciar-sesion.component.html',
  styleUrls: ['./inciar-sesion.component.css']
})
export class InciarSesionComponent implements OnInit {
  inicioSesion = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    key: ["", Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("envio de formulario")
  }

}
