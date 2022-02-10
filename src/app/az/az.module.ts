import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AzPageRoutingModule } from './az-routing.module';

import { AzPage } from './az.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AzPageRoutingModule
  ],
  declarations: [AzPage]
})
export class AzPageModule {}
