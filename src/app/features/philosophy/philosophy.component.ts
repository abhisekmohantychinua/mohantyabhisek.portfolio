import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import {TitleComponent} from '../../components/title/title.component';

@Component({
  selector: 'app-philosophy',
  imports: [
    TitleComponent
  ],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss'
})
export class PhilosophyComponent implements AfterViewInit, OnDestroy {
  private resizeObserver?: ResizeObserver;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const container = this.elRef.nativeElement.querySelector('.philosophy-image-container');

    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        this.adjustHeight(newWidth);
      }
    });

    this.resizeObserver.observe(container);
  }

  adjustHeight(width: number) {
    width = width > 975 ? 975 : width;
    const newHeight = width > 440 ? width / 13 * 8 : width / 8 * 13;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.philosophy-image-container'), 'height', `${newHeight}px`);
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
