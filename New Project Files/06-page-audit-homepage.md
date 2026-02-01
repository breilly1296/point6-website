# Point6 Website - Homepage Audit

> Generated: 2026-02-01
> File: index.html

## Page Overview

- **Title tag**: Point6 | ServiceNow Implementation Experts
- **Meta description**: Point6 helps companies implement and optimize ServiceNow. Senior consultants, transparent pricing, real results. Let's talk.
- **URL path**: /index.html (or /)
- **Purpose**: Primary landing page for Point6

---

## Document Structure

### Head Section
- **Charset**: UTF-8
- **Viewport**: width=device-width, initial-scale=1.0
- **Title**: Point6 | ServiceNow Implementation Experts
- **Meta description**: Point6 helps companies implement and optimize ServiceNow. Senior consultants, transparent pricing, real results. Let's talk.
- **Robots**: index, follow
- **Canonical URL**: https://point6.io/
- **Stylesheets linked**:
  - Google Fonts (DM Sans, Space Mono)
  - `css/styles.css`
- **Scripts in head**:
  - Structured Data (JSON-LD) for Organization
- **Favicon**: Multiple formats configured
  - `/favicon.ico`
  - `/favicon-32x32.png`
  - `/favicon-16x16.png`
  - `/apple-touch-icon.png`
  - `/site.webmanifest`
- **Theme color**: #3b82f6 (blue)
- **Open Graph tags**: Present (type, url, title, description, image, site_name)
- **Twitter Card tags**: Present (card, url, title, description, image)

### Body Structure
```
<body>
  <a class="skip-link">Skip to main content</a>
  <nav class="site-nav">...</nav>
  <div class="mobile-menu-overlay">...</div>
  <main id="main-content">
    <section class="hero">...</section>
    <section class="stats-bar">...</section>
    <section id="services" class="section">...</section>
    <section id="about" class="section why-section">...</section>
    <section class="section differentiators-section">...</section>
    <section class="section cta-section-minimal">...</section>
  </main>
  <footer>...</footer>
  <script src="js/main.js" defer>
</body>
```

---

## Section-by-Section Analysis

### 1. Header/Navigation
- **HTML structure**: `<nav class="site-nav">` with container, logo, mobile button, nav-links
- **Logo**: Text-based "Point6" with CSS-styled dot (`.logo-dot`), links to `index.html`
- **Nav items**:
  | Link Text | Destination |
  |-----------|-------------|
  | Services | services.html |
  | AI Launchpad | ai-launchpad.html |
  | Results | results.html |
  | About | about.html |
  | Get in Touch | contact.html |
- **CTA button**: "Get in Touch" with `btn btn-primary` class, links to contact.html
- **Mobile menu**: Present
  - Hamburger button with `mobile-menu-btn` class
  - ARIA attributes: `aria-label`, `aria-expanded="false"`, `aria-controls="nav-links"`
  - Overlay div: `mobile-menu-overlay`
- **Accessibility features**:
  - Skip link present: `<a href="#main-content" class="skip-link">`
  - `role="navigation"` and `aria-label="Main navigation"` on nav
  - `role="menubar"` and `role="menuitem"` attributes on nav links
- **Issues**: None identified

