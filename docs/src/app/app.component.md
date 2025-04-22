# App Component

## Description
The App Component is the root component of the portfolio application. It serves as the main container for all other components and establishes the overall page structure. This component orchestrates the layout of the portfolio, initializes core services, and handles global keyboard shortcuts.

## Code Practices

### Angular Features Used
- **Component Composition**: Imports and composes multiple feature and UI components
- **Dependency Injection**: Injects multiple services using the inject function
- **Host Listeners**: Uses @HostListener to handle global keyboard events
- **Lifecycle Hooks**: Implements OnInit for initialization logic
- **Semantic HTML**: Uses semantic HTML elements (header, main, footer) for proper document structure

### Application Structure
- Follows a modular architecture with clear separation of concerns
- Organizes content in a logical flow for optimal user experience
- Uses container classes for consistent styling and layout

## Component Working

### Initialization
On initialization, the component:
1. Initializes the theme service to apply the saved theme preference
2. Sets up the page structure with header, main content, and footer sections

### Layout Organization
The component organizes the portfolio content in the following order:
1. Hero section (introduction)
2. Tech Stack section (skills and technologies)
3. Projects section (portfolio projects)
4. Case Studies section (detailed project analyses)
5. About Me section (personal information)
6. Philosophy section (professional philosophy)
7. Call to Action section (contact information)

### Keyboard Shortcuts
- Implements a keyboard shortcut (pressing 'r') to access the resume PDF
- Includes safeguards to prevent triggering shortcuts when typing in input fields

### Service Integration
- Uses ActionService for navigation actions
- Uses StorageService for data persistence
- Uses ThemeService for theme management
