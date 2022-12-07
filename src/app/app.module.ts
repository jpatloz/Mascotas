import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ListaMascotasComponent } from './vistas/lista-mascotas/lista-mascotas.component';
import { DetalleMascotasComponent } from './vistas/detalle-mascotas/detalle-mascotas.component';
import { FormularioMascotasComponent } from './vistas/formulario-mascotas/formulario-mascotas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    DetalleMascotasComponent,
    FormularioMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
