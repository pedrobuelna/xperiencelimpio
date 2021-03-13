import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoroomservicePage } from './listadoroomservice.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoroomservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoroomservicePageRoutingModule {}
