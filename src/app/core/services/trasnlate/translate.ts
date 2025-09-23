import { Component, inject, Injectable } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Translate {

  constructor(private readonly translateSrv: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    this.setLanguage(lang); 
  }

  setLanguage(lang: string) {
    this.translateSrv.use(lang);
    localStorage.setItem('lang', lang);
  }

}
