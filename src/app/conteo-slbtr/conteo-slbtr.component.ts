import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Mensaje } from '../models/mensaje.model';
import { Slbtr } from '../models/slbtr.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-conteo-slbtr',
  templateUrl: './conteo-slbtr.component.html',
  styleUrls: ['./conteo-slbtr.component.css']
})
export class ConteoSlbtrComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'hora',
    'fecha',
    'mt_102', 'transf_102',
    'mt_103',
    'mt_104', 'transf_104',
    'mt_190',
    'mt_206', 'transf_206',
    'mt_299',
    'mt_900',
    'mt_910',
    'mt_950',
  ];
  displayedColumnsFooter: string[] = [
    'hora',
    'fecha',
    'mt_102', 'transf_102',
    'mt_103',
    'mt_104', 'transf_104',
    'mt_190',
    'mt_206', 'transf_206',
    'mt_299',
    'mt_900',
    'mt_910',
    'mt_950',
  ];
  fecha: any;
  hora: any;
  mostrar_pag: boolean = false;
  ejecutando: boolean = false;
  mensaje: any[] = []
  conteoSLBTR: any = {
    fecha: '',
    mt_102: -1,
    mt_103: -1,
    mt_104: -1,
    mt_190: -1,
    mt_206: -1,
    mt_299: -1,
    mt_900: -1,
    mt_910: -1,
    mt_950: -1,
    transf_102: -1,
    transf_104: -1,
    transf_206: -1,
  };
  refrescar: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private api: ApiService, private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.itemsPerPageLabel = "Registros"
    this.paginatorIntl.firstPageLabel = "Primera Página"
    this.paginatorIntl.previousPageLabel = "Anterior"
    this.paginatorIntl.nextPageLabel = "Siguiente"
    this.paginatorIntl.lastPageLabel = "Última Página"
  }

  ngOnInit(): void {
    this.loadMensajes();
    this.loadconteoSLBTR();
  }

  loadMensajes() {
    this.ejecutando = true;
    this.api.getMensajeSLBTR().subscribe((result) => {
      console.log(result);
      // this.mensaje = result;
      // this.dataSource = new MatTableDataSource(result);
      // this.loadconteoSLBTR()
      this.convertirFechaHora(result);
      this.refrescar = false
    })
  }

  convertirFechaHora(result: any[]) {
    this.mensaje = [];
    result.forEach(e => {
      let sms = e;
      sms.date = moment.utc(e.fecha,'YYYY-MM-DD').format('DD/MM/YYYY')
      sms.hour = moment.utc(e.hora).format('HH:mm:ss')
      this.mensaje.push(sms);
    });
    this.dataSource = new MatTableDataSource(this.mensaje);
  }


  loadconteoSLBTR() {
    this.api.getConteoSLBTR().subscribe((result) => {
      if (result != null) {
        this.conteoSLBTR = result;
        console.log(result, 'result');
      }
    })
  }

  reload() {
    this.refrescar = true;
    this.loadMensajes();
    this.loadconteoSLBTR();
  }

}
