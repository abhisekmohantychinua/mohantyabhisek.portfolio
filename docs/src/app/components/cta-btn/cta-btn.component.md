# CTA Button Component

## Description
The CTA (Call to Action) Button Component is a reusable button that provides a prominent way for users to contact the portfolio owner via email. It combines an email icon with text to create a visually appealing and intuitive contact button.

## Code Practices

### Angular Features Used
- **Dependency Injection**: Injects multiple services using the inject function
- **Computed Values**: Uses computed() for derived state (icon SVG)
- **Event Binding**: Uses event binding for the click action
- **Security**: Uses DomSanitizer to safely render SVG content
- **Service Integration**: Integrates with multiple services for functionality

### Button Design
- Combines icon and text for better visual communication
- Uses semantic HTML (button element) for proper interaction
- Maintains consistent styling through dedicated CSS classes

## Component Working

### Icon Rendering
- Retrieves the mail icon SVG from the IconService
- Sanitizes the SVG content using DomSanitizer
- Renders the SVG content inside a span using [innerHTML]

### Email Action
- Implements an onClick method to handle user interaction
- Retrieves the email address from the StorageService
- Uses the ActionService to create and open a mailto link
- Provides a direct way for users to contact the portfolio owner

### User Experience
- Offers a clear call to action with descriptive text ("Email Me")
- Provides visual feedback through the button's styling
- Ensures accessibility by using proper semantic elements
- Creates a seamless experience by directly opening the user's email client
