import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomNavComponent} from './components/custom-nav/custom-nav.component';
import {NgClass} from '@angular/common';
import {ThemeService} from './services/theme.service';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomNavComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
  }

  title = 'Portfolio';
  isClosed=true ;

  toggleTheme(){
    this.themeService.toggleTheme();
  }

}
