import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosreservacionPage } from './datosreservacion.page';

const routes: Routes = [
  {
    path: '',
    component: DatosreservacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosreservacionPageRoutingModule {}
