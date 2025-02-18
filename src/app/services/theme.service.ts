import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);

  private isDarkTheme: boolean = false;

  constructor() {
    this.detectBrowserTheme();
  }

  detectBrowserTheme() {
    this.isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme();
  }


  toggleTheme():void{
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme():void{
    if (this.isDarkTheme){
      this.document.body.classList.add('dark');
    }else {
      this.document.body.classList.remove('dark');
    }
  }
}
