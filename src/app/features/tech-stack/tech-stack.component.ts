import {Component} from '@angular/core';
import {IconService} from '../../core/services/icon.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TitleComponent} from '../../components/title/title.component';

@Component({
  selector: 'app-tech-stack',
  imports: [
    TitleComponent
  ],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  private techStack: string[] = [
    'java', 'python', 'javascript', 'typescript', 'c', 'c++',
    'spring-boot', 'next-js', 'react', 'angular', 'express', 'thymeleaf',
    'html5', 'css', 'sass', 'mysql', 'mongodb', 'postgresql', 'redis', 'sqlite',
    'git', 'github', 'docker', 'kubernetes', 'junit', 'jest', 'postman',
    'figma', 'canva'
  ];
  svgIcons: { name: string, svg: SafeHtml, isDark?: boolean }[] = [];

  constructor(private iconService: IconService, private domSanitizer: DomSanitizer) {
    this.techStack.forEach(tech => this.svgIcons.push({
      name: tech,
      svg: this.domSanitizer.bypassSecurityTrustHtml(this.iconService.getIcon(tech)),
      isDark: this.iconService.isDark(tech)
    }));
  }
}
