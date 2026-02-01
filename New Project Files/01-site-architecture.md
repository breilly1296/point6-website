# Point6 Website - Site Architecture

> Generated: 2026-02-01
> Source: Automated analysis of codebase

## Overview

Point6 is a marketing website for a ServiceNow implementation consultancy. The company helps organizations implement and optimize ServiceNow with senior consultants, transparent pricing, and measurable results. The website is built as a static multi-page site with a dark theme, modern aesthetic, and a focus on direct, human communication without corporate jargon. The domain is point6.io.

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Markup | HTML5 | Semantic HTML with accessibility features (ARIA, skip links, landmarks) |
| Styling | CSS3 (Vanilla) | Custom properties (CSS variables), Flexbox, Grid, no preprocessor |
| JavaScript | ES6+ (Vanilla) | IIFE pattern, IntersectionObserver, async/await, no frameworks |
| Fonts | Google Fonts | DM Sans (primary), Space Mono (accents/monospace) |
| Build Tools | Node.js scripts | clean-css, terser, html-minifier-terser, imagemin |
| Hosting Target | Google App Engine | Static file serving via Python39 runtime |

## File Structure

```
point6-website/
├── index.html                    # Homepage - main landing page
├── services.html                 # ServiceNow services overview
├── ai-launchpad.html             # AI Launchpad product page (featured offering)
├── results.html                  # Case studies and client results
├── about.html                    # Company info, founders, values
├── contact.html                  # Contact form and information
├── 404.html                      # Custom 404 error page
├── case-study-template.html      # Template for future case study pages
│
├── css/
│   └── styles.css                # Main stylesheet (~3000+ lines)
│
├── js/
│   └── main.js                   # Main JavaScript file (~628 lines)
│
├── assets/
│   └── images/
│       └── README.md             # Image specifications and guidelines
│
├── partials/
│   ├── nav.html                  # Navigation component reference
│   └── footer.html               # Footer component reference
│
├── scripts/
│   ├── build.js                  # Main build orchestrator
│   ├── clean.js                  # Dist folder cleanup
│   ├── minify-css.js             # CSS minification
│   ├── minify-js.js              # JavaScript minification
│   ├── minify-html.js            # HTML minification
│   ├── optimize-images.js        # Image optimization
│   ├── generate-sitemap.js       # Sitemap generation
│   └── a11y-check.js             # Accessibility checker
│
├── Prompts/                      # Documentation prompt templates
│   ├── 00-index.md
│   ├── 01-site-architecture.md
│   └── [...additional prompts]
│
├── .claude/
│   └── settings.local.json       # Claude AI settings
│
├── package.json                  # npm configuration
├── app.yaml                      # Google App Engine config
├── robots.txt                    # Search engine directives
├── sitemap.xml                   # Auto-generated sitemap
├── site.webmanifest              # PWA manifest
├── .gitignore                    # Git ignore rules
├── .gcloudignore                 # GCloud deploy ignore rules
│
├── CLAUDE.md                     # Project context for AI assistant
├── README.md                     # Project documentation
├── DEPLOY.md                     # Deployment guide
├── PERFORMANCE.md                # Performance optimization guide
├── CONTENT-NEEDED.md             # Content requirements checklist
└── PROJECT-REPORT.md             # Project status report
```

## HTML Files

| File | Purpose | Title Tag |
|------|---------|-----------|
| index.html | Homepage with hero, services overview, value proposition, CTA | Point6 \| ServiceNow Implementation Experts |
| services.html | Comprehensive ServiceNow services catalog with methodology | ServiceNow Services \| Point6 |
| ai-launchpad.html | Featured AI product with pricing tiers | AI Launchpad \| Point6 |
| results.html | Case studies and client testimonials | Case Studies & Results \| Point6 |
| about.html | Company story, founders, team structure, values | About Us \| Point6 |
| contact.html | Contact form with Formspree integration | Contact Us \| Point6 |
| 404.html | Custom error page with navigation suggestions | Page Not Found \| Point6 |
| case-study-template.html | Template for creating new case study pages | [Client Name] Case Study \| Point6 |

## CSS Architecture

