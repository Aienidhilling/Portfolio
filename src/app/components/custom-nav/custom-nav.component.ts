import {Component, ElementRef, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {CommonModule, NgClass} from '@angular/common';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {ThemeService} from '../../services/theme.service';
import {ToolsService} from '../../services/tools.service';



export type MenuItem = {
  label: string;
  route: any ;
}

@Component({
  selector: 'app-custom-nav',
  imports: [
    CommonModule,
    MatListModule,
    MatIcon,
    MatIconButton,
    MatSidenav,
    MatSidenavContainer,
    NgClass,
    MatAnchor,
  ],
  templateUrl: './custom-nav.component.html',
  styleUrl: './custom-nav.component.scss'
})
export class CustomNavComponent {

  constructor(private themeService: ThemeService,private toolsService:ToolsService,private el: ElementRef) {
  }

  isClosed=true ;

  otherLang = $localize`:@@lang:en-US` == "en-US" ? "fr" : "en-US"  ;


  menuItems = signal<MenuItem[]>([
    {
      label: $localize`:@@home:Home`,
      route:'home',
    },
    {
      label:$localize`:@@skills:Skills`,
      route:'skills',
    },
    {
      label:$localize`:@@projects:Projects`,
      route:'projects',
    },
    {
      label:$localize`:@@experiences:Experiences`,
      route:'experiences',
    },
    {
      label:$localize`:@@contact:Contact`,
      route:'contact',
    }
  ]);

  toggleNavBar() {
    const host = this.el.nativeElement;

    if (!this.isClosed) {
      host.style.backdropFilter = 'blur(15px)';
    } else {
      host.style.backdropFilter = 'none';
    }
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  scrollTo(route: string) {
    this.toolsService.scrollTo(route);
  }

}
