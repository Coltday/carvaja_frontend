import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetasService} from './services/tarjetascredito/tarjetas.service';
import {ClienteService} from './services/cliente/cliente.service';
import { BancoService} from './services/banco/banco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  tarjetasForm: FormGroup;
  cliente: any;


  constructor(
    public fb: FormBuilder,
    public tarjetasService: TarjetasService,
    public clienteService: ClienteService,
    public bancoService: BancoService

  ){
  
  }

  ngOnInit(): void {




}


    }







