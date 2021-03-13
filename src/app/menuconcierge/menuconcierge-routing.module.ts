import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuconciergePage } from './menuconcierge.page';

const routes: Routes = [
  {
    path: '',
    component: MenuconciergePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuconciergePageRoutingModule {}
