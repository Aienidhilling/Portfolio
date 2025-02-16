import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private document = inject(DOCUMENT);

  scrollTo(route:string){
    const navbarHeight = this.document.querySelector('app-custom-nav')?.clientHeight || 0;
    const targetElement = this.document.getElementById(route);

    if (targetElement){
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }

}
