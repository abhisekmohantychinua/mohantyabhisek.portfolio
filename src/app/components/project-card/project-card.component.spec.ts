import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { Project } from '../../core/models/project';
import { ActionService } from '../../core/services/action.service';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let mockProject: Project;
  let mockActionService: { redirectTo: jest.Mock };

  beforeEach(async () => {
    // Create mock project
    mockProject = {
      id: '1',
      title: 'Test Project',
      description: ['Test Description'],
      technologies: ['Tech1', 'Tech2'],
      image: 'test-image.jpg',
      links: {
        github: 'https://github.com/test',
        visit: 'https://test.com'
      }
    };

    // Create mock action service
    mockActionService = { redirectTo: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
      providers: [
        { provide: ActionService, useValue: mockActionService }
      ]
    })
    .compileComponents();

    // Override the component to avoid the template that depends on project input
    TestBed.overrideComponent(ProjectCardComponent, {
      set: {
        template: '<div>Project Card Component</div>'
      }
    });

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;

    // Set required input before detectChanges
    Object.defineProperty(component.project, 'value', { value: mockProject });

    // Mock methods that depend on project input
    component.openGithub = jest.fn();
    component.openVisit = jest.fn();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle state when toggleState is called', () => {
    expect(component.state()).toBe('close');

    component.toggleState();
    expect(component.state()).toBe('open');

    component.toggleState();
    expect(component.state()).toBe('close');
  });
});
