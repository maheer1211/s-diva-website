# S DIVA Premium Salon & Spa — Cinematic Redesign

Production Next.js website for **S DIVA Premium Salon & Spa**, Chandrasekharpur, Bhubaneswar.

## What's inside

- Mobile-first cinematic hero and editorial storytelling sections.
- Responsive navigation, native-scroll reveals and light parallax.
- A **dependency-free, optional WebGL gold sculpture**, only initialized when close to the viewport. It pauses when off-screen or the tab is hidden, respects reduced motion and data saver preferences, and gracefully falls back when WebGL is unavailable.
- Searchable, filtered **accordion treatment menu**, retaining the original `src/lib/menu.ts` data and `/public/menu/sdiva-services-menu.pdf` brochure.
- Tap-to-call booking actions, location details and mobile booking bar.
- SEO metadata for `https://sdivasalon.com/`, JSON-LD structured business data, `public/robots.txt`, and `public/sitemap.xml`.

No third-party animations or 3D libraries were introduced: the experience uses CSS, IntersectionObserver, requestAnimationFrame and the browser's WebGL API so that mobile visitors don't need to download another rendering engine. The original Next.js dependency versions remain unchanged.

## Local setup

Use Node.js 20.9+ and an internet connection for the initial dependency installation.

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

To verify production readiness:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment safety

This is a redesign archive, **not a deployed update**. Develop on a separate branch, run the checks above, verify the layout on physical mobile devices and in a Vercel preview, then merge and deploy only when approved. The original domain records and DNS settings do not need to change.

## Content and prices

`src/lib/menu.ts` preserves the supplied menu transcription. Prices may change, so booking and menu copy directs visitors to confirm current details. Images are reused from the supplied project. Replace them with permissioned, authentic high-quality images when available; image quality has a significant effect on the final result.

## File map

- `src/app/page.tsx` — semantic homepage sections and business schema
- `src/app/globals.css` — design system, animation and responsive styling
- `src/app/components/SiteHeader.tsx` — navigation and mobile menu
- `src/app/components/ScrollExperience.tsx` — passive scroll animation orchestration
- `src/app/components/GoldSculpture.tsx` — small WebGL visual scene
- `src/app/components/ServiceMenu.tsx` — treatment filters, search and accordion
- `src/lib/menu.ts` — original menu data

## Accessibility and performance

- Respects `prefers-reduced-motion` and keeps native browser scrolling.
- Accessible headings, semantic landmarks, descriptive image text and touch-sized controls.
- Pauses the WebGL scene offscreen and when tab is hidden; caps render size/pixel density.
- Hero image receives load priority; secondary images are lazy loaded by Next.js.

Real-world LCP, CLS, INP and frame rates must be verified using a production build on representative devices. **No performance score is claimed without testing.**
