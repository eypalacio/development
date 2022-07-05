import { Component, OnInit } from '@angular/core';
import {Toast, ToastrService} from 'ngx-toastr';
import { Agenda } from '../models/agenda';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private api: ApiService, private toast: ToastrService) { }




  menu: any[] = [
    {
      active: true,
      nombre: 'Inicio',
      icono: 'bi bi-house'
    },
    {
      active: false,
      nombre: 'Usuario',
      icono: 'bi bi-person'
    },
    {
      active: false,
      nombre: 'Secretos',
      icono: 'bi bi-file-earmark-text'
    },
    {
      active: false,
      nombre: 'Limitados',
      icono: 'bi bi-file-earmark-richtext'
    },
    {
      active: false,
      nombre: 'Personal',
      icono: 'bi bi-file-earmark-zip'
    },
    {
      active: false,
      nombre: 'Ajustes',
      icono: 'bi bi-gear'
    },
  ]

  menus: any[] = [
    {
      active: true,
      nombre: 'Inicio',
      icono: 'bi bi-house'
    },
    {
      active: false,
      nombre: 'Usuario',
      icono: 'bi bi-person'
    },
    {
      active: false,
      nombre: 'Secretos',
      icono: 'bi bi-file-earmark-text'
    },
    {
      active: false,
      nombre: 'Limitados',
      icono: 'bi bi-file-earmark-richtext'
    },
    {
      active: false,
      nombre: 'Personal',
      icono: 'bi bi-file-earmark-zip'
    },
    {
      active: false,
      nombre: 'Ajustes',
      icono: 'bi bi-gear'
    },
  ]

  search: string = '';



  ngOnInit(): void {
  }

  toggleSidebar() {
    document.querySelector('.sidebar')?.classList.toggle('active');
    document.querySelector('.content')?.classList.toggle('active');
  }

  changePage(target: any) {
    this.menu = this.menu.filter((e) => {
      if (e.active) {
        e.active = !e.active;
      }
      return true;
    });
    target.active = true;
  }

  filterMenu() {
    this.menu = this.menus.filter((e) => e.nombre.toLowerCase().includes(this.search.toLowerCase()))
  }





}
