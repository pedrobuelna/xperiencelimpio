import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarsesioncodigoPage } from './iniciarsesioncodigo.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesioncodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarsesioncodigoPageRoutingModule {}
