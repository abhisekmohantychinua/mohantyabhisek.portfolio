import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { ThemeService } from '../../core/services/theme.service';

/**
 * Test suite for NavbarComponent
 *
 * This component is responsible for:
 * 1. Displaying the navigation menu
 * 2. Handling responsive behavior
 * 3. Managing theme switching
 * 4. Handling navigation clicks
 */
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockThemeService: { setTheme: jest.Mock };
  let originalInnerWidth: number;

  beforeEach(async () => {
    // Save original window.innerWidth
    originalInnerWidth = window.innerWidth;

    // Create mock services
    mockThemeService = { setTheme: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        { provide: ThemeService, useValue: mockThemeService }
      ]
    })
    .compileComponents();

    // Mock RoundIconComponent since it's used in the template
    TestBed.overrideComponent(NavbarComponent, {
      set: {
        imports: [],
        template: '<div>Navbar</div>'
      }
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Restore original window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth
    });
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  /**
   * Test that isMenuHidden is set based on window width on init
   */
  it('should set isMenuHidden based on window width on init', () => {
    // Arrange - Set window width to mobile size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400
    });

    // Act
    fixture.detectChanges(); // Triggers ngOnInit

    // Assert
    expect(component.isMenuHidden()).toBe(true);

    // Arrange - Set window width to desktop size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.isMenuHidden()).toBe(false);
  });

  /**
   * Test that isMenuHidden is updated on window resize
   */
  it('should update isMenuHidden on window resize', () => {
    // Arrange
    fixture.detectChanges();

    // Act - Simulate resize to mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400
    });
    component.onResize();

    // Assert
    expect(component.isMenuHidden()).toBe(true);

    // Act - Simulate resize to desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
    component.onResize();

    // Assert
    expect(component.isMenuHidden()).toBe(false);
  });

  /**
   * Test that toggleMenu toggles isMenuHidden
   */
  it('should toggle isMenuHidden when toggleMenu is called', () => {
    // Arrange
    fixture.detectChanges();
    const initialValue = component.isMenuHidden();

    // Act
    component.toggleMenu();

    // Assert
    expect(component.isMenuHidden()).toBe(!initialValue);

    // Act again
    component.toggleMenu();

    // Assert
    expect(component.isMenuHidden()).toBe(initialValue);
  });

  /**
   * Test that navLinkClick scrolls to element
   */
  it('should scroll to element when navLinkClick is called with valid ID', () => {
    // Arrange
    fixture.detectChanges();
    const mockEvent = { preventDefault: jest.fn() } as unknown as MouseEvent;
    const mockElement = { scrollIntoView: jest.fn() };
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as unknown as HTMLElement);

    // Act
    component.navLinkClick(mockEvent, 'test-id');

    // Assert
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(document.getElementById).toHaveBeenCalledWith('test-id');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  /**
   * Test that changeTheme calls ThemeService
   */
  it('should call ThemeService when changeTheme is called', () => {
    // Arrange
    fixture.detectChanges();

    // Act
    component.changeTheme('light');

    // Assert
    expect(mockThemeService.setTheme).toHaveBeenCalledWith('light');
  });
});
