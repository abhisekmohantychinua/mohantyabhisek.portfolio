import {Component, inject} from '@angular/core';
import {TitleComponent} from '../../components/title/title.component';
import {StorageService} from '../../core/services/storage.service';
import {CaseStudyCardComponent} from '../../components/case-study-card/case-study-card.component';

@Component({
  selector: 'app-case-studies',
  imports: [
    TitleComponent,
    CaseStudyCardComponent
  ],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  private storage: StorageService = inject(StorageService);
  caseStudies = this.storage.caseStudies;
}
