# Alex Casalboni — Personal Site

Modern multi-page site for Alex Casalboni (Developer Advocate, speaker, and content creator) built with Next.js.

## Features

- Landing page that highlights services, quick links, and core stats.
- Dedicated pages for blog posts, talks with a YouTube playlist embed, and contact information.
- Responsive, dark-themed layout with reusable cards and pill badges.
- CI workflow that lints and builds every pull request.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- React 18, TypeScript, and ESLint (`next/core-web-vitals`)

## Getting started

1. Install dependencies (Node.js 20+ recommended):

   ```bash
   npm install
   ```

2. Run the local dev server:

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000 to view the site. Edits in `app/` hot-reload automatically.

3. Run linting:

   ```bash
   npm run lint
   ```

4. Create a production build:

   ```bash
   npm run build
   ```

   The optimized bundle is output to the `.next` directory. Start it locally with `npm start`.

## Project structure

- `app/` — App Router pages and layout
  - `page.tsx` — homepage
  - `blog/page.tsx` — writing
  - `talks/page.tsx` — talks and playlist
  - `contact/page.tsx` — collaboration and contact options
- `app/data/content.ts` — curated links and content metadata
- `.github/workflows/ci.yml` — lint/build GitHub Action

## Customization

- Update `app/data/content.ts` with your own blog posts, talks, and preferred links.
- Swap the logo SVG in `app/layout.tsx` with a headshot or brand mark (SVG recommended for crispness).
- Adjust global colors and spacing in `app/globals.css`.
