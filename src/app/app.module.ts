import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { TarjetasService } from './services/tarjetascredito/tarjetas.service';
import { HttpClientModule } from '@angular/common/http';

import { ClienteService } from './services/cliente/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ClienteComponent,
    LoginComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    
    
  ],
  providers: [
    TarjetasService,
    TarjetaComponent,
    ClienteService,
    ClienteComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
