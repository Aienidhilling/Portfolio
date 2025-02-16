import {Component, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {CommonModule, NgClass} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
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
    MatButton,
    MatIcon,
    MatIconButton,
    MatSidenav,
    MatSidenavContainer,
    NgClass,
  ],
  templateUrl: './custom-nav.component.html',
  styleUrl: './custom-nav.component.scss'
})
export class CustomNavComponent {

  constructor(private themeService: ThemeService,private toolsService:ToolsService) {
  }

  isClosed=true ;

  menuItems = signal<MenuItem[]>([
    {
      label:'Home',
      route:'home',
    },
    {
      label:'Skills',
      route:'skills',
    },
    {
      label:'Projects',
      route:'projects',
    },
    {
      label:'Experiences',
      route:'experiences',
    },
    {
      label:'Contact',
      route:'contact',
    }
  ]);

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  scrollTo(route: string) {
    this.toolsService.scrollTo(route);
  }
}
