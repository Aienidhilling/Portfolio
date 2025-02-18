import {Component, HostListener} from '@angular/core';
import { AnimatedArrowsButtonComponent } from '../animated-arrow/animated-arrow.component';
import {ToolsService} from '../../services/tools.service';


@Component({
  selector: 'app-home',
  imports: [AnimatedArrowsButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private toolsService:ToolsService) {
  }

  scrollTo(route: string) {
    this.toolsService.scrollTo(route);
  }

  @HostListener('window:scroll',[])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const arrow = document.getElementById('arrow');
    if (arrow) {
      arrow.style.opacity = scrollPosition > 50 ? '0' : '1';
      arrow.style.transition ='opacity 0.4s ease-out';
    }
  }


}
