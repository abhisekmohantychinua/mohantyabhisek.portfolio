# Project Card Component

## Description
The Project Card Component is an interactive card that displays information about a project. It features an expandable interface that shows a summary by default and reveals more detailed information when expanded. The component showcases project images, technologies used, and provides links to GitHub repositories and live demos.

## Code Practices

### Angular Features Used
- **Modern Input API**: Uses Angular's new input() API with required values
- **Signals API**: Uses signal() for reactive state management
- **Component Composition**: Imports and uses the RoundIconComponent
- **Optimized Images**: Uses NgOptimizedImage for performance-optimized image loading
- **Conditional Rendering**: Uses Angular's @if statements for conditional DOM rendering
- **For Loop**: Uses Angular's @for loop to iterate through technologies and descriptions
- **Attribute Binding**: Uses [attr.data-state] for styling based on state
- **Accessibility Attributes**: Dynamically sets tabindex and aria-hidden based on state

### Data Structure
- Accepts a Project object with structured data
- Organizes information hierarchically (image, title, links, technologies, description)
- Uses semantic HTML elements for proper document structure

## Component Working

### Expandable Interface
- Maintains an open/closed state using a signal
- Provides a toggle method to switch between states
- Uses the data-state attribute for CSS styling based on state

### Content Organization
- Displays the project image and title prominently
- Shows technologies used in the project
- Provides a detailed description in an expandable section
- Includes links to GitHub repository and live demo when available

### User Interaction
- Offers a toggle button to expand/collapse the card
- Provides links to GitHub and live demo using RoundIconComponent
- Expands to show detailed project description when toggled

### Navigation Links
- Implements methods to open GitHub repository and live demo links
- Uses the ActionService to handle external navigation
- Conditionally renders links based on their availability in the project data

### Accessibility
- Manages focus and screen reader visibility based on card state
- Hides detailed content from screen readers when collapsed
- Enables keyboard navigation only for visible elements
