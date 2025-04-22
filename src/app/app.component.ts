import {Component, HostListener, inject, OnInit} from '@angular/core';
import {HeroComponent} from './features/hero/hero.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {AboutMeComponent} from './features/about-me/about-me.component';
import {PhilosophyComponent} from './features/philosophy/philosophy.component';
import {CtaComponent} from './features/cta/cta.component';
import {FooterComponent} from './components/footer/footer.component';
import {TechStackComponent} from './features/tech-stack/tech-stack.component';
import {ActionService} from './core/services/action.service';
import {CaseStudiesComponent} from './features/case-studies/case-studies.component';
import {StorageService} from './core/services/storage.service';
import {ThemeService} from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NavbarComponent, ProjectsComponent, AboutMeComponent, PhilosophyComponent, CtaComponent, FooterComponent, TechStackComponent, CaseStudiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  private action: ActionService = inject(ActionService);
  private storage: StorageService = inject(StorageService);
  private theme: ThemeService = inject(ThemeService);

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'r' &&
        !(event.target instanceof HTMLInputElement) &&
        !(event.target instanceof HTMLTextAreaElement)) {
      this.action.redirectTo('AbhisekMohanty.pdf');
    }
  }

  ngOnInit(): void {
    this.theme.init();
  }

}
