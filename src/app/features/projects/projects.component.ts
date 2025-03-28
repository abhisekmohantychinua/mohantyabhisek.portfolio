import {Component, inject} from '@angular/core';
import {TitleComponent} from '../../components/title/title.component';
import {StorageService} from '../../core/services/storage.service';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [
    TitleComponent,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private storageService = inject(StorageService);
  projects = this.storageService.projects;
}
