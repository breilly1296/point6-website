# Point6 Website - Design System

> Generated: 2026-02-01
> Source: Analysis of css/styles.css

## Color Palette

### Primary Colors
| Name | Value | Usage |
|------|-------|-------|
| Accent (Primary) | `#3b82f6` | Links, buttons, accents, highlights, icons |
| Accent Hover | `#2563eb` | Button hover states |
| Accent Glow | `rgba(59, 130, 246, 0.15)` | Subtle backgrounds, icon containers, glows |
| Accent Border Hover | `rgba(59, 130, 246, 0.3)` | Card hover borders |

### Background Colors
| Name | Value | Usage |
|------|-------|-------|
| Page Background | `#0a0a0b` | Main body background |
| Background Elevated | `#141416` | Alternate sections, elevated surfaces |
| Card Background | `#1a1a1e` | Cards, form containers, modules |
| Founder Card | `#1e293b` | Special founder card background |
| Nav Background | `rgba(10, 10, 11, 0.8)` | Navigation bar (with blur) |
| Nav Scrolled | `rgba(10, 10, 11, 0.95)` | Navigation when scrolled |
| Mobile Menu Overlay | `rgba(10, 10, 11, 0.9)` | Mobile menu backdrop |

### Text Colors
| Name | Value | Usage |
|------|-------|-------|
| Primary Text | `#f5f5f7` | Main body text, headings |
| Muted Text | `#8a8a8e` | Secondary text, descriptions, labels |

### Status Colors
| Name | Value | Usage |
|------|-------|-------|
| Error | `#ef4444` | Form validation errors, error states |
| Error Background | `rgba(239, 68, 68, 0.05)` | Error field background |
| Error Border | `rgba(239, 68, 68, 0.3)` | Error message borders |
| Success | `#22c55e` | Success states, checkmarks |
| Success Background | `rgba(34, 197, 94, 0.05)` | Success field background |
| Success Border | `rgba(34, 197, 94, 0.3)` | Success message borders |

### Other Colors
| Name | Value | Usage |
|------|-------|-------|
| Border | `rgba(255, 255, 255, 0.08)` | Card borders, dividers |
| Border (High Contrast) | `rgba(255, 255, 255, 0.2)` | High contrast mode borders |
| Gradient Purple | `#8b5cf6` | Avatar gradients (combined with accent) |
| Gradient Card | `linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)` | Featured service cards |
| Gradient Founder Photo | `linear-gradient(135deg, #334155 0%, #1e293b 100%)` | Founder photo placeholder |

## Typography

### Font Families
| Type | Value | Usage |
|------|-------|-------|
| Sans-serif (Primary) | `'DM Sans', -apple-system, sans-serif` | Body text, headings, buttons |
| Monospace | `'Space Mono', monospace` | Logo, stats numbers, code, tags |

### Font Sizes
| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| h1 (Hero) | `clamp(2.5rem, 6vw, 4rem)` | 1.1 | 700 |
| h1 (Page Header) | `clamp(2rem, 5vw, 3rem)` | 1.1 | 700 |
| h2 (Section Title) | `clamp(1.75rem, 4vw, 2.5rem)` | - | 600 |
| h2 (CTA) | `clamp(1.75rem, 4vw, 2.25rem)` | - | 600 |
| h3 (Card Title) | `1.25rem` | - | 600 |
| h3 (Differentiator) | `1.15rem` | - | 600 |
| h4 (Footer Column) | `0.85rem` | - | 600 |
| Body (Large) | `1.25rem` | 1.6 | 400 |
| Body (Default) | `1rem` | 1.6 | 400 |
| Body (Content) | `1.05rem - 1.15rem` | 1.7-1.8 | 400 |
| Small | `0.9rem` | - | 400 |
| Extra Small | `0.85rem` | - | 400 |
| Tiny | `0.75rem - 0.8rem` | - | 400 |
| Button | `0.9rem` | - | 500 |
| Nav Links | `0.9rem` | - | 400 |
| Logo | `1.25rem` | - | 700 |

