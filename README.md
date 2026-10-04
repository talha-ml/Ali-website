# Ahmad Ali — Physician & Researcher Portfolio

An existing React + Vite single-page portfolio, refined without changing its core architecture, portrait, palette, or section order.

## Development

- `npm ci` — install locked dependencies
- `npm run dev` — local development
- `npm run build` — production output in `dist`
- `npm run preview` — inspect the production output
- `npm run lint` — Oxlint
- `npm test` — seven checks for contact URLs, publication terminology, search, and combined filters

## Content and contact

`src/data/portfolioData.js` contains the supplied clinical and research records and the owner-approved public email. All 18 research records are retained. Related manuscript, abstract, and poster records are separate outputs, not necessarily distinct studies. APP.pdf, CV.pdf, Ahmad_Ali_CV.pdf, and Ahmad_Ali_Research_CV.pdf were reviewed during refinement; the PDFs remain outside this repository and are not published. Core roles, dates, education, research entries, and displayed quotations were checked. Current statuses, author-name variants, and the VESALIUS-CV/CVW title discrepancy still require the physician's final approval. See `QA.md` for specific verification results and limits.

The contact form opens a `mailto:` draft addressed to the approved public email. The visitor must send it from their email app. No backend, automatic delivery, contact-data storage, or analytics is configured. Copy draft is available if no mail handler is installed; if clipboard access fails, a selectable draft is shown. Field contents are retained until the visitor edits or leaves the page.

An optional `VITE_CONTACT_EMAIL` overrides the public recipient at build time. It must not contain credentials or other secrets.

## Deployment metadata

Copy `.env.example` to `.env.local` and set `SITE_URL` to the actual HTTPS homepage before a production build. Vite then emits canonical, Open Graph URL, and absolute social portrait URLs into the HTML. Without a configured domain, these URLs are omitted rather than guessed. Site title, descriptions, social card type, theme color, and favicon are always included.

Deploy a fresh `dist` from `npm run build`. Assets currently use root-relative paths; this project assumes hosting at a domain root.

## Structure and accessibility

- `src/App.jsx` preserves the original nine sections and adds progressive, non-blocking section entrance motion.
- `src/components` contains the existing section components.
- `src/index.css` holds shared tokens, layout, responsive styling, and motion.
- `src/utils` contains small contact and publication-presentation helpers.
- Publication details use a native modal dialog, explicit Tab wrapping, Escape dismissal, and trigger-focus restoration.
- Clinical tabs support arrows, Home/End, roving focus, and associated panels.
- Search results and contact/copy feedback are announced through live regions.
- Research type and status filters combine with normalized multiword search across titles, authors, venues, dates, and visible labels. Clearing/resetting search restores input focus.
- All motion has a reduced-motion fallback; content is visible even if the reveal observer is unavailable.

The original portrait JPG is retained; responsive WebP derivatives reduce transfer size. Google Fonts are requested directly from the HTML with `display=swap` and preconnects.

## Owner review before publication

Confirm research statuses and dates, especially the November 2026 posters now marked `Presentation Pending`. No automatic passage of time changes them to presented. Confirm related outputs, author-name variants, existing clinical claims, and the quotations, which now use exact, non-sensitive excerpts from the supplied documents. Volunteer-role descriptions were corrected to match the sources, and the MM-1599 abstract identifier was removed from an author list. The specific hometown locality was generalized to the already supplied regional location.
