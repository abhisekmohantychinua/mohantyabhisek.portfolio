import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundIconComponent } from './round-icon.component';
import { IconService } from '../../core/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Test suite for RoundIconComponent
 *
 * This component is responsible for:
 * 1. Displaying SVG icons from the IconService
 * 2. Handling click events
 * 3. Supporting accessibility features
 */
describe('RoundIconComponent', () => {
  let component: RoundIconComponent;
  let fixture: ComponentFixture<RoundIconComponent>;
  let mockIconService: { getIcon: jest.Mock };
  let mockDomSanitizer: { bypassSecurityTrustHtml: jest.Mock };

  beforeEach(async () => {
    // Create mock services
    mockIconService = { getIcon: jest.fn() };
    mockDomSanitizer = { bypassSecurityTrustHtml: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [RoundIconComponent],
      providers: [
        { provide: IconService, useValue: mockIconService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoundIconComponent);
    component = fixture.componentInstance;

    // Set required input
    component.icon.set('github');

    // Setup mocks
    const svgContent = '<svg>test</svg>';
    const safeSvg = {} as SafeHtml;
    mockIconService.getIcon.mockReturnValue(svgContent);
    mockDomSanitizer.bypassSecurityTrustHtml.mockReturnValue(safeSvg);

    fixture.detectChanges();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test that the component gets the icon from the IconService
   */
  it('should get icon from IconService', () => {
    // Assert
    expect(mockIconService.getIcon).toHaveBeenCalledWith('github');
  });

  /**
   * Test that the component sanitizes the SVG
   */
  it('should sanitize the SVG', () => {
    // Assert
    expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
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

  /**
   * Test that the component handles errors from IconService
   */
  it('should handle errors from IconService', () => {
    // Arrange
    mockIconService.getIcon.mockImplementation(() => {
      throw new Error('Icon not found');
    });
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act
    component.icon.set('invalid-icon');
    fixture.detectChanges();

    // Assert
    expect(consoleSpy).toHaveBeenCalled();
    expect(component.iconAsSvg()).toBe('');
  });
});
