# Point6 Website - Content Gaps Analysis

> Generated: February 1, 2026
> Source: Comparison of CLAUDE.md and CONTENT-NEEDED.md requirements vs current HTML

## Executive Summary

- **Total required sections**: 42
- **Fully complete**: 28
- **Partially complete**: 8
- **Missing/Empty**: 6
- **Completion percentage**: 67%

The Point6 website has strong foundational content in place, including all major service descriptions, the AI Launchpad offering with pricing, the Digital Trip methodology, comparison tables, and founder bios. However, critical gaps remain in social media links, contact form functionality, real client testimonials, and brand assets (logo, favicon, OG images) that must be addressed before launch.

---

## Critical Gaps (High Priority)

These gaps significantly impact the site's effectiveness:

### 1. Contact Form Not Functional
- **Location**: `contact.html` line 129
- **Required**: Functional contact form with backend integration
- **Current state**: Form action points to `https://formspree.io/f/YOUR_FORM_ID` - placeholder not replaced
- **Impact**: **Critical** - Visitors cannot submit inquiries; primary lead capture mechanism is broken

### 2. Social Media Links Are Placeholder (#)
- **Location**: All page footers (6 pages), `contact.html` LinkedIn section
- **Required**: Working links to Point6 LinkedIn and YouTube
- **Current state**: Footer links for LinkedIn and YouTube point to `#` (non-functional)
- **Impact**: **High** - Broken links hurt credibility and SEO; visitors cannot follow/connect

### 3. Missing Logo and Favicon
- **Location**: All pages (favicon links), site branding
- **Required**:
  - Logo SVG/PNG: `assets/images/logo.svg` or `logo.png`
  - Favicon: `/favicon.ico`, `/favicon-32x32.png`, `/favicon-16x16.png`
  - Apple touch icon: `/apple-touch-icon.png`
- **Current state**: Files referenced but do not exist
- **Impact**: **High** - Browser tabs show default icon; no brand identity

### 4. Missing Open Graph Images
- **Location**: All pages (meta tags)
- **Required**:
  - `og-image.jpg` - Homepage (1200x630px)
  - `og-services.jpg` - Services page
  - `og-results.jpg` - Results page
  - `og-about.jpg` - About page
  - `og-contact.jpg` - Contact page
  - `og-ai-launchpad.jpg` - AI Launchpad page
- **Current state**: Meta tags reference images that don't exist
- **Impact**: **Medium-High** - Social shares will have no preview image; poor social engagement

### 5. Placeholder Testimonials
- **Location**: `results.html` testimonials section (lines 237-293)
- **Required**: Real client testimonials with names, titles, companies
- **Current state**: Three placeholder testimonials with generic content and placeholder avatars; "Real client testimonials coming soon" message displayed
- **Impact**: **Medium-High** - Placeholder content reduces trust and credibility

### 6. Case Studies Need Client Permission
- **Location**: `results.html` (featured case study + 2 grid case studies)
- **Required**: Real case studies with client approval
- **Current state**: Anonymized case studies with note "Case study anonymized pending client permission"
- **Impact**: **Medium** - Reduces credibility compared to named client references

---

## Homepage Gaps

### Stats Bar
- **Required** (from CLAUDE.md):
  - Up to 70% cost savings
  - 40%+ senior experts
  - 75% technical team
  - 18+ years experience
- **Current**: All four stats are present and accurate
- **Gap**: None
- **Priority**: Complete

### Service Cards
- **Required**: Preview cards for main service categories
- **Current**: 4 service cards present (Technology Workflows, Customer Workflows, AI & GenAI, Managed Services)
- **Gap**: None
- **Priority**: Complete

### Why Point6 Section
- **Required**: Differentiation content with key value props
- **Current**: Full section with 4 key differentiators (cost savings, customer-centric, transform in place, technical expertise)
- **Gap**: None
- **Priority**: Complete

### Comparison Table
- **Required** (from CLAUDE.md):
  | Metric | Point6 | Partners | GSIs |
  |--------|--------|----------|------|
  | Cost Savings | Up to 70% | Up to 30% | Up to 70% |
  | Senior Experts | 40%+ | 25% | 10% |
  | Technical Team | 75% | 50%+ | 50% |
  | Client Approach | Balanced | Overly Prescriptive | Non-Prescriptive |
  | License Upsell Risk | Low | Medium | High |
- **Current**: Comparison table exists on About page, not Homepage
- **Gap**: Table present on about.html but not index.html (design choice - acceptable)
- **Priority**: Low (covered on about page)

