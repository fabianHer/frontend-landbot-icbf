import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { ReportesService } from '../../../../services/reportes.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';


const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD',
    monthYearA11yLabel: 'YYYY',
  },
};

export interface UserData {
  cantidad: string;
  cliente: string;
  celular: string;
  telefono: string;
  extension: string;
  nombre: string;
  correo: string;
}
/** Constants used to fill up our data base. */
/*const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];*/
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ['mat-form-field { margin-right: 12px;} table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%;} td, th { width: 25%;}'
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class TableComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  displayedColumns: string[] = ['cantidad', 'cliente', 'celular', 'extension', 'telefono', 'nombre', 'correo'];
  dataSource: MatTableDataSource<UserData>;
  columnas = [
    { titulo: 'Cantidad', name: 'cantidad' },
    { titulo: 'Cliente', name: 'cliente' },
    { titulo: 'Celular', name: 'celular' },
    { titulo: 'Extension', name: 'extension' },
    { titulo: 'Telefono', name: 'telefono' },
    { titulo: 'Nombre', name: 'nombre' },
    { titulo: 'Correo', name: 'correo' },

  ]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  heading = 'Material Tables';
  subheading = 'This component provides a Material Design styled data-table that can be used to display rows of data.';
  icon = 'pe-7s-light icon-gradient bg-malibu-beach';

  constructor( private reportes: ReportesService, private adapter: DateAdapter<any>) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
  french() {
    this.adapter.setLocale('fr');
  }
  ngOnInit() {
    console.log('Vamos por el reporte');
    this.reporteUsuario();
  }
  reporteUsuario() {
    return this.reportes.consultarReporte().subscribe((respuesta) => {
    console.log(respuesta.landbotDB);
    const data: any = [{
        cantidad: 1,
        telefono: '1234567',
        nombre: 'fabian',
        correo: 'fabian@gmail.com'
      },
      {
          cantidad: 2,
          telefono: '90467384',
          nombre: 'yilber',
          correo: 'yilber@gmail.com'
      },
      {
        cantidad: 3,
        telefono: '34467384',
        nombre: 'ferer',
        correo: 'fefer@gmail.com'
    }];
    this.dataSource = new MatTableDataSource(respuesta.landbotDB);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}*/

