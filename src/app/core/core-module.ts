import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { Auth } from './services/auth/auth';
import { Toast } from './services/toast/toast';
import{provideFirestore, getFirestore} from '@angular/fire/firestore'
import { Query } from './services/query/query';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideFirebaseApp(()=>initializeApp(environment.Firebase_app)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    Auth, Toast, Query
  ]
})
export class CoreModule {}
