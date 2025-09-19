import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdaterPageRoutingModule } from './updater-routing.module';

import { UpdaterPage } from './updater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdaterPageRoutingModule
  ],
  declarations: [UpdaterPage]
})
export class UpdaterPageModule {}
