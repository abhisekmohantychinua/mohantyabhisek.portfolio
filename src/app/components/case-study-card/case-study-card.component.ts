import {Component, input, signal} from '@angular/core';
import {CaseStudy} from '../../core/models/case-study';
import {RoundIconComponent} from '../round-icon/round-icon.component';

@Component({
  selector: 'app-case-study-card',
  imports: [
    RoundIconComponent
  ],
  templateUrl: './case-study-card.component.html',
  styleUrl: './case-study-card.component.scss'
})
export class CaseStudyCardComponent {
  caseStudy = input.required<CaseStudy>();
  open = signal(false);

  toggleOpen() {
    this.open.update(s => !s);
  }
}
