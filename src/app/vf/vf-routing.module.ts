import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VfPage } from './vf.page';

const routes: Routes = [
  {
    path: '',
    component: VfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VfPageRoutingModule {}
