# Footer Component

## Description
The Footer Component is a site-wide footer that provides navigation links, a resume download action, and copyright information. It serves as the bottom section of the portfolio website, offering additional navigation options and important links.

## Code Practices

### Angular Features Used
- **Component Composition**: Imports and uses the RoundIconComponent
- **Dependency Injection**: Injects the ActionService using the inject function
- **Event Binding**: Uses event binding for the resume download action
- **Semantic HTML**: Uses semantic HTML elements (section, nav, ul, li) for proper document structure

### Navigation Structure
- Organizes links in a structured navigation list
- Provides external links with appropriate target attributes
- Groups related actions together for better user experience

## Component Working

### Navigation Section
- Provides links to important resources:
  - GitHub repository
  - Documentation
  - Template creation
  - Template request

### Action Section
- Offers a resume download functionality
- Uses the RoundIconComponent for the download button
- Provides a descriptive label for the action

### Copyright Section
- Displays copyright information
- Includes licensing details with a link to the Creative Commons license
- Uses the appropriate copyright symbol

### Resume Download
- Implements a downloadResume method
- Uses the ActionService to redirect to the resume PDF file
- Triggered by clicking the download button
