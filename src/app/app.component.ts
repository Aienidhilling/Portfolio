import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
