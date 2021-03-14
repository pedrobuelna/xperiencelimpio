import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoprivacidadPage } from './avisoprivacidad.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoprivacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoprivacidadPageRoutingModule {}
