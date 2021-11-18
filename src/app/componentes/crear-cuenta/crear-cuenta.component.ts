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

  public isLoading: boolean = false;
  public nuevacuenta: boolean = true;

  public cuenta: Cuenta = {};

  constructor(private fb: FormBuilder, private httpcuenta: HttpCuentasService) {

  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.isLoading = true;

    console.log("esta funcionando");

    this.cuenta = this.formularioCuenta.value;

    console.log(this.cuenta);

    this.httpcuenta.crearCuenta(this.cuenta).subscribe(

      (cuenta) => {
        this.isLoading = false;
        this.nuevacuenta = true;
        this.cuenta = cuenta;
      },
      (error) => {
        this.nuevacuenta = false;
        this.isLoading = false;
        console.log(error);
      }
    );




  }
}
