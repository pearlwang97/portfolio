# Portfolio Site

This is a React 18 portfolio site built on Create React App. It uses `react-router-dom`, `@mui/material`, `styled-components`, `framer-motion`, and `gsap`.

## Project Structure

- `src/App.jsx`: app shell, route registration, metadata, header/footer.
- `src/content/projects`: project content files for portfolio detail pages.
- `src/content/projects/projectRegistry.js`: single source of truth for project routes, prev/next links, and project card data.
- `src/components/pages/ProjectDetailPage/ProjectDetailPage.jsx`: shared detail route that renders any registered project.
- `src/components/shared/ProjectDetailTemplate/ProjectDetailTemplate.jsx`: shared project detail layout and section rendering.
- `src/components/shared/ProjectCard/ProjectCard.jsx`: shared project card used by both the home page and projects page.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test -- --watchAll=false
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Adding Or Updating Projects

Portfolio project data is registry-driven.

1. Add or update the project content file in `src/content/projects`.
2. Export a default object that includes:
   - route metadata (`slug`, `route`, `category`)
   - card metadata (`cardTitle` optional, `cardImage`, `cardDescription`, `tools`)
   - detail metadata (`project`, `overviewItems`, `getNavGroups`)
3. Register the content module in `src/content/projects/projectRegistry.js`.

The registry automatically derives:

- project detail routes in `src/App.jsx`
- `prevLink` / `nextLink`
- project card data for the home page and projects page

## Validation And Tests

The project registry includes development-only validation. In non-production environments, invalid project data will throw during app startup.

Current smoke coverage includes:

- `src/content/projects/projectRegistry.test.js`: registry integrity and card alignment
- `src/components/pages/ProjectDetailPage/ProjectDetailPage.test.jsx`: shared detail page and shared project card rendering

When changing project data, routes, or shared project UI, run both:

```bash
npm test -- --watchAll=false
npm run build
```
