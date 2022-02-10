import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminacionPage } from './terminacion.page';

const routes: Routes = [
  {
    path: '',
    component: TerminacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminacionPageRoutingModule {}
