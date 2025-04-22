import {Component, computed, inject, input, output} from '@angular/core';
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
  accessibility = input<boolean>(true);
  ariaLabel = input<string>('');

  private iconService: IconService = inject(IconService);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);
  iconAsSvg = computed(() => {
    try {
      return this.domSanitizer.bypassSecurityTrustHtml(this.iconService.getIcon(this.icon()));
    } catch (err) {
      console.log(err);
      return '';
    }
  });
  btnClick = output();

  onClick(): void {
    this.btnClick.emit();
  }
}
