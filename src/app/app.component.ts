import {Component} from '@angular/core';
import {HeroComponent} from './features/hero/hero.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProjectsComponent} from './features/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NavbarComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
