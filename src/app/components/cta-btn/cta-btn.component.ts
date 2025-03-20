import {Component, computed, inject} from '@angular/core';
import {IconService} from '../../core/services/icon.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cta-btn',
  imports: [],
  templateUrl: './cta-btn.component.html',
  styleUrl: './cta-btn.component.scss'
})
export class CtaBtnComponent {
  private iconService: IconService = inject(IconService);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);
  iconAsSvg = computed(() => {
      return this.domSanitizer.bypassSecurityTrustHtml(this.iconService.getIcon('mail'));
    }
  );
}
