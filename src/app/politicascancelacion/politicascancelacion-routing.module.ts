import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticascancelacionPage } from './politicascancelacion.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticascancelacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticascancelacionPageRoutingModule {}
