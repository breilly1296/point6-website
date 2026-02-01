# 12 - Navigation and Links Audit

Analyze all navigation elements and links across the Point6 website.

## Instructions

Examine all HTML files to document navigation structure and create a comprehensive link inventory.

## Output Format

Generate a file called `navigation-and-links.md` with the following structure:

```markdown
# Point6 Website - Navigation & Links Audit

> Generated: [DATE]
> Source: Analysis of all HTML files

## Navigation Structure

### Primary Navigation (Header)

| Nav Item | Link | Present on All Pages? |
|----------|------|----------------------|
| Logo | index.html | |
| Services | services.html | |
| AI Launchpad | ai-launchpad.html | |
| Results | results.html | |
| About | about.html | |
| Get in Touch (CTA) | contact.html | |

### Mobile Navigation
- **Hamburger menu present**: Yes / No
- **Same items as desktop**: Yes / No
- **Differences**: 

### Footer Navigation

#### Company Column
| Link Text | Destination |
|-----------|-------------|
| Services | |
| AI Launchpad | |
| Results | |
| About | |
| Contact | |

#### Connect Column
| Link Text | Destination | External? |
|-----------|-------------|-----------|
| hello@point6.io | mailto: | |
| LinkedIn | | Yes |
| YouTube | | Yes |

#### Legal Links
| Link Text | Destination |
|-----------|-------------|
| Privacy | |
| Terms | |

---

## Complete Link Inventory

### index.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| | | |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| | | |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| | | |

---

### services.html

#### Internal Links
| Link Text | Destination | Location on Page |
|-----------|-------------|------------------|
| | | |

#### External Links
| Link Text | Destination | Opens New Tab? |
|-----------|-------------|----------------|
| | | |

#### Anchor Links
| Link Text | Anchor | Target Exists? |
|-----------|--------|----------------|
| | | |

---

### ai-launchpad.html

[Same format]

---

### results.html

[Same format]

---

### about.html

[Same format]

---

### contact.html

[Same format]

---

## External Links Summary

| Destination | Used On | URL | Status |
|-------------|---------|-----|--------|
| Booking (Outlook) | contact.html | https://outlook.office.com/bookwithme/... | |
| LinkedIn (Company) | footer | https://www.linkedin.com/company/mana-o-pili/ | |
| LinkedIn (Michael) | about.html | https://www.linkedin.com/in/ocmikey/ | |
| YouTube | footer | https://www.youtube.com/@Manaopili-info | |
| Email | multiple | mailto:hello@point6.io | |

### External Link Attributes Check
| URL | Has target="_blank"? | Has rel="noopener"? |
|-----|---------------------|---------------------|
| | | |

---

## Anchor Links Summary

| Anchor ID | Defined In | Linked From |
|-----------|------------|-------------|
| #tech-workflows | services.html | |
| #customer-workflows | services.html | |
| #pricing | ai-launchpad.html | |
| [etc.] | | |

---

## CTA Buttons Inventory

| Button Text | Page | Destination | Style |
|-------------|------|-------------|-------|
| Book a Consultation | index.html | | Primary |
| Explore Services | index.html | | Secondary |
| Get Started | ai-launchpad.html | | Primary |
| See Pricing | ai-launchpad.html | | Secondary |
| [etc.] | | | |

---

## Link Issues Found

### Broken Links
| Link | Page | Issue |
|------|------|-------|
| | | |

### Missing Links
| Expected Link | Page | Status |
|---------------|------|--------|
| | | |

### Incorrect Links
| Link | Page | Current | Should Be |
|------|------|---------|-----------|
| | | | |

---

## Navigation Consistency

### Header Consistency
- [ ] Same nav items on all pages
- [ ] Active state shows current page
- [ ] Logo links to homepage on all pages
- [ ] CTA button consistent

### Footer Consistency
- [ ] Same structure on all pages
- [ ] All links identical across pages
- [ ] Copyright year consistent

---

## Recommendations

### Link Fixes Needed
1. 
2. 

### Navigation Improvements
1. 
2. 

### SEO Considerations
1. 
2. 
```

## What to Analyze

1. Read all HTML files
2. Extract every `<a>` tag and its href
3. Categorize as internal, external, or anchor
4. Check for target="_blank" and rel attributes on external links
5. Verify anchor targets exist
6. Check navigation consistency across pages

## Save Location

Save output to: `docs/navigation-and-links.md`
