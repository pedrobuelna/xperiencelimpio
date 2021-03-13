import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajegerentePage } from './mensajegerente.page';

const routes: Routes = [
  {
    path: '',
    component: MensajegerentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajegerentePageRoutingModule {}
