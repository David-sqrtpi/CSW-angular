import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarInformacionComponent } from './componentes/consultar-informacion/consultar-informacion.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  { path: 'insertar-empleado', component: InsertarEmpleadoComponent },
<<<<<<< HEAD
  { path: 'consultar', component: ConsultarInformacionComponent }
=======
  { path: 'crear-cuenta', component: CrearCuentaComponent }

>>>>>>> 6e66d7e0572a0478f557f326ba89cb254523439d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
