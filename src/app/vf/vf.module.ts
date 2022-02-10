import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VfPageRoutingModule } from './vf-routing.module';

import { VfPage } from './vf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VfPageRoutingModule
  ],
  declarations: [VfPage]
})
export class VfPageModule {}
