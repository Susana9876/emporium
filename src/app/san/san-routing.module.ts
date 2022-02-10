import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanPage } from './san.page';

const routes: Routes = [
  {
    path: '',
    component: SanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanPageRoutingModule {}
