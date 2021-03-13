import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenulogueadoPage } from './menulogueado.page';

const routes: Routes = [
  {
    path: '',
    component: MenulogueadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenulogueadoPageRoutingModule {}
