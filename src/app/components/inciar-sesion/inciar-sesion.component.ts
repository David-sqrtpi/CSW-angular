import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  }
  )

  constructor(private fb: FormBuilder, private httpinicion: InicioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const inicioSesion = this.inicioSesion.value;

    this.httpinicion.inicio(inicioSesion).subscribe(
      (respuesta: any) => {
        switch (respuesta) {
          case -1:
            alert("Correo o contraseña invalidos");
            break;

          case 1:
            this.router.navigate(['/crear-cuenta'])
            break;

          case 2:
            this.router.navigate(['/insertar-empleado'])
            break;

          case 3:
            this.router.navigate(['/consultar'])
            break;

          default:
            break;
        }
      },
      (error: any) => {
        console.log(error);
        alert("Error en el servidor")
      }
    );
  }
}

