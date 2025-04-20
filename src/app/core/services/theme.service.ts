import {inject, Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storage = inject(StorageService);
  private static readonly THEMES = ['light', 'dark'];

  init() {
    let theme = this.storage.getItem<string>('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (!ThemeService.THEMES.includes(theme)) {
      theme = 'dark';
    }
    const link = document.createElement('link');
    link.id = 'theme-link';
    link.rel = 'stylesheet';
    link.href = `themes/${theme}.css`;
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
