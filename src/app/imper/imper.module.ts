import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImperPageRoutingModule } from './imper-routing.module';

import { ImperPage } from './imper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImperPageRoutingModule
  ],
  declarations: [ImperPage]
})
export class ImperPageModule {}
