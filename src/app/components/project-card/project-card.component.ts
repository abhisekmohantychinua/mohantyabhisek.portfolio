import {Component, input, signal} from '@angular/core';
import {Project} from '../../core/models/project';
import {NgOptimizedImage} from '@angular/common';
import {RoundIconComponent} from '../round-icon/round-icon.component';

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

  toggleState() {
    this.state.update(s => s === 'close' ? 'open' : 'close');
  }
}