### 2. Hero Section
- **Section class/id**: `class="hero"`
- **Label text**: "ServiceNow Experts" (div with `hero-tag` class)
- **H1 heading**: "Unlock the full potential of ServiceNow" (with "ServiceNow" highlighted via `<span class="highlight">`)
- **Subheading/description**: "Point6 delivers flexible, high-quality ServiceNow expertise with a personal touch. Digital transformation without the enterprise overhead — just senior experts focused on your success."
- **Primary CTA**: "Book a Consultation" with arrow icon
  - Link: External Outlook booking link (`https://outlook.office.com/bookwithme/...`)
  - Opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`)
- **Secondary CTA**: "Explore Services"
  - Link: services.html
- **Background**: Not specified in HTML (CSS-controlled)
- **Animation classes**: `animate-in`, `delay-1`, `delay-2`, `delay-3` for staggered entrance
- **Issues**: None identified

### 3. Stats Bar
- **Section class/id**: `class="stats-bar"`, `aria-label="Company statistics"`
- **Stats present**:
  | Number | Label |
  |--------|-------|
  | Up to 70% | Cost Savings |
  | 40%+ | Senior Experts |
  | 75% | Technical Team |
  | 18+ | Years Experience |
- **Layout**: Grid layout via `stats-bar-grid` class (4 items)
- **HTML structure**: Each stat is a `stats-bar-item` with `stats-bar-number` and `stats-bar-label`
- **Issues**: None - all stats are populated with meaningful data

### 4. Services Overview
- **Section class/id**: `id="services"`, `class="section"`
- **Section header**:
  - Tag: "What We Do"
  - Title: "Comprehensive ServiceNow expertise"
- **Cards present** (4 cards in `services-grid-4`):
  | Icon | Title | Description | Link |
  |------|-------|-------------|------|
  | (wrench emoji) | Technology Workflows | ITSM, ITOM, ITAM — streamline IT operations with modern service management and full asset visibility. | services.html |
  | (handshake emoji) | Customer Workflows | CSM, Field Service — deliver exceptional customer experiences and efficient field operations. | services.html |
  | (robot emoji) | AI & GenAI | Now Assist, Predictive Intelligence, Virtual Agent — unlock AI to automate and accelerate your workflows. | services.html |
  | (shield emoji) | Managed Services | Ongoing support, monitoring, and optimization — keep your ServiceNow platform running at peak performance. | services.html |
- **"View all" link**: "Explore all services" with arrow icon, links to services.html
- **Card structure**: `<article class="service-card">` with icon, h3 title, p description, and arrow link
- **Issues**: All cards link to the same services.html page (no anchors for specific services)

### 5. Why Point6 / Differentiators
- **Section class/id**: `id="about"`, `class="section why-section"`
- **Heading**:
  - Tag: "Why Point6"
  - Title: "Digital transformation with a personal touch"
- **Content structure**: Two-column layout (`why-grid`) with:
  - Left: Text content with paragraphs and "Learn more about us" link
  - Right: Four feature cards
- **Key points covered**:
  - [x] Cost savings (Up to 70% cost savings - Compared to traditional ServiceNow partners)
  - [x] Senior experts (40%+ senior experts mention in text)
  - [x] Technical team (75% technical team with proven ServiceNow skills)
  - [x] Balanced approach (Covered in differentiators section below)
  - [ ] Low upsell risk (Covered in differentiators section below)
- **Features grid**:
  | Icon | Title | Description |
  |------|-------|-------------|
  | (money bag) | Up to 70% cost savings | Compared to traditional ServiceNow partners |
  | (target) | Customer-centric | Solutions tailored to your unique needs and goals |
  | (lightning) | Transform in place | Driving change without disrupting your business |
  | (wrench) | Technical expertise | 75% technical team with proven ServiceNow skills |
- **Link**: "Learn more about us" links to about.html
- **Issues**: None identified

### 6. The Point6 Difference (Differentiators Section)
- **Section class/id**: `class="section differentiators-section"`
- **Heading**:
  - Tag: "The Point6 Difference"
  - Title: "How we compare"
- **Content structure**: Two-column layout (`differentiators-grid`) with:
  - Left: Three differentiator articles
  - Right: Testimonial blockquote
- **Differentiators**:
  | Title | Description |
  |-------|-------------|
  | Balanced & collaborative approach | Unlike overly prescriptive partners or non-prescriptive GSIs, we work with you to find the right solution — not push a one-size-fits-all methodology. |
  | Low risk of unnecessary upsells | We focus on what you actually need, not maximizing billable hours. Our success is measured by your outcomes, not our revenue. |
  | 40%+ senior experts on every project | Most partners have just 10-25% senior staff. With Point6, you get experienced professionals doing the actual work. |
- **Testimonial**:
  - Quote: "Point6 brings the same caliber of expertise you'd expect from elite ServiceNow partners, but with a personal touch and pricing that makes sense for growing organizations."
  - Author: Michael Yee, Co-founder & COO, Point6
  - Avatar: Initials "MY" (CSS-styled)
- **Issues**: Testimonial is from a co-founder rather than an external client - could add more credibility with customer testimonials

### 7. CTA Section
- **Section class/id**: `class="section cta-section-minimal"`
- **Heading**: "Ready to unlock ServiceNow's potential?"
- **Description**: "Book a free consultation. No pressure, no sales pitch — just a conversation about your goals."
- **Button**: "Book a Consultation" with arrow icon
  - Link: External Outlook booking link (same as hero)
  - Opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`)
