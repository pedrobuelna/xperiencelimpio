import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminostxtPage } from './terminostxt.page';

const routes: Routes = [
  {
    path: '',
    component: TerminostxtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminostxtPageRoutingModule {}
