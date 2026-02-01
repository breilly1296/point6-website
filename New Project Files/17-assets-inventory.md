# Point6 Website - Assets Inventory

> Generated: 2026-02-01
> Source: Analysis of assets/ directory and HTML/CSS files

## Directory Structure

```
assets/
├── icons/
│   └── (empty)
└── images/
    ├── README.md
    └── case-studies/
        └── (empty)
```

---

## Images

### Image Files

| Filename | Type | Size | Dimensions | Used On |
|----------|------|------|------------|---------|
| *(No image files currently exist)* | - | - | - | - |

### Image Usage by Page

#### index.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-image.jpg` | Open Graph social sharing | (Referenced but not created) |
| `/assets/images/logo.png` | Structured data / Organization logo | (Referenced but not created) |

#### services.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-services.jpg` | Open Graph social sharing | (Referenced but not created) |

#### ai-launchpad.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-ai-launchpad.jpg` | Open Graph social sharing | (Referenced but not created) |

#### results.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-results.jpg` | Open Graph social sharing | (Referenced but not created) |

#### about.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-about.jpg` | Open Graph social sharing | (Referenced but not created) |
| Team Photo placeholder | Our Story section | "Team Photo" |
| Founder photos (MP, MY) | Leadership section | Placeholders with initials |

#### contact.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/og-contact.jpg` | Open Graph social sharing | (Referenced but not created) |

#### case-study-template.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| `/assets/images/case-studies/[slug]-og.jpg` | Case study OG image | (Template placeholder) |
| Hero Image placeholder | Case study hero | "Hero Image - 1200x600px recommended" |

### Missing Images

Images referenced in HTML but not found in assets:

| Reference | Page | Expected Location |
|-----------|------|-------------------|
| `og-image.jpg` | index.html | `/assets/images/og-image.jpg` |
| `og-services.jpg` | services.html | `/assets/images/og-services.jpg` |
| `og-ai-launchpad.jpg` | ai-launchpad.html | `/assets/images/og-ai-launchpad.jpg` |
| `og-results.jpg` | results.html | `/assets/images/og-results.jpg` |
| `og-about.jpg` | about.html | `/assets/images/og-about.jpg` |
| `og-contact.jpg` | contact.html | `/assets/images/og-contact.jpg` |
| `logo.png` | All pages (structured data) | `/assets/images/logo.png` |

### Placeholder Images

Images that are placeholders needing replacement:

| Current | Page | Needed |
|---------|------|--------|
| `<div class="founder-photo-placeholder"><span>MP</span></div>` | about.html | Marcelino Porfirio headshot |
| `<div class="founder-photo-placeholder"><span>MY</span></div>` | about.html | Michael Yee headshot |
| `<div class="image-placeholder-box"><span>Team Photo</span></div>` | about.html | Team/office photo |
| `<div class="case-study-image">emoji</div>` | results.html | Case study imagery |
| `<div class="testimonial-avatar">MY</div>` | index.html | Michael Yee photo for testimonial |
| Hero Image placeholder | case-study-template.html | Case study hero images |

---

## Icons

### Icon Approach
- **Method**: Inline SVG + Emoji
- **Library**: Custom inline SVGs (no external icon library)

### Icon Files

| Filename | Type | Size | Purpose |
|----------|------|------|---------|
| *(No icon files - icons are inline SVG)* | - | - | - |

### Inline SVG Icons

The website uses inline SVG icons throughout. Below is the catalog:

| Icon Description | Used On | Class/ID |
|------------------|---------|----------|
| Right arrow (16x16) | Buttons, links | `.btn svg`, `.link-arrow svg` |
| Left arrow (16x16) | Back links | `.back-link svg` |
| LinkedIn logo (20x20, 24x24) | About page, Contact page, Footer | `.founder-linkedin svg`, `.contact-option-icon svg` |
| User profile (24x24) | Results testimonials | `.testimonial-avatar svg` |
| Graduation cap (16x16) | About page (education) | `.founder-education svg` |
| Email envelope (24x24) | Contact page | `.contact-option-icon svg` |
| Calendar (24x24) | Contact page | `.contact-option-icon svg` |
| Map pin (24x24) | Contact page | `.contact-option-icon svg` |
| Spinner animation (16x16) | Contact form loading | `.spinner` |
| Checkmark (16x16) | Contact form success | `.btn-success svg` |
| Chevron down | Select dropdown (CSS background) | form select element |

