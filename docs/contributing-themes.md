# Contributing Your Own Themes

This guide is designed for developers who want to contribute custom themes to this portfolio project. By following these instructions, you can create and submit your own themes that others can use.

## Prerequisites

Before you start creating a theme, make sure you have:

- Basic knowledge of SCSS/CSS
- Understanding of the project structure
- Familiarity with Angular's styling approach
- Git and GitHub knowledge for submitting contributions

## Theme Structure

Themes in this project follow a specific structure:

```
theme/
└── your-theme-name/
    ├── components/       # Component-specific styles
    │   ├── _navbar.scss
    │   ├── _footer.scss
    │   └── ...
    ├── features/         # Feature-specific styles
    │   ├── _hero.scss
    │   ├── _projects.scss
    │   └── ...
    ├── util/             # Utilities and variables
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   ├── _pallete.scss
    │   └── ...
    └── your-theme-name.scss  # Main theme entry point
```

## Creating a New Theme

### 1. Start by Duplicating an Existing Theme

The easiest way to create a new theme is to duplicate an existing one:

```bash
# From the project root
cp -r src/theme/light src/theme/your-theme-name
```

### 2. Modify the Theme Variables

The most important file to modify is `util/_pallete.scss`, which contains the color variables:

```scss
// Example from src/theme/light/util/_pallete.scss
$background: #ffffff;
$primary: #000000;
$secondary: #666666;
// ... other variables
```

### 3. Customize Component Styles

After setting up your base variables, you can customize specific component styles in the `components/` and `features/` directories.

### 4. Update the Main Theme File

Rename and update the main theme file:

```scss
// src/theme/your-theme-name/your-theme-name.scss
@use "util" as *;
@use "components";
@use "features";

// Your global theme styles here
```

### 5. Test Your Theme

To test your theme, you'll need to:

1. Build the theme:
   ```bash
   npx sass src/theme/:public/themes/ --no-source-map
   ```

2. Modify the theme service to include your theme option:
   ```typescript
   // src/app/core/models/theme.ts
   export type Theme = 'light' | 'dark' | 'your-theme-name';
   
   export function isValidTheme(value: string): value is Theme {
     return value === 'light' || value === 'dark' || value === 'your-theme-name';
   }
   ```

3. Add your theme to the navbar dropdown:
   ```html
   <!-- src/app/components/navbar/navbar.component.html -->
   <ul class="nav-dropdown-list">
     <li class="nav-dropdown-list-item" (click)="changeTheme('dark')">Dark</li>
     <li class="nav-dropdown-list-item" (click)="changeTheme('light')">Light</li>
     <li class="nav-dropdown-list-item" (click)="changeTheme('your-theme-name')">Your Theme Name</li>
   </ul>
   ```

## Submitting Your Theme

### 1. Fork the Repository

Start by forking the repository on GitHub.

### 2. Create a Branch

Create a branch for your theme:

```bash
git checkout -b theme/your-theme-name
```

### 3. Add Your Theme Files

Add your theme files to the repository:

```bash
git add src/theme/your-theme-name
git add src/app/core/models/theme.ts
git add src/app/components/navbar/navbar.component.html
```

### 4. Commit and Push

Commit your changes and push to your fork:

```bash
git commit -m "Add your-theme-name theme"
git push origin theme/your-theme-name
```

### 5. Create a Pull Request

Create a pull request on GitHub with the following information:

- Theme name and description
- Screenshots of the theme in action
- Any special features or considerations
- Your contact information (optional)

## Theme Guidelines

To ensure your theme is accepted, follow these guidelines:

1. **Accessibility**: Ensure your theme meets WCAG 2.1 AA standards
2. **Responsiveness**: Your theme should work on all device sizes
3. **Performance**: Keep file sizes reasonable and optimize CSS
4. **Naming**: Use clear, descriptive names for variables and classes
5. **Documentation**: Include comments in your code where necessary

## Need Help?

If you need assistance with creating or submitting a theme, feel free to:

- Open an issue on GitHub
- Contact the project maintainer directly
- Refer to the existing themes for guidance

---

Thank you for contributing to the project! Your themes help make this portfolio template more versatile and valuable to the community.
