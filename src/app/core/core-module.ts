import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { Auth } from './services/auth/auth';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideFirebaseApp(()=>initializeApp(environment.Firebase_app)),
    provideAuth(()=>getAuth()),
    Auth
  ]
})
export class CoreModule { }
