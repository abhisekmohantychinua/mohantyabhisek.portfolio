import {Component} from '@angular/core';
import {HeroComponent} from './features/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
