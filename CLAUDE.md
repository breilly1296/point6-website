# Point6 Website

## Overview
Marketing website for Point6, a SaaS consultancy specializing in ServiceNow implementation.

## Domain
point6.io

## Tech Stack
- Static HTML/CSS/JS (vanilla, no frameworks)
- Build tools: clean-css, terser, html-minifier-terser, imagemin
- Hosting: Google App Engine

## Design
- Dark theme, minimal, modern
- No corporate jargon — direct and human
- Multi-page site (index, services, results, about, contact, 404)

## Known Info
- ServiceNow implementation is the main service
- Second product TBD (need to confirm with founder)

## Deployment
- `npm run build` - Creates minified production build in `dist/`
- `npm run deploy` - Deploys to Google App Engine
- See DEPLOY.md for full instructions

## SEO Implementation
- All pages have unique title tags and meta descriptions
- Open Graph and Twitter Card tags on all pages
- Structured data (JSON-LD) on all pages (Organization, WebPage, CollectionPage, etc.)
- robots.txt and sitemap.xml (auto-generated during build)
- Canonical URLs set for all pages

## Accessibility
- Skip links on all pages
- ARIA labels and roles where needed
- Keyboard navigation support
- Focus states for all interactive elements
- prefers-reduced-motion respected

## Key Files
- `CONTENT-NEEDED.md` - Content requirements checklist
- `DEPLOY.md` - Deployment guide and pre-launch checklist
- `PERFORMANCE.md` - Performance optimization guide and Lighthouse testing
- `README.md` - Project documentation
- `app.yaml` - Google App Engine configuration
- `assets/images/README.md` - Image and favicon specifications

## TODO
- [ ] Get real copy from founder (see CONTENT-NEEDED.md)
- [ ] Confirm second product/platform name
- [ ] Add logo and favicon files (see assets/images/README.md)
- [ ] Add OG images for social sharing (see assets/images/README.md)
- [ ] Configure Formspree form ID in contact.html (replace YOUR_FORM_ID)
- [ ] Deploy to Google Cloud
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit and verify scores (see PERFORMANCE.md)
