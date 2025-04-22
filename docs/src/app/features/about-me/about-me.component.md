# About Me Component

## Description
The About Me Component is a section of the portfolio that provides personal information about the portfolio owner. It combines visual elements with textual content to give visitors insight into the person behind the professional work. The component features multiple images representing the portfolio owner's profile, workspace, and inspirations, alongside paragraphs of biographical text.

## Code Practices

### Angular Features Used
- **Component Composition**: Imports and uses the TitleComponent for consistent section headings
- **Dependency Injection**: Injects the StorageService using the inject function
- **Optimized Images**: Uses NgOptimizedImage for performance-optimized image loading
- **For Loop**: Uses Angular's @for loop to iterate through biographical text paragraphs
- **Data Binding**: Uses interpolation to display dynamic content from the StorageService

### Layout Design
- Implements a balanced layout with images and text content
- Creates visual interest through multiple related images
- Uses semantic HTML (section element) with proper ID for navigation
- Organizes content in a clear, readable format

## Component Working

### Section Structure
- Uses the TitleComponent to display a consistent "About Me" heading
- Divides content into two main containers: images and text
- Creates a semantic section with an ID for navigation targeting

### Image Display
- Shows three related images (profile, workspace, inspiration)
- Uses optimized image loading for better performance
- Arranges images in a visually appealing layout
- Provides appropriate alt text for accessibility

### Content Rendering
- Retrieves biographical text from the StorageService
- Iterates through the text array to create multiple paragraphs
- Maintains consistent styling through dedicated CSS classes
- Presents personal information in a structured, readable format

### Data Management
- Retrieves about me content from the StorageService
- Maintains separation of concerns by delegating data storage to a service
- Ensures consistent data usage across the application
