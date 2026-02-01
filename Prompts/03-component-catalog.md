# 03 - Component Catalog

Analyze the Point6 website and document all reusable UI components and patterns.

## Instructions

Examine both HTML files and CSS to identify repeating UI patterns that form the component library.

## Output Format

Generate a file called `component-catalog.md` with the following structure:

```markdown
# Point6 Website - Component Catalog

> Generated: [DATE]
> Source: Analysis of HTML and CSS files

## Overview

[Brief summary of the component patterns used across the site]

---

## Navigation

### Header Navigation
- **Location**: All pages
- **CSS Class(es)**: `.header`, `.nav`, etc.
- **Elements**: Logo, nav links, CTA button
- **States**: Default, mobile menu open
- **Screenshot/Description**: [describe appearance]

### Mobile Menu
- **Trigger**: Hamburger icon
- **Behavior**: [slide in, overlay, etc.]
- **CSS Class(es)**: 

### Footer
- **Location**: All pages
- **CSS Class(es)**: 
- **Sections**: [logo/tagline, nav links, social links, copyright]

---

## Buttons

### Primary Button
- **CSS Class(es)**: `.btn-primary`, etc.
- **Usage**: Main CTAs
- **States**: Default, hover, focus, disabled
- **Example HTML**:
```html
<a href="#" class="btn btn-primary">Button Text</a>
```

### Secondary/Outline Button
- **CSS Class(es)**: 
- **Usage**: 
- **Example HTML**:

### Link Button (Text + Arrow)
- **CSS Class(es)**: 
- **Usage**: "Learn more →" style links
- **Example HTML**:

---

## Cards

### Service Card
- **CSS Class(es)**: 
- **Usage**: Service previews on homepage, services page
- **Structure**: Icon, title, description, optional link
- **Example HTML**:

### Stat Card
- **CSS Class(es)**: 
- **Usage**: Stats bar, metrics display
- **Structure**: Large number, label
- **Example HTML**:

### Founder/Team Card
- **CSS Class(es)**: 
- **Usage**: About page
- **Structure**: Photo, name, title, bio, social link
- **Example HTML**:

### Case Study Card
- **CSS Class(es)**: 
- **Usage**: Results page
- **Structure**: Badge, challenge, approach, results metrics
- **Example HTML**:

### Pricing Card
- **CSS Class(es)**: 
- **Usage**: AI Launchpad page
- **Structure**: Tier name, price, duration, features, CTA
- **Variant**: "Most Popular" highlighted state
- **Example HTML**:

### Info Card (Sidebar)
- **CSS Class(es)**: 
- **Usage**: Contact page sidebar (email, booking, location)
- **Structure**: Icon, title, description, optional link
- **Example HTML**:

---

## Sections

### Hero Section
- **CSS Class(es)**: 
- **Structure**: Label, heading, subheading, CTA buttons
- **Variants**: [if different per page]

### Section Header
- **CSS Class(es)**: 
- **Structure**: Label (small caps), heading, optional description
- **Example HTML**:

### CTA Section
- **CSS Class(es)**: 
- **Usage**: Bottom of pages
- **Structure**: Heading, description, button

---

## Form Elements

### Text Input
- **CSS Class(es)**: 
- **States**: Default, focus, error
- **Example HTML**:

### Textarea
- **CSS Class(es)**: 

### Select/Dropdown
- **CSS Class(es)**: 

### Form Layout
- **Grid structure**: [2-column, single column, etc.]

---

## Tables

### Comparison Table
- **CSS Class(es)**: 
- **Usage**: About page (Point6 vs Partners vs GSIs)
- **Structure**: 
- **Example HTML**:

### Pricing Table
- **CSS Class(es)**: 
- **Usage**: AI Launchpad

---

## Lists

### Capability List
- **CSS Class(es)**: 
- **Usage**: Services page (key capabilities)
- **Style**: Checkmarks, arrows, bullets?

### Methodology Steps
- **CSS Class(es)**: 
- **Usage**: Services page
- **Style**: Numbered circles with content

---

## Icons

### Icon Style
- **Approach**: [SVG inline, emoji, icon font, etc.]
- **Common icons used**: [list them]

---

## Badges/Labels

### Section Label
- **CSS Class(es)**: 
- **Style**: Small caps, primary color, often with dash prefix
- **Example**: "— SERVICES"

### Feature Badge
- **CSS Class(es)**: 
- **Usage**: "FEATURED", "MOST POPULAR"
- **Example HTML**:

### Industry Tag
- **CSS Class(es)**: 
- **Usage**: Case studies
- **Example HTML**:

---

## Utility Classes

[Any utility/helper classes for spacing, text alignment, visibility, etc.]

| Class | Purpose |
|-------|---------|
| | |

---

## Components Not Yet Implemented

[Any components that would be useful but don't exist yet]

---

## Recommendations

[Suggestions for component improvements or additions]
```

## What to Analyze

1. Scan all HTML files for repeating patterns
2. Identify CSS classes that represent components
3. Note variations/states of each component
4. Extract example HTML for each
5. Check for consistency across pages

## Save Location

Save output to: `docs/component-catalog.md`
