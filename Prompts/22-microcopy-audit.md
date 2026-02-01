# 22 - Microcopy Audit

Analyze all user-facing microcopy patterns across the Point6 website.

## Instructions

Examine HTML and JavaScript files for UI copy patterns including forms, buttons, error messages, and empty states.

## Output Format

Generate a file called `microcopy-audit.md` with the following structure:

```markdown
# Point6 Website - Microcopy Audit

> Generated: [DATE]
> Source: Analysis of HTML files and main.js

## Executive Summary

- **Overall Quality**: Good / Needs Work / Poor
- **Consistent Voice**: Yes / No
- **Helpful Guidance**: Yes / Partial / No

---

## Voice & Tone Assessment

### Brand Voice Characteristics
Based on copy analysis:
- [ ] Professional but approachable
- [ ] Confident without arrogance
- [ ] Technical credibility without jargon
- [ ] Personal touch (founder-led feel)

### Consistency Check
| Page | Matches Voice? | Notes |
|------|----------------|-------|
| index.html | | |
| services.html | | |
| ai-launchpad.html | | |
| results.html | | |
| about.html | | |
| contact.html | | |

---

## Form Microcopy

### contact.html Form

#### Labels
| Field | Label Text | Clear? |
|-------|------------|--------|
| Name | | |
| Email | | |
| Company | | |
| Service | | |
| Message | | |

#### Placeholders
| Field | Placeholder | Helpful Example? |
|-------|-------------|------------------|
| Name | | Should be example name |
| Email | | Should be example@company.com |
| Company | | |
| Message | | Conversational guidance? |

#### Helper Text (Form Hints)
| Field | Has Hint? | Hint Text | Connected via aria-describedby? |
|-------|-----------|-----------|--------------------------------|
| Name | | | |
| Email | | | |
| Company | | | |
| Service | | | |
| Message | | | |

### Placeholder Best Practices
- [ ] Placeholders are helpful examples, not label repeats
- [ ] Placeholders disappear on focus (expected)
- [ ] Labels remain visible (not replaced by placeholders)
- [ ] Examples use realistic data (Jane Smith, not "Your Name")

---

## Validation Messages

### Error Messages (from main.js)
| Field | Error Condition | Message | Helpful? |
|-------|-----------------|---------|----------|
| Name | Empty | | |
| Email | Empty | | |
| Email | Invalid format | | |
| Message | Empty | | |
| Message | Too short | | |

### Error Message Quality
- [ ] Specific to the problem
- [ ] Tells user how to fix it
- [ ] Conversational tone
- [ ] Not accusatory ("Please" vs "You must")

### Examples of Good Error Messages
```
Bad:  "This field is required"
Good: "Please enter your name so we know who we're talking to"

Bad:  "Invalid email"
Good: "That doesn't look like a valid email address (e.g., name@company.com)"
```

---

## Success & Confirmation Messages

### Form Submission
| State | Message | Quality |
|-------|---------|---------|
| Loading | | Conversational? |
| Success | | Confirms action + next steps? |
| Error | | Provides alternative? |

### Success Message Best Practices
- [ ] Confirms what happened
- [ ] Sets expectations (response time)
- [ ] Provides next steps
- [ ] Positive tone

---

## Button & CTA Copy

### Primary CTAs
| Location | Button Text | Action-Oriented? |
|----------|-------------|------------------|
| Hero | | |
| Page CTAs | | |
| Form submit | | |
| Pricing cards | | |

### Button States
| State | Text | Appropriate? |
|-------|------|--------------|
| Default | "Send Message" | |
| Loading | | Present tense? |
| Success | | Past tense? |

### CTA Best Practices
- [ ] Action-oriented verbs
- [ ] Specific outcomes ("Book a Consultation" vs "Submit")
- [ ] Not repetitive on same page
- [ ] Primary/secondary hierarchy clear

---

## Empty States

### 404 Page
| Element | Text | Helpful? |
|---------|------|----------|
| Headline | | |
| Body copy | | |
| Primary CTA | | |
| Secondary CTA | | |
| Suggestions | | |

### 404 Best Practices
- [ ] Friendly, not technical
- [ ] Explains what happened
- [ ] Provides clear next steps
- [ ] Suggests popular pages

---

## Loading States

### Form Loading
- [ ] Button text changes during submission
- [ ] Loading text is present tense ("Sending...")
- [ ] Visual spinner accompanies text

### Page Loading
- [ ] Skeleton screens used (if applicable)
- [ ] Loading indicators clear

---

## Navigation Microcopy

### Link Labels
| Link | Text | Descriptive? |
|------|------|--------------|
| Logo | | Returns to home? |
| Nav items | | Clear destinations? |
| Footer links | | Consistent with nav? |

### External Links
- [ ] External links indicated (icon or text)
- [ ] Opens in new tab communicated

---

## Tooltips & Help Text

### Where Used
| Element | Tooltip/Help | Purpose |
|---------|--------------|---------|
| | | |

---

## Statistics & Numbers

### Number Formatting
| Stat | Format | Consistent? |
|------|--------|-------------|
| Percentages | | 70% vs 70 percent |
| Currency | | $10,000 vs $10K |
| Years | | 18+ years |

### Stats Messaging
- [ ] Context provided (compared to what?)
- [ ] Specific and credible
- [ ] Consistently formatted

---

## Key Messages Check

### Required Messages (per brand)
| Message | Present? | Location(s) |
|---------|----------|-------------|
| Up to 70% cost savings | | |
| 40%+ senior experts | | |
| 18+ years experience | | |
| Transparent pricing | | |

---

## Testimonials & Social Proof

### Testimonial Quality
| Location | Has Quote? | Attribution | Credible? |
|----------|------------|-------------|-----------|
| | | Name + Title + Company | |

---

## Issues Found

### Critical
1.

### Major
1.

### Minor
1.

---

## Recommendations

### Quick Fixes
1.
2.

### Copy Improvements
1.
2.

### Pattern Additions Needed
1.
2.
```

## What to Analyze

1. Read all form elements for labels, placeholders, hints
2. Extract validation messages from main.js
3. Check button/CTA text across all pages
4. Review 404 page copy
5. Check loading state text
6. Verify key brand messages are present
7. Assess overall voice consistency

## Save Location

Save output to: `docs/microcopy-audit.md`