### Emoji Icons

Emojis are used extensively as decorative icons:

| Emoji | Purpose | Used On |
|-------|---------|---------|
| :wrench: | Technology Workflows | index.html, services.html |
| :handshake: | Customer Workflows | index.html |
| :robot: | AI & GenAI, Virtual Agent | index.html, services.html |
| :shield: | Managed Services, IRM, Low Risk | index.html, services.html, ai-launchpad.html |
| :moneybag: | Cost savings | index.html, ai-launchpad.html |
| :dart: | Customer-centric, Employee Center | index.html, services.html, about.html |
| :zap: | Transform in place, Quick value, Enhancements | index.html, services.html, ai-launchpad.html |
| :rocket: | AI Launchpad featured | services.html |
| :computer: | ITSM | services.html |
| :gear: | ITOM | services.html |
| :package: | ITAM | services.html |
| :headphones: | CSM | services.html |
| :busts_in_silhouette: | HRSD | services.html |
| :office: | Workplace Service Delivery | services.html |
| :bar_chart: | SPM, Proven ROI | services.html, ai-launchpad.html |
| :lock: | Security Operations | services.html |
| :sparkles: | Now Assist | services.html |
| :crystal_ball: | Predictive Intelligence | services.html |
| :compass: | Expert Guidance, Consulting | services.html, ai-launchpad.html |
| :building_construction: | Architects | about.html |
| :bulb: | Senior Consultants | about.html |
| :clipboard: | Project Managers | about.html |
| :gem: | Transparency | about.html |
| :palm_tree: | Los Angeles | about.html |
| :desert_island: | Honolulu | about.html |
| :cityscape: | Bangalore | about.html |
| :hospital: | Healthcare case study | results.html |
| :factory: | Manufacturing case study | results.html |
| :thinking: | Pain point - uncertainty | ai-launchpad.html |
| :question: | Pain point - readiness | ai-launchpad.html |

---

## Fonts

### Font Loading Strategy
- **Method**: Google Fonts (external CDN)
- **Loading**: `<link>` tags with `preconnect` for performance

### Fonts Declared in CSS
```css
:root {
    --font-sans: 'DM Sans', -apple-system, sans-serif;
    --font-mono: 'Space Mono', monospace;
}
```

### Font Files (if self-hosted)

| Filename | Format | Weight | Style |
|----------|--------|--------|-------|
| *(Not self-hosted - using Google Fonts)* | - | - | - |

### Google Fonts (used)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Fonts loaded:
- **DM Sans** - Primary sans-serif font
  - Weights: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
  - Styles: Normal, Italic (400 only)
  - Optical size: 9-40
- **Space Mono** - Monospace font for code/tags
  - Weights: 400 (regular), 700 (bold)

### System Font Stack
```css
/* Used as fallback in --font-sans */
-apple-system, sans-serif

/* Used as fallback in --font-mono */
monospace
```

---

## CSS Background Images

| Selector | Image URL | Purpose |
|----------|-----------|---------|
| `body::before` | Inline SVG data URI (noise filter) | Noise texture overlay for visual effect |
| `select` | Inline SVG data URI (chevron) | Custom dropdown arrow |
| `select:focus` | Inline SVG data URI (chevron blue) | Focused dropdown arrow |

Note: All CSS background images use inline data URIs - no external image files.

---

## Favicon

- **Present**: Partially (manifest file only)
- **Location**: Root directory (expected)
- **Formats**: ico, png (referenced but not created)
- **Apple touch icon**: Referenced but not created
- **Manifest file**: Yes (`/site.webmanifest` exists)

### Favicon Files Status

| File | Status | Location |
|------|--------|----------|
| `favicon.ico` | **MISSING** | `/favicon.ico` |
| `favicon-16x16.png` | **MISSING** | `/favicon-16x16.png` |
| `favicon-32x32.png` | **MISSING** | `/favicon-32x32.png` |
| `apple-touch-icon.png` | **MISSING** | `/apple-touch-icon.png` |
| `android-chrome-192x192.png` | **MISSING** | Referenced in manifest |
| `android-chrome-512x512.png` | **MISSING** | Referenced in manifest |
| `site.webmanifest` | **EXISTS** | `/site.webmanifest` |

