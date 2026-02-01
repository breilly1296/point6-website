# Point6 Website

Marketing website for Point6, a ServiceNow implementation consultancy.

**Live site:** https://point6.io

---

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start local server (serves source files)
npm run serve:dev
# Open http://localhost:3000
```

### Production Build

```bash
# Build minified version
npm run build

# Preview production build
npm run serve
# Open http://localhost:5000
```

### Deploy

```bash
# Deploy to Google App Engine
npm run deploy
```

---

## Project Structure

```
point6-website/
├── index.html              # Homepage
├── services.html           # Services page
├── results.html            # Case studies & testimonials
├── about.html              # Company story & team
├── contact.html            # Contact form & options
├── case-study-template.html # Template for case studies
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Interactive functionality
├── assets/
│   └── images/             # Image assets
├── partials/               # Reusable HTML components (reference)
├── scripts/                # Build scripts
├── dist/                   # Production build output (generated)
├── app.yaml                # Google App Engine config
├── package.json            # Node.js dependencies
├── robots.txt              # Search engine directives
├── sitemap.xml             # Sitemap for SEO
├── CLAUDE.md               # Project context
├── CONTENT-NEEDED.md       # Content requirements checklist
└── DEPLOY.md               # Deployment guide
```

---

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, minimal footprint
- **Google Fonts** - DM Sans + Space Mono

### Build Tools

- **clean-css** - CSS minification
- **terser** - JavaScript minification
- **html-minifier-terser** - HTML minification
- **imagemin** - Image optimization (optional)

### Hosting

- **Google App Engine** - Static site hosting
- Automatic SSL, CDN, and scaling

---

## Features

- **Dark theme** - Modern, minimal design
- **Fully responsive** - Mobile-first, tested 320px-1440px+
- **Accessible** - Semantic HTML, ARIA labels, reduced motion support
- **SEO optimized** - Meta tags, OG tags, structured data, sitemap
- **Fast** - Minified assets, optimized images, efficient CSS
- **No dependencies** - Zero runtime JavaScript frameworks

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Full production build |
| `npm run clean` | Delete dist folder |
| `npm run serve` | Serve production build (port 5000) |
| `npm run serve:dev` | Serve source files (port 3000) |
| `npm run deploy` | Build and deploy to App Engine |
| `npm run lighthouse` | Run Lighthouse audit |

---

## Development Notes

### Adding a New Page

1. Create new HTML file in root
2. Copy head section from existing page
3. Update title, meta description, canonical URL
4. Add to `scripts/minify-html.js` files array
5. Add to sitemap in `scripts/generate-sitemap.js`

### Adding a Case Study

1. Duplicate `case-study-template.html`
2. Rename to `case-study-[slug].html`
3. Replace all placeholder content
4. Update meta tags and structured data
5. Add to results.html grid
6. Run build (auto-added to sitemap)

### Modifying Styles

All styles are in `css/styles.css`:
- CSS variables at top for theming
- Organized by component
- Media queries at bottom
- Comments mark each section

### Modifying Scripts

JavaScript in `js/main.js`:
- Mobile menu toggle
- Scroll effects
- Intersection Observer animations
- Stats counter animation
- Contact form handling (placeholder)

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari
- Chrome for Android

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |

---

## License

Proprietary - Point6. All rights reserved.

---

## Contact

- **Email:** hello@point6.io
- **Website:** https://point6.io
- **LinkedIn:** https://linkedin.com/company/point6
