# 04 - Content Inventory

Analyze all pages of the Point6 website and create a comprehensive inventory of existing content.

## Instructions

Read through each HTML file and document all text content, organized by page and section.

## Output Format

Generate a file called `content-inventory.md` with the following structure:

```markdown
# Point6 Website - Content Inventory

> Generated: [DATE]
> Source: Analysis of all HTML files

## Summary

| Page | Sections | Content Status |
|------|----------|----------------|
| Homepage | X sections | Complete / Partial / Empty |
| Services | X sections | Complete / Partial / Empty |
| AI Launchpad | X sections | Complete / Partial / Empty |
| Results | X sections | Complete / Partial / Empty |
| About | X sections | Complete / Partial / Empty |
| Contact | X sections | Complete / Partial / Empty |

---

## Homepage (index.html)

### Section 1: Hero
- **Label**: [e.g., "SERVICENOW EXPERTS"]
- **Heading**: [exact text]
- **Subheading**: [exact text]
- **CTA 1**: [button text] → [link]
- **CTA 2**: [button text] → [link]
- **Status**: ✅ Complete / ⚠️ Partial / ❌ Empty

### Section 2: Stats Bar
- **Stat 1**: [number] / [label]
- **Stat 2**: [number] / [label]
- **Stat 3**: [number] / [label]
- **Stat 4**: [number] / [label]
- **Status**: ✅ Complete / ⚠️ Partial / ❌ Empty

### Section 3: Services Preview
- **Section Label**: 
- **Heading**: 
- **Card 1**: [title] - [description snippet]
- **Card 2**: [title] - [description snippet]
- [etc...]
- **Status**: ✅ Complete / ⚠️ Partial / ❌ Empty

[Continue for all sections...]

---

## Services (services.html)

### Section 1: Hero
[Same format as above]

### Section 2: AI Launchpad Feature
[Document content]

### Section 3: Technology Workflows
- **Heading**: 
- **Intro text**: 
- **ITSM content**: [present/missing]
- **ITOM content**: [present/missing]
- **ITAM content**: [present/missing]
- **Status**: 

### Section 4: Customer Workflows
[etc...]

### Section 5: Employee Workflows
[etc...]

### Section 6: Strategic & Risk Management
[etc...]

### Section 7: AI & GenAI
[etc...]

### Section 8: Methodology
- **Step 1**: [title] - [description present?]
- **Step 2**: [title] - [description present?]
- [etc...]
- **Status**: 

### Section 9: CTA
[etc...]

---

## AI Launchpad (ai-launchpad.html)

### Section 1: Hero
[Document all content]

### Section 2: Stats Bar
[Document stats]

### Section 3: Pain Points / "Sound Familiar"
[Document content]

### Section 4: AI Starter Solutions
- **Platform solutions**: [list]
- **ITSM solutions**: [list]
- **CSM solutions**: [list]
- **ITOM solutions**: [list]
- **Status**: 

### Section 5: Pricing
- **Bronze**: [price, duration, features]
- **Silver**: [price, duration, features]
- **Gold**: [price, duration, features]
- **Status**: 

### Section 6: CTA
[Document content]

---

## Results (results.html)

### Section 1: Hero
[Document content]

### Case Study 1
- **Industry/Tag**: 
- **Challenge**: [summary or "present"/"missing"]
- **Approach**: [summary or "present"/"missing"]
- **Results**: 
  - Metric 1: [value] / [label] or "XX%" placeholder
  - Metric 2: 
  - Metric 3: 
- **Status**: 

### Case Study 2
[Document or note if missing]

### Case Study 3
[Document or note if missing]

### CTA Section
[Document content]

---

## About (about.html)

### Section 1: Hero
[Document content]

### Section 2: Our Story
[Document content present]

### Section 3: Founders
- **Founder 1**: [name, title, bio present?]
- **Founder 2**: [name, title, bio present?]
- **Status**: 

### Section 4: Team
[Document or note if missing]

### Section 5: Comparison Table
- **Rows**: [list metrics compared]
- **Columns**: Point6 / ServiceNow Partners / GSIs
- **Status**: 

### Section 6: Locations
[Document locations listed]

### Section 7: CTA
[Document content]

---

## Contact (contact.html)

### Section 1: Hero
[Document content]

### Section 2: Form
- **Fields**: [list all form fields]
- **Submit button text**: 
- **Form action**: [URL or empty]

### Section 3: Sidebar Cards
- **Email card**: [content]
- **Booking card**: [content]
- **Location card**: [content]

### Section 4: "After You Reach Out"
[Document if present]

---

## Footer (all pages)

- **Tagline**: 
- **Company links**: [list]
- **Connect links**: [list]
- **Copyright**: 
- **Legal links**: 

---

## Content Statistics

| Metric | Count |
|--------|-------|
| Total pages | 6 |
| Sections with complete content | X |
| Sections with partial content | X |
| Sections that are empty | X |
| Placeholder text instances | X |

## Placeholder Text Found

[List any "Lorem ipsum", "XX%", "TODO", "TBD", "Photo", "Client Logo" etc.]

| Location | Placeholder Text |
|----------|------------------|
| | |
```

## What to Analyze

1. Read each HTML file completely
2. Identify all sections by looking for `<section>` tags or major dividers
3. Extract actual text content (headings, paragraphs, list items)
4. Note any placeholder or missing content
5. Check form fields and their labels
6. Document footer content

## Save Location

Save output to: `docs/content-inventory.md`
