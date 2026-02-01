# Point6 Website - Component Catalog

> Generated: February 1, 2025
> Source: Analysis of HTML and CSS files

## Overview

The Point6 website uses a cohesive component library built on CSS custom properties (design tokens) with a dark theme. The site follows a consistent design language featuring cards with subtle borders, hover animations, and a blue accent color (#3b82f6). Components are responsive with mobile-first considerations and include comprehensive accessibility features.

**Design Tokens (CSS Custom Properties):**
- `--color-bg`: #0a0a0b (dark background)
- `--color-bg-elevated`: #141416 (elevated surfaces)
- `--color-bg-card`: #1a1a1e (card backgrounds)
- `--color-text`: #f5f5f7 (primary text)
- `--color-text-muted`: #8a8a8e (secondary text)
- `--color-accent`: #3b82f6 (blue accent)
- `--color-accent-glow`: rgba(59, 130, 246, 0.15)
- `--color-border`: rgba(255, 255, 255, 0.08)
- `--font-sans`: 'DM Sans', -apple-system, sans-serif
- `--font-mono`: 'Space Mono', monospace

---

## Navigation

### Header Navigation
- **Location**: All pages
- **CSS Class(es)**: `.site-nav`, `nav`, `.container`, `.logo`, `.nav-links`
- **Elements**:
  - Logo with animated dot (`.logo`, `.logo-dot`)
  - Nav links (Services, AI Launchpad, Results, About)
  - CTA button ("Get in Touch")
  - Mobile hamburger button (`.mobile-menu-btn`)
- **States**:
  - Default: Fixed position, 20px padding, backdrop blur
  - Scrolled (`.scrolled`): Condensed 12px padding, increased blur
  - Mobile menu open: Slide-in panel from right
- **Behavior**: Fixed at top with backdrop blur, condenses on scroll
- **Example HTML**:
```html
<nav class="site-nav" aria-label="Main navigation" role="navigation">
    <div class="container">
        <a href="index.html" class="logo" aria-label="Point6 - Return to homepage">
            <span class="logo-dot" aria-hidden="true"></span>
            Point6
        </a>
        <button class="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links" type="button">
            <span class="hamburger-line" aria-hidden="true"></span>
            <span class="hamburger-line" aria-hidden="true"></span>
            <span class="hamburger-line" aria-hidden="true"></span>
        </button>
        <div class="nav-links" id="nav-links" role="menubar" aria-label="Primary navigation">
            <a href="services.html" role="menuitem">Services</a>
            <a href="ai-launchpad.html" role="menuitem">AI Launchpad</a>
            <a href="results.html" role="menuitem">Results</a>
            <a href="about.html" role="menuitem">About</a>
            <a href="contact.html" class="btn btn-primary" role="menuitem">Get in Touch</a>
        </div>
    </div>
</nav>
```

### Mobile Menu
- **Trigger**: `.mobile-menu-btn` (hamburger icon with 3 lines)
- **Behavior**: Slide in from right, overlay background
- **CSS Class(es)**: `.mobile-menu-btn`, `.mobile-menu-overlay`, `.nav-links.active`
- **Breakpoint**: Visible at 768px and below
- **Animation**: Hamburger transforms to X when active

### Footer
- **Location**: All pages
- **CSS Class(es)**: `footer`, `.footer-grid`, `.footer-brand`, `.footer-column`, `.footer-bottom`, `.footer-links`, `.footer-tagline`
- **Sections**:
  - Brand column (logo + tagline)
  - Company links column
  - Connect links column
  - Bottom bar (copyright + Privacy/Terms links)
- **Example HTML**:
```html
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="index.html" class="logo">
                    <span class="logo-dot" aria-hidden="true"></span>
                    Point6
                </a>
                <p class="footer-tagline">Flexible, high-quality ServiceNow expertise.</p>
            </div>
            <div class="footer-column">
                <h4>Company</h4>
                <ul>
                    <li><a href="services.html">Services</a></li>
                    <!-- more links -->
                </ul>
            </div>
            <div class="footer-column">
                <h4>Connect</h4>
                <ul>
                    <li><a href="mailto:hello@point6.io">hello@point6.io</a></li>
                    <!-- more links -->
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-text">&copy; 2025 Point6 LLC. All rights reserved.</div>
            <div class="footer-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
        </div>
    </div>
</footer>
```

---

## Buttons

### Primary Button
- **CSS Class(es)**: `.btn`, `.btn-primary`
- **Usage**: Main CTAs (Book a Consultation, Get Started, etc.)
- **States**:
  - Default: Blue background (#3b82f6), white text
  - Hover: Darker blue (#2563eb), translateY(-2px), box-shadow
  - Focus: 2px accent outline, 2px offset
  - Loading (`.loading`): Spinner animation
  - Success (`.success`): Green background (#22c55e)
  - Error (`.error`): Red background (#ef4444)
- **Example HTML**:
```html
<a href="contact.html" class="btn btn-primary">
    Get in Touch
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</a>
```

### Secondary/Outline Button
- **CSS Class(es)**: `.btn`, `.btn-secondary`
- **Usage**: Secondary actions (Explore Services, See Pricing)
- **States**:
  - Default: Transparent background, white text, border
  - Hover: Elevated background, accent border, translateY(-2px)
- **Example HTML**:
```html
<a href="services.html" class="btn btn-secondary">Explore Services</a>
```

### Button Variants
- **Full Width**: `.btn-full` - width: 100%
- **Small**: `.btn-small` - smaller padding (10px 20px)
- **With Arrow**: Include inline SVG arrow icon

### Link Button (Text + Arrow)
- **CSS Class(es)**: `.link-arrow`
- **Usage**: "Learn more", "Explore all services" style links
- **States**:
  - Default: Accent color, inline-flex
  - Hover: Increased gap (8px to 12px), underline animation, arrow moves right
- **Example HTML**:
```html
<a href="services.html" class="link-arrow">
    Learn more
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</a>
```

---

## Cards

### Service Card
- **CSS Class(es)**: `.service-card`, `article`
- **Usage**: Service previews on homepage, services page
- **Structure**: Icon (emoji), title (h3/h4), description (p), optional link, optional features list
- **States**:
  - Default: Card background, border, 16px radius
  - Hover: Accent border glow, translateY(-4px), top accent line appears
- **Example HTML**:
```html
<article class="service-card">
    <div class="service-icon" aria-hidden="true">🔧</div>
    <h3>Technology Workflows</h3>
    <p>ITSM, ITOM, ITAM — streamline IT operations with modern service management.</p>
    <ul class="service-features">
        <li>Incident & problem management</li>
        <li>Change & release management</li>
    </ul>
    <a href="services.html" class="link-arrow">
        Learn more
        <svg>...</svg>
    </a>
</article>
```

### Stat Card / Stats Bar Item
- **CSS Class(es)**: `.stats-bar`, `.stats-bar-grid`, `.stats-bar-item`, `.stats-bar-number`, `.stats-bar-label`
- **Usage**: Stats bar on homepage, AI Launchpad page
- **Structure**: Large number (accent color, mono font), label below
- **Example HTML**:
```html
<section class="stats-bar" aria-label="Company statistics">
    <div class="container">
        <div class="stats-bar-grid">
            <div class="stats-bar-item">
                <div class="stats-bar-number">Up to 70%</div>
                <div class="stats-bar-label">Cost Savings</div>
            </div>
            <!-- more stats -->
        </div>
    </div>
</section>
```

### Founder/Team Card
- **CSS Class(es)**: `.founder-card`, `.founder-photo-wrapper`, `.founder-photo-placeholder`, `.founder-linkedin`, `.founder-info`, `.founder-role`, `.founder-education`
- **Usage**: About page (founders section)
- **Structure**: Photo placeholder (circular with initials), LinkedIn icon, name, role, bio, education
- **Example HTML**:
```html
<article class="founder-card">
    <div class="founder-photo-wrapper">
        <div class="founder-photo-placeholder">
            <span>MY</span>
        </div>
        <a href="#" class="founder-linkedin" aria-label="LinkedIn Profile">
            <svg>...</svg>
        </a>
    </div>
    <div class="founder-info">
        <h3>Michael Yee</h3>
        <div class="founder-role">COO & Co-founder</div>
        <p>18+ years of hands-on ServiceNow development...</p>
        <div class="founder-education">
            <svg>...</svg>
            Cal Poly San Luis Obispo
        </div>
    </div>
</article>
```

### Case Study Card
- **CSS Class(es)**: `.case-study-card`, `.case-study-image`, `.case-study-content`, `.case-study-tag`, `.case-study-approach`, `.case-study-metrics`, `.case-study-metric`
- **Usage**: Results page
- **Structure**: Image/icon area, industry tag, title, description, approach block, metrics grid
- **Example HTML**:
```html
<article class="case-study-card">
    <div class="case-study-image">🏥</div>
    <div class="case-study-content">
        <div class="case-study-tag">Healthcare | HRSD</div>
        <h3>Employee Onboarding Transformation</h3>
        <p>A large healthcare organization was struggling with manual onboarding...</p>
        <div class="case-study-approach">
            <strong>Approach:</strong> Implemented HR Service Delivery with automated workflows...
        </div>
        <div class="case-study-metrics">
            <div class="case-study-metric">
                <span class="metric-number">70%</span>
                <span class="metric-label">faster onboarding</span>
            </div>
            <!-- more metrics -->
        </div>
    </div>
</article>
```

### Featured Case Study Card
- **CSS Class(es)**: `.featured-case-study`, `.featured-case-study-header`, `.featured-case-study-content`, `.featured-case-study-section`, `.featured-results-grid`, `.featured-result`
- **Usage**: Results page (main featured case study)
- **Structure**: Header with tag + industry, content sections (Challenge, Approach, Results), results metrics grid

### Pricing Card
- **CSS Class(es)**: `.pricing-card`, `.pricing-card-featured`, `.pricing-badge`, `.pricing-tier`, `.pricing-price`, `.pricing-currency`, `.pricing-amount`, `.pricing-duration`, `.pricing-features`
- **Usage**: AI Launchpad page
- **Structure**: Tier name, price (currency + amount), duration, features list with checkmarks, CTA button
- **Variant**: `.pricing-card-featured` - accent border, gradient background, "Most Popular" badge
- **Example HTML**:
```html
<article class="pricing-card pricing-card-featured">
    <div class="pricing-badge">Most Popular</div>
    <div class="pricing-tier">Silver</div>
    <div class="pricing-price">
        <span class="pricing-currency">$</span>
        <span class="pricing-amount">25,000</span>
    </div>
    <div class="pricing-duration">4 weeks</div>
    <ul class="pricing-features">
        <li>Everything in Bronze</li>
        <li>AI Data Cleanup & Normalization</li>
        <li>AI Model Training</li>
    </ul>
    <a href="#" class="btn btn-primary btn-full">Get Started</a>
</article>
```

### Contact Option Card (Sidebar)
- **CSS Class(es)**: `.contact-option`, `.contact-option-icon`, `.contact-option-content`, `.contact-link`
- **Usage**: Contact page sidebar (email, booking, location, LinkedIn)
- **Structure**: Icon in square container, title, description, optional link/button
- **Example HTML**:
```html
<article class="contact-option">
    <div class="contact-option-icon">
        <svg>...</svg>
    </div>
    <div class="contact-option-content">
        <h3>Prefer email?</h3>
        <p>Reach out directly — we respond within 24 hours.</p>
        <a href="mailto:hello@point6.io" class="contact-link">hello@point6.io</a>
    </div>
</article>
```

### Principle/Value Card
- **CSS Class(es)**: `.principle-card`, `.value-card`, `.principle-icon`, `.value-icon`
- **Usage**: About page (team structure, values)
- **Structure**: Icon (emoji), title, description
- **Example HTML**:
```html
<article class="principle-card">
    <div class="principle-icon" aria-hidden="true">🏗️</div>
    <h3>Architects</h3>
    <p>Experts in designing robust and scalable ServiceNow solutions.</p>
</article>
```

### Location Card
- **CSS Class(es)**: `.location-card`, `.location-icon`
- **Usage**: About page (global presence)
- **Structure**: Icon (emoji), city name, region/country
- **Example HTML**:
```html
<article class="location-card">
    <div class="location-icon" aria-hidden="true">🌴</div>
    <h3>Los Angeles</h3>
    <p>California, USA</p>
</article>
```

### Testimonial Card
- **CSS Class(es)**: `.testimonial-card`, `.testimonial-text`, `.testimonial-author`, `.testimonial-avatar`, `.testimonial-info`, `.testimonial-placeholder`, `.testimonial-large`
- **Usage**: Homepage (differentiators), Results page
- **Structure**: Quote text, author info (avatar with initials, name, title/company)
- **Variants**:
  - `.testimonial-placeholder` - for placeholder testimonials
  - `.testimonial-large` - larger version for case study pages
- **Example HTML**:
```html
<blockquote class="testimonial-card">
    <p class="testimonial-text">"Point6 brings the same caliber of expertise..."</p>
    <footer class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">MY</div>
        <div class="testimonial-info">
            <cite>Michael Yee</cite>
            <p>Co-founder & COO, Point6</p>
        </div>
    </footer>
</blockquote>
```

### Featured Service Card
- **CSS Class(es)**: `.featured-service-card`, `.featured-service-badge`, `.featured-service-content`, `.featured-service-icon`, `.featured-service-text`
- **Usage**: Services page (AI Launchpad highlight)
- **Structure**: Badge, icon, heading, description, CTA button
- **Example HTML**:
```html
<div class="featured-service-card">
    <div class="featured-service-badge">Featured</div>
    <div class="featured-service-content">
        <div class="featured-service-icon" aria-hidden="true">🚀</div>
        <div class="featured-service-text">
            <h2>AI Launchpad</h2>
            <p>Start small, scale fast...</p>
            <a href="ai-launchpad.html" class="btn btn-primary">Explore AI Launchpad</a>
        </div>
    </div>
</div>
```

### Pain Points Card
- **CSS Class(es)**: `.pain-points-card`, `.pain-points-list`, `.pain-icon`, `.pain-solution`
- **Usage**: AI Launchpad page
- **Structure**: Heading, list of pain points with icons, solution statement
- **Example HTML**:
```html
<div class="pain-points-card">
    <h3>Sound familiar?</h3>
    <ul class="pain-points-list">
        <li>
            <span class="pain-icon" aria-hidden="true">💰</span>
            <span>Worried about the cost of implementing AI</span>
        </li>
        <!-- more items -->
    </ul>
    <p class="pain-solution">AI Launchpad solves all three.</p>
</div>
```

### Why Feature Card
- **CSS Class(es)**: `.why-feature`, `.why-feature-icon`, `.why-feature-text`
- **Usage**: Homepage (Why Point6 section)
- **Structure**: Icon, title, description
- **Example HTML**:
```html
<div class="why-feature">
    <div class="why-feature-icon" aria-hidden="true">💰</div>
    <div class="why-feature-text">
        <h4>Up to 70% cost savings</h4>
        <p>Compared to traditional ServiceNow partners</p>
    </div>
</div>
```

### Differentiator Card
- **CSS Class(es)**: `.differentiator`
- **Usage**: Homepage (differentiators section)
- **Structure**: Title, description with left accent border
- **Example HTML**:
```html
<article class="differentiator">
    <h3>Balanced & collaborative approach</h3>
    <p>Unlike overly prescriptive partners or non-prescriptive GSIs, we work with you...</p>
</article>
```

---

## Sections

### Hero Section
- **CSS Class(es)**: `.hero`, `.hero-content`, `.hero-tag`, `.hero-buttons`, `.highlight`
- **Structure**: Tag label, heading (h1), subheading (p), CTA buttons
- **Features**: Background gradient glow, animate-in classes for staggered load animation
- **Example HTML**:
```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-tag animate-in">ServiceNow Experts</div>
            <h1 class="animate-in delay-1">
                Unlock the full potential of <span class="highlight">ServiceNow</span>
            </h1>
            <p class="animate-in delay-2">Point6 delivers flexible, high-quality...</p>
            <div class="hero-buttons animate-in delay-3">
                <a href="#" class="btn btn-primary">Book a Consultation</a>
                <a href="#" class="btn btn-secondary">Explore Services</a>
            </div>
        </div>
    </div>
</section>
```

### Page Header (Interior Pages)
- **CSS Class(es)**: `.page-header`, `.page-header-content`
- **Structure**: Same as hero but with different padding (160px top, 80px bottom)
- **Usage**: Services, About, Results, Contact, AI Launchpad pages

### Section Header
- **CSS Class(es)**: `.section-header`, `.section-tag`, `.section-title`, `.section-subtitle`
- **Structure**: Small caps tag label, heading, optional description
- **Example HTML**:
```html
<div class="section-header">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title">Comprehensive ServiceNow expertise</h2>
    <p class="section-subtitle">Optional subtitle text</p>
</div>
```

### Section
- **CSS Class(es)**: `.section`
- **Padding**: 120px vertical (80px on mobile)
- **Variant**: `.alt-bg` - elevated background with top/bottom borders

### CTA Section (Minimal)
- **CSS Class(es)**: `.cta-section-minimal`, `.cta-minimal`, `.cta-or`
- **Usage**: Bottom of all pages
- **Structure**: Centered heading, description, primary button, optional "or email us" link
- **Example HTML**:
```html
<section class="section cta-section-minimal">
    <div class="container">
        <div class="cta-minimal">
            <h2>Ready to unlock ServiceNow's potential?</h2>
            <p>Book a free consultation. No pressure, no sales pitch.</p>
            <a href="#" class="btn btn-primary">Book a Consultation</a>
            <div class="cta-or">or email us at <a href="mailto:hello@point6.io">hello@point6.io</a></div>
        </div>
    </div>
</section>
```

---

## Form Elements

### Text Input
- **CSS Class(es)**: `.form-group input[type="text"]`, `.form-group input[type="email"]`
- **States**:
  - Default: Dark background, subtle border
  - Focus: Accent outline (2px), accent border
  - Error (`.error`): Red border, red background tint
  - Success (`.success`): Green border, green background tint
  - Disabled: 50% opacity, not-allowed cursor
- **Example HTML**:
```html
<div class="form-group">
    <label for="name">Name <span class="required" aria-label="required">*</span></label>
    <input type="text" id="name" name="name" required placeholder="Jane Smith" autocomplete="name" aria-describedby="name-hint">
    <span class="form-hint" id="name-hint">How should we address you?</span>
</div>
```

### Textarea
- **CSS Class(es)**: `.form-group textarea`
- **Features**: Resizable vertically, minimum 120px height, same styling as inputs

### Select/Dropdown
- **CSS Class(es)**: `.form-group select`
- **Features**: Custom arrow icon via background-image, same styling as inputs
- **Example HTML**:
```html
<div class="form-group">
    <label for="service">What can we help with?</label>
    <select id="service" name="service">
        <option value="">Choose a topic...</option>
        <option value="new-implementation">New ServiceNow Implementation</option>
        <!-- more options -->
    </select>
</div>
```

### Form Layout
- **Grid structure**:
  - `.form-row` - 2-column grid for side-by-side fields
  - Single column by default
  - Stacks to single column on mobile (768px)
- **Error/Success Messages**: `.form-error`, `.form-success`, `.form-status`
- **Form Hints**: `.form-hint` - helper text below fields, brightens on focus

### Contact Form
- **CSS Class(es)**: `.contact-form`, `.contact-form-wrapper`, `.form-intro`
- **Location**: Contact page
- **Features**: Hidden honeypot field for spam prevention, Formspree integration

---

## Tables

### Comparison Table
- **CSS Class(es)**: `.comparison-table-wrapper`, `.comparison-table`, `.highlight-col`
- **Usage**: About page (Point6 vs Partners vs GSIs)
- **Structure**: Standard HTML table with header row, data rows
- **Features**:
  - Horizontal scroll wrapper for mobile
  - Highlighted column (`.highlight-col`) with accent color
  - Sticky first column on mobile
  - Hover state on rows
- **Example HTML**:
```html
<div class="comparison-table-wrapper">
    <table class="comparison-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th class="highlight-col">Point6</th>
                <th>ServiceNow Partners</th>
                <th>Big Consultancies (GSIs)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cost Savings</td>
                <td class="highlight-col"><strong>Up to 70%</strong></td>
                <td>Up to 30%</td>
                <td>Up to 70%</td>
            </tr>
            <!-- more rows -->
        </tbody>
    </table>
</div>
```

---

## Lists

### Service Features List
- **CSS Class(es)**: `.service-features`
- **Usage**: Services page (service card capabilities)
- **Style**: No bullets, accent-colored dot bullets via ::before
- **Example HTML**:
```html
<ul class="service-features">
    <li>Incident & problem management</li>
    <li>Change & release management</li>
    <li>Service request fulfillment</li>
</ul>
```

### Methodology Steps
- **CSS Class(es)**: `.methodology-steps`, `.methodology-step`, `.methodology-step-number`, `.methodology-step-content`, `.methodology-list`
- **Usage**: Services page (Digital Trip methodology)
- **Style**: Numbered circles (accent background), content with arrow-prefixed list items
- **Example HTML**:
```html
<ol class="methodology-steps" role="list">
    <li class="methodology-step">
        <div class="methodology-step-number" aria-hidden="true">1</div>
        <div class="methodology-step-content">
            <h3>Discovery & Assessment</h3>
            <p>We begin by understanding your business needs...</p>
            <ul class="methodology-list">
                <li>Identify gaps in workflows</li>
                <li>Define success metrics</li>
            </ul>
        </div>
    </li>
</ol>
```

### Expect Steps (Contact Page)
- **CSS Class(es)**: `.expect-section`, `.expect-steps`, `.expect-step`, `.expect-step-number`, `.expect-step-content`
- **Usage**: Contact page ("What to expect" section)
- **Style**: Similar to methodology steps, horizontal layout with numbered circle

### Pricing Features List
- **CSS Class(es)**: `.pricing-features`
- **Usage**: AI Launchpad pricing cards
- **Style**: Checkmark prefix via ::before content

---

## Grids

### Services Grid
- **CSS Class(es)**: `.services-grid`, `.services-grid-3`, `.services-grid-4`
- **Variants**:
  - Default: auto-fit, minmax(320px, 1fr)
  - `.services-grid-3`: Fixed 3 columns
  - `.services-grid-4`: Fixed 4 columns
- **Responsive**: Collapses to 2 columns, then 1 column

### Pricing Grid
- **CSS Class(es)**: `.pricing-grid`
- **Structure**: 3 columns, max-width 1000px, centered
- **Responsive**: Single column on mobile with featured card first

### AI Solutions Grid
- **CSS Class(es)**: `.ai-solutions-grid`, `.ai-solution-category`, `.ai-solution-items`, `.ai-solution-item`
- **Structure**: 4 columns for solution categories
- **Responsive**: 2 columns, then 1 column

### Founders Grid
- **CSS Class(es)**: `.founders-grid`
- **Structure**: 2 columns, max-width 900px, centered

### Principles Grid
- **CSS Class(es)**: `.principles-grid`, `.principles-grid-5`
- **Variants**: 3 columns default, 5 columns variant
- **Responsive**: Progressively fewer columns on smaller screens

### Locations Grid
- **CSS Class(es)**: `.locations-grid`
- **Structure**: 3 columns
- **Responsive**: Single column on mobile

### Testimonials Grid
- **CSS Class(es)**: `.testimonials-grid`
- **Structure**: auto-fit, minmax(320px, 1fr)

---

## Icons

### Icon Style
- **Approach**:
  - Emoji for most decorative icons (service cards, features)
  - Inline SVG for interactive elements (arrows, social icons)
- **Common icons used**:
  - Arrow right (→) - CTAs, links
  - LinkedIn logo - team/founder cards
  - Hamburger menu (3 lines) - mobile nav
  - Calendar, email, location markers - contact page
  - Checkmarks - pricing features

### Arrow Icon (Used in buttons and links)
```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Badges/Labels

### Section Tag
- **CSS Class(es)**: `.section-tag`, `.hero-tag`, `.case-study-tag`
- **Style**: Mono font, small caps, uppercase, letter-spacing 0.1-0.15em
- **Colors**: `.section-tag` - muted text; `.hero-tag` - accent color with left dash
- **Example**: `<div class="section-tag">What We Do</div>`

### Feature Badge
- **CSS Class(es)**: `.featured-service-badge`, `.pricing-badge`
- **Usage**: "Featured", "Most Popular"
- **Style**: Pill shape (100px border-radius), accent background, white text, uppercase
- **Example HTML**:
```html
<div class="pricing-badge">Most Popular</div>
```

### Industry Tag
- **CSS Class(es)**: `.case-study-tag`, `.case-study-industry`
- **Usage**: Case studies
- **Style**: Mono font, accent color, uppercase, small size

---

## Module Pills
- **CSS Class(es)**: `.modules-grid`, `.module-pill`, `.module-abbr`, `.module-name`
- **Usage**: Services page (Platform Expertise section)
- **Structure**: Pill-shaped badges with abbreviation + full name
- **Example HTML**:
```html
<div class="modules-grid" role="list">
    <div class="module-pill" role="listitem">
        <span class="module-abbr">ITSM</span>
        <span class="module-name">IT Service Management</span>
    </div>
</div>
```

---

## Utility Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width 1200px, centered with 24px padding |
| `.alt-bg` | Elevated background with borders |
| `.highlight` | Accent color for text |
| `.btn-full` | Full-width button |
| `.btn-small` | Smaller button variant |
| `.required` | Red asterisk for required fields |
| `.active` | Active state for nav links |
| `.scrolled` | Nav condensed state |
| `.animate-in` | Fade-in-up animation |
| `.animate-fade` | Fade-in animation |
| `.delay-1` through `.delay-5` | Animation delay utilities |
| `.reveal` | Initial hidden state for scroll animations |
| `.revealed` | Revealed state after scroll |
| `.skip-link` | Accessibility skip link |

---

## Animations

### Page Load Animations
- **Classes**: `.animate-in`, `.animate-fade`, `.animate-scale`
- **Delays**: `.delay-1` (0.1s) through `.delay-5` (0.5s)

### Scroll Reveal
- **Classes**: `.reveal`, `.revealed`, `.reveal-stagger`
- **Behavior**: Elements start hidden, revealed when scrolled into view

### Hover Effects
- Cards: translateY(-4px), border glow, box-shadow
- Buttons: translateY(-2px), color change, box-shadow
- Links: Gap increase (8px to 12px), underline animation

### Accessibility
- `@media (prefers-reduced-motion: reduce)` - Disables animations for users who prefer reduced motion

---

## Accessibility Features

- **Skip Link**: `.skip-link` - Hidden link to skip to main content
- **Focus States**: `:focus-visible` - 2px accent outline with 2px offset
- **ARIA Labels**: All interactive elements have proper aria-labels
- **Keyboard Navigation**: Full keyboard support with visible focus states
- **Role Attributes**: Navigation uses menubar/menuitem roles
- **Screen Reader Support**: `aria-hidden="true"` on decorative elements

---

## Components Not Yet Implemented

1. **Blog/Article Cards** - For future content marketing
2. **Video Embed Component** - For case study videos or demos
3. **Accordion/FAQ Component** - For expandable content sections
4. **Toast/Notification Component** - For form success/error messages
5. **Modal/Dialog Component** - For booking calendar overlays
6. **Progress Indicator** - For multi-step forms or onboarding
7. **Search Component** - If site grows to need search functionality
8. **Pagination** - For paginated content lists
9. **Cookie Consent Banner** - For GDPR compliance

---

## Recommendations

1. **Component Consistency**: Some similar components have slightly different implementations (e.g., `.principle-card` vs `.value-card` are identical). Consider consolidating.

2. **Icon System**: Consider implementing a consistent icon system (icon font or SVG sprite) instead of mixing emoji and inline SVGs.

3. **CSS Custom Properties**: Extend design tokens to include spacing scale, shadow definitions, and border-radius values for better consistency.

4. **Component Documentation**: Add HTML comments or a style guide page showing all component variations in one place.

5. **Form Validation**: Consider adding client-side validation styles and states more comprehensively.

6. **Dark/Light Mode**: The current dark theme is consistent; could add light mode toggle in future.

7. **Animation Timing**: Consider using CSS custom properties for animation timing to ensure consistency.

8. **Mobile Optimization**: Some grids could benefit from intermediate breakpoints (tablet sizes).

9. **Print Styles**: Add print-specific styles for better printing support.

10. **CSS Architecture**: Consider organizing CSS into separate files (base, components, utilities) for better maintainability as the site grows.