### Footer Links
- **Required**: Working social and policy links
- **Current**: LinkedIn and YouTube point to `#`; Privacy and Terms point to `#`
- **Gap**: All four footer links are non-functional placeholders
- **Priority**: High

---

## Services Page Gaps

### Technology Workflows (Tx)
- **Required**: ITSM, ITOM, ITAM descriptions with capabilities
- **Current**: Complete with 3 detailed cards including feature lists
- **Gap**: None
- **Priority**: Complete

### Customer Workflows (Cx)
- **Required**: CSM, Field Service descriptions
- **Current**: Complete with 2 detailed cards (CSM, FSM)
- **Gap**: None
- **Priority**: Complete

### Employee Workflows
- **Required**: HRSD description
- **Current**: Complete with 3 cards (HRSD, Employee Center, Workplace Service Delivery)
- **Gap**: None - actually exceeds requirements
- **Priority**: Complete

### Strategic Portfolio Management (SPM)
- **Required**: SPM description
- **Current**: Complete with SPM card under "Strategic & Risk Management" section
- **Gap**: None
- **Priority**: Complete

### Integrated Risk Management (IRM/GRC)
- **Required**: IRM/GRC description
- **Current**: Complete with IRM card plus Security Operations card
- **Gap**: None
- **Priority**: Complete

### AI and GenAI
- **Required**: AI capabilities, link to AI Launchpad
- **Current**: Complete with 3 cards (Now Assist, Predictive Intelligence, Virtual Agent) and CTA to AI Launchpad
- **Gap**: None
- **Priority**: Complete

### Consulting
- **Required**: Consulting services description
- **Current**: Complete with Consulting card in "Consulting & managed services" section
- **Gap**: None
- **Priority**: Complete

### Managed Services
- **Required**: Managed services description
- **Current**: Complete with Managed Services card
- **Gap**: None
- **Priority**: Complete

### Enhancements
- **Required**: Enhancement services description
- **Current**: Complete with Enhancements card
- **Gap**: None
- **Priority**: Complete

### Digital Trip Methodology
- **Required** (from CLAUDE.md): 5-step process
- **Current**: Full 5-step methodology section with detailed descriptions
- **Gap**: None
- **Priority**: Complete

---

## AI Launchpad Page Gaps

### Section Headers
- **Required**: Clear section transitions
- **Current**: Well-structured with clear section tags and headers
- **Gap**: None
- **Priority**: Complete

### Pricing Details
- **Required** (from CLAUDE.md):
  | Tier | Price | Duration | Includes |
  |------|-------|----------|----------|
  | Bronze | $10,000 | 2 weeks | Up to 3 AI Starter Solutions, Assessment, Roadmap |
  | Silver | $25,000 | 4 weeks | + Data cleanup, Model training |
  | Gold | $50,000+ | 8 weeks | Up to 5 solutions, + Tuning & optimization |
- **Current**: All three pricing tiers displayed with accurate information
- **Gap**: None
- **Priority**: Complete

### Results/ROI Stats
- **Required**: 12mo payback, 30% MTTR reduction, 250% ROI
- **Current**: Stats bar shows: 12 Month Payback Period, 30% MTTR Reduction, 250% Return on Investment, 25 Users to Get Started
- **Gap**: None
- **Priority**: Complete

---

## Results Page Gaps

### Case Studies
- **Required**: Multiple case studies with Challenge/Approach/Results format
- **Current**: 3 case studies exist (1 featured Financial Services, 2 grid: Healthcare HRSD, Manufacturing ITOM)
- **Gap**: All anonymized with "pending client permission" notes
- **Priority**: Medium - Get client approvals or create more detailed anonymized versions

### Metrics
- **Required**: Real numbers (not placeholders)
- **Current**: All metrics have specific numbers (45%, 60%, $2M, 70%, 85%, 15hrs, 50%, 90%, 40%)
- **Gap**: None - metrics are specific, though case studies themselves are anonymized
- **Priority**: Complete

### Testimonials
- **Required**: Real client testimonials
- **Current**: 3 placeholder testimonials with CSS class `testimonial-placeholder`; explicit "coming soon" message
- **Gap**: Major - Need real testimonials from actual clients
- **Priority**: High

---

## About Page Gaps

### Company Story
- **Required**: Brief company story
- **Current**: Complete "Our Story" section explaining Point6's founding, background, and mission
- **Gap**: None
- **Priority**: Complete

### Founders Section
- **Required** (from CLAUDE.md):
  - Marcelino Porfirio - CEO & Co-founder (Sales, BD, client relationships)
  - Michael Yee - COO & Co-founder (Technical, 18 yrs ServiceNow, ex-GlideFast 8+ yrs, Cal Poly SLO)
- **Current**:
  - Marcelino Porfirio: Card exists with title and description; photo is placeholder (MP initials); **LinkedIn URL is `#`**
  - Michael Yee: Card complete with bio, education, and working LinkedIn URL
- **Gap**:
  1. Marcelino's LinkedIn URL missing (placeholder `#`)
  2. Both founders have placeholder photos (initials only)
  3. Marcelino's bio is brief - could add more detail
- **Priority**: Medium

### Team Structure
- **Required**: Architects, Consultants, BAs, PMs description
- **Current**: Complete with 4 cards (Architects, Senior Consultants, Business Analysts, Project Managers)
- **Gap**: None
- **Priority**: Complete

### Office Locations
- **Required**: LA, Honolulu, Bangalore
- **Current**: All 3 locations displayed with icons
- **Gap**: None
- **Priority**: Complete

### Comparison Table
- **Required**: Point6 vs Partners vs GSIs comparison
- **Current**: Full comparison table with 5 metrics matching CLAUDE.md requirements
- **Gap**: None
- **Priority**: Complete

### Team Photo
- **Required**: Team or story image
- **Current**: Placeholder box showing "Team Photo"
- **Gap**: Need actual team photo
- **Priority**: Medium

---

## Contact Page Gaps

### Form
- **Required**: Functional contact form
- **Current**: Form structure is complete with all fields; **action URL contains `YOUR_FORM_ID` placeholder**
- **Gap**: **Critical** - Form will not work until Formspree ID is added
- **Priority**: Critical

### Booking Link
- **Required**: Link to booking URL
- **Current**: Booking link present and functional (uses manaopili.com domain - legacy)
- **Gap**: Uses Mana'o Pili Outlook booking URL; should be updated to Point6 when new booking page is ready
- **Priority**: Medium (functional, but uses old branding)

### LinkedIn Link
- **Required**: Working LinkedIn link
- **Current**: LinkedIn link in contact options section points to `#`
- **Gap**: Non-functional placeholder
- **Priority**: High

---

## Sitewide Gaps

### External Links
- **Required** (from CLAUDE.md):
  - Booking URL: Present but uses manaopili.com
  - YouTube: https://www.youtube.com/@Manaopili-info
  - LinkedIn: https://www.linkedin.com/company/mana-o-pili/
  - Contact email: hello@point6.io
- **Current**:
  - Booking URL: Uses manaopili.com in all CTAs (7+ instances)
  - YouTube: Footer links point to `#` (not to actual channel)
  - LinkedIn: Footer links point to `#` (not to actual page)
  - Email: Correctly set to hello@point6.io throughout
- **Gap**:
  1. All footer social links are broken (`#`)
  2. Need to create Point6-specific LinkedIn and YouTube or link to existing Mana'o Pili accounts
- **Priority**: High

### Privacy and Terms Pages
- **Required**: Privacy policy and Terms of service
- **Current**: Footer links to Privacy and Terms point to `#`
- **Gap**: Pages don't exist; need to create privacy policy and terms of service
- **Priority**: Medium (should have before launch for legal compliance)

### Methodology ("Digital Trip")
- **Required**: 5-step process
  1. Discovery & Assessment
  2. Strategy & Roadmap
  3. Implementation & Optimization
  4. Enablement & Adoption
  5. Ongoing Support & Innovation
- **Current**: Full implementation on services.html with all 5 steps and detailed descriptions
- **Gap**: None
- **Priority**: Complete

---

## Image Assets Gaps

### Brand Assets
| Asset | Status | Path | Priority |
|-------|--------|------|----------|
| Logo (SVG) | Missing | `assets/images/logo.svg` | Critical |
| Favicon (ICO) | Missing | `/favicon.ico` | High |
| Favicon (32x32) | Missing | `/favicon-32x32.png` | High |
| Favicon (16x16) | Missing | `/favicon-16x16.png` | High |
| Apple Touch Icon | Missing | `/apple-touch-icon.png` | Medium |
| Web Manifest | Missing | `/site.webmanifest` | Low |

