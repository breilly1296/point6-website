# Point6 Website - Microcopy Audit

> Generated: 2026-02-01
> Source: Analysis of HTML files and main.js

## Executive Summary

- **Overall Quality**: Good
- **Consistent Voice**: Yes
- **Helpful Guidance**: Yes

The Point6 website demonstrates strong microcopy practices with conversational, human-centered language that aligns well with the brand's positioning as an approachable, high-quality ServiceNow consultancy. The contact form has excellent field-level validation messages and helpful hints. The voice is consistently professional yet warm across all pages.

---

## Voice & Tone Assessment

### Brand Voice Characteristics
Based on copy analysis:
- [x] Professional but approachable
- [x] Confident without arrogance
- [x] Technical credibility without jargon
- [x] Personal touch (founder-led feel)

**Notable Voice Examples:**
- "No corporate jargon - direct and human" (as stated in CLAUDE.md)
- "No pressure, no sales pitch - just a conversation about your goals"
- "We'll get back to you within 24 hours. Check your inbox for a confirmation."
- "Don't worry if you're not sure - we can figure it out together"

### Consistency Check
| Page | Matches Voice? | Notes |
|------|----------------|-------|
| index.html | Yes | Strong hero copy, conversational CTAs, clear value propositions |
| services.html | Yes | Informative without being dry, good use of "you" language |
| ai-launchpad.html | Yes | Clear benefits, transparent pricing messaging, accessible AI language |
| results.html | Yes | Authentic case studies, honest about anonymization ("pending permission") |
| about.html | Yes | Personal founder stories, clear differentiation messaging |
| contact.html | Yes | Excellent conversational form copy, welcoming tone |

---

## Form Microcopy

### contact.html Form

#### Labels
| Field | Label Text | Clear? |
|-------|------------|--------|
| Name | "Name" with required indicator (*) | Yes |
| Email | "Work Email" with required indicator (*) | Yes - specifies work context |
| Company | "Company" | Yes |
| Service | "What can we help with?" | Excellent - conversational |
| Message | "Tell us more" with required indicator (*) | Excellent - inviting |

#### Placeholders
| Field | Placeholder | Helpful Example? |
|-------|-------------|------------------|
| Name | "Jane Smith" | Yes - realistic example name |
| Email | "jane@acme.com" | Yes - professional email format |
| Company | "Acme Corporation" | Yes - realistic company name |
| Message | "Share as much or as little as you'd like. What's your current situation? What are you hoping to achieve?" | Excellent - guidance without pressure |

#### Helper Text (Form Hints)
| Field | Has Hint? | Hint Text | Connected via aria-describedby? |
|-------|-----------|-----------|--------------------------------|
| Name | Yes | "How should we address you?" | Yes (id="name-hint") |
| Email | Yes | "We'll use this to respond to you" | Yes (id="email-hint") |
| Company | Yes | "Optional - helps us understand your context" | Yes (id="company-hint") |
| Service | Yes | "Don't worry if you're not sure - we can figure it out together" | Yes (id="service-hint") |
| Message | Yes | "No need to have all the answers - we're here to help you figure things out" | Yes (id="message-hint") |

### Placeholder Best Practices
- [x] Placeholders are helpful examples, not label repeats
- [x] Placeholders disappear on focus (expected)
- [x] Labels remain visible (not replaced by placeholders)
- [x] Examples use realistic data (Jane Smith, not "Your Name")

---

## Validation Messages

### Error Messages (from main.js)
| Field | Error Condition | Message | Helpful? |
|-------|-----------------|---------|----------|
| Name | Empty | "Please enter your name so we know who we're talking to" | Excellent |
| Name | Invalid | "Please enter a valid name" | Good |
| Email | Empty | "We need your email to get back to you" | Excellent |
| Email | Invalid format | "That doesn't look like a valid email address (e.g., name@company.com)" | Excellent - includes example |
| Message | Empty | "Tell us a bit about what you're looking for - even a few words helps" | Excellent |
| Message | Too short (<10 chars) | "Could you share a bit more? A sentence or two is plenty." | Excellent |

### Error Message Quality
- [x] Specific to the problem
- [x] Tells user how to fix it
- [x] Conversational tone
- [x] Not accusatory ("Please" vs "You must")

### Examples of Good Error Messages
```
Bad:  "This field is required"
Good: "Please enter your name so we know who we're talking to" (Point6 uses this)

Bad:  "Invalid email"
Good: "That doesn't look like a valid email address (e.g., name@company.com)" (Point6 uses this)
```

**Assessment**: Point6's error messages follow all best practices - they're friendly, specific, and provide guidance on how to fix the issue.

---

## Success & Confirmation Messages

### Form Submission
| State | Message | Quality |
|-------|---------|---------|
| Loading | "Sending your message..." | Good - present tense, indicates action |
| Success | "Message received! We'll get back to you within 24 hours. Check your inbox for a confirmation." | Excellent - confirms action + sets expectations |
| Success (URL param) | "Thanks for reaching out! We received your message and will get back to you within 24 hours." | Excellent |
| Dev Mode Success | "Form submitted successfully! (Development mode - configure Formspree for production)" | Good - clear dev context |
| Server Error | "Something went wrong on our end. Please try again, or email us directly at hello@point6.io" | Excellent - provides alternative |
| Connection Error | "Couldn't connect to our server. Please check your connection and try again, or email us at hello@point6.io" | Excellent - provides alternative |
| Formspree Error | "There was an issue: [error details]" | Good - passes through specific error |

