import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;
  private document = inject(DOCUMENT);

  toggleTheme():void{
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme():void{
    this.document.body.classList.toggle('dark');
  }
}
