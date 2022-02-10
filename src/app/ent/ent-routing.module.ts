import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntPage } from './ent.page';

const routes: Routes = [
  {
    path: '',
    component: EntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntPageRoutingModule {}