### Success Message Best Practices
- [x] Confirms what happened
- [x] Sets expectations (response time - 24 hours)
- [x] Provides next steps ("Check your inbox")
- [x] Positive tone

---

## Button & CTA Copy

### Primary CTAs
| Location | Button Text | Action-Oriented? |
|----------|-------------|------------------|
| Hero (index) | "Book a Consultation" | Yes - specific outcome |
| Hero secondary | "Explore Services" | Yes - clear action |
| Contact form | "Send Message" | Yes - clear action |
| Pricing cards | "Get Started" | Yes - action-oriented |
| All CTA sections | "Book a Consultation" | Yes - consistent primary CTA |
| AI Launchpad hero | "Get Started" / "See Pricing" | Yes - clear actions |

### Button States
| State | Text | Appropriate? |
|-------|------|--------------|
| Default | "Send Message" | Yes - clear action |
| Loading | "Sending your message..." | Yes - present tense with spinner |
| Success | "Message sent!" | Yes - past tense with checkmark |

### CTA Best Practices
- [x] Action-oriented verbs
- [x] Specific outcomes ("Book a Consultation" vs "Submit")
- [x] Not repetitive on same page (varies between primary/secondary)
- [x] Primary/secondary hierarchy clear

### CTA Inventory Across Site
| Text | Frequency | Contexts |
|------|-----------|----------|
| "Book a Consultation" | 10+ times | Hero, CTA sections, pricing |
| "Get in Touch" | 6 times | Navigation (all pages) |
| "Explore Services" | 2 times | Secondary CTAs |
| "Learn more" | 4 times | Service cards |
| "Get Started" | 4 times | AI Launchpad pricing |
| "See Pricing" | 1 time | AI Launchpad |
| "Send Message" | 1 time | Contact form |
| "Contact Us" | 1 time | 404 page |
| "Back to Homepage" | 1 time | 404 page |

---

## Empty States

### 404 Page
| Element | Text | Helpful? |
|---------|------|----------|
| Headline | "This page doesn't exist" | Yes - clear and simple |
| Body copy | "No worries - it happens! The page might have moved, or the link might be outdated." | Excellent - reassuring, explains why |
| Primary CTA | "Back to Homepage" | Yes - clear path |
| Secondary CTA | "Contact Us" | Yes - alternative option |
| Suggestions title | "Looking for something specific?" | Yes - helpful prompt |
| Suggestion links | Services, AI Launchpad, Results, About | Yes - 4 key pages |

### 404 Best Practices
- [x] Friendly, not technical
- [x] Explains what happened
- [x] Provides clear next steps
- [x] Suggests popular pages

---

## Loading States

### Form Loading
- [x] Button text changes during submission ("Sending your message...")
- [x] Loading text is present tense ("Sending...")
- [x] Visual spinner accompanies text (SVG animation)

### Page Loading
- [ ] Skeleton screens used (Not implemented - not needed for static site)
- [x] Loading indicators clear (form only)

---

## Navigation Microcopy

### Link Labels
| Link | Text | Descriptive? |
|------|------|--------------|
| Logo | "Point6" with aria-label "Point6 - Return to homepage" | Excellent |
| Nav items | Services, AI Launchpad, Results, About | Yes - clear destinations |
| Footer links | Same as nav + Contact, hello@point6.io, LinkedIn, YouTube | Yes - consistent |
| CTA button | "Get in Touch" | Yes - clear action |

### External Links
- [x] External links indicated (target="_blank" with rel="noopener noreferrer")
- [ ] Opens in new tab communicated (no visual indicator or text)

**Recommendation**: Consider adding an external link icon or "(opens in new tab)" for screen reader users on the LinkedIn, YouTube, and booking links.

---

## Tooltips & Help Text

### Where Used
| Element | Tooltip/Help | Purpose |
|---------|--------------|---------|
| Form fields | Inline hints below fields | Guide user input |
| Required indicator | aria-label="required" on asterisk | Accessibility |
| No tooltips found | N/A | Site uses inline hints instead |

---

## Statistics & Numbers

### Number Formatting
| Stat | Format | Consistent? |
|------|--------|-------------|
| Percentages | "70%", "40%+", "75%" | Yes - numeric with % symbol |
| Currency | "$2M", "$10,000", "$25,000" | Yes - $ prefix, varies by magnitude |
| Years | "18+ years", "12+ years" | Yes - number with + for "more than" |
| Time | "24 hours", "2 weeks", "4 weeks" | Yes - spelled out |

### Stats Messaging
- [x] Context provided ("Up to 70% cost savings" - "Compared to traditional ServiceNow partners")
- [x] Specific and credible
- [x] Consistently formatted

