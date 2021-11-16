import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InciarSesionComponent } from './components/inciar-sesion/inciar-sesion.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    InciarSesionComponent,
    CrearCuentaComponent,
    InsertarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
