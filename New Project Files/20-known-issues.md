# Point6 Website - Known Issues

> Generated: 2026-02-01
> Last Updated: 2026-02-01

## Summary

| Severity | Count |
|----------|-------|
| Critical | 4 |
| Major | 12 |
| Minor | 15 |
| Enhancement | 8 |
| **Total** | 39 |

---

## Critical Issues

Issues that prevent core functionality or significantly impact user experience.

### ISSUE-001: Formspree Form ID Not Configured
- **Severity**: Critical
- **Status**: Open
- **Location**: `contact.html:129`
- **Description**:
  The contact form action URL contains placeholder text `YOUR_FORM_ID` instead of a real Formspree form ID. The form will not submit to any backend service in production.
- **Steps to Reproduce**:
  1. Navigate to contact.html
  2. Fill out the contact form
  3. Click "Send Message"
- **Expected Behavior**: Form data should be submitted to Formspree and user receives confirmation
- **Actual Behavior**: Form submission fails (unless in development mode which simulates success)
- **Impact**: All visitor inquiries through the contact form will be lost
- **Suggested Fix**:
  1. Create a Formspree account at https://formspree.io
  2. Create a new form and copy the form ID
  3. Replace `YOUR_FORM_ID` with actual form ID in contact.html line 129
- **Date Found**: 2026-02-01

---

### ISSUE-002: Missing Favicon and Logo Assets
- **Severity**: Critical
- **Status**: Open
- **Location**: Root directory `/`, `/assets/images/`
- **Description**:
  All favicon files and logo images referenced in the HTML are missing. This includes:
  - `/favicon.ico`
  - `/favicon-32x32.png`
  - `/favicon-16x16.png`
  - `/apple-touch-icon.png`
  - `/site.webmanifest`
  - `/assets/images/logo.png` (referenced in structured data)
- **Impact**:
  - No favicon appears in browser tabs (shows generic icon)
  - iOS/Android home screen icons will be missing
  - Structured data references broken logo URL
  - Poor brand recognition
- **Suggested Fix**:
  1. Generate favicons using RealFaviconGenerator.net
  2. Create logo files per specifications in `assets/images/README.md`
  3. Place favicon files in root directory
- **Date Found**: 2026-02-01

---

### ISSUE-003: Missing Open Graph Images
- **Severity**: Critical
- **Status**: Open
- **Location**: All HTML pages
- **Description**:
  All Open Graph images referenced in meta tags do not exist:
  - `og-image.jpg` (index.html)
  - `og-services.jpg` (services.html)
  - `og-ai-launchpad.jpg` (ai-launchpad.html)
  - `og-results.jpg` (results.html)
  - `og-about.jpg` (about.html)
  - `og-contact.jpg` (contact.html)
- **Impact**:
  - Social media shares will show no preview image or broken image
  - Reduced click-through rates from social platforms
  - Unprofessional appearance when shared on LinkedIn, Facebook, Twitter
- **Suggested Fix**:
  Create 1200x630px JPG images for each page following guidelines in `assets/images/README.md`
- **Date Found**: 2026-02-01

---

### ISSUE-004: Placeholder LinkedIn URL for Founder
- **Severity**: Critical
- **Status**: Open
- **Location**: `about.html:177`
- **Description**:
  Marcelino Porfirio's LinkedIn profile link uses placeholder `#` instead of an actual URL.
- **Impact**:
  - Clicking the LinkedIn icon leads nowhere
  - Appears unprofessional
  - Users cannot verify founder credentials
- **Suggested Fix**:
  Obtain and add Marcelino's actual LinkedIn profile URL
- **Date Found**: 2026-02-01

---

## Major Issues

Issues that affect functionality but have workarounds.

### ISSUE-005: Placeholder Social Media Links in Footer
- **Severity**: Major
- **Status**: Open
- **Location**: All pages, footer section (e.g., `index.html:350-351`)
- **Description**:
  LinkedIn and YouTube links in the footer use placeholder `#` on all pages except case-study-template.html.
