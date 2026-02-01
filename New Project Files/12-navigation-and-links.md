# Point6 Website - Navigation & Links Audit

> Generated: 2026-02-01
> Source: Analysis of all HTML files

## Navigation Structure

### Primary Navigation (Header)

| Nav Item | Link | Present on All Pages? |
|----------|------|----------------------|
| Logo | index.html | Yes |
| Services | services.html | Yes |
| AI Launchpad | ai-launchpad.html | Yes |
| Results | results.html | Yes |
| About | about.html | Yes |
| Get in Touch (CTA) | contact.html | Yes |

### Mobile Navigation
- **Hamburger menu present**: Yes
- **Same items as desktop**: Yes
- **Differences**: None - mobile menu contains identical navigation items

### Navigation Implementation Notes
- Fixed/sticky navigation with backdrop blur
- Condensed state on scroll (smaller padding, more blur)
- Mobile responsive with hamburger menu at 768px breakpoint
- Smooth scroll behavior for anchor links
- Active state class (`class="active"`) used to indicate current page
- `aria-current="page"` attribute used on some pages (index, services, ai-launchpad) but not consistently on all

### Footer Navigation

#### Company Column
| Link Text | Destination |
|-----------|-------------|
| Services | services.html |
| AI Launchpad | ai-launchpad.html |
| Results | results.html |
| About | about.html |
| Contact | contact.html |

#### Connect Column
| Link Text | Destination | External? |
|-----------|-------------|-----------|
| hello@point6.io | mailto:hello@point6.io | No (mailto) |
| LinkedIn | # (placeholder) | Yes (intended) |
| YouTube | # (placeholder) | Yes (intended) |

#### Legal Links
| Link Text | Destination |
|-----------|-------------|
| Privacy | # (placeholder) |
| Terms | # (placeholder) |

---

## Complete Link Inventory

### index.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (CTA) |
| Explore Services | services.html | Hero section |
| Learn more (Technology Workflows) | services.html | Services section |
| Learn more (Customer Workflows) | services.html | Services section |
| Learn more (AI & GenAI) | services.html | Services section |
| Learn more (Managed Services) | services.html | Services section |
| Explore all services | services.html | Services section |
| Learn more about us | about.html | Why Point6 section |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Book a Consultation (hero) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |
| Book a Consultation (CTA section) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |
| hello@point6.io (footer) | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| Skip to main content | #main-content | Yes |

---

### services.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav (active) |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (CTA) |
| Explore AI Launchpad | ai-launchpad.html | Featured service section |
| Explore AI Launchpad | ai-launchpad.html | AI & GenAI section |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| Skip to main content | #main-content | Yes |

#### Defined Anchor IDs
| Anchor ID | Element |
|-----------|---------|
| #main-content | main element |
| #technology-workflows | Service category div |
| #customer-workflows | Service category div |
| #employee-workflows | Service category div |
| #strategic-risk | Service category div |
| #ai-genai | Service category div |

---

### ai-launchpad.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav (active) |
| Results | results.html | Header nav |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (CTA) |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Get Started (hero) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |
| Get Started (Bronze) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |
| Get Started (Silver) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |
| Get Started (Gold) | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| Skip to main content | #main-content | Yes |
| See Pricing | #pricing | Yes |

#### Defined Anchor IDs
| Anchor ID | Element |
|-----------|---------|
| #main-content | main element |
| #pricing | Pricing section |

---

### results.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav (active) |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (CTA) |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| Skip to main content | #main-content | Yes |

---

### about.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav |
| About | about.html | Header nav (active) |
| Get in Touch | contact.html | Header nav (CTA) |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Michael Yee LinkedIn | https://www.linkedin.com/in/ocmikey/ | Yes |
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| Marcelino Porfirio LinkedIn | # (Founders section) |
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| Skip to main content | #main-content | Yes |

---

### contact.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (active CTA) |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |
| hello@point6.io (footer) | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| LinkedIn | Contact options section |
| LinkedIn | Footer |
| YouTube | Footer |
| Privacy | Footer |
| Terms | Footer |

#### Form Action
| Form ID | Action URL | Status |
|---------|------------|--------|
| contact-form | https://formspree.io/f/YOUR_FORM_ID | Placeholder - needs configuration |

---

### 404.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Back to Homepage | index.html | Error CTA |
| Contact Us | contact.html | Error CTA |
| Our ServiceNow Services | services.html | Suggestions list |
| AI Launchpad Program | ai-launchpad.html | Suggestions list |
| Case Studies & Results | results.html | Suggestions list |
| About Point6 | about.html | Suggestions list |

#### Notes
- No header/footer navigation (minimal 404 page design)
- No external links
- No placeholder links

---

### case-study-template.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| Skip to main content | #main-content | Skip link |
| Logo (Point6) | index.html | Header |
| Services | services.html | Header nav |
| AI Launchpad | ai-launchpad.html | Header nav |
| Results | results.html | Header nav |
| About | about.html | Header nav |
| Get in Touch | contact.html | Header nav (CTA) |
| Back to Results | results.html | Hero section |
| Logo (Point6) | index.html | Footer |
| Services | services.html | Footer |
| AI Launchpad | ai-launchpad.html | Footer |
| Results | results.html | Footer |
| About | about.html | Footer |
| Contact | contact.html | Footer |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| LinkedIn | https://www.linkedin.com/company/mana-o-pili/ | Yes |
| YouTube | https://www.youtube.com/@Manaopili-info | Yes |
| Book a Consultation | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Yes |

#### mailto Links
| Link Text | Destination |
|-----------|-------------|
| hello@point6.io | mailto:hello@point6.io |

#### Placeholder Links
| Link Text | Location |
|-----------|----------|
| Privacy | Footer |
| Terms | Footer |
| Read the full story (x2) | Related case studies section |

#### Template Placeholders (TODOs)
- [Client Name] - multiple locations
- [slug] - URL references
- [Industry] - tag references
- [case-study-url].html - related case study links

---

## External Links Summary

| Destination | Used On | URL | Status |
|-------------|---------|-----|--------|
| Booking (Outlook) | All main pages | https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink | Active |
| LinkedIn (Company) | case-study-template.html footer | https://www.linkedin.com/company/mana-o-pili/ | Old branding (Mana'o Pili) |
| LinkedIn (Michael Yee) | about.html | https://www.linkedin.com/in/ocmikey/ | Active |
| YouTube | case-study-template.html footer | https://www.youtube.com/@Manaopili-info | Old branding (Mana'o Pili) |
| Email | All pages | mailto:hello@point6.io | Active |
| Formspree | contact.html | https://formspree.io/f/YOUR_FORM_ID | Placeholder |

### External Link Attributes Check
| URL | Has target="_blank"? | Has rel="noopener"? |
|-----|---------------------|---------------------|
| Outlook booking links | Yes | Yes (rel="noopener noreferrer") |
| Michael Yee LinkedIn | Yes | Yes (rel="noopener noreferrer") |
| Company LinkedIn (case-study-template) | Yes | Yes (rel="noopener noreferrer") |
| YouTube (case-study-template) | Yes | Yes (rel="noopener noreferrer") |

---

## Anchor Links Summary

| Anchor ID | Defined In | Linked From |
|-----------|------------|-------------|
| #main-content | All pages | All pages (skip link) |
| #pricing | ai-launchpad.html | ai-launchpad.html (hero section) |
| #technology-workflows | services.html | Not linked (internal anchor only) |
| #customer-workflows | services.html | Not linked (internal anchor only) |
| #employee-workflows | services.html | Not linked (internal anchor only) |
| #strategic-risk | services.html | Not linked (internal anchor only) |
| #ai-genai | services.html | Not linked (internal anchor only) |
| #services | index.html | Not linked (internal anchor only) |
| #about | index.html | Not linked (internal anchor only) |

---

## CTA Buttons Inventory

| Button Text | Page | Destination | Style |
|-------------|------|-------------|-------|
| Book a Consultation | index.html (hero) | Outlook booking | Primary |
| Explore Services | index.html (hero) | services.html | Secondary |
| Book a Consultation | index.html (CTA section) | Outlook booking | Primary |
| Explore AI Launchpad | services.html (featured) | ai-launchpad.html | Primary |
| Explore AI Launchpad | services.html (AI section) | ai-launchpad.html | Primary |
| Book a Consultation | services.html (CTA) | Outlook booking | Primary |
| Get Started | ai-launchpad.html (hero) | Outlook booking | Primary |
| See Pricing | ai-launchpad.html (hero) | #pricing | Secondary |
| Get Started | ai-launchpad.html (Bronze) | Outlook booking | Secondary |
| Get Started | ai-launchpad.html (Silver) | Outlook booking | Primary |
| Get Started | ai-launchpad.html (Gold) | Outlook booking | Secondary |
| Book a Consultation | ai-launchpad.html (CTA) | Outlook booking | Primary |
| Book a Consultation | results.html (CTA) | Outlook booking | Primary |
| Book a Consultation | about.html (CTA) | Outlook booking | Primary |
| Send Message | contact.html (form) | Form submission | Primary |
| Book a Consultation | contact.html | Outlook booking | Secondary (small) |
| Back to Homepage | 404.html | index.html | Primary |
| Contact Us | 404.html | contact.html | Secondary |
| Book a Consultation | case-study-template.html | Outlook booking | Primary |

---

## Link Issues Found

### Broken Links
| Link | Page | Issue |
|------|------|-------|
| None found | - | All internal links resolve to existing pages |

