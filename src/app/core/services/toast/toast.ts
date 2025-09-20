import { Injectable } from '@angular/core';
import { Toast as ToastNative } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class Toast {
  constructor() { }

  async show(text: string, duration: 'long' | 'short' = 'short') {
    await ToastNative.show({
      text,
      duration,
    });
  }

  async showError(text: string) {
    await ToastNative.show({
      text: `Error: ${text}`,
      duration: 'long',
    });
  }
}