- **Impact**:
  - Users cannot connect with Point6 on social platforms
  - Dead links appear unprofessional
- **Suggested Fix**:
  1. Create/confirm Point6 LinkedIn company page
  2. Create/confirm Point6 YouTube channel
  3. Update all footer partials and page footers with actual URLs
- **Date Found**: 2026-02-01

---

### ISSUE-006: Missing Privacy and Terms Pages
- **Severity**: Major
- **Status**: Open
- **Location**: All pages, footer (e.g., `index.html:358-359`)
- **Description**:
  Privacy and Terms links in the footer use placeholder `#` and no actual privacy.html or terms.html pages exist.
- **Impact**:
  - Legal compliance issues (GDPR, CCPA may require privacy policy)
  - Users cannot review terms of service
  - Reduces trust for enterprise clients
- **Suggested Fix**:
  1. Create privacy.html with privacy policy content
  2. Create terms.html with terms of service content
  3. Update footer links on all pages
- **Date Found**: 2026-02-01

---

### ISSUE-007: Placeholder Team Photo on About Page
- **Severity**: Major
- **Status**: Open
- **Location**: `about.html:154-156`
- **Description**:
  The "Our Story" section contains a placeholder box stating "Team Photo" instead of an actual image.
- **Impact**:
  - Reduces trust and personal connection
  - Appears incomplete and unprofessional
- **Suggested Fix**:
  Add actual team photo or professional office/team imagery
- **Date Found**: 2026-02-01

---

### ISSUE-008: Placeholder Founder Photos
- **Severity**: Major
- **Status**: Open
- **Location**: `about.html:172-175, 192-195`
- **Description**:
  Both founder cards display initials (MP, MY) in placeholder divs instead of actual photos.
- **Impact**:
  - Reduces personal connection with potential clients
  - Appears unfinished
- **Suggested Fix**:
  Add professional headshot photos for Marcelino Porfirio and Michael Yee
- **Date Found**: 2026-02-01

---

### ISSUE-009: Placeholder Testimonials on Results Page
- **Severity**: Major
- **Status**: Open
- **Location**: `results.html:234, 237-292`
- **Description**:
  The testimonials section explicitly states "Real client testimonials coming soon" and shows placeholder testimonials with generic icons and titles like "Healthcare Client" instead of real names.
- **Impact**:
  - Reduces credibility
  - Generic testimonials may seem fabricated
- **Suggested Fix**:
  Collect and add real client testimonials with permission, or remove section until available
- **Date Found**: 2026-02-01

---

### ISSUE-010: Anonymized Case Studies Pending Client Permission
- **Severity**: Major
- **Status**: Open
- **Location**: `results.html:157, 224`
- **Description**:
  Case studies are marked as "anonymized pending client permission" which limits their credibility and specificity.
- **Impact**:
  - Generic case studies are less compelling
  - Cannot provide verifiable references
- **Suggested Fix**:
  Obtain client permission to use real company names and details
- **Date Found**: 2026-02-01

---

### ISSUE-011: Case Study Template Contains Only Placeholders
- **Severity**: Major
- **Status**: Open
- **Location**: `case-study-template.html` (entire file)
- **Description**:
  The case study template file contains placeholder text throughout including `[Client Name]`, `[Industry]`, `[XX%]` metrics, etc. It should not be accessible to users in production.
- **Impact**:
  - If accidentally indexed, shows unprofessional placeholder content
  - Template instructions visible to end users
- **Suggested Fix**:
  1. Add `noindex` meta tag (already present)
  2. Consider excluding from production build
  3. Move to a `/templates/` folder
- **Date Found**: 2026-02-01

---

### ISSUE-012: Navigation Inconsistency Between Pages
- **Severity**: Major
- **Status**: Open
- **Location**: Multiple HTML files
- **Description**:
  Navigation implementation varies between pages:
  - `index.html`, `services.html`, `ai-launchpad.html`: Include `role="navigation"`, `role="menubar"`, `role="menuitem"` attributes
  - `results.html`, `about.html`, `contact.html`, `404.html`: Missing these ARIA roles
  - Logo `aria-label` inconsistent across pages
