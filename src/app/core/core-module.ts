import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { Auth } from './services/auth/auth';
import { Toast } from './services/toast/toast';
import{provideFirestore, getFirestore} from '@angular/fire/firestore'
import { Query } from './services/query/query';
import { File } from './services/file/file';
import { Capacitor } from '@capacitor/core';
import { Uploader } from './services/uploader/uploader';
import { Loading } from './services/loading/loading';
import { Preferences } from './services/preferences/preferences';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideFirebaseApp(()=>initializeApp(environment.Firebase_app)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    Auth, Toast, Query, File, Uploader, Loading, Preferences
  ]
})
export class CoreModule implements OnInit {
  constructor(private readonly fileSrv : File){
    this.ngOnInit();
  }

  async ngOnInit() {
    if(Capacitor.isNativePlatform()){
    await this.fileSrv.requestPermissions();
    }
  }
}
