import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Pais } from '../models/pais.model';
import { DataCatalogo } from '../models/dataCatalogo.model';
import { Libro } from '../models/libro.model';
import { Autor } from '../models/autor.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  listaLibro():Observable<Libro[]>{
    return this.http.get<Libro[]>(baseUrlUtil+"/listaLibro");
  }

  listaAutor():Observable<Autor[]>{
    return this.http.get<Autor[]>(baseUrlUtil+"/listaAutor");
  }



  listaPais():Observable<Pais[]>{
    return this.http.get<Pais[]>(baseUrlUtil+"/listaPais");
  }


  listaCategoriaDeLibro():Observable<DataCatalogo[]>{
    return this.http.get<DataCatalogo[]>(baseUrlUtil+"/listaCategoriaDeLibro");
  }


  listaGradoAutor():Observable<DataCatalogo[]>{
    return this.http.get<DataCatalogo[]>(baseUrlUtil+"/listaGradoAutor");
  }

  listaTipoLibroRevista():Observable<DataCatalogo[]>{
    return this.http.get<DataCatalogo[]>(baseUrlUtil+"/listaTipoLibroRevista");
  }


  listaSede():Observable<DataCatalogo[]>{
    return this.http.get<DataCatalogo[]>(baseUrlUtil+"/listaSede");
  }

}


