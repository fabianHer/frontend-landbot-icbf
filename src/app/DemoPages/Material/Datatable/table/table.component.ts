import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ReportesService } from '../../../../services/reportes.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

import {MatDialog} from '@angular/material/dialog';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { format } from 'date-fns';


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
  nombre: string;
  correo: string;
  cliente: string;
  celular: string;
  telefono: string;
  extension: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: ['mat-form-field { margin-right: 12px;} table { width: 100%; } .mat-form-field { font-size: 14px; width: 100%;} td, th { width: 10%;}'
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

  registros: any = [];
  modalRef: BsModalRef;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date());

  displayedColumns: string[] = ['cantidad', 'nombre', 'correo', 'cliente', 'celular', 'extension', 'telefono'];
  dataSource: MatTableDataSource<UserData>;
  columnas: any = [
    { titulo: 'Cantidad', name: 'cantidad' },
    { titulo: 'Nombre', name: 'nombre' },
    { titulo: 'Correo', name: 'correo' },
    { titulo: 'Cliente', name: 'cliente' },
    { titulo: 'Celular', name: 'celular' },
    { titulo: 'Extensión', name: 'extension'},
    { titulo: 'Teléfono', name: 'telefono' }
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  heading = 'Material Tables';
  subheading = 'This component provides a Material Design styled data-table that can be used to display rows of data.';
  icon = 'pe-7s-light icon-gradient bg-malibu-beach';

  constructor( private modalService: BsModalService, public dialog: MatDialog, private reportes: ReportesService, private adapter: DateAdapter<any>, private route: Router) {
  }
  french(event: any) {
    console.log(this.serializedDate.value);
    console.log(this.date.value);

    this.adapter.setLocale('fr');
  }
  ngOnInit() {
    console.log('Vamos por el reporte');
    this.reporteUsuario();
  }
  reporteUsuario() {
    return this.reportes.consultarReporte().subscribe((respuesta) => {
    this.dataSource = new MatTableDataSource(respuesta.landbotDB);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    }, (err) => {
      if (err.status === 401) {
        this.route.navigateByUrl('/pages/login');
  }
});
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalRetiro(templateRetiro: TemplateRef<any>, cuenta: any ) {
    this.traerRegistrosUsuario(cuenta);
    this.modalRef = this.modalService.show(templateRetiro);
    this.modalRef.setClass('modal-xl');
  }
  traerRegistrosUsuario(cuenta) {
    const fecha1 = format(new Date(this.date.value), 'yyy-MM-dd HH:mm:ss');
    const fecha2 = moment(this.serializedDate.value).format('YYYY-MM-DD HH:mm:ss');
    console.log(fecha1);
    console.log(fecha2);

    this.reportes.registrosUsuario(cuenta.correo, fecha1, fecha2).subscribe(respuesta => {
      this.registros = respuesta.detalleLandBotDB;
    });
  }
  closeRetiro(): void {
    this.modalRef.hide();
  }
}


