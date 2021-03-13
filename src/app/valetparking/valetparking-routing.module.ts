import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValetparkingPage } from './valetparking.page';

const routes: Routes = [
  {
    path: '',
    component: ValetparkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValetparkingPageRoutingModule {}
