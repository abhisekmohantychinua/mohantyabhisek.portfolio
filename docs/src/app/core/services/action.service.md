# Action Service

## Description
The Action Service is a utility service that provides navigation functionality throughout the portfolio application. It offers a simple method for redirecting users to external URLs, such as GitHub repositories, live projects, or contact links, in a new browser tab.

## Code Practices

### Angular Features Used
- **Injectable Decorator**: Uses Angular's @Injectable decorator to make the service available for dependency injection
- **Root Provider**: Configured with providedIn: 'root' for application-wide singleton instance
- **Browser API Integration**: Leverages the browser's window.open API for navigation

### Service Design
- Follows the single responsibility principle by focusing solely on navigation actions
- Provides a simple, consistent API for external navigation
- Implements defensive programming by checking for URL existence before navigation

## Service Working

### Navigation Method
The service provides a single method:

```typescript
redirectTo(url?: string): void
```

This method:
- Takes an optional URL string parameter
- Opens the URL in a new browser tab if provided
- Safely handles undefined or null URL values by not performing any action

### Usage in Components
- Used by various components to handle external navigation:
  - HeroComponent: For social media links
  - ProjectCardComponent: For GitHub and live project links
  - FooterComponent: For resume download
  - CtaBtnComponent: For email contact

### Integration Pattern
- Components inject the ActionService using Angular's dependency injection
- Navigation actions are delegated to the service rather than implemented in components
- This creates a consistent navigation experience throughout the application
