# Hai Duong Huynh Portfolio

A retro-styled React portfolio built with Vite and prepared for GitHub Pages deployment.

## Run locally

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`

## Build

Run `npm run build` to create the production site in `dist/`.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Push to your default branch and the workflow in `.github/workflows/deploy.yml` will build and publish the site automatically.

## Notes

- The Vite `base` setting uses relative paths, so this works for both project pages and user pages.
- The resume file is served from `public/assets`, which means it is included automatically in production builds.

## Files

- `src/App.jsx` contains the portfolio content and React components.
- `src/main.jsx` boots the React app.
- `styles.css` contains the retro visual system.
- `vite.config.js` configures Vite for portable static builds.
- `.github/workflows/deploy.yml` deploys the site to GitHub Pages.
- `public/assets/Hai_Duong_Huynh_Resume.pdf` is the downloadable resume.
