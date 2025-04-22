import {Component, computed, input, signal} from '@angular/core';
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

  // Generate a unique ID for the case study
  caseStudyId = computed(() => {
    const title = this.caseStudy().title;
    return 'case-study-' + title.substring(0, 10).replace(/\s+/g, '-').toLowerCase();
  });

  toggleOpen() {
    this.open.update(s => !s);
  }
}