- **Impact**:
  - Inconsistent accessibility experience
  - May confuse screen reader users
- **Suggested Fix**:
  Standardize navigation markup across all pages using the partial in `partials/nav.html`
- **Date Found**: 2026-02-01

---

### ISSUE-013: Footer Logo Missing aria-hidden on Logo Dot
- **Severity**: Major
- **Status**: Open
- **Location**: `partials/footer.html:22`
- **Description**:
  The logo dot in the footer partial is missing `aria-hidden="true"` attribute, unlike the navigation logo which has it.
- **Impact**:
  - Screen readers may announce decorative element
- **Suggested Fix**:
  Add `aria-hidden="true"` to `<span class="logo-dot"></span>` in footer
- **Date Found**: 2026-02-01

---

### ISSUE-014: External Booking Links Open in New Tab Without Warning
- **Severity**: Major
- **Status**: Open
- **Location**: Multiple pages (e.g., `index.html:110`, `services.html:550`)
- **Description**:
  The Outlook booking links open in new tabs (`target="_blank"`) but do not indicate this to users. While `rel="noopener noreferrer"` is present for security, users are not warned about new tab behavior.
- **Impact**:
  - Can be disorienting for users, especially those using screen readers
  - Accessibility guidelines recommend indicating external links
- **Suggested Fix**:
  Add visual indicator (icon) or `aria-label` including "opens in new tab" text
- **Date Found**: 2026-02-01

---

### ISSUE-015: Mobile Menu Overlay Missing aria-hidden Update
- **Severity**: Major
- **Status**: Open
- **Location**: Multiple pages (e.g., `index.html:93`)
- **Description**:
  The mobile menu overlay has `aria-hidden="true"` hardcoded, but this should be dynamically toggled when the menu opens/closes to properly hide it from screen readers.
- **Impact**:
  - Screen readers may not properly ignore overlay when hidden
- **Suggested Fix**:
  JavaScript should toggle `aria-hidden` attribute along with the `active` class
- **Date Found**: 2026-02-01

---

### ISSUE-016: Skip Link Targets May Not Be Focusable
- **Severity**: Major
- **Status**: Open
- **Location**: All pages (skip link implementation)
- **Description**:
  Skip links target `#main-content` but the `<main>` element doesn't have `tabindex="-1"` in the HTML. While the JavaScript adds it on smooth scroll, direct browser navigation may not work correctly.
- **Impact**:
  - Skip link may not properly focus the main content in all scenarios
- **Suggested Fix**:
  Add `tabindex="-1"` directly to `<main id="main-content">` elements
- **Date Found**: 2026-02-01

---

## Minor Issues

Cosmetic issues or minor inconveniences.

### ISSUE-017: Inline Styles in HTML
- **Severity**: Minor
- **Status**: Open
- **Location**: Multiple pages (e.g., `services.html:395`, `about.html:165`)
- **Description**:
  Several section headers use inline styles like `style="text-align: center;"` instead of CSS classes.
- **Impact**:
  - Harder to maintain
  - Inconsistent with CSS-first approach
- **Suggested Fix**:
  Create CSS classes like `.section-header-centered` for reuse
- **Date Found**: 2026-02-01

---

### ISSUE-018: Copyright Year Hardcoded
- **Severity**: Minor
- **Status**: Open
- **Location**: All page footers (e.g., `index.html:356`)
- **Description**:
  The copyright year is hardcoded as "2025" and will become outdated.
- **Impact**:
  - Will show outdated year after 2025
  - Manual update required each year
- **Suggested Fix**:
  Use JavaScript to dynamically set current year: `document.write(new Date().getFullYear())`
- **Date Found**: 2026-02-01

---

