import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuquickfitPage } from './menuquickfit.page';

const routes: Routes = [
  {
    path: '',
    component: MenuquickfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuquickfitPageRoutingModule {}
