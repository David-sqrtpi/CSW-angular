import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InciarSesionComponent } from './components/inciar-sesion/inciar-sesion.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { ConsultarInformacionComponent } from './componentes/consultar-informacion/consultar-informacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InciarSesionComponent,
    CrearCuentaComponent,
    InsertarEmpleadoComponent,
    ConsultarInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
