# Portfolio Project Documentation

Welcome to the comprehensive documentation for Abhisek Mohanty's portfolio project. This documentation is designed to help experienced developers understand the project structure, customize it for their own use, and contribute to its development.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Theme System](#theme-system)
4. [Additional Resources](#additional-resources)

## Project Overview

This project is a modern, responsive portfolio website built with Angular. It showcases projects, case studies, technical skills, and professional philosophy. The portfolio features:

- Responsive design that works across all device sizes
- Theme customization (light/dark modes)
- Modular architecture for easy extension
- Performance-optimized loading
- SEO-friendly structure

## Technical Architecture

### Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── core/             # Core functionality
│   │   ├── models/       # Data models
│   │   └── services/     # Application services
│   └── features/         # Feature modules
├── theme/                # Theme system
│   ├── dark/             # Dark theme
│   └── light/            # Light theme
└── public/               # Static assets
```

### Component Documentation

#### App Component
- [App Component](src/app/app.component.md)

#### UI Components
- [Navbar Component](src/app/components/navbar/navbar.component.md)
- [Round Icon Component](src/app/components/round-icon/round-icon.component.md)
- [Footer Component](src/app/components/footer/footer.component.md)
- [Case Study Card Component](src/app/components/case-study-card/case-study-card.component.md)
- [CTA Button Component](src/app/components/cta-btn/cta-btn.component.md)
- [Project Card Component](src/app/components/project-card/project-card.component.md)
- [Title Component](src/app/components/title/title.component.md)
- [Typewrite Component](src/app/components/typewrite/typewrite.component.md)

#### Feature Components
- [Hero Component](src/app/features/hero/hero.component.md)
- [About Me Component](src/app/features/about-me/about-me.component.md)
- [Case Studies Component](src/app/features/case-studies/case-studies.component.md)
- [CTA Component](src/app/features/cta/cta.component.md)

### Core

#### Models
- [Case Study Model](src/app/core/models/case-study.md)
- [Project Model](src/app/core/models/project.md)
- [Theme Model](src/app/core/models/theme.md)

#### Services
- [Action Service](src/app/core/services/action.service.md)
- [Icon Service](src/app/core/services/icon.service.md)
- [Storage Service](src/app/core/services/storage.service.md)
- [Theme Service](src/app/core/services/theme.service.md)

## Theme System

The project implements a flexible theme system that allows for easy customization and extension. Themes are organized in separate directories with their own SCSS files:

```
theme/
├── dark/
│   ├── components/       # Component-specific styles
│   ├── features/         # Feature-specific styles
│   ├── util/             # Utilities and variables
│   └── dark.scss         # Main theme entry point
└── light/
    ├── components/       # Component-specific styles
    ├── features/         # Feature-specific styles
    ├── util/             # Utilities and variables
    └── light.scss        # Main theme entry point
```

## Additional Resources

- [Requesting the Design as a Template](template-request.md)
- [Contributing Your Own Themes](contributing-themes.md)
- [Forking and Using This Repository](forking-guide.md)

## License and Attribution

This project is licensed under the [Creative Commons Attribution 4.0 International License](../LICENSE.md). Please review the [attribution requirements](../ATTRIBUTION.md) before using or adapting this project.

---

© 2025 Abhisek Mohanty. All rights reserved.
