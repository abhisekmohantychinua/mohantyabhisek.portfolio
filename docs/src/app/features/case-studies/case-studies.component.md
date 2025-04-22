# Case Studies Component

## Description
The Case Studies Component is a section of the portfolio that showcases detailed analyses of significant projects. It presents in-depth case studies that highlight the portfolio owner's problem-solving approach, technical decisions, and project outcomes. This component uses expandable cards to present comprehensive information in a space-efficient manner.

## Code Practices

### Angular Features Used
- **Component Composition**: Imports and uses the TitleComponent and CaseStudyCardComponent
- **Dependency Injection**: Injects the StorageService using the inject function
- **For Loop**: Uses Angular's @for loop to iterate through case studies
- **Data Binding**: Passes case study data to child components using property binding
- **Semantic HTML**: Uses semantic section element with proper ID for navigation

### Layout Design
- Organizes case studies in a vertical layout for easy scanning
- Uses consistent styling through dedicated CSS classes
- Creates a semantic section with an ID for navigation targeting
- Maintains visual consistency with other portfolio sections

## Component Working

### Section Structure
- Uses the TitleComponent to display a consistent "Case Studies" heading
- Creates a semantic section with an ID for navigation targeting
- Provides a container for multiple case study cards

### Data Management
- Retrieves case studies data from the StorageService
- Maintains separation of concerns by delegating data storage to a service
- Ensures consistent data usage across the application

### Case Study Rendering
- Iterates through the case studies array from the StorageService
- Creates a CaseStudyCardComponent for each case study
- Passes the case study data to each card component via property binding
- Allows each card to handle its own display and interaction logic

### Component Integration
- Seamlessly integrates with the CaseStudyCardComponent for detailed display
- Leverages the TitleComponent for consistent section headings
- Fits within the overall portfolio layout and navigation structure
