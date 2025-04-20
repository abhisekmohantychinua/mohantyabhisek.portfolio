import {inject, Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {isValidTheme, Theme} from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storage = inject(StorageService);

  init() {
    let theme = this.storage.getItem<Theme>('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (!isValidTheme(theme)) {
      theme = 'dark';
    }
    this.loadTheme(theme);
  }

  setTheme(theme: Theme) {
    this.storage.setItem('theme', theme);
    this.loadTheme(theme);
  }

  private loadTheme(theme: Theme) {
    const link = document.createElement('link');
    link.id = 'theme-link';
    link.rel = 'stylesheet';
    link.href = `themes/${theme}/${theme}.css`;

    document.getElementById('theme-link')?.remove();
    document.head.appendChild(link);

    link.onload = () => {
      console.log('Theme loaded:', theme);
    };
    link.onerror = () => {
      console.error('Failed to load theme:', link.href);
    };
  }
}
