/**
 * Test suite for Theme model
 *
 * This model defines the theme type and provides a validation function
 * to check if a string is a valid theme ('light' or 'dark').
 */
import { isValidTheme } from './theme';

describe('Theme Model', () => {
  /**
   * Test the isValidTheme function with valid theme values
   */
  it('should return true for valid theme values', () => {
    // Arrange & Act & Assert
    expect(isValidTheme('light')).toBe(true);
    expect(isValidTheme('dark')).toBe(true);
  });

  /**
   * Test the isValidTheme function with invalid theme values
   */
  it('should return false for invalid theme values', () => {
    // Arrange & Act & Assert
    expect(isValidTheme('blue')).toBe(false);
    expect(isValidTheme('')).toBe(false);
    expect(isValidTheme('DARK')).toBe(false); // Case sensitive
  });
});
