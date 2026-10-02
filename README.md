# PYRAMID ACADEMY · Website Redesign Demo

A modern, heavily animated redesign concept for the Pyramid Academy (by SPECTRUM Education) spoken English institute website, in a light, classical luxury theme derived from the brand's logo.

## Stack

- **Vite + React 19** (JavaScript)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Framer Motion** for all animations (reveals, count-ups, carousel, accordion, ken-burns)
- **Lenis** smooth scrolling
- Inline SVG icon system (no icon library dependency)

## Run it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

- `src/data.js` — all content and inflated demo numbers (50,000+ learners, 4.9/5, batch dates)
- `src/components/` — one file per section (Hero, Stats, WhyPyramid, Courses, WhoCanJoin, LearningMethod, Testimonials, Faq, AdmissionsCTA, Footer, Navbar, Preloader)
- `src/components/ArtImg.jsx` — image slot that prefers AI-generated classical art from `public/art/` and falls back to the warm-filtered photo set in `public/images/`
- `src/components/IconArt.jsx` — icon slot that prefers engraved PNGs from `public/icons-gen/` and falls back to inline SVG glyphs
- `public/hero-art.png` — the AI-generated classical hero painting (baked-in wordmark)
- `public/logo.png` — the brand logo

## Swapping in generated art

Drop files in with these exact names and the site upgrades automatically, no code changes:

- `public/art/*.jpg` — section artworks (see `src/components` for the expected names: `why.jpg`, `method.jpg`, `cta.jpg`, `courses.jpg`, per-course and per-audience files)
- `public/icons-gen/*.png` — engraved icons, sepia ink on plain cream background, square (see `src/data.js` and components for names such as `mic.png`, `torch.png`, `graduation-cap.png`)

## Notes

This is a demo concept: all statistics, testimonials, reviews, batch dates, and contact details are intentionally inflated placeholder data.
