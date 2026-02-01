# 06 - Page Audit: Homepage

Perform a detailed audit of index.html and document everything about the homepage.

## Instructions

Analyze index.html comprehensively — structure, content, styling, functionality, and issues.

## Output Format

Generate a file called `page-audit-homepage.md` with the following structure:

```markdown
# Point6 Website - Homepage Audit

> Generated: [DATE]
> File: index.html

## Page Overview

- **Title tag**: 
- **Meta description**: 
- **URL path**: /index.html (or /)
- **Purpose**: Primary landing page for Point6

---

## Document Structure

### Head Section
- Charset: 
- Viewport: 
- Title: 
- Meta description: 
- Stylesheets linked: 
- Scripts in head: 
- Favicon: 

### Body Structure
```
[Outline the major structural elements]
<body>
  <header>...</header>
  <main>
    <section class="hero">...</section>
    <section class="...">...</section>
    [etc.]
  </main>
  <footer>...</footer>
</body>
```

---

## Section-by-Section Analysis

### 1. Header/Navigation
- **HTML structure**: 
- **Logo**: [text/image, links to?]
- **Nav items**: [list all links and destinations]
- **CTA button**: [text, destination]
- **Mobile menu**: [present? how triggered?]
- **Issues**: 

### 2. Hero Section
- **Section class/id**: 
- **Label text**: 
- **H1 heading**: 
- **Subheading/description**: 
- **Primary CTA**: [text] → [link]
- **Secondary CTA**: [text] → [link]
- **Background**: [color, image, etc.]
- **Issues**: 

### 3. Stats Bar
- **Section class/id**: 
- **Stats present**:
  | Number | Label |
  |--------|-------|
  | | |
  | | |
  | | |
  | | |
- **Layout**: [4-column, grid, flex?]
- **Issues**: [empty? missing stats?]

### 4. Services Preview
- **Section class/id**: 
- **Section header**: 
- **Cards present**:
  | Title | Description | Link |
  |-------|-------------|------|
  | | | |
- **"View all" link**: 
- **Issues**: 

### 5. Why Point6 / Differentiators
- **Section class/id**: 
- **Heading**: 
- **Content structure**: [text + cards? list?]
- **Key points covered**:
  - [ ] Cost savings
  - [ ] Senior experts
  - [ ] Technical team
  - [ ] Balanced approach
  - [ ] Low upsell risk
- **Issues**: 

### 6. [Additional sections...]
[Document any other sections present]

### N. CTA Section
- **Section class/id**: 
- **Heading**: 
- **Description**: 
- **Button**: [text] → [link]
- **Issues**: 

### Footer
- **Logo/tagline**: 
- **Company links**: 
- **Connect links**: 
- **Copyright**: 
- **Legal links**: 
- **Issues**: 

---

## Content Quality

### Text Content
- [ ] All headings present and meaningful
- [ ] No placeholder text (Lorem ipsum, TODO, etc.)
- [ ] No spelling/grammar errors noticed
- [ ] Consistent voice/tone
- [ ] Clear value proposition

### CTAs
| CTA Text | Destination | Working? |
|----------|-------------|----------|
| | | |

### Images
| Image | Alt Text | Loading? |
|-------|----------|----------|
| | | |

---

## Technical Analysis

### HTML Validation
- Semantic HTML used: Yes / No / Partial
- Heading hierarchy: [h1 → h2 → h3 correct?]
- ARIA attributes: [any present?]
- Form elements: [any on this page?]

### Performance Concerns
- Large images: 
- Render-blocking resources: 
- Inline styles: 

### Accessibility Concerns
- Color contrast issues: 
- Missing alt text: 
- Keyboard navigation: 
- Focus states: 

---

## Mobile Considerations

- Responsive classes present: 
- Mobile-specific content: 
- Potential overflow issues: 
- Touch target sizes: 

---

## Issues Found

### Critical
1. [Issue description]

### Major
1. [Issue description]

### Minor
1. [Issue description]

---

## Recommendations

### Content
1. 

### Design
1. 

### Technical
1. 

---

## Comparison to CLAUDE.md Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| Hero with value prop | | |
| Stats bar | | |
| Services preview cards | | |
| Comparison table | | |
| Methodology preview | | |
| CTA section | | |
```

## What to Analyze

1. Read the entire index.html file
2. Document the HTML structure
3. Extract all text content
4. Check all links
5. Identify any images
6. Note CSS classes used
7. Look for issues or missing content
8. Compare against CLAUDE.md requirements

## Save Location

Save output to: `docs/page-audit-homepage.md`
