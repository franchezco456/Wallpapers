import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from 'src/app/shared/shared-module';
import { CoreModule } from 'src/app/core/core-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CoreModule

  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
