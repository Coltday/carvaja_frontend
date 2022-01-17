import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/tarjeta/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
