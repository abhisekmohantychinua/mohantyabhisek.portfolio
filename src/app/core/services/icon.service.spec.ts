import { TestBed } from '@angular/core/testing';
import { IconService } from './icon.service';

/**
 * Test suite for IconService
 *
 * This service is responsible for:
 * 1. Storing SVG icons as strings
 * 2. Providing methods to retrieve icons by name
 * 3. Identifying if an icon is dark-themed
 */
describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconService);
  });

  /**
   * Basic test to verify the service is created properly
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test the getIcon method with a valid icon name
   *
   * Should return the SVG string for the icon
   */
  it('should return SVG string when getIcon is called with valid icon name', () => {
    // Arrange
    const iconName = 'github';

    // Act
    const result = service.getIcon(iconName);

    // Assert
    expect(result).toBeDefined();
    expect(result).toContain('<svg');
    expect(result).toContain('</svg>');
  });

  /**
   * Test the getIcon method with an invalid icon name
   *
   * Should throw an error
   */
  it('should throw error when getIcon is called with invalid icon name', () => {
    // Arrange
    const invalidIconName = 'non-existent-icon';

    // Act & Assert
    expect(() => {
      service.getIcon(invalidIconName);
    }).toThrow(`Icon ${invalidIconName} not found`);
  });

  /**
   * Test the isDark method with a dark icon
   *
   * Should return true
   */
  it('should return true when isDark is called with a dark icon name', () => {
    // Arrange
    const darkIconNames = ['next-js', 'express', 'github', 'sqlite'];

    // Act & Assert
    darkIconNames.forEach(iconName => {
      expect(service.isDark(iconName)).toBe(true);
    });
  });

  /**
   * Test the isDark method with a non-dark icon
   *
   * Should return false
   */
  it('should return false when isDark is called with a non-dark icon name', () => {
    // Arrange
    const nonDarkIconNames = ['angular', 'java', 'react'];

    // Act & Assert
    nonDarkIconNames.forEach(iconName => {
      expect(service.isDark(iconName)).toBe(false);
    });
  });
});
