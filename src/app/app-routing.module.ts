import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarInformacionComponent } from './componentes/consultar-informacion/consultar-informacion.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { InciarSesionComponent } from './components/inciar-sesion/inciar-sesion.component';

const routes: Routes = [
  { path: 'login', component: InciarSesionComponent },
  { path: 'insertar-empleado', component: InsertarEmpleadoComponent },
  { path: 'consultar', component: ConsultarInformacionComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
