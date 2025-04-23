/**
 * Test suite for Project model
 *
 * This model defines the interface for project data used throughout the application.
 * It includes properties for project details like title, description, technologies, etc.
 */
import { Project } from './project';

describe('Project Model', () => {
  /**
   * Test that a valid Project object can be created
   */
  it('should create a valid Project object', () => {
    // Arrange
    const project: Project = {
      id: '1',
      title: 'Test Project',
      description: ['This is a test project'],
      technologies: ['Angular', 'TypeScript'],
      image: 'test.jpg',
      links: {
        github: 'https://github.com/test',
        visit: 'https://example.com'
      }
    };

    // Assert
    expect(project.id).toBe('1');
    expect(project.title).toBe('Test Project');
    expect(project.description).toEqual(['This is a test project']);
    expect(project.technologies).toEqual(['Angular', 'TypeScript']);
    expect(project.image).toBe('test.jpg');
    expect(project.links?.github).toBe('https://github.com/test');
    expect(project.links?.visit).toBe('https://example.com');
  });

  /**
   * Test that a Project object with optional properties omitted is valid
   */
  it('should create a valid Project object with optional properties omitted', () => {
    // Arrange
    const project: Project = {
      id: '2',
      title: 'Minimal Project',
      description: ['Minimal description'],
      technologies: ['JavaScript'],
      image: 'minimal.jpg'
      // links property is optional and omitted
    };

    // Assert
    expect(project.id).toBe('2');
    expect(project.title).toBe('Minimal Project');
    expect(project.description).toEqual(['Minimal description']);
    expect(project.technologies).toEqual(['JavaScript']);
    expect(project.image).toBe('minimal.jpg');
    expect(project.links).toBeUndefined();
  });
});
