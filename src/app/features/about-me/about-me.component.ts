import {Component, inject} from '@angular/core';
import {TitleComponent} from '../../components/title/title.component';
import {NgOptimizedImage} from '@angular/common';
import {StorageService} from '../../core/services/storage.service';

@Component({
  selector: 'app-about-me',
  imports: [
    TitleComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  private storage: StorageService = inject(StorageService);
  aboutme = this.storage.aboutme;
}
