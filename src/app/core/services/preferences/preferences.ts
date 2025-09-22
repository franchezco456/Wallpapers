import { Injectable } from '@angular/core';
import { Preferences as Pr } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class Preferences {
  public async setPreferences(key : string, value : string) {
    const preference = await Pr.set({
      key: key,
      value: value,
    });
  }

  public async checkpreferences(key : string ) {
    const preference = await Pr.get({ key: key });
  }

  public async removePreferences(key : string ) {
    const preference = await Pr.remove({ key: key });
  }
}
