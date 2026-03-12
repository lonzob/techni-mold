# TechniMold

SvelteKit + Tailwind CSS v4 website for Techni-Mold & Engineering, Inc.

## Stack
- **Framework:** SvelteKit 2 + Svelte 5 (TypeScript)
- **Styles:** Tailwind CSS v4 via `@tailwindcss/vite` — all tokens in `src/app.css` `@theme` block
- **Deployment:** Vercel via `@sveltejs/adapter-vercel` — auto-deploys on push to `main`

## Commands
```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview production build
npm run check     # TypeScript + Svelte type-check
```

## Key files
- `src/lib/config/site.ts` — all company constants (name, phone, address, services, industries)
- `src/app.css` — brand colors, Tailwind @theme tokens
- `src/routes/+layout.svelte` — root layout with MetaTags wired to $page store
- `src/lib/components/seo/MetaTags.svelte` — handles all <head> meta, og:*, JSON-LD
- `src/routes/sitemap.xml/+server.ts` — dynamic sitemap endpoint

## Pages
- `/` — Home
- `/services` — Services detail
- `/industries` — Industries served
- `/about` — Company story, equipment, certifications
- `/contact` — Contact form (SvelteKit form actions)

## Brand colors
- Yellow: `#F5C400` (`brand-yellow`)
- Navy: `#0D1B2A` (`brand-navy`)
- Charcoal: `#1C2B3A` (`brand-charcoal`)