### Key Statistics Displayed
| Stat | Value | Locations |
|------|-------|-----------|
| Cost Savings | Up to 70% | index.html, about.html |
| Senior Experts | 40%+ | index.html, about.html |
| Technical Team | 75% | index.html, about.html |
| Years Experience | 18+ | index.html, about.html |
| ROI (AI Launchpad) | 250% | ai-launchpad.html |
| Payback Period | 12 months | ai-launchpad.html |

---

## Key Messages Check

### Required Messages (per brand)
| Message | Present? | Location(s) |
|---------|----------|-------------|
| Up to 70% cost savings | Yes | index.html (stats bar, why-feature), about.html (comparison table) |
| 40%+ senior experts | Yes | index.html (stats bar, differentiator), about.html (comparison table) |
| 18+ years experience | Yes | index.html (stats bar, why-section), about.html (founder bio) |
| Transparent pricing | Yes | ai-launchpad.html (section tag), contact.html (implied by clear pricing) |

### Additional Key Messages Found
| Message | Locations |
|---------|-----------|
| "Flexible, high-quality ServiceNow expertise" | Footer tagline (all pages) |
| "Personal touch" / "Personal attention" | index.html, about.html |
| "No pressure, no sales pitch" | index.html (CTA), about.html (CTA) |
| "24 hours" response time | contact.html (multiple places) |
| "Senior consultants on every project" | index.html, about.html |

---

## Testimonials & Social Proof

### Testimonial Quality
| Location | Has Quote? | Attribution | Credible? |
|----------|------------|-------------|-----------|
| index.html | Yes | Michael Yee, Co-founder & COO, Point6 | Internal quote - less impactful |
| results.html | Yes (3) | Industry + Title only (Healthcare/VP Ops, Financial Services/IT Director, Manufacturing/CIO) | Marked as placeholders |

### Testimonial Assessment
- Current testimonials are marked as "Real client testimonials coming soon"
- Internal quote on index.html from co-founder is less powerful than client testimonials
- Attribution format is appropriate (name + title + company when available)

**Recommendation**: Replace placeholder testimonials with real client quotes when available. Ensure proper attribution with full name, title, and company.

---

## Issues Found

### Critical
1. None identified

### Major
1. **External link accessibility** - External links (LinkedIn, YouTube, booking links) don't visually indicate they open in a new tab
2. **Placeholder testimonials** - Results page uses placeholder testimonials marked as "coming soon"

### Minor
1. **LinkedIn/YouTube links** - Several social links point to "#" placeholder (footer)
2. **Privacy/Terms links** - Point to "#" placeholder (need actual pages)
3. **Internal testimonial** - Index page uses co-founder quote instead of client testimonial
4. **Loading state text** - Button loading text "Sending your message..." could be shorter: "Sending..."

---

## Recommendations

### Quick Fixes
1. Update placeholder "#" links for LinkedIn, YouTube, Privacy, and Terms pages
2. Add "(opens in new tab)" text or icon for external links for accessibility
3. Shorten loading state text from "Sending your message..." to "Sending..."
4. Add rel="noopener noreferrer" consistently to all external links (most have it)

### Copy Improvements
1. Consider varying CTA text more - "Book a Consultation" appears 10+ times
2. Add a brief "What happens next?" callout near form CTAs explaining the consultation process
3. Consider adding micro-interactions text for hover states on service cards
4. Update copyright year to be dynamic or ensure it's current (currently shows 2025)

### Pattern Additions Needed
1. **Toast notifications** - Currently only uses inline form status; consider toast for non-form confirmations
2. **Empty state for search** - If search functionality is added
3. **Loading skeletons** - Not needed for current static site, but consider for future dynamic content
4. **Error boundary messages** - Generic fallback for JavaScript errors

---

## Microcopy Highlights

### Exemplary Patterns

**Form Hints**
```html
<span class="form-hint" id="service-hint">Don't worry if you're not sure - we can figure it out together</span>
```
This is excellent - removes pressure and builds trust.

**Error Messages**
```javascript
email: {
    required: 'We need your email to get back to you',
    invalid: 'That doesn\'t look like a valid email address (e.g., name@company.com)'
}
```
Conversational, helpful, includes example for correction.

**404 Page**
```html
<p class="error-text">No worries - it happens! The page might have moved, or the link might be outdated.</p>
```
Friendly, non-technical, reassuring.

**CTA Section Copy**
```html
<p>Book a free consultation. No pressure, no sales pitch - just a conversation about your goals.</p>
```
Sets expectations, removes barriers, builds trust.

---

## Summary

The Point6 website demonstrates strong microcopy practices overall:

**Strengths:**
- Consistently warm, professional, and human voice
- Excellent form validation messages that guide rather than blame
- Helpful placeholder text with realistic examples
- Clear, action-oriented CTAs
- Friendly 404 page that maintains brand voice
- Proper accessibility with aria-describedby connections

**Areas for Improvement:**
- Replace placeholder testimonials with real client quotes
- Update placeholder links (#) with actual URLs
- Add external link indicators for accessibility
- Consider more CTA variety to avoid repetition

The microcopy successfully supports the brand positioning of being "professional but approachable" and aligns with the stated goal of "no corporate jargon - direct and human."
