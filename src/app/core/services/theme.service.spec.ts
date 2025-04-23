import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { StorageService } from './storage.service';
import { Theme } from '../models/theme';

/**
 * Test suite for ThemeService
 *
 * This service is responsible for:
 * 1. Managing the application theme (light/dark)
 * 2. Persisting theme preferences using StorageService
 * 3. Loading theme CSS files dynamically
 * 4. Detecting system theme preferences
 */
describe('ThemeService', () => {
  let service: ThemeService;
  let mockStorageService: { getItem: jest.Mock; setItem: jest.Mock };
  let mockDocument: Document;
  let mockHead: HTMLHeadElement;
  let mockLink: HTMLLinkElement;

  beforeEach(() => {
    // Create mock for StorageService
    mockStorageService = {
      getItem: jest.fn(),
      setItem: jest.fn()
    };

    // Create mock for document elements
    mockLink = document.createElement('link');
    mockHead = document.createElement('head') as HTMLHeadElement;
    mockDocument = document;

    // Set up spies for document methods
    jest.spyOn(document, 'createElement').mockReturnValue(mockLink);
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'theme-link') {
        const existingLink = document.createElement('link');
        existingLink.id = 'theme-link';
        return existingLink;
      }
      return null;
    });
    jest.spyOn(document.head, 'appendChild').mockImplementation(() => mockLink);

    // Set up TestBed
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: StorageService, useValue: mockStorageService }
      ]
    });

    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  /**
   * Basic test to verify the service is created properly
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test the init method when a theme is stored in localStorage
   *
   * Should load the stored theme
   */
  it('should load stored theme when init is called and theme exists in storage', () => {
    // Arrange
    const storedTheme: Theme = 'light';
    mockStorageService.getItem.mockReturnValue(storedTheme);

    // Act
    service.init();

    // Assert
    expect(mockStorageService.getItem).toHaveBeenCalledWith('theme');
    expect(mockLink.href).toContain(`themes/${storedTheme}/${storedTheme}.css`);
  });

  /**
   * Test the init method when no theme is stored and system prefers dark
   *
   * Should load dark theme
   */
  it('should load dark theme when init is called, no theme in storage, and system prefers dark', () => {
    // Arrange
    mockStorageService.getItem.mockReturnValue(null);

    // Mock matchMedia to return dark preference
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query
      };
    });

    // Act
    service.init();

    // Assert
    expect(mockLink.href).toContain('themes/dark/dark.css');

    // Restore original matchMedia
    window.matchMedia = originalMatchMedia;
  });

  /**
   * Test the init method when no theme is stored and system prefers light
   *
   * Should load light theme
   */
  it('should load light theme when init is called, no theme in storage, and system prefers light', () => {
    // Arrange
    mockStorageService.getItem.mockReturnValue(null);

    // Mock matchMedia to return light preference
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query
      };
    });

    // Act
    service.init();

    // Assert
    expect(mockLink.href).toContain('themes/light/light.css');

    // Restore original matchMedia
    window.matchMedia = originalMatchMedia;
  });

  /**
   * Test the setTheme method
   *
   * Should save theme to storage and load it
   */
  it('should save theme to storage and load it when setTheme is called', () => {
    // Arrange
    const theme: Theme = 'dark';

    // Act
    service.setTheme(theme);

    // Assert
    expect(mockStorageService.setItem).toHaveBeenCalledWith('theme', theme);
    expect(mockLink.href).toContain(`themes/${theme}/${theme}.css`);
  });

  /**
   * Test that the theme link is properly created and added to the head
   */
  it('should create theme link element with correct attributes', () => {
    // Arrange
    const theme: Theme = 'light';

    // Act
    service.setTheme(theme);

    // Assert
    expect(document.createElement).toHaveBeenCalledWith('link');
    expect(mockLink.id).toBe('theme-link');
    expect(mockLink.rel).toBe('stylesheet');
    expect(mockLink.href).toContain(`themes/${theme}/${theme}.css`);
    expect(document.head.appendChild).toHaveBeenCalledWith(mockLink);
  });

  /**
   * Test that existing theme link is removed before adding new one
   */
  it('should remove existing theme link before adding new one', () => {
    // Arrange
    const removeSpy = jest.fn();
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      if (id === 'theme-link') {
        const existingLink = document.createElement('link');
        existingLink.id = 'theme-link';
        existingLink.remove = removeSpy;
        return existingLink;
      }
      return null;
    });

    // Act
    service.setTheme('dark');

    // Assert
    expect(document.getElementById).toHaveBeenCalledWith('theme-link');
    expect(removeSpy).toHaveBeenCalled();
  });
});