- **Main stylesheet location:** `css/styles.css`
- **Approximate line count:** ~3000+ lines
- **Organization approach:** Single file, section-based with clear comment headers
- **CSS methodology:** Custom approach with utility-inspired patterns

### CSS Organization Structure:

1. **CSS Variables (`:root`)** - Design tokens for colors, fonts, spacing
2. **Reset & Base Styles** - Normalize and base element styles
3. **Layout Components** - Container, grid systems
4. **Navigation** - Fixed nav, mobile menu, scroll states
5. **Buttons & Links** - Primary, secondary, arrow links
6. **Hero & Page Headers** - Landing sections
7. **Section Components** - Stats bar, services grid, testimonials
8. **Card Patterns** - Service cards, pricing cards, case study cards
9. **Form Styles** - Contact form, validation states
10. **Page-Specific Styles** - AI Launchpad, About, Contact
11. **Accessibility** - Focus states, skip links
12. **Footer** - Site footer layout
13. **Animations** - Reveal animations, transitions
14. **Responsive Breakpoints** - Mobile-first media queries

### Design Tokens (CSS Variables):

```css
--color-bg: #0a0a0b           /* Dark background */
--color-bg-elevated: #141416   /* Elevated surfaces */
--color-bg-card: #1a1a1e       /* Card backgrounds */
--color-text: #f5f5f7          /* Primary text */
--color-text-muted: #8a8a8e    /* Secondary text */
--color-accent: #3b82f6        /* Brand blue */
--color-accent-glow: rgba(59, 130, 246, 0.15)
--color-border: rgba(255, 255, 255, 0.08)
--font-sans: 'DM Sans'         /* Primary font */
--font-mono: 'Space Mono'      /* Monospace font */
```

## JavaScript

- **Main JS file location:** `js/main.js`
- **Approximate line count:** 628 lines
- **External libraries used:** None (vanilla JavaScript)

### Functionality Modules:

| Module | Purpose |
|--------|---------|
| Configuration | CONFIG object with thresholds and settings |
| Utilities | debounce(), throttleRAF() helper functions |
| Mobile Menu | Toggle, close on escape, overlay handling |
| Nav Scroll | Condensed nav state on scroll |
| Active Nav Highlight | Current page indication |
| Smooth Scroll | Anchor link handling with offset |
| Reveal Animations | IntersectionObserver-based scroll reveal |
| Stats Counter | Animated number counting |
| Contact Form | Formspree integration, validation, states |
| Lazy Loading | Image lazy loading with fallback |

### Key Features:
- IIFE pattern for encapsulation
- `prefers-reduced-motion` support for accessibility
- Development mode detection for console logging
- Async form submission with loading/success/error states

## Assets

- **Image directory:** `assets/images/`
- **Icon approach:** Inline SVG for UI icons, emoji for decorative icons
- **Font loading strategy:** Google Fonts with preconnect hints

### Required Assets (Not Yet Created):

| Asset | Specification |
|-------|---------------|
| favicon.ico | 32x32 ICO |
| favicon-16x16.png | 16x16 PNG |
| favicon-32x32.png | 32x32 PNG |
| apple-touch-icon.png | 180x180 PNG |
| android-chrome-192x192.png | 192x192 PNG |
| android-chrome-512x512.png | 512x512 PNG |
| logo.png | 400x100 PNG |
| og-image.jpg | 1200x630 JPG (homepage) |
| og-services.jpg | 1200x630 JPG |
| og-ai-launchpad.jpg | 1200x630 JPG |
| og-results.jpg | 1200x630 JPG |
| og-about.jpg | 1200x630 JPG |
| og-contact.jpg | 1200x630 JPG |

## Build System

The project uses custom Node.js scripts for production builds:

### npm Scripts:

| Script | Command | Description |
|--------|---------|-------------|
| build | `node scripts/build.js` | Full production build |
| build:css | `node scripts/minify-css.js` | Minify CSS |
| build:js | `node scripts/minify-js.js` | Minify JavaScript |
| build:html | `node scripts/minify-html.js` | Minify HTML |
| build:images | `node scripts/optimize-images.js` | Optimize images |
| build:sitemap | `node scripts/generate-sitemap.js` | Generate sitemap.xml |
| clean | `node scripts/clean.js` | Clean dist folder |
| serve | `npx serve dist` | Serve production build |
| serve:dev | `npx serve . -p 3000` | Serve development |
| deploy | `npm run build && gcloud app deploy` | Deploy to GAE |

