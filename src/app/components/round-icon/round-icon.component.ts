import {Component, computed, inject, input} from '@angular/core';
import {IconService} from '../../core/services/icon.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-round-icon',
  imports: [],
  templateUrl: './round-icon.component.html',
  styleUrl: './round-icon.component.scss'
})
export class RoundIconComponent {
  icon = input.required<string>();
  private iconService: IconService = inject(IconService);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);
  iconAsSvg = computed(() => {
    return this.domSanitizer.bypassSecurityTrustHtml(this.iconService.getIcon(this.icon()));
  });
}
