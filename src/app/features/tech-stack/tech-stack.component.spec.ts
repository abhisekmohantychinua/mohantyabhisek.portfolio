import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechStackComponent } from './tech-stack.component';
import { IconService } from '../../core/services/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Test suite for TechStackComponent
 *
 * This component is responsible for:
 * 1. Displaying the technology stack section with icons
 * 2. Getting SVG icons from IconService
 * 3. Sanitizing the SVG content with DomSanitizer
 * 4. Determining if icons are dark-themed
 */
describe('TechStackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;
  let mockIconService: { getIcon: jest.Mock, isDark: jest.Mock };
  let mockDomSanitizer: { bypassSecurityTrustHtml: jest.Mock };
  let mockSafeHtml: SafeHtml;

  beforeEach(async () => {
    // Create mock services
    mockSafeHtml = {} as SafeHtml;
    mockIconService = {
      getIcon: jest.fn().mockReturnValue('<svg>test</svg>'),
      isDark: jest.fn().mockImplementation((tech: string) => {
        // Mock the isDark method to return true for 'github' and false for others
        return tech === 'github';
      })
    };
    mockDomSanitizer = {
      bypassSecurityTrustHtml: jest.fn().mockReturnValue(mockSafeHtml)
    };

    await TestBed.configureTestingModule({
      imports: [TechStackComponent],
      providers: [
        { provide: IconService, useValue: mockIconService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    })
    .compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(TechStackComponent, {
      set: {
        imports: [],
        template: '<div>Tech Stack Component</div>'
      }
    });

    fixture = TestBed.createComponent(TechStackComponent);
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
   * Test that the component gets icons from IconService
   */
  it('should get icons from IconService', () => {
    // Assert
    // The component has a predefined list of technologies, so we expect getIcon to be called
    // for each technology in the list
    expect(mockIconService.getIcon).toHaveBeenCalled();

    // Check a few specific technologies to ensure they were requested
    expect(mockIconService.getIcon).toHaveBeenCalledWith('java');
    expect(mockIconService.getIcon).toHaveBeenCalledWith('angular');
    expect(mockIconService.getIcon).toHaveBeenCalledWith('github');
  });

  /**
   * Test that the component sanitizes icons with DomSanitizer
   */
  it('should sanitize icons with DomSanitizer', () => {
    // Assert
    expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
    expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith('<svg>test</svg>');
  });

  /**
   * Test that the component sets isDark flag based on IconService
   */
  it('should set isDark flag based on IconService', () => {
    // Assert
    expect(mockIconService.isDark).toHaveBeenCalled();

    // Find the github icon in the svgIcons array
    const githubIcon = component.svgIcons.find(icon => icon.name === 'github');
    expect(githubIcon).toBeDefined();
    expect(githubIcon?.isDark).toBe(true);

    // Find a non-dark icon in the svgIcons array
    const javaIcon = component.svgIcons.find(icon => icon.name === 'java');
    expect(javaIcon).toBeDefined();
    expect(javaIcon?.isDark).toBe(false);
  });

  /**
   * Test that the svgIcons array contains the expected number of items
   */
  it('should populate svgIcons array with all technologies', () => {
    // Assert
    // The component has a predefined list of technologies, so we expect svgIcons to have
    // the same number of items
    const expectedTechCount = 29; // Count from the techStack array in the component
    expect(component.svgIcons.length).toBe(expectedTechCount);
  });
});
