import {Component, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';


export type MenuItem = {
  label: string;
  route: any ;
}

@Component({
  selector: 'app-custom-nav',
  imports: [CommonModule, MatListModule],
  templateUrl: './custom-nav.component.html',
  styleUrl: './custom-nav.component.scss'
})
export class CustomNavComponent {
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
}
