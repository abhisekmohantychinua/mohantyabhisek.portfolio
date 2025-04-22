# Round Icon Component

## Description
The Round Icon component is a reusable UI element that displays SVG icons within a round button. It's designed to be flexible, accessible, and easy to integrate into other components. This component is used throughout the application for various icon-based interactions, including the menu toggle in the navbar.

## Code Practices

### Angular Features Used
- **Modern Input API**: Uses Angular's new input() API with required and default values
- **Output API**: Uses output() for event emission
- **Computed Values**: Uses computed() for derived state
- **Dependency Injection**: Injects services using the inject function
- **Security**: Uses DomSanitizer to safely render SVG content
- **Error Handling**: Implements try/catch for error handling when retrieving icons

### Accessibility
- Configurable accessibility through an input property
- Properly sets aria-hidden attribute based on accessibility setting
- Manages tabindex to control keyboard focus
- Uses semantic HTML (button element) for proper interaction

## Component Working

### Inputs
- **icon** (required): The name of the icon to display
- **accessibility** (optional, default: true): Whether the button should be accessible

### Outputs
- **btnClick**: Event emitted when the button is clicked

### Icon Rendering
1. Receives an icon name as input
2. Retrieves the SVG content from the IconService
3. Sanitizes the SVG content using DomSanitizer
4. Renders the SVG content inside the button using [innerHTML]
5. Handles errors gracefully if the icon is not found

### Interaction
- Emits a btnClick event when clicked
- Can be disabled from keyboard navigation when accessibility is set to false
- Maintains proper button semantics for screen readers and keyboard users
