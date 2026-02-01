# 17 - Assets Inventory

Catalog all assets (images, icons, fonts) used in the Point6 website.

## Instructions

Examine the assets directory and all HTML/CSS files to create a comprehensive asset inventory.

## Output Format

Generate a file called `assets-inventory.md` with the following structure:

```markdown
# Point6 Website - Assets Inventory

> Generated: [DATE]
> Source: Analysis of assets/ directory and HTML/CSS files

## Directory Structure

```
assets/
├── images/
│   ├── [list files]
│   └── ...
├── icons/
│   ├── [list files]
│   └── ...
└── [other folders]
```

---

## Images

### Image Files

| Filename | Type | Size | Dimensions | Used On |
|----------|------|------|------------|---------|
| | jpg/png/webp | KB | WxH | |

### Image Usage by Page

#### index.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

#### services.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

#### ai-launchpad.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

#### results.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

#### about.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

#### contact.html
| Image | Purpose | Alt Text |
|-------|---------|----------|
| | | |

### Missing Images

[Images referenced in HTML but not found in assets]

| Reference | Page | Expected Location |
|-----------|------|-------------------|
| | | |

### Placeholder Images

[Images that are placeholders needing replacement]

| Current | Page | Needed |
|---------|------|--------|
| [Photo placeholder] | about.html | Founder photos |
| | | |

---

## Icons

### Icon Approach
- **Method**: [Inline SVG / Icon font / Emoji / External sprites]
- **Library**: [Lucide, Heroicons, FontAwesome, custom, none]

### Icon Files

| Filename | Type | Size | Purpose |
|----------|------|------|---------|
| | svg/png | | |

### Inline SVG Icons

[If icons are inline SVG in HTML]

| Icon Description | Used On | Class/ID |
|------------------|---------|----------|
| | | |

### Emoji Icons

[If emoji are used as icons]

| Emoji | Purpose | Used On |
|-------|---------|---------|
| | | |

---

## Fonts

### Font Loading Strategy
- **Method**: [System fonts / Google Fonts / Self-hosted / @font-face]

### Fonts Declared in CSS
```css
font-family: [extract from styles.css]
```

### Font Files (if self-hosted)

| Filename | Format | Weight | Style |
|----------|--------|--------|-------|
| | woff2/woff/ttf | 400/700 | normal/italic |

### Google Fonts (if used)
```html
<link href="[Google Fonts URL]">
```

Fonts loaded:
- 
- 

### System Font Stack
```css
font-family: [system font stack if used]
```

---

## CSS Background Images

| Selector | Image URL | Purpose |
|----------|-----------|---------|
| | | |

---

## Favicon

- **Present**: Yes / No
- **Location**: 
- **Formats**: ico / png / svg
- **Apple touch icon**: Yes / No
- **Manifest file**: Yes / No

### Favicon Code
```html
[extract favicon link tags]
```

---

## Asset Optimization

### Image Optimization

| Image | Current Size | Optimized? | Recommendation |
|-------|--------------|------------|----------------|
| | | | Compress / Convert to WebP |

### Total Asset Size
- **Images**: [X] KB
- **Icons**: [X] KB
- **Fonts**: [X] KB
- **Total**: [X] KB

### Recommendations
- [ ] Compress images (TinyPNG, Squoosh)
- [ ] Convert to WebP with fallbacks
- [ ] Lazy load below-fold images
- [ ] Use responsive images (srcset)
- [ ] Subset fonts if self-hosted

---

## Issues Found

### Missing Assets
1. 

### Oversized Assets
1. 

### Unused Assets
1. 

---

## TODO List (from CLAUDE.md)

Based on CLAUDE.md, these assets are needed:

- [ ] Marcelino Porfirio photo: `/assets/images/marcelino-porfirio.jpg`
- [ ] Michael Yee photo: `/assets/images/michael-yee.jpg`
- [ ] [Other assets mentioned]

---

## Recommendations

### Immediate
1. Add founder photos
2. 

### Optimization
1. Compress all images
2. 

### Nice to Have
1. Add favicon set
2. Add Open Graph image for social sharing
```

## What to Analyze

1. List all files in assets/ directory
2. Check each HTML file for image references
3. Identify CSS background images
4. Document font loading approach
5. Check for favicon
6. Calculate file sizes
7. Note missing or placeholder assets

## Save Location

Save output to: `docs/assets-inventory.md`
