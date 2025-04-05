import {Component, computed, inject} from '@angular/core';
import {IconService} from '../../core/services/icon.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActionService} from '../../core/services/action.service';
import {StorageService} from '../../core/services/storage.service';

@Component({
  selector: 'app-cta-btn',
  imports: [],
  templateUrl: './cta-btn.component.html',
  styleUrl: './cta-btn.component.scss'
})
export class CtaBtnComponent {
  private iconService: IconService = inject(IconService);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);
  private action: ActionService = inject(ActionService);
  private storage: StorageService = inject(StorageService);
  iconAsSvg = computed(() => {
      return this.domSanitizer.bypassSecurityTrustHtml(this.iconService.getIcon('mail'));
    }
  );

  onClick() {
    this.action.redirectTo(`mailto:${this.storage.email}`);
  }
}
