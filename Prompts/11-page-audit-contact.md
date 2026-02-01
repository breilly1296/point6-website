# 11 - Page Audit: Contact

Perform a detailed audit of contact.html and document the contact page.

## Instructions

Analyze contact.html comprehensively — focus on form functionality, contact methods, and user experience.

## Output Format

Generate a file called `page-audit-contact.md` with the following structure:

```markdown
# Point6 Website - Contact Page Audit

> Generated: [DATE]
> File: contact.html

## Page Overview

- **Title tag**: 
- **Meta description**: 
- **URL path**: /contact.html
- **Purpose**: Enable visitors to contact Point6

---

## Section-by-Section Analysis

### 1. Hero Section
- **Label text**: 
- **H1 heading**: 
- **Subheading**: 
- **Issues**: 

### 2. Contact Form

#### Form Element
- **Form tag present**: Yes / No
- **Form action**: [URL or empty]
- **Form method**: [POST/GET]
- **Form ID/class**: 

#### Form Fields

| Field | Type | Label | Name Attr | Required? | Placeholder |
|-------|------|-------|-----------|-----------|-------------|
| Name | text | | | | |
| Email | email | | | | |
| Company | text | | | | |
| Service Interest | select | | | | |
| Message | textarea | | | | |

#### Select Options (Service Interest)
- [ ] [Option 1]
- [ ] [Option 2]
- [ ] [etc.]

#### Submit Button
- **Button text**: 
- **Button type**: [submit/button]

#### Form Issues
- [ ] All fields have labels
- [ ] Labels connected via `for` attribute
- [ ] Required fields marked
- [ ] Validation present (HTML5 or JS)
- [ ] Form action configured

### 3. Sidebar Contact Cards

#### Email Card
- **Heading**: 
- **Description**: 
- **Email displayed**: [should be hello@point6.io]
- **Email linked**: Yes / No
- **mailto: URL**: 

#### Booking Card
- **Heading**: 
- **Description**: 
- **Button text**: 
- **Booking URL**: 
- **Expected URL** (CLAUDE.md): https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com
- **URL matches**: Yes / No

#### Location Card
- **Heading**: 
- **Description**: 
- **Locations mentioned**: 

### 4. "After You Reach Out" Section (if present)
- **Section present**: Yes / No
- **Heading**: 
- **Content**: 
- **Steps/expectations listed**: 

### Footer
[Note any differences]

---

## Contact Methods Summary

| Method | Present? | Details | Working? |
|--------|----------|---------|----------|
| Contact Form | | | [needs backend] |
| Email | | hello@point6.io | |
| Booking Link | | Outlook URL | |
| Phone | | | |

---

## Form Analysis

### Accessibility
- [ ] All inputs have associated labels
- [ ] Labels use `for` attribute
- [ ] Required fields indicated visually
- [ ] Error states defined (CSS)
- [ ] Focus states visible

### UX
- [ ] Field order logical
- [ ] Placeholders helpful (not replacing labels)
- [ ] Submit button clearly visible
- [ ] Success/error feedback planned

### Backend Status
- **Form action configured**: Yes / No / Needs Setup
- **Backend solution**: [Formspree, Netlify Forms, custom, none]
- **CLAUDE.md TODO**: "Set up contact form backend"

---

## Links Verification

| Link | Expected | Actual | Match? |
|------|----------|--------|--------|
| Email | hello@point6.io | | |
| Booking | outlook.office.com/bookwithme/... | | |

---

## Issues Found

### Critical
1. [e.g., "Form has no action — submissions won't work"]

### Major
1. 

### Minor
1. 

---

## Recommendations

### Form Backend Options
1. **Formspree** — Simple, free tier available
2. **Netlify Forms** — If hosting on Netlify
3. **Google Forms** — Embed or redirect
4. **Custom** — Server-side handling

### UX Improvements
1. 
2. 

---

## Comparison to Requirements

| Requirement | Status |
|-------------|--------|
| Contact form | Present but needs backend |
| Email contact | |
| Booking link | |
| Clear response expectations | |
```

## What to Analyze

1. Read contact.html completely
2. Document all form fields and their attributes
3. Check if form has an action configured
4. Verify email address is correct
5. Verify booking URL matches CLAUDE.md
6. Check accessibility of form elements

## Save Location

Save output to: `docs/page-audit-contact.md`
