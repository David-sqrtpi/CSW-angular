import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarInformacionComponent } from './componentes/consultar-informacion/consultar-informacion.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { ModificarEmpleadoComponent } from './componentes/modificar-empleado/modificar-empleado.component';

const routes: Routes = [
  { path: 'insertar-empleado', component: InsertarEmpleadoComponent },
  { path: 'consultar', component: ConsultarInformacionComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent },
  { path: 'modificar-empleado', component: ModificarEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
