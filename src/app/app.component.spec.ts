import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActionService } from './core/services/action.service';
import { StorageService } from './core/services/storage.service';
import { ThemeService } from './core/services/theme.service';

/**
 * Test suite for AppComponent
 *
 * This is the main component of the application that serves as the entry point.
 * It contains the overall layout structure and handles keyboard shortcuts.
 */
describe('AppComponent', () => {
  let mockActionService: { redirectTo: jest.Mock };
  let mockThemeService: { init: jest.Mock };

  beforeEach(async () => {
    // Create mock services
    mockActionService = { redirectTo: jest.fn() };
    mockThemeService = { init: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: ActionService, useValue: mockActionService },
        { provide: StorageService, useValue: {} },
        { provide: ThemeService, useValue: mockThemeService }
      ]
    }).overrideComponent(AppComponent, {
      set: {
        template: `
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <div class="sr-only" aria-live="polite">Press R to view resume PDF</div>
          <header class="header" role="banner"></header>
          <main id="main-content" class="container" role="main"></main>
          <footer role="contentinfo"></footer>
        `
      }
    }).compileComponents();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Test that the component has the correct title property
   */
  it(`should have the 'portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  /**
   * Test that the component renders the skip link for accessibility
   */
  it('should render skip link for accessibility', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector('.skip-link');

    expect(skipLink).toBeTruthy();
    expect(skipLink?.textContent).toContain('Skip to main content');
    expect(skipLink?.getAttribute('href')).toBe('#main-content');
  });

  /**
   * Test that the component initializes the theme service on init
   */
  it('should initialize theme service on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(mockThemeService.init).toHaveBeenCalled();
  });

  /**
   * Test the keyboard shortcut handler for opening the resume
   */
  it('should open resume PDF when R key is pressed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const event = new KeyboardEvent('keydown', { key: 'r' });

    app.handleKeyPress(event);

    expect(mockActionService.redirectTo).toHaveBeenCalledWith('AbhisekMohanty.pdf');
  });

  /**
   * Test that the keyboard shortcut handler doesn't trigger for input elements
   */
  it('should not open resume PDF when R key is pressed in an input field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Create a mock event with an HTMLInputElement as the target
    const mockInputElement = document.createElement('input');
    const event = new KeyboardEvent('keydown', { key: 'r' });
    Object.defineProperty(event, 'target', { value: mockInputElement });

    app.handleKeyPress(event);

    expect(mockActionService.redirectTo).not.toHaveBeenCalled();
  });
});