### ISSUE-019: Case Study Template Has Old Social Links
- **Severity**: Minor
- **Status**: Open
- **Location**: `case-study-template.html:433-435`
- **Description**:
  The case study template footer contains actual URLs to old Mana'o Pili LinkedIn and YouTube channels, inconsistent with placeholder `#` used elsewhere.
- **Impact**:
  - Inconsistent with other pages
  - May link to outdated/incorrect accounts
- **Suggested Fix**:
  Update to Point6 social accounts or use placeholders consistently
- **Date Found**: 2026-02-01

---

### ISSUE-020: 404 Page Missing Structured Data
- **Severity**: Minor
- **Status**: Open
- **Location**: `404.html`
- **Description**:
  The 404 error page does not include Organization structured data like other pages.
- **Impact**:
  - Minor SEO inconsistency
- **Suggested Fix**:
  Add basic Organization structured data or leave as-is (optional for error pages)
- **Date Found**: 2026-02-01

---

### ISSUE-021: Duplicate Mobile Menu Overlay Styles
- **Severity**: Minor
- **Status**: Open
- **Location**: `css/styles.css` and inline in `404.html:20-88`
- **Description**:
  The 404 page includes inline styles that may duplicate or conflict with the external stylesheet.
- **Impact**:
  - Increased page size
  - Potential style conflicts
- **Suggested Fix**:
  Move 404-specific styles to main stylesheet under a `.error-page` namespace
- **Date Found**: 2026-02-01

---

### ISSUE-022: Form Validation Messages Could Be More Specific
- **Severity**: Minor
- **Status**: Open
- **Location**: `js/main.js:366-379`
- **Description**:
  While form validation messages are friendly, email validation could better explain format requirements.
- **Impact**:
  - Users might not understand why their email is invalid
- **Suggested Fix**:
  Enhance email validation message to show expected format
- **Date Found**: 2026-02-01

---

### ISSUE-023: Console Logs in Development Mode
- **Severity**: Minor
- **Status**: Open
- **Location**: `js/main.js:21-22, 507, 543`
- **Description**:
  Development mode checks exist but console.log calls could potentially expose debug info if IS_DEV check fails.
- **Impact**:
  - Potential information disclosure in edge cases
- **Suggested Fix**:
  Consider removing all console.log statements in production build
- **Date Found**: 2026-02-01

---

### ISSUE-024: Noise Texture Overlay May Impact Performance
- **Severity**: Minor
- **Status**: Open
- **Location**: `css/styles.css:49-61`
- **Description**:
  The decorative noise texture overlay uses a fixed SVG filter background that renders on every page. While visually subtle, this could impact performance on low-end devices.
- **Impact**:
  - Potential minor performance impact
  - Adds visual noise (literally) that may not be necessary
- **Suggested Fix**:
  Consider removing or making optional via `prefers-reduced-motion`
- **Date Found**: 2026-02-01

---

### ISSUE-025: Large Section Padding on Mobile
- **Severity**: Minor
- **Status**: Open
- **Location**: `css/styles.css:419-421`
- **Description**:
  The default `.section` padding of 120px vertical may be excessive on mobile, though some page-specific overrides exist.
- **Impact**:
  - Excessive scrolling on mobile
  - Content appears sparse
- **Suggested Fix**:
  Add global mobile breakpoint to reduce section padding (e.g., 60-80px on mobile)
- **Date Found**: 2026-02-01

---

### ISSUE-026: Animation Delay May Cause Jank
- **Severity**: Minor
- **Status**: Open
- **Location**: `js/main.js:236-237`
- **Description**:
  Reveal animations apply inline `transitionDelay` styles which may cause layout recalculations.
- **Impact**:
  - Potential minor jank on lower-end devices
- **Suggested Fix**:
  Use CSS custom properties or classes for delays instead of inline styles
- **Date Found**: 2026-02-01

---

### ISSUE-027: Results Page Nav Links Missing ARIA Roles
- **Severity**: Minor
- **Status**: Open
- **Location**: `results.html:97-103`
- **Description**:
  The nav-links container on results.html lacks `role="menubar"` and links lack `role="menuitem"` compared to other pages.
- **Impact**:
  - Inconsistent accessibility implementation
- **Suggested Fix**:
  Align with navigation partial structure
- **Date Found**: 2026-02-01

---

### ISSUE-028: Case Study Template Nav Missing site-nav Class
- **Severity**: Minor
- **Status**: Open
- **Location**: `case-study-template.html:101`
- **Description**:
  The navigation element uses `<nav aria-label="Main navigation">` without the `class="site-nav"` that other pages use.
- **Impact**:
  - Some CSS styles may not apply correctly
- **Suggested Fix**:
  Add `class="site-nav"` to match other pages
- **Date Found**: 2026-02-01

---

### ISSUE-029: Inconsistent Mobile Menu Button Aria-Label
- **Severity**: Minor
- **Status**: Open
- **Location**: Multiple pages
- **Description**:
  Mobile menu button uses different aria-labels: "Open navigation menu" vs "Toggle menu" across pages.
- **Impact**:
  - Inconsistent screen reader experience
- **Suggested Fix**:
  Standardize to "Open navigation menu" as in the nav partial
- **Date Found**: 2026-02-01

---

### ISSUE-030: Missing aria-controls on Some Mobile Menu Buttons
- **Severity**: Minor
- **Status**: Open
- **Location**: `results.html:92`, `about.html:106`, `contact.html:75`, `404.html` (no nav)
- **Description**:
  Some mobile menu buttons lack the `aria-controls="nav-links"` attribute.
- **Impact**:
  - Screen readers cannot announce relationship between button and menu
- **Suggested Fix**:
  Add `aria-controls="nav-links"` consistently
- **Date Found**: 2026-02-01

---

### ISSUE-031: Missing nav-links ID on Some Pages
- **Severity**: Minor
- **Status**: Open
- **Location**: `results.html:97`, `about.html:111`, `contact.html:80`
- **Description**:
  Some pages' nav-links divs lack the `id="nav-links"` that aria-controls references.
- **Impact**:
  - aria-controls reference is broken
- **Suggested Fix**:
  Add `id="nav-links"` to all nav-links divs
- **Date Found**: 2026-02-01

---

## Enhancements

Not bugs, but improvements that would benefit the site.

### ISSUE-032: Add Loading State Indicator for Page Transitions
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  Consider adding a subtle loading indicator for page transitions to improve perceived performance.
- **Benefit**: Better user experience, especially on slower connections
- **Effort**: Low

---

### ISSUE-033: Implement Dark/Light Theme Toggle
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  While the dark theme is well-designed, some users may prefer a light theme option.
- **Benefit**: Improved accessibility and user preference support
- **Effort**: Medium

---

### ISSUE-034: Add Blog/Insights Section
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  A blog or insights section could improve SEO and establish thought leadership.
- **Benefit**: SEO improvement, content marketing, lead generation
- **Effort**: High

---

### ISSUE-035: Add Search Functionality
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  As content grows, a search feature would help users find specific information.
- **Benefit**: Improved navigation and user experience
- **Effort**: Medium

---

### ISSUE-036: Add Cookie Consent Banner
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  If analytics or tracking is added, a cookie consent banner will be required for GDPR compliance.
- **Benefit**: Legal compliance, user trust
- **Effort**: Low

---

### ISSUE-037: Implement Service Worker for Offline Support
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  Add a service worker to cache static assets and provide basic offline functionality.
- **Benefit**: Better performance, offline access to core content
- **Effort**: Medium

---

### ISSUE-038: Add Breadcrumb Navigation on Interior Pages
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  Breadcrumbs would improve navigation and SEO, especially for case study pages.
- **Benefit**: Better navigation, SEO structured data
- **Effort**: Low

---

### ISSUE-039: Add Print Styles
- **Type**: Enhancement
- **Status**: Proposed
- **Description**:
  Optimize pages for printing, especially case studies and service pages that clients may want to print.
- **Benefit**: Better user experience for enterprise clients
- **Effort**: Low

