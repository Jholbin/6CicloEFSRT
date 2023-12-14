import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';

import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarAutorComponent } from './components/agregar-autor/agregar-autor.component';
import { AgregarRevistaComponent } from './components/agregar-revista/agregar-revista.component';

import { ConsultaLibroComponent } from './components/consulta-libro/consulta-libro.component';
import { ConsultaAutorComponent } from './components/consulta-autor/consulta-autor.component';
import { ConsultaRevistaComponent } from './components/consulta-revista/consulta-revista.component';

import { CrudLibroComponent } from './components/crud-libro/crud-libro.component';
import { CrudAutorComponent } from './components/crud-autor/crud-autor.component';
import { CrudRevistaComponent } from './components/crud-revista/crud-revista.component';

import { TransaccionAsignacionLibroComponent } from './components/transaccion-asignacion-libro/transaccion-asignacion-libro.component';


const routes: Routes = [
  {path:"verRegistroLibro", component:AgregarLibroComponent },
  {path:"verRegistroAutor", component:AgregarAutorComponent },
  {path:"verRegistroRevista", component:AgregarRevistaComponent },

  {path:"verConsultaLibro", component:ConsultaLibroComponent },
  {path:"verConsultaAutor", component:ConsultaAutorComponent },
  {path:"verConsultaRevista", component:ConsultaRevistaComponent },

  {path:"verCrudLibro", component:CrudLibroComponent },
  {path:"verCrudAutor", component:CrudAutorComponent },
  {path:"verCrudRevista", component:CrudRevistaComponent },
  {path:"VerAsignacionLibro", component:TransaccionAsignacionLibroComponent},

  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
