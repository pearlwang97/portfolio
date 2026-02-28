# AGENTS.md

## Project Overview
- This app is a Create React App portfolio site built with React 18.
- Routing is handled with `react-router-dom` in `src/App.jsx`.
- UI is a mix of `@mui/material` components, `styled-components`, local CSS, and animation libraries such as `framer-motion` and `gsap`.
- Portfolio project content is now registry-driven. Detail pages are rendered through a shared `ProjectDetailPage` + `ProjectDetailTemplate` flow.
- Static assets live in `public/images`, `public/fonts`, and `public/files`.

## Runbook
- Install dependencies with `npm install`.
- Start local development with `npm start`.
- Build for production with `npm run build`.
- Run tests with `npm test`.

## Codebase Layout
- `src/App.jsx`: top-level app shell, route table, global scrollbar styles, shared header/footer.
- `src/content/projects`: source of truth for portfolio project metadata, overview data, and section content.
- `src/content/projects/projectRegistry.js`: central registry that derives project routes, prev/next links, and project cards.
- `src/components/pages`: route-level pages. Project detail routes are served by `ProjectDetailPage`.
- `src/components/shared`: reusable typography, layout, buttons, navigation, media wrappers, shared project template, and shared project card.
- `src/components/Header` and `src/components/Footer`: global site chrome.
- `src/components/constants/constants.js`: shared static data/constants. Portfolio card data is re-exported from the project registry.
- `public`: static files served directly by CRA.

## Conventions For Changes
- Preserve the existing component style: functional React components with default exports.
- Follow the repo’s current formatting style for the file you touch. The codebase is not fully consistent, so avoid unrelated formatting churn.
- Prefer existing shared components in `src/components/shared` before introducing new one-off wrappers.
- For new portfolio pieces, add the content file in `src/content/projects`, register it in `src/content/projects/projectRegistry.js`, and let `src/App.jsx` pick it up from the registry-generated routes.
- Reuse assets from `public` when possible; add new assets there only when they are genuinely shared or need direct URL access.
- Keep imports consistent with surrounding code. This repo uses both relative imports and `jsconfig.json` path-based imports from `src`.
- When changing styling, check whether the file already uses `styled-components`, MUI `sx`, or plain CSS, and extend that same approach unless there is a strong reason not to.
- Keep `projectRegistry` as the single source of truth for route paths, prev/next links, and project card data. Do not reintroduce duplicated project metadata in page components.
- Prefer the shared `ProjectCard` in both list and featured contexts rather than creating new project-card variants unless the UI requirement is genuinely different.
- `ProjectDetailTemplate` now owns `ProjectOverviewList` rendering. Content files should provide `overviewItems` and nav group content, not page wrapper components.

## Content And UX Expectations
- This is a portfolio app, so visual presentation matters. Avoid changes that flatten spacing, typography, or animation without a clear reason.
- Many pages are presentation-heavy and image-driven. Be careful with image paths, aspect ratios, and mobile layout behavior.
- SEO-related content exists in `src/App.jsx` via `react-helmet`; preserve structured data and metadata unless the task is specifically about updating them.

## Validation
- For code changes, run `npm test -- --watchAll=false` when practical.
- For UI or routing changes, also run `npm run build` to catch compile errors and verify the production bundle still builds.
- If you change routes, shared layout, or assets, manually verify the affected pages in the browser via `npm start`.
- The registry performs development-only validation on project data. If `npm start` throws during boot, check `src/content/projects/projectRegistry.js` first.
- Keep the smoke tests in `src/content/projects/projectRegistry.test.js` and `src/components/pages/ProjectDetailPage/ProjectDetailPage.test.jsx` passing when changing project data or the shared project template.

## Guardrails
- Do not remove or overwrite user-provided portfolio content, images, or resume files unless explicitly asked.
- Do not introduce new frameworks, state libraries, or build tooling for small feature changes.
- Keep changes targeted. This repo contains many handcrafted page sections, so broad refactors carry high regression risk.
