import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciologueadoPage } from './iniciologueado.page';

const routes: Routes = [
  {
    path: '',
    component: IniciologueadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciologueadoPageRoutingModule {}
