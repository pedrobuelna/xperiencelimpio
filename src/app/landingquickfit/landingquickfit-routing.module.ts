import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingquickfitPage } from './landingquickfit.page';

const routes: Routes = [
  {
    path: '',
    component: LandingquickfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingquickfitPageRoutingModule {}
