import { Component, OnInit } from '@angular/core';

import { Repair } from '../models/repair.model';
import { ApiService } from '../services/api.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

import { MatPaginatorIntl } from "@angular/material/paginator";
import * as moment from 'moment';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  displayedColumns: string[] = [
    'select',
    'recid',
    'hora',
    'tipo',
    'error',
    'tipoEntrada',
    'referencia'
  ];
  tipo:number = -1;
  hora:any = ''

  dataSource = new MatTableDataSource<Repair>([])
  selection = new SelectionModel<Repair>(true, []);


  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.loadRepair()
  }

  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Repair): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  loadRepair(){
    this.api.getRepair().subscribe((result:any)=>{
      console.log(result);
      result.forEach((element:any) => {
      element.hora = moment.utc(element.actual_time).format('hh:mm:ss');   
      });
      this.dataSource = new MatTableDataSource(result);
    })
  }
  
seleccionados(id:number){
  console.log(this.selection.selected);
  
    this.api.setEstado(id).subscribe((result)=>{
      return;
    })
  
  
}
}
