import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { StorageService } from '../../core/services/storage.service';

/**
 * Test suite for AboutMeComponent
 *
 * This component is responsible for:
 * 1. Displaying the about me section with personal information
 * 2. Getting about me data from StorageService
 */
describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let mockStorageService: Partial<StorageService>;

  beforeEach(async () => {
    // Create mock service
    mockStorageService = {
      aboutme: ['Test about me line 1', 'Test about me line 2']
    };

    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
      providers: [
        { provide: StorageService, useValue: mockStorageService }
      ]
    })
    .compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(AboutMeComponent, {
      set: {
        imports: [],
        template: '<div>About Me Component</div>'
      }
    });

    fixture = TestBed.createComponent(AboutMeComponent);
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
   * Test that the component gets aboutme data from StorageService
   */
  it('should get aboutme data from StorageService', () => {
    // Assert
    expect(component.aboutme).toBe(mockStorageService.aboutme);
    expect(component.aboutme).toEqual(['Test about me line 1', 'Test about me line 2']);
  });
});
