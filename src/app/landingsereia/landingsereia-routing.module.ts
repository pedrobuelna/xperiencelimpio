import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingsereiaPage } from './landingsereia.page';

const routes: Routes = [
  {
    path: '',
    component: LandingsereiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingsereiaPageRoutingModule {}
