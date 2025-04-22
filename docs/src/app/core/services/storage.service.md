# Storage Service

## Description
The Storage Service serves a dual purpose in the portfolio application. First, it acts as a centralized data repository, storing all the content displayed throughout the application, including personal information, projects, and case studies. Second, it provides a wrapper around the browser's localStorage API, enabling persistent storage of user preferences with proper platform checks for server-side rendering compatibility.

## Code Practices

### Angular Features Used
- **Injectable Decorator**: Uses Angular's @Injectable decorator to make the service available for dependency injection
- **Root Provider**: Configured with providedIn: 'root' for application-wide singleton instance
- **Platform Detection**: Uses isPlatformBrowser to ensure localStorage operations only run in browser environments
- **Dependency Injection**: Injects PLATFORM_ID to determine the current platform
- **Error Handling**: Implements try/catch blocks for safe JSON parsing

### Service Design
- Combines data repository and storage utility functions in a single service
- Provides type-safe access to stored data with generics
- Implements defensive programming with platform checks and error handling
- Centralizes all application content for easy maintenance and updates

## Service Working

### Data Repository
The service stores various types of content used throughout the application:
- **Personal Information**: Name, email, profession, social media links
- **Biography**: About me text sections
- **Projects**: Detailed information about portfolio projects
- **Case Studies**: In-depth analyses of significant work

This centralized approach ensures consistent data access across all components.

### Local Storage Methods
```typescript
setItem(key: string, value: any): void
```
- Stores data in localStorage after converting it to JSON
- Only executes in browser environments
- Used primarily for theme preferences

```typescript
getItem<T>(key: string): T | null
```
- Retrieves and parses data from localStorage
- Implements special handling for theme values
- Returns typed data through generics
- Includes error handling for parsing failures

```typescript
removeItem(key: string): void
```
- Removes data from localStorage
- Only executes in browser environments

### Platform Compatibility
- All localStorage operations are wrapped in platform checks
- Prevents errors during server-side rendering
- Ensures the application works in both browser and server environments

### Usage in Components
- Used by various components to access application content:
  - HeroComponent: For personal information and social links
  - ProjectsComponent: For project data
  - CaseStudiesComponent: For case study information
  - AboutMeComponent: For biographical content
- Used by the ThemeService to persist theme preferences
