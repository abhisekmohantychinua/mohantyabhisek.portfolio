import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { StorageService } from '../../core/services/storage.service';
import { ActionService } from '../../core/services/action.service';

/**
 * Test suite for HeroComponent
 *
 * This component is responsible for:
 * 1. Displaying the hero section with personal information
 * 2. Handling social media link clicks
 */
describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let mockStorageService: Partial<StorageService>;
  let mockActionService: { redirectTo: jest.Mock };

  beforeEach(async () => {
    // Create mock services
    mockStorageService = {
      name: 'Test Name',
      profession: 'Test Profession',
      description: ['Test Description'],
      linkedIn: 'https://linkedin.com/test',
      github: 'https://github.com/test',
      whatsapp: 'https://wa.me/test',
      email: 'test@example.com'
    };

    mockActionService = { redirectTo: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [
        { provide: StorageService, useValue: mockStorageService },
        { provide: ActionService, useValue: mockActionService }
      ]
    }).compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(HeroComponent, {
      set: {
        imports: [],
        template: '<div>Hero Component</div>'
      }
    });

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test that the component gets data from StorageService
   */
  it('should get data from StorageService', () => {
    // Assert
    expect(component.name).toBe('Test Name');
    expect(component.profession).toBe('Test Profession');
    expect(component.description).toEqual(['Test Description']);
  });

  /**
   * Test that openLinkedin calls ActionService
   */
  it('should call ActionService when openLinkedin is called', () => {
    // Act
    component.openLinkedin();

    // Assert
    expect(mockActionService.redirectTo).toHaveBeenCalledWith('https://linkedin.com/test');
  });

  /**
   * Test that openGithub calls ActionService
   */
  it('should call ActionService when openGithub is called', () => {
    // Act
    component.openGithub();

    // Assert
    expect(mockActionService.redirectTo).toHaveBeenCalledWith('https://github.com/test');
  });

  /**
   * Test that openWhatsapp calls ActionService
   */
  it('should call ActionService when openWhatsapp is called', () => {
    // Act
    component.openWhatsapp();

    // Assert
    expect(mockActionService.redirectTo).toHaveBeenCalledWith('https://wa.me/test');
  });

  /**
   * Test that openEmail calls ActionService with mailto link
   */
  it('should call ActionService with mailto link when openEmail is called', () => {
    // Act
    component.openEmail();

    // Assert
    expect(mockActionService.redirectTo).toHaveBeenCalledWith('mailto:test@example.com');
  });
});
