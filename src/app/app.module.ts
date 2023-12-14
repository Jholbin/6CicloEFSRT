import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common'; // Importa DatePipe

import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarAutorComponent } from './components/agregar-autor/agregar-autor.component';

import { ConsultaLibroComponent } from './components/consulta-libro/consulta-libro.component';
import { ConsultaAutorComponent } from './components/consulta-autor/consulta-autor.component';

import { CrudLibroComponent } from './components/crud-libro/crud-libro.component';
import { CrudAutorComponent } from './components/crud-autor/crud-autor.component';

import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { AgregarRevistaComponent } from './components/agregar-revista/agregar-revista.component';
import { ConsultaRevistaComponent } from './components/consulta-revista/consulta-revista.component';
import { CrudRevistaComponent } from './components/crud-revista/crud-revista.component';

import { TransaccionAsignacionLibroComponent } from './components/transaccion-asignacion-libro/transaccion-asignacion-libro.component';

import { CrudLibroAddComponent } from './components/crud-libro-add/crud-libro-add.component';
import { CrudLibroUpdateComponent } from './components/crud-libro-update/crud-libro-update.component';

import { CrudAutorAddComponent } from './components/crud-autor-add/crud-autor-add.component';
import { CrudAutorUpdateComponent } from './components/crud-autor-update/crud-autor-update.component';

import { CrudRevistaUpdateComponent } from './components/crud-revista-update/crud-revista-update.component';
import { CrudRevistaAddComponent } from './components/crud-revista-add/crud-revista-add.component';

import { ModelLibroComponent } from './components/model-libro/model-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,

    AgregarLibroComponent,
    AgregarAutorComponent,
    AgregarRevistaComponent,

    ConsultaLibroComponent,
    ConsultaAutorComponent,
    ConsultaRevistaComponent,

    CrudLibroComponent,
    CrudAutorComponent,
    CrudRevistaComponent,
 

    CrudLibroAddComponent,
    CrudAutorAddComponent,
    CrudRevistaAddComponent,

    CrudLibroUpdateComponent,
    CrudAutorUpdateComponent,
    CrudRevistaUpdateComponent,

    TransaccionAsignacionLibroComponent,

    ModelLibroComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CommonModule,
    MatIconModule
  ],
	providers: [
	  DatePipe,
	  { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
