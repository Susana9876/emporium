import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrcPageRoutingModule } from './prc-routing.module';

import { PrcPage } from './prc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrcPageRoutingModule
  ],
  declarations: [PrcPage]
})
export class PrcPageModule {}
