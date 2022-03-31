import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrcPage } from './prc.page';

const routes: Routes = [
  {
    path: '',
    component: PrcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrcPageRoutingModule {}
