import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Agenda } from '../models/agenda';
import { Usuario } from '../models/usuarios.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
  usuario: Usuario[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}


