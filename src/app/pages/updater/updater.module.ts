import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdaterPageRoutingModule } from './updater-routing.module';

import { UpdaterPage } from './updater.page';
import { SharedModule } from 'src/app/shared/shared-module';
import { CoreModule } from 'src/app/core/core-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdaterPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  declarations: [UpdaterPage]
})
export class UpdaterPageModule {}