- **Alternative contact**: "or email us at hello@point6.io" (mailto link)
- **Issues**: None identified

### 8. Footer
- **Logo/tagline**:
  - Logo: Text "Point6" with dot, links to index.html
  - Tagline: "Flexible, high-quality ServiceNow expertise."
- **Company links**:
  | Link Text | Destination |
  |-----------|-------------|
  | Services | services.html |
  | AI Launchpad | ai-launchpad.html |
  | Results | results.html |
  | About | about.html |
  | Contact | contact.html |
- **Connect links**:
  | Link Text | Destination |
  |-----------|-------------|
  | hello@point6.io | mailto:hello@point6.io |
  | LinkedIn | # (placeholder) |
  | YouTube | # (placeholder) |
- **Copyright**: (c) 2025 Point6 LLC. All rights reserved.
- **Legal links**:
  | Link Text | Destination |
  |-----------|-------------|
  | Privacy | # (placeholder) |
  | Terms | # (placeholder) |
- **Issues**:
  - LinkedIn and YouTube links are placeholders (#)
  - Privacy and Terms links are placeholders (#)
  - Copyright year is 2025, should be updated to 2026

---

## Content Quality

### Text Content
- [x] All headings present and meaningful
- [x] No placeholder text (Lorem ipsum, TODO, etc.) in visible content
- [x] No spelling/grammar errors noticed
- [x] Consistent voice/tone (professional but approachable)
- [x] Clear value proposition (cost savings, senior experts, ServiceNow focus)

### CTAs
| CTA Text | Destination | Working? |
|----------|-------------|----------|
| Book a Consultation (Hero) | Outlook booking link | Yes (external) |
| Explore Services (Hero) | services.html | Yes |
| Learn more (Service cards x4) | services.html | Yes |
| Explore all services | services.html | Yes |
| Learn more about us | about.html | Yes |
| Book a Consultation (CTA section) | Outlook booking link | Yes (external) |
| hello@point6.io | mailto:hello@point6.io | Yes |
| Get in Touch (Nav) | contact.html | Yes |

### Images
| Image | Alt Text | Loading? |
|-------|----------|----------|
| og-image.jpg | N/A (meta tag) | TODO in comment |
| logo.png | N/A (structured data) | Referenced but may not exist |

**Note**: Page uses emoji icons instead of image files for visual elements. No `<img>` tags present in the HTML.

---

## Technical Analysis

### HTML Validation
- **Semantic HTML used**: Yes
  - `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`, `<cite>`
- **Heading hierarchy**: Correct
  - Single h1 in hero
  - h2 for section titles
  - h3 for card titles
  - h4 for feature titles and footer column headers
- **ARIA attributes**: Extensive use
  - `aria-label` on nav, stats section, logo links
  - `aria-expanded` and `aria-controls` on mobile menu button
  - `aria-hidden="true"` on decorative elements (icons, arrows, avatar)
  - `role="navigation"`, `role="menubar"`, `role="menuitem"`
- **Form elements**: None on homepage

### Performance Concerns
- **Large images**: None (no images on page, uses emojis)
- **Render-blocking resources**:
  - Google Fonts (2 fonts with preconnect)
  - `css/styles.css`
- **Inline styles**: None
- **Scripts**: Single `main.js` with `defer` attribute (non-blocking)

### Accessibility Concerns
- **Color contrast issues**: Cannot verify without CSS (likely addressed in stylesheet)
- **Missing alt text**: N/A (no images)
- **Keyboard navigation**: Skip link present, focus management indicated by ARIA
- **Focus states**: Cannot verify without CSS (noted as implemented in CLAUDE.md)

---

## Mobile Considerations

- **Responsive classes present**: Yes
  - `mobile-menu-btn` for hamburger
  - `mobile-menu-overlay` for menu backdrop
  - `services-grid-4` likely has responsive breakpoints
- **Mobile-specific content**: Mobile menu overlay
- **Potential overflow issues**: Cannot verify without CSS
- **Touch target sizes**: Cannot verify without CSS (buttons appear adequate)
- **Viewport meta**: Correctly configured (`width=device-width, initial-scale=1.0`)

---

## Issues Found

### Critical
1. None identified

### Major
1. **Placeholder links in footer**: LinkedIn (#), YouTube (#), Privacy (#), Terms (#) are non-functional
2. **TODO comment in source**: OG image creation noted as TODO (line 16)
3. **Copyright year outdated**: Shows 2025, should be 2026

### Minor
1. **Testimonial source**: Quote is from co-founder (Michael Yee) rather than external customer - less credible
2. **Favicon TODO**: Comment indicates favicon needs to be generated (line 27)
3. **All service cards link to same page**: No deep linking to specific services
4. **External booking link**: Uses third-party Outlook booking rather than integrated contact form

---

## Recommendations

### Content
1. Add real customer testimonials to replace/supplement co-founder quote
2. Update copyright year to 2026
3. Add actual LinkedIn and YouTube profile URLs
4. Create Privacy Policy and Terms of Service pages

### Design
1. Consider adding hero background image or gradient for visual interest
2. Add customer logos/social proof section if available
3. Consider adding methodology preview section (mentioned in CLAUDE.md requirements)

### Technical
1. Create and add OG image (1200x630px) for social sharing
2. Generate and add favicon files using realfavicongenerator.net
3. Add deep links to specific service sections (e.g., services.html#itsm)
4. Consider adding structured data for services (ServicePage schema)
5. Add comparison table mentioned in CLAUDE.md requirements

---

## Comparison to CLAUDE.md Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| Hero with value prop | Present | Full hero section with H1, description, dual CTAs |
| Stats bar | Present | 4 stats: 70% savings, 40%+ seniors, 75% technical, 18+ years |
| Services preview cards | Present | 4 service cards with icons, titles, descriptions |
| Comparison table | Missing | Not implemented (only differentiators list) |
| Methodology preview | Missing | Not present on homepage |
| CTA section | Present | Minimal CTA with booking link and email alternative |

---

## Structured Data Analysis

### Organization Schema (Present)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Point6",
  "url": "https://point6.io",
  "logo": "https://point6.io/assets/images/logo.png",
  "description": "Point6 is a ServiceNow implementation consultancy...",
  "email": "hello@point6.io",
  "sameAs": ["https://linkedin.com/company/point6"],
  "contactPoint": {...}
}
```

### Missing Schema
- WebSite schema (for sitelinks searchbox)
- Service schemas for each service offering
- LocalBusiness schema (if applicable)

---

## Summary

The homepage is well-structured with strong semantic HTML, comprehensive accessibility features, and good SEO foundations. The content clearly communicates Point6's value proposition as a ServiceNow consultancy offering senior expertise at competitive rates.

**Strengths:**
- Excellent accessibility implementation (skip links, ARIA attributes, semantic HTML)
- Strong heading hierarchy
- Clear value proposition and messaging
- Non-blocking JavaScript loading
- Comprehensive meta tags and Open Graph data

**Areas for Improvement:**
- Complete placeholder links (social, legal pages)
- Add missing assets (OG image, favicon)
- Include comparison table and methodology preview per CLAUDE.md
- Add external customer testimonials
- Update copyright year
