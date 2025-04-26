import {DOCUMENT} from '@angular/common';
import {AfterViewInit, Directive, ElementRef, inject, OnDestroy, output} from '@angular/core';
import {filter, fromEvent, Subscription} from 'rxjs';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

  private el = inject(ElementRef);
  private document = inject(DOCUMENT);
  private documentClickSubscription?: Subscription;

  clickedOutside = output<void>();

  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click')
      .pipe(
        filter(event => !this.el.nativeElement.contains(event.target) || event.target === this.el.nativeElement)
      )
      .subscribe(event => this.clickedOutside.emit());
  }

  ngOnDestroy() {
    this.documentClickSubscription?.unsubscribe();
  }


}
