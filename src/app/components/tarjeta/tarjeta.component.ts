import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TarjetasService } from 'src/app/services/tarjetascredito/tarjetas.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  tarjetaForm:FormGroup;
  clientes: any;
  tarjetas: any;
  
  constructor(
    public fb: FormBuilder,
    public tarjetasService: TarjetasService,
    public clienteService: ClienteService,

  ) { }

  ngOnInit(): void {
    this.tarjetaForm=this.fb.group({
      numero : ['', Validators.required],
      cliente : ['', Validators.required],
      anho : ['', Validators.required],
      mes : ['', Validators.required],
      codigo : ['', Validators.required],
  });;
 
  this.clienteService.getAllCliente().subscribe(resp => {
    this.clientes=resp;
  });

    

}
guardar():void{
this.tarjetasService.saveTarjeta(this.tarjetaForm.value).subscribe(resp=>{

  },
  error=>{console.error(error)} )
}}

  

//  this.tarjetaForm.reset();
//  this.tarjetas=this.tarjetas.filter(tarjeta=> resp.numero!==this.tarjetas.numero);
//   this.tarjetas.push(resp);

