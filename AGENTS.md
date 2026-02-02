## Project Summary
This project is a pixel-perfect clone of the "Highway Hack" landing page, a high-conversion sales page for a driving school theory exam preparation method. It features a dark-themed aesthetic with neon green accents, interactive elements like testimonials, carousels, and FAQs, and a specialized mobile-friendly YouTube Shorts video player in the hero section.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4, Lucide React (Icons)
- Language: TypeScript
- Components: React functional components

## Architecture
- `src/app/`: Contains the main layout and the home page that assembles all sections.
- `src/components/sections/`: Modularized sections for easier maintenance and organization (Hero, Reviews, Pricing, FAQ, etc.).
- `src/app/globals.css`: Global styles including custom themes and animations.

## User Preferences
- The user requested a perfect copy of the provided website URL.
- Specific instruction to use the YouTube video `https://youtube.com/shorts/KR-Vg_cTtk0` below the headline.
- Turbopack disabled manually to ensure stability in Next.js 15.
- Images set to `unoptimized: true` in `next.config.ts` to prevent 401 errors on Vercel.
- Project switched from Bun to NPM to ensure compatibility with Vercel's standard build pipeline.

## Project Guidelines
- Keep the dark theme consistent across all components.
- Use neon green (#22c55e) for primary call-to-action buttons.
- Ensure all sections are responsive and mobile-friendly.
- Ignore build errors (TypeScript/ESLint) to facilitate rapid deployment.
- **IMPORTANT**: Always use NPM (delete `bun.lock` if it appears) to avoid deployment conflicts.

## Common Patterns
- Reusable section components imported into `page.tsx`.
- Standardized spacing and container widths (max 1200px).
- Frequent use of rounded corners (radius-lg/1rem) for cards and buttons.
