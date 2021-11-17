import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-inciar-sesion',
  templateUrl: './inciar-sesion.component.html',
  styleUrls: ['./inciar-sesion.component.css']
})
export class InciarSesionComponent implements OnInit {
  inicioSesion = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    contrasena: ["", Validators.required]
  })

  constructor(private fb: FormBuilder, private httpinicion: InicioService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("envio de formulario")
    this.inicioSesion = this.inicioSesion.value;

    console.log(this.inicioSesion);

    console.log(this.inicioSesion);

    this.httpinicion.inicio(this.inicioSesion).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        console.log("Hubo respuesta");
      },
      (error: any) => {
        console.log(error);
        console.log("Ocurrió un error");
      }

    );
  }
}

