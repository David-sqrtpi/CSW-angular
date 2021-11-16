import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  { path: 'insertar-empleado', component: InsertarEmpleadoComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
