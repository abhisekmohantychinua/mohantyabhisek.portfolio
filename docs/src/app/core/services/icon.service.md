# Icon Service

## Description
The Icon Service is a centralized repository for SVG icons used throughout the portfolio application. It provides a consistent way to access and render SVG icons as HTML strings, eliminating the need for external icon libraries or multiple SVG files. The service maintains a collection of pre-defined SVG icons that can be easily retrieved by name.

## Code Practices

### Angular Features Used
- **Injectable Decorator**: Uses Angular's @Injectable decorator to make the service available for dependency injection
- **Root Provider**: Configured with providedIn: 'root' for application-wide singleton instance
- **Error Handling**: Implements error throwing for missing icons to facilitate debugging

### Service Design
- Follows the repository pattern by centralizing icon resources
- Stores SVG icons as strings for direct HTML insertion
- Provides a simple, consistent API for icon retrieval
- Implements categorization for dark-themed icons

## Service Working

### Icon Storage
The service maintains a private dictionary of SVG icons:
```typescript
private icons: { [key: string]: string } = { ... }
```
This dictionary maps icon names (keys) to SVG markup strings (values), containing a comprehensive collection of technology and UI icons.

### Icon Retrieval Method
```typescript
getIcon(iconName: string): string
```
This method:
- Takes an icon name as a parameter
- Returns the SVG markup as a string if the icon exists
- Throws an error if the requested icon is not found

### Theme Detection Method
```typescript
isDark(iconName: string): boolean
```
This method:
- Identifies icons that are designed with dark backgrounds
- Returns true if the icon is in the predefined dark icon set
- Used for applying appropriate styling to icon containers

### Usage in Components
- Used by the RoundIconComponent to render icons in buttons
- Integrated with DomSanitizer to safely render SVG content
- Consumed by various components that need icon display:
  - NavbarComponent for menu and close icons
  - HeroComponent for social media icons
  - ProjectCardComponent for GitHub and visit icons

### Integration Pattern
- Components inject the IconService using Angular's dependency injection
- SVG content is retrieved and sanitized before rendering
- Error handling is implemented at the component level