---

## Issues by Page

### Homepage (index.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | Major | Open |
| ISSUE-014 | External Booking Links No Warning | Major | Open |
| ISSUE-018 | Copyright Year Hardcoded | Minor | Open |

### Services (services.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | Major | Open |
| ISSUE-017 | Inline Styles in HTML | Minor | Open |

### AI Launchpad (ai-launchpad.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | Major | Open |

### Results (results.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-009 | Placeholder Testimonials | Major | Open |
| ISSUE-010 | Anonymized Case Studies | Major | Open |
| ISSUE-012 | Navigation Inconsistency | Major | Open |
| ISSUE-027 | Nav Links Missing ARIA Roles | Minor | Open |

### About (about.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-004 | Placeholder LinkedIn URL | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-007 | Placeholder Team Photo | Major | Open |
| ISSUE-008 | Placeholder Founder Photos | Major | Open |
| ISSUE-012 | Navigation Inconsistency | Major | Open |

### Contact (contact.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-001 | Formspree Form ID Not Configured | Critical | Open |
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-003 | Missing Open Graph Images | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | Major | Open |
| ISSUE-012 | Navigation Inconsistency | Major | Open |

### 404 Page (404.html)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-020 | Missing Structured Data | Minor | Open |
| ISSUE-021 | Duplicate Inline Styles | Minor | Open |

### Global (all pages)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Critical | Open |
| ISSUE-005 | Placeholder Social Media Links | Major | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | Major | Open |
| ISSUE-015 | Mobile Menu Overlay aria-hidden | Major | Open |
| ISSUE-016 | Skip Link Targets Not Focusable | Major | Open |
| ISSUE-018 | Copyright Year Hardcoded | Minor | Open |
| ISSUE-024 | Noise Texture Performance | Minor | Open |
| ISSUE-025 | Large Section Padding Mobile | Minor | Open |

---

## Issues by Category

### Content Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-003 | Missing Open Graph Images | All pages | Open |
| ISSUE-004 | Placeholder LinkedIn URL | about.html | Open |
| ISSUE-007 | Placeholder Team Photo | about.html | Open |
| ISSUE-008 | Placeholder Founder Photos | about.html | Open |
| ISSUE-009 | Placeholder Testimonials | results.html | Open |
| ISSUE-010 | Anonymized Case Studies | results.html | Open |
| ISSUE-011 | Case Study Template Placeholders | case-study-template.html | Open |

### Styling Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-017 | Inline Styles in HTML | Multiple pages | Open |
| ISSUE-021 | Duplicate Inline Styles | 404.html | Open |
| ISSUE-024 | Noise Texture Performance | css/styles.css | Open |
| ISSUE-025 | Large Section Padding Mobile | css/styles.css | Open |
| ISSUE-026 | Animation Delay Jank | js/main.js | Open |

### Functionality Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-001 | Formspree Form ID Not Configured | contact.html | Open |
| ISSUE-005 | Placeholder Social Media Links | All footers | Open |
| ISSUE-006 | Missing Privacy and Terms Pages | All footers | Open |
| ISSUE-019 | Case Study Template Old Links | case-study-template.html | Open |

### Accessibility Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-012 | Navigation Inconsistency | Multiple pages | Open |
| ISSUE-013 | Footer Logo Missing aria-hidden | partials/footer.html | Open |
| ISSUE-014 | External Links No New Tab Warning | Multiple pages | Open |
| ISSUE-015 | Mobile Menu Overlay aria-hidden | Multiple pages | Open |
| ISSUE-016 | Skip Link Targets Not Focusable | All pages | Open |
| ISSUE-027 | Nav Links Missing ARIA Roles | results.html | Open |
| ISSUE-028 | Case Study Template Nav Missing Class | case-study-template.html | Open |
| ISSUE-029 | Inconsistent Mobile Menu Aria-Label | Multiple pages | Open |
| ISSUE-030 | Missing aria-controls | Multiple pages | Open |
| ISSUE-031 | Missing nav-links ID | Multiple pages | Open |

