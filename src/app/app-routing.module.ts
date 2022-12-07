import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './vistas/lista-mascotas/lista-mascotas.component';
import { FormularioMascotasComponent } from './vistas/formulario-mascotas/formulario-mascotas.component';

const routes: Routes = [
  {path: '', component: ListaMascotasComponent},
  {path: '/editMascota/:documentId', component: FormularioMascotasComponent},
  {path: 'crearMascota', component: FormularioMascotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
