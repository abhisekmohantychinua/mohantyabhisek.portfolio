import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { StorageService } from '../../core/services/storage.service';
import { Project } from '../../core/models/project';

/**
 * Test suite for ProjectsComponent
 *
 * This component is responsible for:
 * 1. Displaying the projects section with project information
 * 2. Getting projects data from StorageService
 */
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let mockStorageService: Partial<StorageService>;
  let mockProjects: Project[];

  beforeEach(async () => {
    // Create mock projects data
    mockProjects = [
      {
        id: '1',
        title: 'Test Project 1',
        description: ['Test description 1'],
        technologies: ['Tech 1', 'Tech 2'],
        image: 'test1.jpg',
        links: {
          github: 'https://github.com/test/project1'
        }
      },
      {
        id: '2',
        title: 'Test Project 2',
        description: ['Test description 2'],
        technologies: ['Tech 3', 'Tech 4'],
        image: 'test2.jpg',
        links: {
          github: 'https://github.com/test/project2',
          visit: 'https://example.com/project2'
        }
      }
    ];

    // Create mock service
    mockStorageService = {
      projects: mockProjects
    };

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [
        { provide: StorageService, useValue: mockStorageService }
      ]
    })
    .compileComponents();

    // Override component to simplify template dependencies
    TestBed.overrideComponent(ProjectsComponent, {
      set: {
        imports: [],
        template: '<div>Projects Component</div>'
      }
    });

    fixture = TestBed.createComponent(ProjectsComponent);
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
   * Test that the component gets projects data from StorageService
   */
  it('should get projects data from StorageService', () => {
    // Assert
    expect(component.projects).toBe(mockProjects);
    expect(component.projects.length).toBe(2);
    expect(component.projects[0].title).toBe('Test Project 1');
    expect(component.projects[1].title).toBe('Test Project 2');
  });
});
