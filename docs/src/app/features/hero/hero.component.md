# Hero Component

## Description
The Hero Component is the main landing section of the portfolio website. It serves as the first impression for visitors, showcasing the portfolio owner's name, profession, and a dynamic description of their skills. The component features a prominent profile image, social media links, and a call-to-action button for contacting the portfolio owner.

## Code Practices

### Angular Features Used
- **Component Composition**: Imports and uses multiple UI components (TypewriteComponent, CtaBtnComponent, RoundIconComponent)
- **Dependency Injection**: Injects StorageService and ActionService using the inject function
- **Optimized Images**: Uses NgOptimizedImage for performance-optimized image loading
- **Event Binding**: Uses event binding for social media link actions
- **Data Binding**: Uses interpolation to display dynamic content from the StorageService

### Layout Design
- Implements a balanced layout with text content and profile image
- Creates visual hierarchy with heading, subheading, and description
- Organizes social links in an accessible, visually appealing manner
- Uses semantic HTML (section element) with proper ID for navigation

## Component Working

### Content Display
- Shows the portfolio owner's name as the main heading
- Displays the profession as a subheading
- Uses the TypewriteComponent to create an animated description
- Presents a professional profile image with optimized loading

### Social Media Integration
- Provides quick access to professional profiles and contact methods
- Implements methods to open LinkedIn, GitHub, WhatsApp, and email
- Uses the RoundIconComponent for consistent icon styling
- Leverages the ActionService for external navigation

### Call to Action
- Incorporates a prominent email contact button using CtaBtnComponent
- Creates a clear path for visitors to initiate contact
- Enhances user engagement through strategic placement

### Data Management
- Retrieves personal information from the StorageService
- Maintains separation of concerns by delegating data storage to a service
- Ensures consistent data usage across the application
