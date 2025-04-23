import { TestBed } from '@angular/core/testing';
import { ActionService } from './action.service';

/**
 * Test suite for ActionService
 *
 * This service is responsible for handling actions like redirecting to external URLs.
 * It provides a wrapper around window.open() to make it more testable.
 */
describe('ActionService', () => {
  let service: ActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionService);
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  /**
   * Basic test to verify the service is created properly
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test the redirectTo method with a valid URL
   *
   * When a URL is provided, it should open that URL in a new tab/window
   */
  it('should open URL in new tab when redirectTo is called with a URL', () => {
    // Arrange
    const testUrl = 'https://example.com';

    // Act
    service.redirectTo(testUrl);

    // Assert
    expect(window.open).toHaveBeenCalledWith(testUrl, 'blank');
  });

  /**
   * Test the redirectTo method with undefined URL
   *
   * When no URL is provided, it should not call window.open
   */
  it('should not open URL when redirectTo is called with undefined', () => {
    // Act
    service.redirectTo(undefined);

    // Assert
    expect(window.open).not.toHaveBeenCalled();
  });
});
