import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Cuenta } from 'src/app/entidades/cuenta';
import { HttpCuentasService } from 'src/app/services/http-cuentas.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formularioCuenta = this.fb.group({
    idRol: ['', Validators.required],
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  });


  private cuenta: Cuenta = {};

  constructor(private fb: FormBuilder, private httpcuenta: HttpCuentasService) {

  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log("esta funcionando");

    this.cuenta = this.formularioCuenta.value;

    console.log(this.cuenta);

    this.httpcuenta.crearCuenta(this.cuenta).subscribe(

      (respuesta) => {
        console.log(respuesta);

        console.log("Hubo respuesta");
      },
      (error) => {
        console.log(error);
        console.log("Ocurrió un error");
      }
    );



  }
}