### Text Styles
| Style | Properties | Usage |
|-------|------------|-------|
| Section Tag | `0.75rem`, uppercase, letter-spacing: 0.15em | Section labels |
| Hero Tag | `0.8rem`, uppercase, letter-spacing: 0.1em | Hero section label |
| Case Study Tag | `0.7rem`, uppercase, letter-spacing: 0.1em | Case study labels |
| Footer Heading | `0.85rem`, uppercase, letter-spacing: 0.05em | Footer column titles |
| Badge Text | `0.75rem`, uppercase, letter-spacing: 0.05em | Featured badges |
| Letter Spacing (Headings) | `-0.02em` | All major headings |

## Spacing

### Base Unit
The design uses an 8px-based spacing system with common multiples of 4px and 8px.

### Common Spacing Values
| Name | Value | Usage |
|------|-------|-------|
| Container Max Width | `1200px` | Main container |
| Container Max Width (Large) | `1320px` | 1440px+ screens |
| Container Max Width (Desktop) | `1100px` | Up to 1439px screens |
| Container Padding | `24px` | Horizontal padding |
| Container Padding (Tablet) | `32px` | 1024px screens |
| Container Padding (Mobile) | `20px` | 640px and below |
| Container Padding (XS Mobile) | `16px` | 375px and below |
| Section Padding (Desktop) | `120px 0` | Standard sections |
| Section Padding (Tablet) | `100px 0` | 1024px screens |
| Section Padding (Mobile) | `80px 0` | 768px screens |
| Section Padding (Small Mobile) | `60px 0` | 640px and below |
| Card Padding | `32px` | Standard cards |
| Card Padding (Mobile) | `24px` | Mobile cards |
| Card Padding (XS Mobile) | `20px` | 320px screens |
| Gap/Gutter (Grid) | `24px` | Standard grid gap |
| Gap/Gutter (Small) | `16px` | Smaller grids |
| Gap/Gutter (Large) | `32px - 64px` | Two-column layouts |
| Section Header Margin | `64px` | Below section headers |
| Nav Padding | `20px 0` | Navigation bar |
| Nav Padding (Scrolled) | `12px 0` | Scrolled state |
| Hero Padding | `120px 0 80px` | Hero section |

## Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| Large Desktop | `1440px` | Container expansion |
| Desktop | `1439px` | Container adjustment |
| Tablet Landscape | `1024px` | Grid column reduction |
| Tablet Portrait | `768px` | Major layout changes, mobile nav |
| Small Mobile | `640px` | Single column, spacing reduction |
| Mobile Plus | `414px` | iPhone Plus/Max adjustments |
| Standard Mobile | `375px` | iPhone standard size |
| Minimum Mobile | `320px` | Smallest supported width |

## Shadows & Effects

| Name | Value | Usage |
|------|-------|-------|
| Card Hover Shadow | `0 12px 40px rgba(0, 0, 0, 0.15)` | Card hover states |
| Button Hover Shadow | `0 4px 12px rgba(59, 130, 246, 0.3)` | Primary button hover |
| Sticky Column Shadow | `2px 0 4px rgba(0, 0, 0, 0.1)` | Sticky table column |
| Backdrop Blur | `blur(20px)` | Navigation |
| Backdrop Blur (Scrolled) | `blur(30px)` | Navigation scrolled |
| Backdrop Blur (Menu) | `blur(10px)` | Mobile menu overlay |
| Noise Texture | SVG filter (fractalNoise) | Subtle page texture |
| Noise Opacity | `0.03` | Body overlay |

## Border Radius

| Element | Value |
|---------|-------|
| Buttons | `8px` |
| Input Fields | `8px` |
| Cards (Standard) | `16px` |
| Cards (Small) | `12px` |
| Testimonial Cards | `24px` |
| Pills/Badges | `100px` |
| Logo Dot | `50%` |
| Avatars | `50%` |
| Service Icons | `12px` |
| Featured Badges | `100px` |

## Transitions & Animations

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| Default | `0.2s` | `ease` | Links, buttons, general |
| Cards | `0.25s` | `ease-out` | Card hover effects |
| Transform | `0.3s` | `ease` | Service cards, navigation |
| Navigation | `0.3s` | `ease-out` | Scroll effects |
| Reveal | `0.5s` | `ease-out` | Scroll animations |
| Stagger Children | `0.4s` | `ease-out` | Staggered reveals |
| Mobile (Reduced) | `0.3s` | - | Performance optimization |

