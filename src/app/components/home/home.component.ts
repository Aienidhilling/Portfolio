import {Component, HostListener} from '@angular/core';
import { AnimatedArrowsButtonComponent } from '../animated-arrow/animated-arrow.component';


@Component({
  selector: 'app-home',
  imports: [AnimatedArrowsButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //TODO: find a way to not duplicate this function
  scrollTo(route: string) {
    const navbarHeight = document.querySelector('app-custom-nav')?.clientHeight || 0;
    const targetElement = document.getElementById(route);

    if (targetElement){
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll',[])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const arrow = document.getElementById('arrow');
    if (arrow) {
      arrow.style.opacity = scrollPosition > 50 ? '0' : '1';
      arrow.style.transition ='opacity 0.75s ease-in-out';
    }
  }


}
