# Performance Optimization Guide

## Current Optimizations

### CSS
- [x] Single consolidated stylesheet (`css/styles.css`)
- [x] CSS custom properties for consistent theming
- [x] No unused framework code (vanilla CSS only)
- [x] Build system minifies CSS with clean-css

### JavaScript
- [x] `defer` attribute on all script tags (non-blocking)
- [x] Console logs wrapped in IS_DEV check (production-safe)
- [x] Intersection Observer for scroll animations (efficient)
- [x] RequestAnimationFrame throttling for scroll events
- [x] Debounced resize handlers
- [x] Respects `prefers-reduced-motion` (skips animations)
- [x] Build system minifies JS with terser

### Fonts
- [x] `preconnect` hints for fonts.googleapis.com and fonts.gstatic.com
- [x] `display=swap` parameter for font-display behavior
- [x] Only two font families loaded (DM Sans, Space Mono)

### Images
- [x] Lazy loading infrastructure in main.js (`data-src` pattern)
- [x] Native lazy loading support with fallback
- [x] Build system optimizes images with imagemin

### HTML
- [x] Build system minifies HTML with html-minifier-terser
- [x] Semantic HTML structure

---

## Lighthouse Testing

### How to Run Lighthouse
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Choose "Mobile" or "Desktop"
5. Click "Analyze page load"

### Expected Scores (Target: 90+)
| Category | Target | Notes |
|----------|--------|-------|
| Performance | 90+ | May vary based on hosting/network |
| Accessibility | 95+ | Skip links, ARIA, focus states implemented |
| Best Practices | 90+ | HTTPS, no deprecated APIs |
| SEO | 95+ | Meta tags, structured data complete |

### Common Issues & Fixes

**If Performance < 90:**
- Check "Opportunities" section for specific issues
- Consider critical CSS inlining (see below)
- Ensure images are optimized

**If Accessibility < 95:**
- Run `npm run check:a11y` for automated checks
- Test with keyboard navigation
- Verify color contrast ratios

---

## Recommended Future Optimizations

### Critical CSS Inlining
For the fastest First Contentful Paint, inline above-the-fold CSS:

```html
<head>
  <style>
    /* Critical CSS for above-fold content */
    :root { /* color variables */ }
    body { /* base styles */ }
    .site-nav { /* nav styles */ }
    .hero-section { /* hero styles */ }
  </style>
  <link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/styles.css"></noscript>
</head>
```

**Implementation:**
1. Use [Critical](https://github.com/addyosmani/critical) npm package
2. Add to build script to auto-extract critical CSS
3. ~500-1000 bytes of critical CSS is typical

### Image Optimization

**WebP Conversion:**
Convert all images to WebP format with fallbacks:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

**Tools:**
- `npm install imagemin-webp` for build-time conversion
- [Squoosh](https://squoosh.app/) for manual optimization
- Target: <100KB for hero images, <50KB for thumbnails

**Add loading="lazy" to below-fold images:**
```html
<img src="image.jpg" alt="..." loading="lazy">
```

### Self-Hosting Fonts (Optional)
For maximum performance, self-host fonts instead of Google Fonts:

1. Download fonts from [google-webfonts-helper](https://gwfh.mranftl.com/)
2. Add to `/assets/fonts/`
3. Update CSS with `@font-face` declarations
4. Remove Google Fonts links from HTML

**Benefits:**
- No external DNS lookup
- No cross-origin requests
- Full caching control

**Trade-offs:**
- Slightly larger initial download
- Must manually update fonts

### Resource Hints
Add resource hints for faster third-party loads:

```html
<!-- If using external booking widget -->
<link rel="dns-prefetch" href="https://outlook.office.com">
<link rel="preconnect" href="https://outlook.office.com" crossorigin>
```

---

## Build Commands

```bash
# Development
npm run dev          # Start local server

# Production Build
npm run build        # Minify and optimize to dist/
npm run build:css    # Minify CSS only
npm run build:js     # Minify JS only
npm run build:html   # Minify HTML only
npm run build:images # Optimize images

# Testing
npm run check:a11y   # Accessibility audit
npm run serve:dist   # Preview production build
```

---

## Monitoring

### Key Metrics to Track
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google's public tool
- [WebPageTest](https://webpagetest.org/) - Detailed waterfall analysis
- [GTmetrix](https://gtmetrix.com/) - Historical tracking
- Chrome DevTools > Performance tab - Local profiling

---

## Cache Headers (app.yaml)

The current `app.yaml` sets appropriate cache headers:
- Static assets: 1 year (with cache busting via build)
- HTML files: 10 minutes (for quick updates)
- Service worker: No cache (immediate updates)

---

## File Size Budget

| File Type | Budget | Current |
|-----------|--------|---------|
| HTML (each) | < 50KB | ~15-30KB |
| CSS (total) | < 100KB | ~50KB |
| JS (total) | < 50KB | ~15KB |
| Images (each) | < 200KB | TBD |
| Total page weight | < 500KB | TBD |

*Run `npm run build` and check dist/ folder sizes*
