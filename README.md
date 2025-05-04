# MN Hækklipning

Website for MN Hækklipning - Professional hedge trimming services in Kolding and surrounding areas.

## Development Setup

```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run serve

# Build for production
npm run build
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main/master branch.

### Manual Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `docs` directory

3. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```

4. The GitHub Action will automatically deploy to GitHub Pages

### First-time Setup

1. In your GitHub repository settings, enable GitHub Pages
2. Set the source to "GitHub Actions"
3. Make sure the repository name matches the path in vue.config.js (`mnhaek`)

## Project Structure

- `src/` - Source files
  - `assets/` - Static assets
  - `components/` - Vue components
  - `App.vue` - Main application component
- `public/` - Public static files
  - `img/` - Public images
- `docs/` - Built files (generated)