### Placeholder Links (Missing Destinations)
| Link | Page | Status |
|------|------|--------|
| LinkedIn (#) | All pages footer (except case-study-template) | Placeholder - needs real URL |
| YouTube (#) | All pages footer (except case-study-template) | Placeholder - needs real URL |
| Privacy (#) | All pages footer | Placeholder - needs privacy.html or real URL |
| Terms (#) | All pages footer | Placeholder - needs terms.html or real URL |
| Marcelino LinkedIn (#) | about.html | Placeholder - needs real URL |
| LinkedIn (#) | contact.html contact options | Placeholder - needs real URL |
| Formspree (YOUR_FORM_ID) | contact.html | Placeholder - needs real Formspree form ID |

### Inconsistent Links
| Link | Page | Current | Should Be |
|------|------|---------|-----------|
| LinkedIn (footer) | case-study-template.html | https://www.linkedin.com/company/mana-o-pili/ | Update to Point6 company page |
| YouTube (footer) | case-study-template.html | https://www.youtube.com/@Manaopili-info | Update to Point6 channel |
| LinkedIn/YouTube | Most pages | # (placeholder) | Should match case-study-template URLs or be updated |

---

## Navigation Consistency

### Header Consistency
- [x] Same nav items on all pages (Logo, Services, AI Launchpad, Results, About, Get in Touch)
- [x] Active state shows current page (class="active")
- [ ] Active state implementation varies - some pages use `aria-current="page"`, others don't
- [x] Logo links to homepage on all pages
- [x] CTA button (Get in Touch) consistent across pages

### Header Implementation Variations
| Page | Has role="navigation"? | Has role="menubar"? | Has aria-current="page"? |
|------|------------------------|---------------------|-------------------------|
| index.html | Yes | Yes | No |
| services.html | Yes | Yes | Yes |
| ai-launchpad.html | Yes | Yes | Yes |
| results.html | No | No | No |
| about.html | No | No | No |
| contact.html | No | No | No |
| 404.html | N/A (no nav) | N/A | N/A |
| case-study-template.html | No | No | No |

### Footer Consistency
- [x] Same structure on all pages (3 columns: Brand, Company, Connect)
- [ ] Links NOT identical - case-study-template has real LinkedIn/YouTube URLs, others have placeholders
- [x] Copyright year consistent (2025)
- [x] Footer tagline consistent ("Flexible, high-quality ServiceNow expertise.")

---

## Recommendations

### Link Fixes Needed
1. **Add real LinkedIn company URL** - Currently placeholder (#) on most pages. The case-study-template has `https://www.linkedin.com/company/mana-o-pili/` which needs updating to Point6 branding
2. **Add real YouTube channel URL** - Currently placeholder (#) on most pages. The case-study-template has `https://www.youtube.com/@Manaopili-info` which needs updating to Point6 branding
3. **Create Privacy Policy page** - Currently placeholder (#), needs privacy.html or external link
4. **Create Terms of Service page** - Currently placeholder (#), needs terms.html or external link
5. **Add Marcelino Porfirio's LinkedIn URL** - Placeholder (#) in about.html founders section
6. **Configure Formspree form ID** - Replace YOUR_FORM_ID with actual Formspree form ID in contact.html
7. **Update old Mana'o Pili branding links** - LinkedIn and YouTube URLs in case-study-template.html still reference old company name

### Navigation Improvements
1. **Standardize ARIA attributes** - Add `role="navigation"`, `role="menubar"`, and `aria-current="page"` consistently to all pages
2. **Add external link indicators** - Consider adding visual indicator (icon or text) for external links that open in new tabs
3. **Consider breadcrumbs** - For deeper pages like case studies, breadcrumb navigation would improve UX
4. **Add footer navigation to 404 page** - Currently minimal, could benefit from full footer navigation

### SEO Considerations
1. **Add descriptive link text** - Some "Learn more" links could be more descriptive for SEO (e.g., "Learn more about Technology Workflows")
2. **Verify all anchor targets exist** - Some section IDs defined (e.g., #technology-workflows) but not linked to - consider adding in-page navigation
3. **Add hreflang tags if international** - If targeting multiple regions/languages in future
4. **Consider internal linking strategy** - More cross-linking between related content (services to case studies, etc.)

### Accessibility Improvements
1. **Standardize skip link implementation** - All pages have skip links, good practice
2. **Add aria-label to footer social links** - Currently missing accessibility labels on some external links
3. **Review focus states** - Ensure all navigation links have visible focus states for keyboard users

---

## Files Analyzed

| File | Path |
|------|------|
| nav.html (partial) | C:\Users\breil\OneDrive\Desktop\point6-website\partials\nav.html |
| footer.html (partial) | C:\Users\breil\OneDrive\Desktop\point6-website\partials\footer.html |
| index.html | C:\Users\breil\OneDrive\Desktop\point6-website\index.html |
| services.html | C:\Users\breil\OneDrive\Desktop\point6-website\services.html |
| ai-launchpad.html | C:\Users\breil\OneDrive\Desktop\point6-website\ai-launchpad.html |
| results.html | C:\Users\breil\OneDrive\Desktop\point6-website\results.html |
| about.html | C:\Users\breil\OneDrive\Desktop\point6-website\about.html |
| contact.html | C:\Users\breil\OneDrive\Desktop\point6-website\contact.html |
| 404.html | C:\Users\breil\OneDrive\Desktop\point6-website\404.html |
| case-study-template.html | C:\Users\breil\OneDrive\Desktop\point6-website\case-study-template.html |
