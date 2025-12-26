# Alex Casalboni — Personal Website

A modern Next.js site that highlights my developer advocacy work, talks, and content across multiple pages (home, blog, talks, and contact).

## Tech stack
- [Next.js](https://nextjs.org/) 14 (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

Prerequisites:
- Node.js 20+
- npm 9+ (or compatible with lockfile v3)

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Then open http://localhost:3000.

## Linting and tests

```bash
npm run lint
```

## Production build

```bash
npm run build
```

The optimized output is generated in `.next` (or `out` when using `next export`).

## GitHub Actions

The repository includes a GitHub Action (`.github/workflows/ci.yml`) that runs `npm ci`, `npm run lint`, and `npm run build` on pushes to `main` and pull requests.

## Customization

- Update content in `app/content/siteData.ts`.
- Adjust styling in `app/globals.css` and Tailwind config (`tailwind.config.ts`).
- Replace placeholder SVG/avatar in the header with your own image if desired.
