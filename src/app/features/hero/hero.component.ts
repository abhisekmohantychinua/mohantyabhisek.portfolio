import {Component} from '@angular/core';
import {TypewriteComponent} from '../../components/typewrite/typewrite.component';
import {NgOptimizedImage} from '@angular/common';
import {CtaBtnComponent} from '../../components/cta-btn/cta-btn.component';
import {RoundIconComponent} from '../../components/round-icon/round-icon.component';

@Component({
  selector: 'app-hero',
  imports: [
    TypewriteComponent,
    NgOptimizedImage,
    CtaBtnComponent,
    RoundIconComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  name = 'Abhisek Mohanty';
  profession = 'Full Stack Java Developer';
  description = ['Web Designer', 'Competitive Coder', 'Fullstack Developer', 'Backend Service Developer', 'DevOps Engineer', 'Java Geek', 'Freelancer', 'Tech Mentor'];
}
