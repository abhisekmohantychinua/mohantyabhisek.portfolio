# Forking and Using This Repository

This guide explains how to fork this portfolio project and adapt it for your own use. It's designed for developers who want to create their own portfolio based on this template.

## Prerequisites

Before you begin, ensure you have:

- Basic knowledge of Angular and TypeScript
- Node.js and npm installed on your system
- Git installed and configured
- A GitHub account

## Step 1: Fork the Repository

1. Navigate to the [original repository](https://github.com/abhisekmohantychinua/mohantyabhisek.portfolio) on GitHub
2. Click the "Fork" button in the top-right corner
3. Select your GitHub account as the destination for the fork

## Step 2: Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/mohantyabhisek.portfolio.git
cd mohantyabhisek.portfolio
```

## Step 3: Install Dependencies

Install the project dependencies:

```bash
npm install
```

## Step 4: Customize the Portfolio

### Update Personal Information

1. **Profile Information**: Update your name, title, and contact information in relevant components
2. **Projects**: Modify the project data in `src/app/core/services/storage.service.ts`
3. **Case Studies**: Update case studies in the same service file
4. **About Me**: Customize the about me section in the relevant component

### Customize Visuals

1. **Theme**: Choose between existing themes or [create your own](contributing-themes.md)
2. **Images**: Replace images in the `src/assets` directory with your own
3. **Logo**: Update any logos or personal branding elements

### Modify Components

Feel free to modify, add, or remove components based on your needs:

1. **Add New Sections**: Create new feature components for additional content
2. **Remove Sections**: Remove components you don't need from `app.component.html`
3. **Reorder Content**: Change the order of components in `app.component.html`

## Step 5: Test Your Changes

Run the development server to see your changes:

```bash
npm run start
```

Navigate to `http://localhost:4200/` in your browser to view the site.

## Step 6: Build for Production

When you're ready to deploy your portfolio:

```bash
npm run build
```

This will create a production build in the `dist/` directory.

## Step 7: Deploy Your Portfolio

### Option 1: GitHub Pages

You can use Angular CLI's GitHub Pages deployment:

```bash
ng add angular-cli-ghpages
ng deploy --base-href=/your-repo-name/
```

### Option 2: Other Hosting Services

Deploy the contents of the `dist/` directory to any web hosting service of your choice, such as:

- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## Important Considerations

### Attribution Requirements

Remember to maintain proper attribution as required by the [license](../LICENSE.md) and [attribution guidelines](../ATTRIBUTION.md). At minimum, include:

```html
<footer>
  Original work by <a href="https://github.com/abhisekmohantychinua">Abhisek Mohanty</a>
</footer>
```

### Keeping Up with the Original Repository

To incorporate updates from the original repository:

```bash
# Add the original repository as a remote
git remote add upstream https://github.com/abhisekmohantychinua/mohantyabhisek.portfolio.git

# Fetch changes from the upstream repository
git fetch upstream

# Merge changes from the upstream main branch
git merge upstream/main
```

### Troubleshooting Common Issues

- **Build Errors**: Make sure you're using compatible Node.js and npm versions
- **Style Issues**: Check that you've built the themes with `npm run build:theme`
- **Deployment Problems**: Ensure your base href is set correctly for your hosting environment

## Need Help?

If you encounter issues while forking or customizing this portfolio:

- Check the [Angular documentation](https://angular.dev/)
- Open an issue in your forked repository
- Refer to online Angular communities for support

---

Remember that this portfolio is designed to be a starting point. Make it your own by adding your personal touch and showcasing your unique skills and projects!