### Keyframe Animations
```css
@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.9); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

### Animation Delay Classes
- `.delay-1`: 0.1s
- `.delay-2`: 0.2s
- `.delay-3`: 0.3s
- `.delay-4`: 0.4s
- `.delay-5`: 0.5s

## CSS Custom Properties (Variables)

```css
:root {
    --color-bg: #0a0a0b;
    --color-bg-elevated: #141416;
    --color-bg-card: #1a1a1e;
    --color-text: #f5f5f7;
    --color-text-muted: #8a8a8e;
    --color-accent: #3b82f6;
    --color-accent-glow: rgba(59, 130, 246, 0.15);
    --color-border: rgba(255, 255, 255, 0.08);
    --font-sans: 'DM Sans', -apple-system, sans-serif;
    --font-mono: 'Space Mono', monospace;
}
```

## Component Patterns

### Buttons
| Variant | Background | Border | Text Color |
|---------|------------|--------|------------|
| Primary | `var(--color-accent)` | none | white |
| Secondary | transparent | `1px solid var(--color-border)` | `var(--color-text)` |
| Loading | Same + spinner | Same | transparent (hidden) |
| Success | `#22c55e` | Same color | white |
| Error | `#ef4444` | Same color | white |
| Small | Same | Same | Same (smaller padding) |
| Full Width | Same | Same | Same + `width: 100%` |

### Cards
- Standard cards: 16px border-radius, 1px border, card background
- Hover state: -4px translateY, accent border, shadow
- Featured cards: Gradient background, accent border

### Form Inputs
- 48px minimum height (touch target)
- 14px 16px padding
- Background: `var(--color-bg)`
- Border: `1px solid var(--color-border)`
- Focus: 2px accent outline with 2px offset
- Font size: `max(16px, 0.95rem)` to prevent iOS zoom

### Navigation
- Fixed position with backdrop blur
- Transitions between normal and scrolled states
- Mobile hamburger menu at 768px breakpoint

### Grids
- Services: `repeat(auto-fit, minmax(320px, 1fr))`
- Stats: `repeat(4, 1fr)` -> `repeat(2, 1fr)` on mobile
- Team: `repeat(auto-fit, minmax(280px, 1fr))`
- Case Studies: `repeat(auto-fit, minmax(350px, 1fr))`

## Key Observations

1. **Dark-First Design**: The entire site is built with a dark theme by default. No light mode variant is implemented.

2. **Consistent Accent Color**: Blue (#3b82f6) is used consistently throughout for CTAs, links, highlights, and interactive elements.

3. **Typography Hierarchy**: Clear distinction between DM Sans for body content and Space Mono for technical/numerical elements.

4. **Responsive Clamp Values**: Font sizes use CSS clamp() for fluid typography scaling between breakpoints.

5. **Touch-Friendly**: 44px minimum touch targets on interactive elements, with specific media queries for touch devices.

6. **Accessibility Considered**:
   - Focus-visible states for keyboard navigation
   - Skip link implementation
   - Reduced motion media query support
   - High contrast mode adjustments

7. **Performance-Conscious**: Reduced animation durations on mobile, CSS-only animations where possible.

8. **Consistent Hover Patterns**: Cards lift (-4px translateY), borders become accent-colored, shadows appear.

9. **Modular Component Structure**: Clear separation between layout components (grids, sections) and UI components (cards, buttons).

## Recommendations

1. **CSS Variable Expansion**: Consider adding variables for:
   - Spacing values (e.g., `--spacing-sm`, `--spacing-md`, `--spacing-lg`)
   - Animation durations (e.g., `--transition-fast`, `--transition-normal`)
   - Border radius values (e.g., `--radius-sm`, `--radius-md`, `--radius-lg`)

2. **Color Semantic Naming**: Add semantic color variables like:
   - `--color-error`, `--color-success`, `--color-warning`
   - Currently these are hardcoded values (#ef4444, #22c55e)

3. **Grid System Standardization**: Consider standardizing grid gap values to a consistent scale.

4. **Component Documentation**: The CSS is well-organized with section comments but could benefit from a component library documentation.

5. **Print Styles**: No print stylesheet is included if needed for any pages.

6. **Container Query Support**: As browser support grows, consider using container queries for more granular responsive components.
