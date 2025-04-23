import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundIconComponent } from './round-icon.component';
import { IconService } from '../../core/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component } from '@angular/core';

// Create a test host component to simplify testing
@Component({
  standalone: true,
  imports: [RoundIconComponent],
  template: `<app-round-icon [icon]="'github'" (btnClick)="onClick()"></app-round-icon>`
})
class TestHostComponent {
  onClick() {}
}

/**
 * Test suite for RoundIconComponent
 *
 * This component is responsible for:
 * 1. Displaying SVG icons from the IconService
 * 2. Handling click events
 * 3. Supporting accessibility features
 */
describe('RoundIconComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let component: RoundIconComponent;
  let mockIconService: { getIcon: jest.Mock };
  let mockDomSanitizer: { bypassSecurityTrustHtml: jest.Mock };

  beforeEach(async () => {
    // Create mock services
    mockIconService = { getIcon: jest.fn() };
    mockDomSanitizer = { bypassSecurityTrustHtml: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        { provide: IconService, useValue: mockIconService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    }).compileComponents();

    // Setup mocks
    const svgContent = '<svg>test</svg>';
    const safeSvg = {} as SafeHtml;
    mockIconService.getIcon.mockReturnValue(svgContent);
    mockDomSanitizer.bypassSecurityTrustHtml.mockReturnValue(safeSvg);

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    component = hostFixture.debugElement.children[0].componentInstance;

    hostFixture.detectChanges();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test that the component emits a click event
   */
  it('should emit btnClick when clicked', () => {
    // Arrange
    const spy = jest.spyOn(component.btnClick, 'emit');

    // Act
    component.onClick();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