### Open Graph Images (1200x630px)
| Asset | Status | Path | Priority |
|-------|--------|------|----------|
| Homepage OG | Missing | `assets/images/og-image.jpg` | High |
| Services OG | Missing | `assets/images/og-services.jpg` | Medium |
| AI Launchpad OG | Missing | `assets/images/og-ai-launchpad.jpg` | Medium |
| Results OG | Missing | `assets/images/og-results.jpg` | Medium |
| About OG | Missing | `assets/images/og-about.jpg` | Medium |
| Contact OG | Missing | `assets/images/og-contact.jpg` | Medium |

### Page-Specific Images
| Asset | Status | Location | Priority |
|-------|--------|----------|----------|
| Team Photo | Placeholder | about.html story section | Medium |
| Marcelino Photo | Placeholder (initials) | about.html founders | Medium |
| Michael Yee Photo | Placeholder (initials) | about.html founders | Medium |
| Case Study Hero Images | Template only | case-study-template.html | Low |

---

## Technical TODOs

### Form Backend
- **Location**: `contact.html`
- **Issue**: Formspree form ID not configured
- **Action**: Sign up at formspree.io, create form, replace `YOUR_FORM_ID`
- **Priority**: Critical

### Analytics
- **Status**: Not implemented
- **Required**: Google Analytics 4 or similar
- **Priority**: Medium (before launch)

### ServiceNow Partnership Badge
- **Location**: about.html certifications section (currently not present)
- **Required**: Confirm partnership tier and add official badge
- **Priority**: Low (nice to have)

---

## Prioritized Fix List

### Must Fix Before Launch
1. **Contact Form ID** - Replace YOUR_FORM_ID with actual Formspree form ID (`contact.html`)
2. **Logo & Favicon** - Create and add logo.svg, favicon.ico, and related assets
3. **Social Links** - Add working LinkedIn and YouTube URLs to all footers
4. **OG Images** - Create at least homepage og-image.jpg for social sharing
5. **Privacy & Terms** - Create basic privacy policy and terms pages

### Should Fix Soon
1. **Marcelino's LinkedIn** - Add LinkedIn URL to about.html
2. **Real Testimonials** - Get 2-3 actual client testimonials for results.html
3. **Case Study Approvals** - Get client permission to name companies
4. **Founder Photos** - Replace placeholder initials with actual headshots
5. **Team Photo** - Add real team photo to about.html
6. **Point6 Social Accounts** - Create dedicated Point6 LinkedIn and YouTube or update to use them
7. **Booking URL** - Update to Point6 domain when ready (low priority - current works)

### Nice to Have
1. **Additional OG Images** - Create page-specific OG images for all pages
2. **ServiceNow Partner Badge** - Add official partnership badge
3. **Case Study Pages** - Create full individual case study pages from template
4. **More Case Studies** - Add additional client success stories
5. **Resources/Blog Section** - Future consideration per CONTENT-NEEDED.md

---

## Files Requiring Updates

### High Priority Files
| File | Issues |
|------|--------|
| `contact.html` | Form ID placeholder, LinkedIn link `#` |
| `index.html` | Footer social links `#`, Privacy/Terms `#` |
| `services.html` | Footer social links `#`, Privacy/Terms `#` |
| `ai-launchpad.html` | Footer social links `#`, Privacy/Terms `#` |
| `results.html` | Footer social links `#`, Privacy/Terms `#`, placeholder testimonials |
| `about.html` | Footer social links `#`, Privacy/Terms `#`, Marcelino LinkedIn `#`, placeholder photos |
| `partials/footer.html` | Social links `#`, Privacy/Terms `#` |

### Template Files (Future)
| File | Notes |
|------|-------|
| `case-study-template.html` | Ready for use; contains extensive documentation for creating case studies |

---

## Notes

1. **Mana'o Pili Legacy**: Multiple references to manaopili.com remain in booking URLs. The booking functionality works but uses the old brand. This should be updated when Point6 booking infrastructure is ready.

2. **Content Quality**: The existing content is well-written, professional, and accurately reflects the company's value propositions. No significant copywriting gaps.

3. **SEO Implementation**: Meta tags, structured data, and canonical URLs are properly implemented across all pages. The gaps are primarily in missing image assets.

4. **Accessibility**: Site includes skip links, ARIA labels, proper heading hierarchy, and semantic HTML. No accessibility gaps noted.

5. **Case Study Template**: A comprehensive template (`case-study-template.html`) exists with detailed instructions for creating new case studies. This is ready for use once client permissions are obtained.

6. **Second Product**: CLAUDE.md mentions "Second product TBD" - this should be clarified with the founder before launch.

7. **Non-Profit Services**: CONTENT-NEEDED.md asks whether non-profit services continue under Point6 - needs clarification.
