import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Autor } from 'src/app/models/autor.model';
import { Libro } from 'src/app/models/libro.model';
import { AutorService } from 'src/app/services/autor.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaccion-asignacion-libro',
  templateUrl: './transaccion-asignacion-libro.component.html',
  styleUrls: ['./transaccion-asignacion-libro.component.css']
})
export class TransaccionAsignacionLibroComponent {

  lstLibro: Libro[] = [];
  lstAutor: Autor[] = [];
  lstAutorDeLibro: Autor[] = [];

  libro : string = "-1";
  autor : string = "-1";


  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idAutor","nombre",'actions'];

  constructor(private utilService: UtilService, private autorService: AutorService){
        this.utilService.listaLibro().subscribe(
            x   =>   this.lstLibro =x
        );
        this.utilService.listaAutor().subscribe(
            x   =>   this.lstAutor=x
        );
  }


  cargaAutor(){
    this.autorService.listaAutorDeLibro(this.libro).subscribe(
          x   => {
                this.lstAutorDeLibro =x
                this.dataSource = new MatTableDataSource(this.lstAutorDeLibro);
                this.dataSource.paginator = this.paginator 
          } 
    );
  }

  registraAutor(){
      console.log(">> registraAutor >>> ");
      console.log(">> this.libro >>> " + this.libro );
      console.log(">> this.autor >>> " + this.autor );
      this.autorService.registraAutor(this.libro, this.autor).subscribe(
          x => {
            Swal.fire({ title: "Mensaje", text: x.mensaje, icon: "info" });
            this.lstAutorDeLibro = x.lista
            this.dataSource = new MatTableDataSource(this.lstAutorDeLibro);
            this.dataSource.paginator = this.paginator 

          }
      );
  }

  eliminaAutor(obj:Autor){
    console.log(">> eliminaAutor >>> ");
    console.log(">> this.libro >>> " + this.libro );
    console.log(">> this.autor >>> " + this.autor );
    this.autorService.eliminaAutor(this.libro, obj.idAutor!).subscribe(
      x => {
        Swal.fire({ title: "Mensaje", text: x.mensaje, icon: "info" });
        this.lstAutorDeLibro = x.lista
        this.dataSource = new MatTableDataSource(this.lstAutorDeLibro);
        this.dataSource.paginator = this.paginator 

      }
  );
  }

}
