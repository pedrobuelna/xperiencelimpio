import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarsesionreservacionPage } from './iniciarsesionreservacion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionreservacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarsesionreservacionPageRoutingModule {}
