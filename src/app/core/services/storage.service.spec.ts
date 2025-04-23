import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { StorageService } from './storage.service';

/**
 * Test suite for StorageService
 *
 * This service is responsible for:
 * 1. Storing and retrieving data from localStorage
 * 2. Providing static data for the application (name, email, projects, etc.)
 * 3. Handling platform-specific storage operations (browser vs server)
 */
describe('StorageService', () => {
  let service: StorageService;

  // Mock localStorage
  let mockLocalStorage: {
    getItem: jest.Mock;
    setItem: jest.Mock;
    removeItem: jest.Mock;
    clear: jest.Mock;
  };

  // Set up localStorage mock before each test
  beforeEach(() => {
    mockLocalStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    };

    // Save original localStorage
    const originalLocalStorage = window.localStorage;

    // Replace localStorage with mock
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    });

    // Clear all mocks
    jest.clearAllMocks();
  });

  /**
   * Test with browser platform
   */
  describe('when running in browser', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      });
      service = TestBed.inject(StorageService);
    });

    /**
     * Basic test to verify the service is created properly
     */
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    /**
     * Test that the service has the expected data properties
     */
    it('should have the correct static data properties', () => {
      expect(service.name).toBe('Abhisek Mohanty');
      expect(service.email).toBe('mohantyabhisek@hotmail.com');
      expect(service.profession).toBe('Full Stack Java Developer');
      expect(service.description).toBeInstanceOf(Array);
      expect(service.projects).toBeInstanceOf(Array);
      expect(service.caseStudies).toBeInstanceOf(Array);
    });

    /**
     * Test the setItem method
     *
     * Should store data in localStorage
     */
    it('should store data in localStorage when setItem is called', () => {
      // Arrange
      const key = 'testKey';
      const value = { test: 'value' };

      // Act
      service.setItem(key, value);

      // Assert
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
    });

    /**
     * Test the getItem method
     *
     * Should retrieve data from localStorage
     */
    it('should retrieve data from localStorage when getItem is called', () => {
      // Arrange
      const key = 'testKey';
      const value = { test: 'value' };

      // Set up mock to return JSON string
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(value));

      // Act
      const result = service.getItem(key);

      // Assert
      expect(result).toEqual(value);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith(key);
    });

    /**
     * Test the getItem method with invalid JSON
     *
     * Should return null and log error
     */
    it('should return null when getItem is called with invalid JSON', () => {
      // Arrange
      const key = 'testKey';

      // Set up mock to return invalid JSON
      mockLocalStorage.getItem.mockReturnValue('invalid json');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // Act
      const result = service.getItem(key);

      // Assert
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      // Restore console.log
      consoleSpy.mockRestore();
    });

    /**
     * Test the removeItem method
     *
     * Should remove data from localStorage
     */
    it('should remove data from localStorage when removeItem is called', () => {
      // Arrange
      const key = 'testKey';

      // Act
      service.removeItem(key);

      // Assert
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith(key);
    });
  });

  /**
   * Test with server platform
   */
  describe('when running on server', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      });
      service = TestBed.inject(StorageService);
    });

    /**
     * Test that localStorage methods don't run on server
     */
    it('should not interact with localStorage when on server', () => {
      // Arrange
      const localStorageSpy = jest.spyOn(localStorage, 'setItem');

      // Act
      service.setItem('key', 'value');
      service.getItem('key');
      service.removeItem('key');

      // Assert
      expect(localStorageSpy).not.toHaveBeenCalled();
    });

    /**
     * Test that getItem returns null on server
     */
    it('should return null when getItem is called on server', () => {
      expect(service.getItem('any')).toBeNull();
    });
  });
});
