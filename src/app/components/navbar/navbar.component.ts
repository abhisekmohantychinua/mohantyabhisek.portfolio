import {Component, HostListener, inject, OnInit, signal} from '@angular/core';
import {RoundIconComponent} from '../round-icon/round-icon.component';
import {ThemeService} from '../../core/services/theme.service';
import {Theme} from '../../core/models/theme';

@Component({
  selector: 'app-navbar',
  imports: [
    RoundIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private theme: ThemeService = inject(ThemeService);
  isMenuHidden = signal(true);

  ngOnInit(): void {
    let innerWidth = window.innerWidth;
    this.isMenuHidden.set(innerWidth <= 480);
  }

  @HostListener('window:resize')
  onResize() {
    let innerWidth = window.innerWidth;
    this.isMenuHidden.set(innerWidth <= 480);
  }

  toggleMenu() {
    this.isMenuHidden.update(open => !open);
  }

  navLinkClick($event: MouseEvent, elId: string | null = null) {
    $event.preventDefault();
    if (elId) {
      const targetEl = document.getElementById(elId);
      targetEl?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  changeTheme(theme: Theme) {
    this.theme.setTheme(theme);
  }
}
