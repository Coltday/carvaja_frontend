import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public clienteService: ClienteService,

  ) { }

  ngOnInit(): void {
    this.clienteForm=this.fb.group({
    id : ['', Validators.required],
		nombre : ['', Validators.required],
		contraseña : ['', Validators.required],
    });;


  }

  guardar():void{
    // this.tarjetasService.saveTarjeta(this.tarjetasForm.value).subscribe(resp=>{
  
    // },
    // error=> {console.error()}
    
    // )

}
}
