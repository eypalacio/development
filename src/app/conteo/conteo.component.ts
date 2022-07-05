import { Component, OnInit, ViewChild } from '@angular/core';

import { Mensaje } from '../models/mensaje.model';
import { ApiService } from '../services/api.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

import { MatPaginatorIntl } from "@angular/material/paginator";
import * as moment from 'moment';


@Component({
  selector: 'app-conteo',
  templateUrl: './conteo.component.html',
  styleUrls: ['./conteo.component.css']
})
export class ConteoComponent implements OnInit {

  displayedColumns: string[] = ['tipoM', 'totalRecibido', 'ftAutorizadas', 'ftINAU', 'remesasAceptadas', 'totalOpe', 'fecha', 'hora']
  dataSource = new MatTableDataSource<Mensaje>([])
  // clickedRows = new Set<Mensaje>();
  tipoMensajeList: number[] = [102, 103, 104, 190, 206, 299, 900, 910];
  tipoMsje = -1
  value = ''
  mensaje: Mensaje[] = []
  hora: any = ''
  ejecutando: boolean = false;
  horaActual = new Date()
  mostrar_pag: boolean = false
  horas: any[] = []
  min: number = 0
  fecha: any;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private api: ApiService, private paginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
    this.paginatorIntl.itemsPerPageLabel = "Registros"
    this.paginatorIntl.firstPageLabel = "Primera Página"
    this.paginatorIntl.previousPageLabel = "Anterior"
    this.paginatorIntl.nextPageLabel = "Siguiente"
    this.paginatorIntl.lastPageLabel = "Última Página"
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadMensaje();
    setInterval(() => {
      if ((this.fecha == '1970/1/1' || this.fecha == 'NaN/0NaN/NaN' || this.fecha == 'Invalid date') && this.tipoMsje == -1 && this.hora == '') {
        this.loadMensaje();
      } else {
        this.search();
      }
    }, 6000)

    this.selectHoras();

    setInterval(() => {
      this.horaActual = new Date();
    }, 1000)
  }

  selectHoras() {
    console.log('fecha', this.fecha)
    let date: string = moment(this.fecha).format('YYYY/MM/DD')
    this.api.selectHoras(date).subscribe((result) => {
      console.log(result);
      console.log(date);

      this.horas = result;
    })
  }

  loadMensaje() {
    this.ejecutando = true;
    let prov: number[] = [];
    this.api.getConteo().subscribe((result) => {
      this.mensaje = result.filter((sms) => {
        if (prov.indexOf(sms.tipoM) == -1) {
          prov.push(sms.tipoM);
          return sms;
        } else {
          return;
        }
      });
      this.dataSource = new MatTableDataSource(this.mensaje);
      this.mostrar_pag = false;
      this.ejecutando = false;
      this.selectHoras();
      console.log(result);

    })
  }

  search() {
    let date: string = ''
    let yyyy = new Date(this.fecha).getFullYear() + '/';
    let mm = new Date(this.fecha).getMonth() + 1 + '/';
    let dd = new Date(this.fecha).getDate();

    if (mm.length < 10) {
      yyyy = new Date(this.fecha).getFullYear() + '/0';
    }
    if (dd < 10) {
      mm = new Date(this.fecha).getMonth() + 1 + '/0';
    }

    date = yyyy + mm + dd
    // console.log(date);
    // console.log(this.tipoMsje);
    console.log(this.fecha);



    if ((date == '1970/1/1' || date == 'NaN/0NaN/NaN') && this.tipoMsje == -1 && this.hora == '') {
      this.loadMensaje();
    } else {
      console.log(this.hora);

      this.api.buscarMensaje(this.tipoMsje, date, this.hora).subscribe((result) => {
        this.mensaje = result;
        this.dataSource = new MatTableDataSource(result);
        this.mostrar_pag = true;
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  execETL() {
    this.ejecutando = true;
    this.api.execETL().subscribe((result) => {
      this.loadMensaje();
    })
  }



}
