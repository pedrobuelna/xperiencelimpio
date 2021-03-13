import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarsesionencontrarreservacionPage } from './iniciarsesionencontrarreservacion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionencontrarreservacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarsesionencontrarreservacionPageRoutingModule {}
