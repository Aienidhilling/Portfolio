import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomNavComponent} from './components/custom-nav/custom-nav.component';
import {HomeComponent} from './components/home/home.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';
import {ContactComponent} from './components/contact/contact.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperiencesComponent,
    ContactComponent,
    CustomNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'Portfolio';

}
