# Portfolio Project Documentation

Welcome to the comprehensive documentation for Abhisek Mohanty's portfolio project. This documentation is designed to help experienced developers understand the project structure, customize it for their own use, and contribute to its development.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Theme System](#theme-system)
4. [Additional Resources](#additional-resources)

## Project Overview

This project is a modern, responsive portfolio website built with Angular. It showcases projects, case studies, technical skills, and professional philosophy. The portfolio features:

- Responsive design that works across all device sizes
- Theme customization (light/dark modes)
- Modular architecture for easy extension
- Performance-optimized loading
- SEO-friendly structure

## Technical Architecture

### Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── core/             # Core functionality
│   │   ├── models/       # Data models
│   │   └── services/     # Application services
│   └── features/         # Feature modules
├── theme/                # Theme system
│   ├── dark/             # Dark theme
│   └── light/            # Light theme
└── public/               # Static assets
```

### Component Documentation

#### App Component
- [App Component](src/app/app.component.md)

#### UI Components
- [Navbar Component](src/app/components/navbar/navbar.component.md)
- [Round Icon Component](src/app/components/round-icon/round-icon.component.md)
- [Footer Component](src/app/components/footer/footer.component.md)
- [Case Study Card Component](src/app/components/case-study-card/case-study-card.component.md)
- [CTA Button Component](src/app/components/cta-btn/cta-btn.component.md)
- [Project Card Component](src/app/components/project-card/project-card.component.md)
- [Title Component](src/app/components/title/title.component.md)
- [Typewrite Component](src/app/components/typewrite/typewrite.component.md)

#### Feature Components
- [Hero Component](src/app/features/hero/hero.component.md)
- [About Me Component](src/app/features/about-me/about-me.component.md)
- [Case Studies Component](src/app/features/case-studies/case-studies.component.md)
- [CTA Component](src/app/features/cta/cta.component.md)

### Core

#### Models
- [Case Study Model](src/app/core/models/case-study.md)
- [Project Model](src/app/core/models/project.md)
- [Theme Model](src/app/core/models/theme.md)

#### Services
- [Action Service](src/app/core/services/action.service.md)
- [Icon Service](src/app/core/services/icon.service.md)
- [Storage Service](src/app/core/services/storage.service.md)
- [Theme Service](src/app/core/services/theme.service.md)

### Testing

This project uses Jest as the primary testing framework for unit testing Angular components and services.

#### Testing Philosophy

The testing approach in this project follows these key principles:

1. **Component and Service Isolation**: Each component and service is tested in isolation to ensure they function correctly independently.
2. **Behavior-Driven Testing**: Tests focus on the behavior of components and services rather than implementation details.
3. **Comprehensive Documentation**: Each test file includes detailed comments explaining the purpose and context of each test.
4. **Mocking Dependencies**: External dependencies are mocked to ensure tests are fast, reliable, and focused.

#### Testing Tools

The project uses the following testing tools:

- **Jest**: Primary testing framework
- **ts-jest**: TypeScript preprocessor for Jest
- **jest-preset-angular**: Angular-specific Jest configuration
- **@types/jest**: TypeScript definitions for Jest

#### Test File Structure

Each test file follows a consistent structure:

1. **File Header Comment**: Explains the purpose of the test suite and what the component/service being tested is responsible for.
2. **Test Suite Setup**: Configures the testing module and creates instances of the component/service being tested.
3. **Individual Tests**: Each test has a descriptive name and is preceded by a comment explaining what it's testing and expected behavior.
4. **Arrange-Act-Assert Pattern**: Tests follow the AAA pattern:
   - **Arrange**: Set up the test conditions
   - **Act**: Perform the action being tested
   - **Assert**: Verify the expected outcome

#### Running Tests

To run the tests in this project:

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch
```

#### Test Coverage

Jest is configured to generate coverage reports. After running the tests, you can find the coverage report in the `coverage` directory. The coverage report shows:

- Percentage of code covered by tests
- Lines, statements, branches, and functions covered
- Visual indication of which lines are covered and which are not

#### Writing New Tests

When writing new tests for the project, follow these guidelines:

1. Create a `.spec.ts` file next to the file you want to test
2. Follow the existing test file structure
3. Include a detailed comment at the top of the file explaining what the component/service does
4. Include comments before each test explaining what it's testing
5. Use the AAA pattern (Arrange-Act-Assert)
6. Mock external dependencies
7. Test both success and failure scenarios

#### Example Test File

Here's an example of a well-structured test file from the project:

```typescript
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
});
```

#### Test Files in the Project

The project includes the following test files:

1. **app.component.spec.ts**: Tests for the main application component
2. **action.service.spec.ts**: Tests for the action service that handles external URL redirects
3. **storage.service.spec.ts**: Tests for the storage service that manages localStorage operations
4. **theme.service.spec.ts**: Tests for the theme service that handles theme switching
5. **icon.service.spec.ts**: Tests for the icon service that provides SVG icons
6. **typewrite.component.spec.ts**: Tests for the typewriter effect component

Each of these files includes comprehensive tests for the respective component or service.

## Theme System

The project implements a flexible theme system that allows for easy customization and extension. Themes are organized in separate directories with their own SCSS files:

```
theme/
├── dark/
│   ├── components/       # Component-specific styles
│   ├── features/         # Feature-specific styles
│   ├── util/             # Utilities and variables
│   └── dark.scss         # Main theme entry point
└── light/
    ├── components/       # Component-specific styles
    ├── features/         # Feature-specific styles
    ├── util/             # Utilities and variables
    └── light.scss        # Main theme entry point
```

## Additional Resources

- [Requesting the Design as a Template](template-request.md)
- [Contributing Your Own Themes](contributing-themes.md)
- [Forking and Using This Repository](forking-guide.md)
- [Accessibility Documentation](accessibility.md)

## License and Attribution

This project is licensed under the [Creative Commons Attribution 4.0 International License](../LICENSE.md). Please review the [attribution requirements](../ATTRIBUTION.md) before using or adapting this project.

---

© 2025 Abhisek Mohanty. All rights reserved.
