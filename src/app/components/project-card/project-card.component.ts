import {Component, inject, input, signal} from '@angular/core';
import {Project} from '../../core/models/project';
import {NgOptimizedImage} from '@angular/common';
import {RoundIconComponent} from '../round-icon/round-icon.component';
import {ActionService} from '../../core/services/action.service';

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
    RoundIconComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input.required<Project>();
  state = signal<'close' | 'open'>('close');

  private action: ActionService = inject(ActionService);

  toggleState() {
    this.state.update(s => s === 'close' ? 'open' : 'close');
  }

  openGithub() {
    this.action.redirectTo(this.project().links?.github);
  }

  openVisit() {
    this.action.redirectTo(this.project().links?.visit);

  }
}
