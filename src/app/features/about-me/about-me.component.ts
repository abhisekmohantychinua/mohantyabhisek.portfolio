import {Component} from '@angular/core';
import {TitleComponent} from '../../components/title/title.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [
    TitleComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
