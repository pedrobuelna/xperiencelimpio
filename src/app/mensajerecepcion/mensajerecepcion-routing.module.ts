import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajerecepcionPage } from './mensajerecepcion.page';

const routes: Routes = [
  {
    path: '',
    component: MensajerecepcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajerecepcionPageRoutingModule {}
