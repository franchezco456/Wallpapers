import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionSheet {
  constructor(private actionSheetCtrl : ActionSheetController){}
   async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Set as home screen',
          data: {
            action: 'home',
          },
        },
        {
          text: 'Set as lock screen',
          data: {
            action: 'lock',
          },
        },
        {
          text: 'Cancel',
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

