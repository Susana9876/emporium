import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HidPageRoutingModule } from './hid-routing.module';

import { HidPage } from './hid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HidPageRoutingModule
  ],
  declarations: [HidPage]
})
export class HidPageModule {}
