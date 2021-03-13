import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusereiaPage } from './menusereia.page';

const routes: Routes = [
  {
    path: '',
    component: MenusereiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusereiaPageRoutingModule {}
