import {Component, HostListener, OnInit, signal} from '@angular/core';
import {RoundIconComponent} from '../round-icon/round-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RoundIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuHidden = signal(true);

  ngOnInit(): void {
    let innerWidth = window.innerWidth;
    this.isMenuHidden.set(innerWidth <= 480);
  }

  @HostListener('window:resize')
  onResize() {
    let innerWidth = window.innerWidth;
    this.isMenuHidden.set(innerWidth <= 480);
  }

  toggleMenu() {
    this.isMenuHidden.update(open => !open);
  }

  navLinkClick($event: MouseEvent, elId: string) {
    $event.preventDefault();
    const targetEl = document.getElementById(elId);
    targetEl?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
