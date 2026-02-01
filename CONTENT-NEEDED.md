# Content Needed for Point6 Website

This document lists remaining placeholder content that needs to be updated before launch.

**Last Updated:** January 31, 2025

---

## ✅ COMPLETED

The following content has been added from the company data:

- [x] Michael Yee bio and LinkedIn
- [x] Company stats (70% savings, 18+ years, 75% technical, 40%+ senior)
- [x] Service categories (Tx, Cx, Employee, SPM, IRM, AI/GenAI)
- [x] Digital Trip methodology
- [x] Comparison table (vs typical partners vs GSIs)
- [x] Key differentiators
- [x] Booking link (Outlook)
- [x] Updated taglines

---

## 🔄 PENDING - Requires Action

### Second Co-founder Bio
- [ ] **Name** (Sales/Business Development lead)
- [ ] **Title**
- [ ] **Bio** (2-3 sentences)
- [ ] **LinkedIn URL**
- [ ] **Photo/Initials**
- *Location: `about.html` team section - placeholder card exists*

### Social Links (Need New Accounts)
- [ ] **LinkedIn company page** — Create Point6 page, update all links
  - Currently using: `https://www.linkedin.com/company/mana-o-pili/`
  - *Find all instances: Search for "mana-o-pili" in HTML files*
- [ ] **YouTube channel** — Create Point6 channel or rename existing
  - Currently using: `https://www.youtube.com/@Manaopili-info`
- [ ] **Email** — Confirm hello@point6.io is configured
  - *Used on all pages*

### Booking Link
- [ ] **Update booking URL** to Point6 domain when ready
  - Currently using Mana'o Pili Outlook link
  - *Find all instances: Search for "manaopili.com" in HTML files*

### Case Studies
- [ ] **Get client permission** for at least 2-3 case studies
- [ ] **Create case study content:**
  - Client name (or anonymized industry descriptor)
  - Challenge faced
  - Point6's approach
  - Measurable results (specific numbers)
  - Client testimonial quote
  - Client logo (with permission)
- *Location: `results.html` and use `case-study-template.html` for full pages*

### Testimonials
- [ ] **Get 3-5 real client testimonials**
  - Quote (2-3 sentences)
  - Name
  - Title
  - Company
- *Location: `results.html` testimonials section, `index.html` differentiators section*

### AI Launchpad Details
- [ ] **Get specific details** for AI Launchpad offering
  - What's included?
  - Key benefits
  - Target audience
  - Pricing approach (if applicable)
- *Location: `services.html` featured service section*

### ServiceNow Partnership
- [ ] **Confirm partnership tier** (Premier, Elite, Specialist?)
- [ ] **Get official partner badge** image
- *Location: `about.html` certifications section*

---

## 📝 OPTIONAL / FUTURE

### Non-Profit Services
- [ ] Confirm if non-profit services continue under Point6
- [ ] If yes, add dedicated section or page

### Expert Guides / Resources
- [ ] Decide if migrating existing guides
- [ ] Create resources/blog section if needed

### Assessment Survey
- [ ] Implement lead capture survey tool
- [ ] Design assessment questions

### Team Photos
- [ ] Michael Yee headshot
- [ ] Second co-founder headshot
- [ ] Team photo for about page

---

## 🖼️ Images Still Needed

### Brand Assets
- [ ] **Logo** (SVG preferred) → `assets/images/logo.svg`
- [ ] **Favicon** (32x32) → `/favicon.ico`
- [ ] **Apple touch icon** (180x180) → `/apple-touch-icon.png`

### Open Graph Images (for social sharing)
*Recommended size: 1200x630px*
- [ ] `og-image.jpg` — Homepage
- [ ] `og-services.jpg` — Services page
- [ ] `og-results.jpg` — Results page
- [ ] `og-about.jpg` — About page
- [ ] `og-contact.jpg` — Contact page

### About Page
- [ ] **Team/story image** — Currently placeholder
  - *Location: `about.html` story section*

---

## 🔧 Technical TODOs

### Contact Form
- [ ] Connect to form backend (Formspree, Netlify, or custom)
- [ ] Test form submission end-to-end
- *Location: `contact.html` and `js/main.js`*

### Analytics
- [ ] Add Google Analytics 4 measurement ID
- [ ] Add Google Tag Manager (optional)

### Domain/DNS
- [ ] Configure DNS for point6.io
- [ ] Verify SSL certificate active

---

## Quick Search Commands

Find all TODO comments:
```bash
grep -r "TODO" *.html
```

Find all Mana'o Pili references:
```bash
grep -r "manaopili\|mana-o-pili" *.html
```

Find all placeholder content:
```bash
grep -r "placeholder\|TBD\|coming soon" *.html -i
```
