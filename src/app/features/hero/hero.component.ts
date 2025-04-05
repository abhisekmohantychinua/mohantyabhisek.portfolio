import {Component, inject} from '@angular/core';
import {TypewriteComponent} from '../../components/typewrite/typewrite.component';
import {NgOptimizedImage} from '@angular/common';
import {CtaBtnComponent} from '../../components/cta-btn/cta-btn.component';
import {RoundIconComponent} from '../../components/round-icon/round-icon.component';
import {StorageService} from '../../core/services/storage.service';
import {ActionService} from '../../core/services/action.service';

@Component({
  selector: 'app-hero',
  imports: [
    TypewriteComponent,
    NgOptimizedImage,
    CtaBtnComponent,
    RoundIconComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private storage: StorageService = inject(StorageService);
  private action: ActionService = inject(ActionService);
  name = this.storage.name;
  profession = this.storage.profession;
  description = this.storage.description;

  openLinkedin() {
    this.action.redirectTo(this.storage.linkedIn);
  }

  openGithub() {
    this.action.redirectTo(this.storage.github);
  }

  openWhatsapp() {
    this.action.redirectTo(this.storage.whatsapp);
  }

  openEmail() {
    this.action.redirectTo(`mailto:${this.storage.email}`);
  }
}
