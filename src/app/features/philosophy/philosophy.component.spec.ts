import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { PhilosophyComponent } from './philosophy.component';

/**
 * Test suite for PhilosophyComponent
 *
 * This component is responsible for:
 * 1. Displaying the philosophy section
 * 2. Adjusting the height of the image container based on its width
 * 3. Using ResizeObserver to respond to size changes
 */
describe('PhilosophyComponent', () => {
  let component: PhilosophyComponent;
  let fixture: ComponentFixture<PhilosophyComponent>;
  let mockElementRef: { nativeElement: { querySelector: jest.Mock } };
  let mockRenderer: { setStyle: jest.Mock };
  let mockContainer: { style: {} };
  let mockResizeObserver: jest.Mock;
  let mockObserve: jest.Mock;
  let mockDisconnect: jest.Mock;

  beforeEach(async () => {
    // Create mock elements and services
    mockContainer = { style: {} };
    mockElementRef = {
      nativeElement: {
        querySelector: jest.fn().mockReturnValue(mockContainer)
      }
    };
    mockRenderer = { setStyle: jest.fn() };

    // Mock ResizeObserver
    mockObserve = jest.fn();
    mockDisconnect = jest.fn();
    mockResizeObserver = jest.fn().mockImplementation(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect
    }));

    // Store original ResizeObserver and replace with mock
    const originalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = mockResizeObserver;

    await TestBed.configureTestingModule({
      imports: [PhilosophyComponent],
      providers: [
        { provide: ElementRef, useValue: mockElementRef },
        { provide: Renderer2, useValue: mockRenderer }
      ]
    })
    .compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(PhilosophyComponent, {
      set: {
        imports: [],
        template: '<div>Philosophy Component</div>'
      }
    });

    fixture = TestBed.createComponent(PhilosophyComponent);
    component = fixture.componentInstance;

    // Restore original ResizeObserver after component is created
    window.ResizeObserver = originalResizeObserver;
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test that ngAfterViewInit sets up the ResizeObserver
   */
  it('should set up ResizeObserver in ngAfterViewInit', () => {
    // Act
    component.ngAfterViewInit();

    // Assert
    expect(mockElementRef.nativeElement.querySelector).toHaveBeenCalledWith('.philosophy-image-container');
    expect(mockResizeObserver).toHaveBeenCalled();
    expect(mockObserve).toHaveBeenCalledWith(mockContainer);
  });

  /**
   * Test that adjustHeight calculates and sets the correct height for large widths
   */
  it('should calculate correct height for large widths', () => {
    // Arrange
    const largeWidth = 800;
    const expectedHeight = largeWidth / 13 * 8; // Formula for large widths

    // Act
    component.adjustHeight(largeWidth);

    // Assert
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockContainer,
      'height',
      `${expectedHeight}px`
    );
  });

  /**
   * Test that adjustHeight calculates and sets the correct height for small widths
   */
  it('should calculate correct height for small widths', () => {
    // Arrange
    const smallWidth = 400;
    const expectedHeight = smallWidth / 8 * 13; // Formula for small widths

    // Act
    component.adjustHeight(smallWidth);

    // Assert
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockContainer,
      'height',
      `${expectedHeight}px`
    );
  });

  /**
   * Test that adjustHeight caps the width at 975px
   */
  it('should cap width at 975px when calculating height', () => {
    // Arrange
    const largeWidth = 1200;
    const cappedWidth = 975;
    const expectedHeight = cappedWidth / 13 * 8; // Formula for large widths with capped width

    // Act
    component.adjustHeight(largeWidth);

    // Assert
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockContainer,
      'height',
      `${expectedHeight}px`
    );
  });

  /**
   * Test that ngOnDestroy disconnects the ResizeObserver
   */
  it('should disconnect ResizeObserver in ngOnDestroy', () => {
    // Arrange - Set up ResizeObserver
    component.ngAfterViewInit();

    // Act
    component.ngOnDestroy();

    // Assert
    expect(mockDisconnect).toHaveBeenCalled();
  });

  /**
   * Test that ngOnDestroy handles case when ResizeObserver is undefined
   */
  it('should handle undefined ResizeObserver in ngOnDestroy', () => {
    // Arrange - Don't call ngAfterViewInit, so ResizeObserver is undefined

    // Act & Assert - Should not throw error
    expect(() => {
      component.ngOnDestroy();
    }).not.toThrow();
  });
});
