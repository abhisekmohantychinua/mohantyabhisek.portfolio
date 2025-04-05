import {Component, inject} from '@angular/core';
import {RoundIconComponent} from '../round-icon/round-icon.component';
import {ActionService} from '../../core/services/action.service';

@Component({
  selector: 'app-footer',
  imports: [
    RoundIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private action: ActionService = inject(ActionService);

  downloadResume() {
    this.action.redirectTo('AbhisekMohanty.pdf');
  }
}
