/**
 * Test suite for CaseStudy model
 *
 * This model defines the interface for case study data used throughout the application.
 * It includes properties for case study details like title, description, detail sections, and tags.
 */
import { CaseStudy } from './case-study';

describe('CaseStudy Model', () => {
  /**
   * Test that a valid CaseStudy object can be created
   */
  it('should create a valid CaseStudy object', () => {
    // Arrange
    const caseStudy: CaseStudy = {
      title: 'Test Case Study',
      description: 'This is a test case study description',
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
    };

    // Assert
    expect(caseStudy.title).toBe('Test Case Study');
    expect(caseStudy.description).toBe('This is a test case study description');
    expect(caseStudy.detail.length).toBe(2);
    expect(caseStudy.detail[0].title).toBe('Section 1');
    expect(caseStudy.detail[0].body).toBe('Content for section 1');
    expect(caseStudy.detail[1].title).toBe('Section 2');
    expect(caseStudy.detail[1].body).toBe('Content for section 2');
    expect(caseStudy.tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  /**
   * Test that a CaseStudy object with minimal content is valid
   */
  it('should create a valid CaseStudy object with minimal content', () => {
    // Arrange
    const caseStudy: CaseStudy = {
      title: 'Minimal Case Study',
      description: 'Minimal description',
      detail: [],
      tags: []
    };

    // Assert
    expect(caseStudy.title).toBe('Minimal Case Study');
    expect(caseStudy.description).toBe('Minimal description');
    expect(caseStudy.detail.length).toBe(0);
    expect(caseStudy.tags.length).toBe(0);
  });
});
