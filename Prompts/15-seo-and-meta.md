# 15 - SEO and Meta Tags

Analyze all pages for SEO elements including meta tags, titles, and structured data.

## Instructions

Examine the `<head>` section of each HTML file and document SEO-relevant elements.

## Output Format

Generate a file called `seo-and-meta.md` with the following structure:

```markdown
# Point6 Website - SEO & Meta Tags Audit

> Generated: [DATE]
> Source: Analysis of all HTML files

## Summary

| Page | Title | Meta Description | Issues |
|------|-------|------------------|--------|
| index.html | | | |
| services.html | | | |
| ai-launchpad.html | | | |
| results.html | | | |
| about.html | | | |
| contact.html | | | |

---

## Page-by-Page Analysis

### index.html (Homepage)

#### Title Tag
```html
<title>[exact title]</title>
```
- **Character count**: [X] (recommended: 50-60)
- **Includes brand**: Yes / No
- **Includes keywords**: 
- **Quality**: Good / Needs Improvement

#### Meta Description
```html
<meta name="description" content="[exact content]">
```
- **Character count**: [X] (recommended: 150-160)
- **Compelling**: Yes / No
- **Includes CTA**: Yes / No
- **Quality**: Good / Needs Improvement

#### Other Meta Tags
| Meta Tag | Present? | Value |
|----------|----------|-------|
| charset | | |
| viewport | | |
| robots | | |
| author | | |
| og:title | | |
| og:description | | |
| og:image | | |
| og:url | | |
| twitter:card | | |
| twitter:title | | |

#### Canonical URL
- Present: Yes / No
- Value: 

---

### services.html

[Same format as above]

---

### ai-launchpad.html

[Same format as above]

---

### results.html

[Same format as above]

---

### about.html

[Same format as above]

---

### contact.html

[Same format as above]

---

## Heading Structure for SEO

### H1 Tags by Page
| Page | H1 Text | Multiple H1s? |
|------|---------|---------------|
| index.html | | |
| services.html | | |
| ai-launchpad.html | | |
| results.html | | |
| about.html | | |
| contact.html | | |

---

## Open Graph / Social Sharing

### Current Implementation
| Page | og:title | og:description | og:image |
|------|----------|----------------|----------|
| | | | |

### Recommendations
- [ ] Add og:image for social sharing previews
- [ ] Ensure og:title matches or complements title tag
- [ ] og:description can differ from meta description

---

## Technical SEO

### robots.txt
- **Present**: Yes / No
- **Location**: /robots.txt
- **Content**:
```
[contents if found]
```

### sitemap.xml
- **Present**: Yes / No
- **Location**: /sitemap.xml
- **Pages included**: 

### Canonical URLs
| Page | Canonical Present? | URL |
|------|--------------------|-----|
| | | |

### Language Declaration
```html
<html lang="[value]">
```
- **Present on all pages**: Yes / No
- **Value**: [e.g., "en"]

---

## Structured Data / Schema.org

### JSON-LD Found
```json
[paste any structured data found]
```

### Recommended Schema Types
- [ ] Organization
- [ ] LocalBusiness (for each location)
- [ ] Service (for service offerings)
- [ ] FAQPage (if FAQ content exists)
- [ ] BreadcrumbList

---

## Image SEO

### Images with Alt Text
| Page | Images | With Alt | Without Alt |
|------|--------|----------|-------------|
| | | | |

### Image Filenames
- [ ] Descriptive filenames (not IMG_1234.jpg)
- [ ] Hyphens between words
- [ ] Relevant keywords where appropriate

---

## URL Structure

| Page | URL | SEO Friendly? |
|------|-----|---------------|
| Homepage | / or /index.html | |
| Services | /services.html | |
| AI Launchpad | /ai-launchpad.html | |
| Results | /results.html | |
| About | /about.html | |
| Contact | /contact.html | |

### Recommendations
- Consider removing .html extensions with server config
- All URLs are lowercase: Yes / No
- No special characters: Yes / No

---

## Internal Linking

### Link Distribution
| Page | Internal Links Out | Internal Links In |
|------|-------------------|-------------------|
| index.html | | |
| services.html | | |
| ai-launchpad.html | | |
| results.html | | |
| about.html | | |
| contact.html | | |

### Orphan Pages
[Pages with no internal links pointing to them]

---

## Issues Found

### Critical
1. 

### Major
1. 

### Minor
1. 

---

## Recommended Title Tags

| Page | Current | Recommended |
|------|---------|-------------|
| Homepage | | Point6 - ServiceNow Consulting & Implementation |
| Services | | ServiceNow Services - ITSM, ITOM, AI | Point6 |
| AI Launchpad | | AI Launchpad - Start with ServiceNow AI | Point6 |
| Results | | Client Success Stories & Case Studies | Point6 |
| About | | About Us - ServiceNow Experts | Point6 |
| Contact | | Contact Point6 - Get Started Today |

## Recommended Meta Descriptions

| Page | Recommended Description |
|------|-------------------------|
| Homepage | Point6 delivers ServiceNow consulting with up to 70% cost savings. 40%+ senior experts on every project. ITSM, ITOM, AI implementations. Get started today. |
| Services | Comprehensive ServiceNow services: ITSM, ITOM, ITAM, CSM, HRSD, and AI. Expert implementation with transparent pricing and senior consultants. |
| AI Launchpad | Start your ServiceNow AI journey with Point6's AI Launchpad. Transparent pricing from $10K. See results in 2-4 weeks. Now Assist, Virtual Agent, and more. |
| Results | See how Point6 clients achieve 45% faster resolution times, 70% faster onboarding, and 50% reduction in MTTR with ServiceNow implementations. |
| About | Meet the Point6 team: 18+ years ServiceNow experience, 40%+ senior experts, offices in LA, Honolulu, and Bangalore. Founder-led consulting. |
| Contact | Contact Point6 for ServiceNow consulting. Book a free consultation or reach us at hello@point6.io. Offices in Los Angeles, Honolulu, Bangalore. |

---

## SEO Checklist

### Essential
- [ ] Unique title tag on each page
- [ ] Unique meta description on each page
- [ ] One H1 per page
- [ ] Alt text on all images
- [ ] Mobile-friendly (viewport meta)
- [ ] Fast loading

### Important
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Structured data (JSON-LD)

### Nice to Have
- [ ] Twitter card tags
- [ ] Schema for services
- [ ] Breadcrumb structured data
```

## What to Analyze

1. Read the `<head>` section of each HTML file
2. Extract and evaluate title tags
3. Extract and evaluate meta descriptions
4. Check for Open Graph tags
5. Look for robots.txt and sitemap.xml
6. Check for structured data (JSON-LD)
7. Verify language attribute on html tag

## Save Location

Save output to: `docs/seo-and-meta.md`
