import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';

const routes: Routes = [
  { path: 'heroes', component: InsertarEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
