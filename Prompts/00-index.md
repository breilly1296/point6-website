# Point6 Website Analysis Prompts

This folder contains analysis prompts for documenting the Point6 marketing website codebase. Run these in Claude Code to generate `.md` documentation files, then upload the outputs to your Claude Project for persistent context.

## How to Use

1. Open Claude Code in the `point6-website` directory
2. Copy/paste a prompt (or reference the file)
3. Claude Code analyzes the codebase and generates a `.md` output
4. Save the output to a `docs/` folder or upload directly to Claude Project
5. Repeat for each prompt you need

## Prompt List

| # | Prompt | Purpose | Output File |
|---|--------|---------|-------------|
| 01 | site-architecture | File structure, tech stack, organization | `site-architecture.md` |
| 02 | design-system | Colors, typography, spacing, CSS patterns | `design-system.md` |
| 03 | component-catalog | Reusable UI patterns | `component-catalog.md` |
| 04 | content-inventory | What content exists per page | `content-inventory.md` |
| 05 | content-gaps | Missing content vs requirements | `content-gaps.md` |
| 06 | page-audit-homepage | Detailed homepage analysis | `page-audit-homepage.md` |
| 07 | page-audit-services | Detailed services page analysis | `page-audit-services.md` |
| 08 | page-audit-ai-launchpad | Detailed AI Launchpad analysis | `page-audit-ai-launchpad.md` |
| 09 | page-audit-results | Detailed results page analysis | `page-audit-results.md` |
| 10 | page-audit-about | Detailed about page analysis | `page-audit-about.md` |
| 11 | page-audit-contact | Detailed contact page analysis | `page-audit-contact.md` |
| 12 | navigation-and-links | Nav structure, all links | `navigation-and-links.md` |
| 13 | responsive-status | Mobile/tablet behavior, touch targets | `responsive-status.md` |
| 14 | accessibility-status | A11y state, skip links, ARIA | `accessibility-status.md` |
| 15 | seo-and-meta | Meta tags, titles, descriptions | `seo-and-meta.md` |
| 16 | forms-and-interactivity | Forms, validation, Formspree | `forms-and-interactivity.md` |
| 17 | assets-inventory | Images, icons, fonts | `assets-inventory.md` |
| 18 | deployment-config | App Engine, build process | `deployment-config.md` |
| 19 | progress-status | Overall completion tracker | `progress-status.md` |
| 20 | known-issues | Bugs, problems, fixes needed | `known-issues.md` |
| 21 | performance-audit | Script loading, caching, Core Web Vitals | `performance-audit.md` |
| 22 | microcopy-audit | Form copy, errors, CTAs, voice | `microcopy-audit.md` |
| 23 | documentation-status | MD files completeness check | `documentation-status.md` |

## Recommended Order

**First run (foundation):**
- 01-site-architecture
- 02-design-system
- 04-content-inventory
- 05-content-gaps

**Second run (detailed audits):**
- 06 through 11 (page audits)

**Third run (technical):**
- 12 through 18
- 21-performance-audit
- 22-microcopy-audit

**Ongoing:**
- 19-progress-status (update as work progresses)
- 20-known-issues (update as issues found/fixed)
- 23-documentation-status (verify docs are current)

## Output Location

Suggested: Create a `docs/` folder in the project root and save outputs there:

```
point6-website/
├── docs/
│   ├── site-architecture.md
│   ├── design-system.md
│   ├── content-gaps.md
│   └── ...
├── index.html
├── css/
└── ...
```

Or upload directly to Claude Project without saving locally.
