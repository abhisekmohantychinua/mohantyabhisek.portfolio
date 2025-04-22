# Theme Model

## Description
The Theme Model defines the available theme options for the portfolio application. It provides a type-safe way to represent and validate theme choices, ensuring that only valid theme values ('light' or 'dark') are used throughout the application.

## Type Definition
The Theme type is a TypeScript type alias that restricts theme values to two specific string literals:

- **'light'**: Represents the light theme option
- **'dark'**: Represents the dark theme option

## Type Guard Function
The model includes a type guard function to validate theme values:

```typescript
function isValidTheme(value: string): value is Theme {
  return value === 'light' || value === 'dark';
}
```

This function:
- Takes a string parameter
- Returns a boolean indicating if the string is a valid Theme
- Uses TypeScript's type predicate syntax (`value is Theme`) for type narrowing

## Usage in Application

### Type Safety
- Provides compile-time checking for theme values
- Prevents invalid theme values from being used
- Enables IDE autocompletion for theme options

### Theme Validation
- The isValidTheme function allows runtime validation of theme values
- Useful when handling user input or stored preferences
- Ensures only valid themes are applied to the application

### Integration with Services
- Used by the ThemeService to manage theme state
- Enables type-safe theme switching in the NavbarComponent
- Ensures consistent theme handling across the application

### Extensibility
- The type system allows for easy extension if new themes are added
- The type guard can be updated to accommodate additional theme options
- Maintains type safety even as the theme system evolves
