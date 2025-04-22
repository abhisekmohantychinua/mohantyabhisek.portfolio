# Case Study Card Component

## Description
The Case Study Card Component is a collapsible card that displays detailed information about a case study. It provides an expandable interface that shows a summary by default and reveals more detailed information when expanded. This component is used to present in-depth analysis of projects in a space-efficient manner.

## Code Practices

### Angular Features Used
- **Modern Input API**: Uses Angular's new input() API with required values
- **Signals API**: Uses signal() for reactive state management
- **Component Composition**: Imports and uses the RoundIconComponent
- **Event Binding**: Uses event binding for the toggle action
- **Attribute Binding**: Uses [attr.data-open] for styling based on state
- **For Loop**: Uses Angular's @for loop to iterate through details and tags

### Data Structure
- Accepts a CaseStudy object with structured data
- Organizes information hierarchically (title, description, details, tags)
- Uses semantic HTML elements for proper document structure

## Component Working

### Expandable Interface
- Maintains an open/closed state using a signal
- Provides a toggle method to switch between states
- Uses the data-open attribute for CSS styling based on state

### Content Organization
- Displays the case study title in the header
- Shows a brief description below the header
- Lists detailed information in expandable sections
- Organizes related technologies as tags

### User Interaction
- Provides a toggle button using the RoundIconComponent
- Expands/collapses the card when the button is clicked
- Visually indicates the current state (expanded or collapsed)

### Detail Rendering
- Iterates through the case study details array
- Renders each detail with a title and body
- Maintains consistent styling across all detail sections

### Tag Display
- Shows all related technologies as tags
- Renders tags in a horizontal list for easy scanning
- Provides visual distinction for the tags section
