# Image Assets for Point6 Website

## Quick Checklist

- [ ] Favicon files (see Favicon section below)
- [ ] Logo files (PNG and SVG)
- [ ] Open Graph images for all pages
- [ ] Case study images (when applicable)

---

## Favicon Files

### Required Files (place in root directory `/`)

| Filename | Size | Format | Purpose |
|----------|------|--------|---------|
| `favicon.ico` | 32x32 | ICO | Legacy browser support |
| `favicon-16x16.png` | 16x16 | PNG | Small browser tabs |
| `favicon-32x32.png` | 32x32 | PNG | Standard browser tabs |
| `apple-touch-icon.png` | 180x180 | PNG | iOS home screen, Safari |
| `android-chrome-192x192.png` | 192x192 | PNG | Android home screen |
| `android-chrome-512x512.png` | 512x512 | PNG | Android splash screen |
| `site.webmanifest` | — | JSON | PWA manifest file |

### Favicon Design Specifications

**Design:** Use the Point6 logo dot (the blue circle/dot from the logo)

**Colors:**
- Background: `#3b82f6` (Point6 accent blue) or transparent
- Icon: White or the full logo mark

**Safe Zone:** Keep 10% padding on all sides

### How to Generate Favicons

1. **Using RealFaviconGenerator (Recommended):**
   - Go to https://realfavicongenerator.net/
   - Upload your logo (512x512 PNG recommended)
   - Configure options for each platform
   - Download the generated package
   - Extract files to root directory

2. **Using Figma/Sketch:**
   - Create artboards at each required size
   - Export as PNG (except favicon.ico)
   - Use https://icoconvert.com/ for .ico file

3. **Manual Creation:**
   - Start with 512x512 master image
   - Scale down for each size
   - Ensure clarity at small sizes (simplify if needed)

### Testing Favicons

- **Chrome DevTools:** Application > Manifest
- **Favicon Checker:** https://realfavicongenerator.net/favicon_checker
- **Clear cache** when testing updates

---

## Logo Files

Place in `/assets/images/`

| Filename | Size | Format | Usage |
|----------|------|--------|-------|
| `logo.png` | 400x100 | PNG | Structured data, emails |
| `logo.svg` | Vector | SVG | High-resolution usage |
| `logo-white.png` | 400x100 | PNG | Dark backgrounds |
| `logo-white.svg` | Vector | SVG | Dark backgrounds |

---

## Open Graph Images (Social Sharing)

Place in `/assets/images/`

**Required Size:** 1200 x 630 pixels (1.91:1 ratio)
**Format:** JPG (optimized, <200KB)
**Color Space:** sRGB

| Filename | Page | Content Suggestion |
|----------|------|-------------------|
| `og-image.jpg` | Homepage | Point6 logo + tagline on brand background |
| `og-services.jpg` | Services | "ServiceNow Services" headline with icons |
| `og-ai-launchpad.jpg` | AI Launchpad | "AI Launchpad" with rocket/AI imagery |
| `og-results.jpg` | Results | Key metrics or "Case Studies" headline |
| `og-about.jpg` | About | Team photo or company imagery |
| `og-contact.jpg` | Contact | "Let's Talk" or contact imagery |

### OG Image Design Guidelines

1. **Text:** Large, readable (min 60px for headlines)
2. **Logo:** Include Point6 logo in corner
3. **Safe zone:** Keep text within center 80%
4. **Contrast:** Ensure text is readable
5. **Brand colors:** Use Point6 dark theme colors

### Testing OG Images

- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/

---

## Case Study Images

Place in `/assets/images/case-studies/`

For each case study, create:

| Filename Pattern | Size | Purpose |
|-----------------|------|---------|
| `[slug]-og.jpg` | 1200x630 | Social sharing |
| `[slug]-hero.jpg` | 1200x600 | Page hero image |
| `[slug]-thumb.jpg` | 600x400 | Card thumbnail |

Example for "acme-corp" case study:
```
/assets/images/case-studies/
  ├── acme-corp-og.jpg
  ├── acme-corp-hero.jpg
  └── acme-corp-thumb.jpg
```

---

## Image Optimization

### Tools
- **Squoosh:** https://squoosh.app/ (browser-based)
- **ImageOptim:** https://imageoptim.com/ (Mac)
- **TinyPNG:** https://tinypng.com/ (web)

### Target File Sizes
- Favicons: < 10KB each
- OG Images: < 200KB
- Hero Images: < 300KB
- Thumbnails: < 50KB

### Optimization Settings
- **JPG:** Quality 80-85%, progressive
- **PNG:** 8-bit when possible, compressed
- **SVG:** Minified, no unnecessary metadata

---

## File Naming Conventions

- Use lowercase
- Use hyphens (not underscores)
- Be descriptive: `case-study-acme-hero.jpg` not `img1.jpg`
- Include size if relevant: `logo-200x50.png`
