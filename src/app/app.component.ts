import {Component} from '@angular/core';
import {HeroComponent} from './features/hero/hero.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {AboutMeComponent} from './features/about-me/about-me.component';
import {PhilosophyComponent} from './features/philosophy/philosophy.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NavbarComponent, ProjectsComponent, AboutMeComponent, PhilosophyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