### Favicon Code (from HTML)
```html
<!-- Favicon - TODO: Generate from Point6 logo using https://realfavicongenerator.net/ -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#3b82f6">
```

---

## Asset Optimization

### Image Optimization

| Image | Current Size | Optimized? | Recommendation |
|-------|--------------|------------|----------------|
| *(No images exist yet)* | - | - | - |

### Total Asset Size
- **Images**: 0 KB (none exist)
- **Icons**: 0 KB (inline SVG)
- **Fonts**: ~100-150 KB (loaded from Google CDN)
- **Total Local Assets**: ~5 KB (README.md only)

### Recommendations
- [ ] Compress images when added (TinyPNG, Squoosh)
- [ ] Convert to WebP with fallbacks for browsers that support it
- [ ] Lazy load below-fold images using `loading="lazy"`
- [ ] Use responsive images (srcset) for different screen sizes
- [ ] Consider self-hosting fonts to reduce external requests
- [ ] Subset fonts if self-hosted to reduce file size

---

## Issues Found

### Missing Assets
1. **All favicon files** - Referenced in HTML but not present
2. **All OG images** - Referenced in meta tags but not created
3. **Logo files** - Referenced in structured data but not created
4. **Founder photos** - Using placeholder initials (MP, MY)
5. **Team photo** - Using placeholder box

### Oversized Assets
1. *(No assets to evaluate)*

### Unused Assets
1. *(No unused assets - directory is essentially empty)*

---

## TODO List (from CLAUDE.md)

Based on CLAUDE.md, these assets are needed:

- [ ] Add logo and favicon files (see assets/images/README.md)
  - [ ] `favicon.ico` (32x32)
  - [ ] `favicon-16x16.png` (16x16)
  - [ ] `favicon-32x32.png` (32x32)
  - [ ] `apple-touch-icon.png` (180x180)
  - [ ] `android-chrome-192x192.png` (192x192)
  - [ ] `android-chrome-512x512.png` (512x512)
  - [ ] `logo.png` (400x100)
  - [ ] `logo.svg` (vector)
- [ ] Add OG images for social sharing (1200x630px each)
  - [ ] `og-image.jpg` - Homepage
  - [ ] `og-services.jpg` - Services
  - [ ] `og-ai-launchpad.jpg` - AI Launchpad
  - [ ] `og-results.jpg` - Results
  - [ ] `og-about.jpg` - About
  - [ ] `og-contact.jpg` - Contact

---

## Specifications (from assets/images/README.md)

### Favicon Requirements
| Filename | Size | Format | Purpose |
|----------|------|--------|---------|
| `favicon.ico` | 32x32 | ICO | Legacy browser support |
| `favicon-16x16.png` | 16x16 | PNG | Small browser tabs |
| `favicon-32x32.png` | 32x32 | PNG | Standard browser tabs |
| `apple-touch-icon.png` | 180x180 | PNG | iOS home screen, Safari |
| `android-chrome-192x192.png` | 192x192 | PNG | Android home screen |
| `android-chrome-512x512.png` | 512x512 | PNG | Android splash screen |

### Open Graph Image Requirements
- **Size**: 1200 x 630 pixels (1.91:1 ratio)
- **Format**: JPG (optimized, <200KB)
- **Color Space**: sRGB

### Target File Sizes
- Favicons: < 10KB each
- OG Images: < 200KB
- Hero Images: < 300KB
- Thumbnails: < 50KB

---

## Recommendations

### Immediate Priority
1. **Generate favicon files** using https://realfavicongenerator.net/
   - Use Point6 logo dot (blue circle) as the favicon design
   - Background: `#3b82f6` or transparent
2. **Create logo.png and logo.svg** for structured data
3. **Create og-image.jpg** for homepage social sharing (most important)
4. **Obtain founder photos** to replace placeholder initials

### Before Launch
1. Create all 6 OG images for complete social sharing coverage
2. Replace all placeholder images (team photo, case study images)
3. Optimize all images for web (compress, convert to WebP where appropriate)

### Nice to Have
1. Add actual headshots for testimonial avatars
2. Create case study imagery for results page cards
3. Consider SVG logo for better scaling
4. Add hero images for case studies when published
