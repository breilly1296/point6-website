# 02 - Design System Analysis

Analyze the CSS and visual design patterns in the Point6 website and generate a design system documentation file.

## Instructions

Examine `css/styles.css` (and any other stylesheets) to extract and document the design system.

## Output Format

Generate a file called `design-system.md` with the following structure:

```markdown
# Point6 Website - Design System

> Generated: [DATE]
> Source: Analysis of css/styles.css

## Color Palette

### Primary Colors
| Name | Value | Usage |
|------|-------|-------|
| Primary | #XXXXXX | Links, buttons, accents |
| Primary Dark | #XXXXXX | Hover states |
| [etc...] | | |

### Background Colors
| Name | Value | Usage |
|------|-------|-------|
| Page Background | #XXXXXX | |
| Card Background | #XXXXXX | |
| [etc...] | | |

### Text Colors
| Name | Value | Usage |
|------|-------|-------|
| Primary Text | #XXXXXX | Main body text |
| Secondary Text | #XXXXXX | Muted/supporting text |
| [etc...] | | |

### Other Colors
| Name | Value | Usage |
|------|-------|-------|
| Borders | #XXXXXX | |
| [etc...] | | |

## Typography

### Font Families
- Headings: [font-family value]
- Body: [font-family value]
- Monospace: [font-family value]

### Font Sizes
| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| h1 | | | |
| h2 | | | |
| h3 | | | |
| Body | | | |
| Small | | | |

### Text Styles
[Any special text treatments: uppercase labels, etc.]

## Spacing

### Base Unit
[If there's a consistent spacing unit, e.g., 8px grid]

### Common Spacing Values
| Name | Value | Usage |
|------|-------|-------|
| Section Padding (Desktop) | | |
| Section Padding (Mobile) | | |
| Card Padding | | |
| Gap/Gutter | | |

## Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| Mobile | | |
| Tablet | | |
| Desktop | | |
| Large Desktop | | |

## Shadows & Effects

| Name | Value | Usage |
|------|-------|-------|
| Card Shadow | | |
| Hover Shadow | | |
| [etc...] | | |

## Border Radius

| Element | Value |
|---------|-------|
| Buttons | |
| Cards | |
| Inputs | |

## Transitions & Animations

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| | | | |

## CSS Custom Properties (Variables)

[List all CSS variables defined, typically in :root]

```css
:root {
  --variable-name: value;
  /* ... */
}
```

## Key Observations

[Notable patterns, consistency issues, or design decisions]

## Recommendations

[Any design system improvements suggested]
```

## What to Analyze

1. Extract all color values (look for hex, rgb, hsl)
2. Find CSS custom properties (variables)
3. Document font-family declarations
4. Note font-size scale
5. Find spacing patterns
6. Identify media query breakpoints
7. Document box-shadow values
8. Find border-radius patterns
9. Note transition/animation properties

## Save Location

Save output to: `docs/design-system.md`
