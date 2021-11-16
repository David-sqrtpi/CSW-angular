import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarInformacionComponent } from './componentes/consultar-informacion/consultar-informacion.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';

const routes: Routes = [
  { path: 'insertar-empleado', component: InsertarEmpleadoComponent },
  { path: 'consultar', component: ConsultarInformacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