### Performance Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-024 | Noise Texture Overlay Performance | css/styles.css | Open |
| ISSUE-026 | Animation Delay Inline Styles | js/main.js | Open |

### SEO Issues
| ID | Title | Location | Status |
|----|-------|----------|--------|
| ISSUE-002 | Missing Favicon and Logo Assets | Root, assets/images | Open |
| ISSUE-003 | Missing Open Graph Images | All pages | Open |
| ISSUE-020 | 404 Page Missing Structured Data | 404.html | Open |

---

## Browser-Specific Issues

### Chrome
| ID | Title | Status |
|----|-------|--------|
| - | No known Chrome-specific issues | - |

### Firefox
| ID | Title | Status |
|----|-------|--------|
| - | No known Firefox-specific issues | - |

### Safari
| ID | Title | Status |
|----|-------|--------|
| - | Backdrop-filter properly prefixed (-webkit-) | N/A |

### Mobile Safari (iOS)
| ID | Title | Status |
|----|-------|--------|
| - | Touch targets meet 44px minimum | N/A |

### Chrome Mobile (Android)
| ID | Title | Status |
|----|-------|--------|
| - | No known Android-specific issues | - |

---

## Resolved Issues

### Recently Resolved
| ID | Title | Resolved Date | Resolution |
|----|-------|---------------|------------|
| - | No resolved issues yet | - | - |

---

## Issue Template

Use this template when adding new issues:

```markdown
### ISSUE-XXX: [Descriptive Title]
- **Severity**: Critical / Major / Minor / Enhancement
- **Status**: Open / In Progress / Resolved / Won't Fix
- **Location**: [file:line or page/section]
- **Description**:
  [Clear description of the issue]
- **Steps to Reproduce** (if applicable):
  1.
  2.
  3.
- **Expected Behavior**:
- **Actual Behavior**:
- **Impact**: [Who is affected and how]
- **Suggested Fix**: [If known]
- **Screenshots**: [If helpful]
- **Date Found**: YYYY-MM-DD
- **Assigned**: [Name or TBD]
```

---

## Triage Guidelines

### Severity Definitions

**Critical**
- Site is broken or unusable
- Core functionality doesn't work
- Security vulnerability
- Data loss potential
- Missing critical assets (favicons, images)

**Major**
- Feature doesn't work correctly
- Significant UX problem
- Accessibility barrier
- Workaround exists but is inconvenient
- Placeholder content in visible areas

**Minor**
- Cosmetic issues
- Minor inconveniences
- Edge cases
- Polish items
- Code quality issues

**Enhancement**
- New feature requests
- Improvements to existing features
- Nice-to-haves

---

## Priority Recommendations

### Immediate (Before Launch)
1. ISSUE-001: Configure Formspree form ID
2. ISSUE-002: Create and add all favicon files
3. ISSUE-003: Create Open Graph images for social sharing
4. ISSUE-004: Add Marcelino's LinkedIn URL
5. ISSUE-005: Add Point6 social media links
6. ISSUE-006: Create Privacy and Terms pages

### High Priority (Soon After Launch)
1. ISSUE-007, ISSUE-008: Add team and founder photos
2. ISSUE-012: Standardize navigation across pages
3. ISSUE-015, ISSUE-016: Fix accessibility issues
4. ISSUE-009, ISSUE-010: Collect real testimonials and case study permissions

### Medium Priority (Ongoing)
1. ISSUE-017: Move inline styles to CSS
2. ISSUE-018: Dynamic copyright year
3. ISSUE-029, ISSUE-030, ISSUE-031: ARIA consistency fixes

---

## Notes

- This document was generated by analyzing the complete Point6 website codebase
- Issues should be reviewed and prioritized based on launch timeline
- Critical and Major issues should be resolved before production launch
- Consider using a project management tool (GitHub Issues, Jira, etc.) for ongoing tracking
- Update this document as issues are resolved or new ones are discovered
