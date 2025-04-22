# Navbar Component

## Description
The Navbar component is a responsive navigation bar that provides site-wide navigation and theme switching functionality. It adapts to different screen sizes, showing a hamburger menu on mobile devices and a full navigation bar on larger screens.

## Code Practices

### Angular Features Used
- **Signals API**: Uses Angular's signal API for reactive state management
- **Dependency Injection**: Injects the ThemeService using the inject function
- **Component Composition**: Imports and uses the RoundIconComponent
- **Event Binding**: Uses event binding for click events
- **Host Listeners**: Uses @HostListener to respond to window resize events
- **Conditional Rendering**: Uses Angular's @if statements for conditional DOM rendering
- **Attribute Binding**: Uses [attr.data-menu-hidden] for styling based on state

### Responsive Design
- Automatically adjusts layout based on screen width
- Toggles between hamburger menu and full navigation based on screen size
- Uses CSS attributes for responsive styling

## Component Working

### Initialization
On initialization, the component:
1. Checks the window width
2. Sets the menu visibility based on screen size (hidden on mobile)

### Responsive Behavior
- Listens for window resize events
- Updates menu visibility when screen size changes
- Threshold is set at 480px width

### Navigation
- Provides smooth scrolling to page sections
- Prevents default anchor behavior
- Scrolls to the target element with smooth animation

### Theme Switching
- Offers a dropdown menu for theme selection
- Allows switching between dark and light themes
- Uses the ThemeService to apply theme changes

### Menu Toggle
- Provides a toggle button (hamburger/close icon)
- Shows/hides the navigation menu on mobile devices
- Uses the RoundIconComponent for the toggle button
