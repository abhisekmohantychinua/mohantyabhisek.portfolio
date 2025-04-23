import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesComponent } from './case-studies.component';
import { StorageService } from '../../core/services/storage.service';
import { CaseStudy } from '../../core/models/case-study';

/**
 * Test suite for CaseStudiesComponent
 *
 * This component is responsible for:
 * 1. Displaying the case studies section with case study information
 * 2. Getting case studies data from StorageService
 */
describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;
  let mockStorageService: Partial<StorageService>;
  let mockCaseStudies: CaseStudy[];

  beforeEach(async () => {
    // Create mock case studies data
    mockCaseStudies = [
      {
        title: 'Test Case Study 1',
        description: 'Test description 1',
        detail: [
          {
            title: 'Section 1',
            body: 'Content for section 1'
          },
          {
            title: 'Section 2',
            body: 'Content for section 2'
          }
        ],
        tags: ['tag1', 'tag2', 'tag3']
      },
      {
        title: 'Test Case Study 2',
        description: 'Test description 2',
        detail: [
          {
            title: 'Section A',
            body: 'Content for section A'
          }
        ],
        tags: ['tag4', 'tag5']
      }
    ];

    // Create mock service
    mockStorageService = {
      caseStudies: mockCaseStudies
    };

    await TestBed.configureTestingModule({
      imports: [CaseStudiesComponent],
      providers: [
        { provide: StorageService, useValue: mockStorageService }
      ]
    })
    .compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(CaseStudiesComponent, {
      set: {
        imports: [],
        template: '<div>Case Studies Component</div>'
      }
    });

    fixture = TestBed.createComponent(CaseStudiesComponent);
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
   * Test that the component gets case studies data from StorageService
   */
  it('should get case studies data from StorageService', () => {
    // Assert
    expect(component.caseStudies).toBe(mockCaseStudies);
    expect(component.caseStudies.length).toBe(2);
    expect(component.caseStudies[0].title).toBe('Test Case Study 1');
    expect(component.caseStudies[1].title).toBe('Test Case Study 2');
    expect(component.caseStudies[0].detail.length).toBe(2);
    expect(component.caseStudies[1].detail.length).toBe(1);
  });
});