### Build Dependencies:

| Package | Purpose |
|---------|---------|
| clean-css | CSS minification |
| terser | JavaScript minification |
| html-minifier-terser | HTML minification |
| imagemin | Image optimization |
| imagemin-mozjpeg | JPEG optimization |
| imagemin-pngquant | PNG optimization |
| imagemin-svgo | SVG optimization |
| serve | Local development server |

## SEO Implementation

### Meta Tags (All Pages):
- Unique title tags and meta descriptions
- Open Graph (og:) tags for Facebook/social
- Twitter Card tags
- Canonical URLs
- robots meta tag (index, follow)

### Structured Data (JSON-LD):
- **index.html:** Organization schema
- **services.html:** Service schema with OfferCatalog
- **ai-launchpad.html:** Product schema with pricing Offers
- **results.html:** CollectionPage schema with ItemList
- **about.html:** Organization schema (extended with founders)
- **contact.html:** ContactPage schema

### Additional SEO Files:
- `robots.txt` - Search engine directives
- `sitemap.xml` - Auto-generated during build

## Accessibility Features

| Feature | Implementation |
|---------|----------------|
| Skip Links | Present on all pages (`<a href="#main-content">`) |
| ARIA Labels | Navigation, buttons, interactive elements |
| ARIA Roles | Navigation landmarks, menu items |
| Focus States | Visible focus indicators (`:focus-visible`) |
| Keyboard Navigation | Full keyboard support, Escape key handling |
| Reduced Motion | `prefers-reduced-motion` respected in CSS and JS |
| Semantic HTML | Proper heading hierarchy, landmarks |
| Form Accessibility | Labels, error announcements, hints |

## Key Observations

### Strengths:
1. **Clean Architecture:** Well-organized vanilla codebase without framework overhead
2. **Performance-Focused:** Custom build pipeline with minification and optimization
3. **Accessibility-First:** Comprehensive a11y features including skip links, ARIA, keyboard nav
4. **SEO-Ready:** Full meta tags, structured data, sitemap generation
5. **Dark Theme:** Modern, professional dark theme with consistent design tokens
6. **Responsive Design:** Mobile-first with comprehensive breakpoints
7. **Form Handling:** Robust form validation with user-friendly error messages
8. **Animation System:** IntersectionObserver-based reveals with reduced motion support

### Notable Patterns:
1. **Component Partials:** Nav and footer stored as reference partials (manual copy to pages)
2. **Emoji Icons:** Decorative icons use emoji, UI icons use inline SVG
3. **Single CSS File:** All styles in one file with comment-based organization
4. **No CSS Preprocessor:** Pure CSS with custom properties for theming
5. **Modular JS:** IIFE pattern with function-based modules

## Recommendations

### High Priority:
1. **Add Missing Assets:** Create favicon set and OG images using specifications in `assets/images/README.md`
2. **Configure Formspree:** Replace `YOUR_FORM_ID` in contact.html with actual form ID
3. **Update Social Links:** Replace placeholder `#` links in footer with actual LinkedIn/YouTube URLs
4. **Privacy/Terms Pages:** Create actual privacy.html and terms.html pages

### Medium Priority:
1. **Component System:** Consider implementing a simple templating system for nav/footer to avoid manual updates across pages
2. **CSS Optimization:** Consider splitting CSS into critical/non-critical for better FCP
3. **Image Lazy Loading:** Implement native `loading="lazy"` on all images
4. **Service Worker:** Add PWA capabilities for offline support

### Low Priority:
1. **CSS Splitting:** Break large CSS file into modular files for development (combine in build)
2. **TypeScript:** Consider TypeScript for better maintainability as JS grows
3. **Testing:** Add automated accessibility and visual regression testing
4. **Analytics:** Implement privacy-respecting analytics (e.g., Plausible, Fathom)

---

*This document provides a comprehensive overview of the Point6 website architecture. For deployment instructions, see DEPLOY.md. For performance guidelines, see PERFORMANCE.md.*
