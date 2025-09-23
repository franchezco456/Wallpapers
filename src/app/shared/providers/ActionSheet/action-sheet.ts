import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionSheet {
  constructor(private actionSheetCtrl : ActionSheetController){}
   async presentActionSheet() {
    const lang = localStorage.getItem('lang') || 'en';

    let textHome: string;
    let textLock: string;
    let textCancel: string;

    if (lang === 'es') {
      textHome = 'Usar como fondo de inicio';
      textLock = 'Usar como fondo de bloqueo';
      textCancel = 'Cancelar';
    } else {
      textHome = 'Set as home screen';
      textLock = 'Set as lock screen';
      textCancel = 'Cancel';
    }
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: textHome,
          data: {
            action: 'home',
          },
        },
        {
          text: textLock,
          data: {
            action: 'lock',
          },
        },
        {
          text: textCancel,
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    return await actionSheet.onDidDismiss();
  }
}

