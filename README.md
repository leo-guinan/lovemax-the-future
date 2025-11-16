# Love Max the Future

The first asset that rewards humans for creating better futures.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with static files ready to deploy.

## Project Structure

- `src/` - Source files
  - `components/` - React components for each section
  - `App.tsx` - Main app component
  - `main.tsx` - Entry point
  - `index.css` - Global styles and Tailwind CSS configuration
- `index.html` - HTML entry point

## Sections

1. **Hero Section** - Main headline with glowing LOVE heart visual
2. **What Does It Mean** - 3-column Predict/Intervene/Verify layout
3. **LOVE Formula** - Mathematical formula display
4. **Counterfactual Loop** - Circular diagram visualization
5. **LoveOps** - First application showcase
6. **Why This Matters** - Grid of key points
7. **Join Stewards** - Call to action for first 100 stewards
8. **Footer** - Branding and copyright

## Tech Stack

- Vite - Fast build tool for static sites
- React 18
- TypeScript
- Tailwind CSS

## Deployment

The project is configured to deploy to GitHub Pages automatically via GitHub Actions. Just push to the `main` branch and it will build and deploy.

