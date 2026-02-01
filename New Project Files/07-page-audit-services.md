# Point6 Website - Services Page Audit

> Generated: 2026-02-01
> File: services.html

## Page Overview

- **Title tag**: ServiceNow Services | Point6
- **Meta description**: Comprehensive ServiceNow services: ITSM, CSM, HRSD implementations, AI/GenAI solutions, managed services, and consulting. Expert guidance with up to 70% cost savings.
- **URL path**: /services.html
- **Canonical URL**: https://point6.io/services.html
- **Purpose**: Showcase all ServiceNow service offerings

---

## Document Structure

### Head Section

| Element | Content/Value |
|---------|---------------|
| Charset | UTF-8 |
| Viewport | width=device-width, initial-scale=1.0 |
| Title | ServiceNow Services \| Point6 |
| Meta Description | Present (146 characters) |
| Robots | index, follow |
| Canonical | https://point6.io/services.html |
| Open Graph | Complete (type, url, title, description, image, site_name) |
| Twitter Card | Complete (summary_large_image) |
| Favicon | Complete set (ico, png 32x32, png 16x16, apple-touch-icon) |
| Web Manifest | /site.webmanifest |
| Theme Color | #3b82f6 |
| Fonts | Google Fonts (DM Sans, Space Mono) with preconnect |
| Stylesheet | css/styles.css |
| Structured Data | JSON-LD Service schema with OfferCatalog |

### Body Structure
```
body
├── skip-link (accessibility)
├── nav.site-nav
│   └── container
│       ├── logo
│       ├── mobile-menu-btn
│       └── nav-links
├── mobile-menu-overlay
├── main#main-content
│   ├── section.page-header (Hero)
│   ├── section.featured-service (AI Launchpad)
│   ├── section.services-section (Implementations)
│   │   ├── #technology-workflows
│   │   ├── #customer-workflows
│   │   ├── #employee-workflows
│   │   ├── #strategic-risk
│   │   └── #ai-genai
│   ├── section.alt-bg (Methodology)
│   ├── section.services-section (Consulting & Managed Services)
│   ├── section.modules-section.alt-bg (Platform Expertise)
│   └── section.cta-section-minimal
└── footer
```

---

## Section-by-Section Analysis

### 1. Header/Navigation

- **Element**: `nav.site-nav`
- **ARIA**: `aria-label="Main navigation"`, `role="navigation"`
- **Logo**: Links to index.html with aria-label
- **Mobile menu**: Hamburger button with proper ARIA attributes
- **Nav links**: Services (active), AI Launchpad, Results, About, Get in Touch (CTA)
- **Active state**: `class="active"` and `aria-current="page"` on Services link
- **Mobile overlay**: Present for menu backdrop
- **Issues**: None - consistent with homepage pattern

### 2. Hero Section (Page Header)

- **Section class/id**: `section.page-header`
- **Label text**: "Services" (div.hero-tag)
- **H1 heading**: "Comprehensive ServiceNow expertise"
- **Subheading**: "From implementation to managed services, we deliver flexible, high-quality solutions tailored to your needs."
- **CTAs**: None in hero (deferred to sections below)
- **Background**: Inherits from page-header styling
- **Issues**: None

### 3. AI Launchpad Featured Card

- **Section class/id**: `section.section.featured-service`
- **ARIA**: `aria-labelledby="featured-service-heading"`
- **Badge**: "Featured" (div.featured-service-badge)
- **Icon**: Rocket emoji
- **Heading**: "AI Launchpad" (h2#featured-service-heading)
- **Description**: "Start small, scale fast. Our AI Launchpad program delivers rapid ServiceNow AI implementations with transparent pricing - from $10,000. Get Now Assist, Virtual Agent, and Predictive Intelligence up and running in weeks, not months."
- **Link/CTA**: "Explore AI Launchpad" button linking to ai-launchpad.html
- **Issues**: None - well structured and prominent

### 4. Technology Workflows (Tx)

- **Section class/id**: `div.service-category#technology-workflows`
- **Anchor**: `#technology-workflows` present
- **Section heading**: "Technology Workflows (Tx)" (h3)
- **Intro paragraph**: Present - "Modernize your IT operations with ServiceNow's Technology Workflows. From service desk to infrastructure management, we help you build a foundation that scales with your business."

**ITSM subsection**:
- Heading: "IT Service Management" (h4)
- Description: Present - "Build a service desk that actually works. ITSM streamlines how your IT team handles requests and resolves issues, reducing manual work and improving user satisfaction."
- Capabilities listed: 4 items
  - Incident & problem management
  - Change & release management
  - Service request fulfillment
  - Knowledge management

**ITOM subsection**:
- Heading: "IT Operations Management" (h4)
- Description: Present - "Gain complete visibility into your infrastructure. ITOM helps you understand dependencies, detect issues before they impact users, and automate remediation."
- Capabilities listed: 4 items
  - Discovery & service mapping
  - Event management & alerting
  - Cloud management
  - Orchestration & automation

**ITAM subsection**:
- Heading: "IT Asset Management" (h4)
- Description: Present - "Track every asset from procurement to retirement. ITAM gives you full visibility into hardware, software, and cloud resources so you can optimize costs and reduce risk."
- Capabilities listed: 4 items
  - Hardware asset management
  - Software asset management
  - Cloud asset management
  - License optimization

- **Status**: Complete
- **Issues**: None

### 5. Customer Workflows (Cx)

- **Section class/id**: `div.service-category#customer-workflows`
- **Anchor**: `#customer-workflows` present
- **Section heading**: "Customer Workflows (Cx)" (h3)
- **Intro paragraph**: Present - "Transform how you serve customers with connected, intelligent workflows. Deliver faster resolutions, personalized experiences, and seamless service across every channel."

**CSM subsection**:
- Heading: "Customer Service Management" (h4)
- Description: Present - "Deliver exceptional customer experiences across every touchpoint. CSM connects your front office to back office operations for faster, more personalized service."
- Capabilities listed: 4 items
  - Case management & routing
  - Self-service portals
  - Omnichannel support
  - Customer & partner portals

**Field Service subsection**:
- Heading: "Field Service Management" (h4)
- Description: Present - "Optimize your mobile workforce from dispatch to completion. FSM helps you schedule smarter, empower technicians, and deliver first-time fix rates that drive customer loyalty."
- Capabilities listed: 4 items
  - Work order management
  - Intelligent scheduling
  - Mobile technician app
  - Parts & inventory management

- **Status**: Complete
- **Issues**: None - only 2 cards in 3-column grid (intentional design choice)

### 6. Employee Workflows

- **Section class/id**: `div.service-category#employee-workflows`
- **Anchor**: `#employee-workflows` present
- **Section heading**: "Employee Workflows" (h3)
- **Intro paragraph**: Present - "Create consumer-grade employee experiences that boost productivity and satisfaction. From day one onboarding to everyday requests, make work easier for everyone."

**HRSD content**:
- Heading: "HR Service Delivery" (h4)
- Description: Present - "Streamline HR operations and give employees the service they deserve. HRSD automates routine tasks so your HR team can focus on what matters - your people."
- Capabilities listed: 4 items
  - Employee onboarding & transitions
  - HR case management
  - Knowledge base & self-service
  - Document management

**Employee Center content**:
- Heading: "Employee Center" (h4)
- Description: Present - "One unified portal for everything employees need. Employee Center brings IT, HR, facilities, and more into a single, personalized experience."
- Capabilities listed: 4 items

**Workplace Service Delivery content**:
- Heading: "Workplace Service Delivery" (h4)
- Description: Present - "Manage your physical workplace with the same efficiency as your digital one. Support hybrid work, office services, and facility management from one platform."
- Capabilities listed: 4 items

- **Status**: Complete
- **Issues**: None

### 7. Strategic & Risk Management

- **Section class/id**: `div.service-category#strategic-risk`
- **Anchor**: `#strategic-risk` present
- **Section heading**: "Strategic & Risk Management" (h3)
- **Intro paragraph**: Present - "Align your initiatives with business strategy and manage risk proactively. Make data-driven decisions about where to invest and how to protect your organization."

**SPM subsection**:
- Heading: "Strategic Portfolio Management" (h4)
- Description: Present - "Connect strategy to execution. SPM helps you prioritize the right initiatives, allocate resources effectively, and deliver projects that drive real business value."
- Capabilities listed: 4 items
  - Project & portfolio management
  - Demand management
  - Resource management
  - Agile & waterfall delivery

**IRM/GRC subsection**:
- Heading: "Integrated Risk Management" (h4)
- Description: Present - "Take control of risk across your organization. IRM provides a unified view of risk, compliance, and audit activities so you can make informed decisions and stay ahead of threats."
- Capabilities listed: 4 items
  - Risk management
  - Compliance management
  - Audit management
  - Policy & exception management

**Security Operations subsection**:
- Heading: "Security Operations" (h4)
- Description: Present - "Respond to threats faster with orchestrated security workflows. SecOps connects your security tools and automates response so your team can focus on critical threats."
- Capabilities listed: 4 items
  - Security incident response
  - Vulnerability management
  - Threat intelligence
  - Configuration compliance

- **Status**: Complete
- **Issues**: None

### 8. AI & GenAI

- **Section class/id**: `div.service-category#ai-genai`
- **Anchor**: `#ai-genai` present
- **Section heading**: "AI & GenAI" (h3)
- **Intro paragraph**: Present - "Unlock the power of AI across your ServiceNow platform. From intelligent automation to generative AI, we help you implement AI capabilities that deliver measurable results."

**Now Assist content**:
- Heading: "Now Assist" (h4)
- Description: Present - "ServiceNow's generative AI experience. Now Assist brings GenAI capabilities directly into your workflows, helping agents work faster and users get answers instantly."
- Capabilities listed: 4 items
  - Case & incident summarization
  - Knowledge article generation
  - Code & script assistance
  - Chat summarization

**Predictive Intelligence content**:
- Heading: "Predictive Intelligence" (h4)
- Description: Present - "Machine learning that gets smarter with every interaction. Predictive Intelligence automates categorization, routing, and recommendations based on historical patterns."
- Capabilities listed: 4 items

**Virtual Agent content**:
- Heading: "Virtual Agent" (h4)
- Description: Present - "AI-powered chatbots that resolve requests without human intervention. Virtual Agent handles routine inquiries 24/7, freeing your team for complex work."
- Capabilities listed: 4 items

**AI Launchpad callout**: Present with "Ready to start your AI journey?" and link to ai-launchpad.html

- **Status**: Complete
- **Issues**: None

### 9. Methodology Section (Digital Trip)

- **Section class/id**: `section.section.alt-bg`
- **ARIA**: `aria-labelledby="methodology-heading"`
- **Section tag**: "Our Approach"
- **Heading**: "The Digital Trip methodology" (h2#methodology-heading)
- **Subtitle**: "A proven 5-step approach to ServiceNow success"

**Steps documented**:

| Step | Title | Description Present? | Sub-items |
|------|-------|----------------------|-----------|
| 1 | Discovery & Assessment | Yes | 3 items |
| 2 | Strategy & Roadmap | Yes | 3 items |
| 3 | Implementation & Optimization | Yes | 3 items |
| 4 | Enablement & Adoption | Yes | 3 items |
| 5 | Ongoing Support & Innovation | Yes | 3 items |

- **Visual treatment**: Numbered circles (div.methodology-step-number) with ordered list structure
- **Container**: `ol.methodology-steps` with `role="list"`
- **Status**: Complete
- **Issues**: None

### 10. Consulting & Support Services Section

- **Section class/id**: `section.section.services-section`
- **ARIA**: `aria-labelledby="consulting-heading"`
- **Section tag**: "Ongoing Support"
- **Heading**: "Consulting & managed services" (h2#consulting-heading)

**Services**:
| Service | Heading | Description |
|---------|---------|-------------|
| Consulting | h3 | Discovery, assessment, strategy, and roadmap development. Expert guidance to align ServiceNow with your business objectives. |
| Managed Services | h3 | Ongoing support, monitoring, and proactive optimization. Regular enhancements and upgrades to keep your platform running at peak performance. |
| Enhancements | h3 | Workflow optimization, system improvements, and integration development. Continuous improvement to maximize your ServiceNow investment. |

- **Status**: Complete
- **Issues**: None - no feature lists (simpler cards)

### 11. Platform Expertise Section

- **Section class/id**: `section.section.modules-section.alt-bg`
- **ARIA**: `aria-labelledby="modules-heading"`
- **Section tag**: "Platform Expertise"
- **Heading**: "ServiceNow modules we specialize in" (h2#modules-heading)

**Modules listed** (10 pills):
1. ITSM - IT Service Management
2. ITOM - IT Operations Management
3. ITAM - IT Asset Management
4. CSM - Customer Service Management
5. FSM - Field Service Management
6. HRSD - HR Service Delivery
7. SPM - Strategic Portfolio Management
8. IRM - Integrated Risk Management
9. SecOps - Security Operations
10. AI - AI & GenAI

- **Visual treatment**: Pills with abbreviation and full name
- **Status**: Complete
- **Issues**: None

### 12. CTA Section

- **Section class/id**: `section.section.cta-section-minimal`
- **Heading**: "Ready to get started?" (h2)
- **Description**: "Book a free consultation to discuss your ServiceNow needs. No pressure, just expert guidance."
- **Button**: "Book a Consultation" linking to Outlook booking (external)
- **Target**: _blank with rel="noopener noreferrer"
- **Issues**: None

### 13. Footer

- **Structure**: Matches homepage pattern
- **Brand section**: Logo + tagline "Flexible, high-quality ServiceNow expertise."
- **Company column**: Services, AI Launchpad, Results, About, Contact
- **Connect column**: Email (hello@point6.io), LinkedIn (#), YouTube (#)
- **Bottom**: Copyright 2025 Point6 LLC, Privacy (#), Terms (#)
- **Issues**:
  - LinkedIn and YouTube links are placeholders (#)
  - Privacy and Terms links are placeholders (#)
  - Copyright year shows 2025 (may need update)

---

## Service Categories Inventory

| Category | Heading Present | Content Present | Anchor Link | Cards |
|----------|-----------------|-----------------|-------------|-------|
| Technology Workflows | Yes | Yes | #technology-workflows | 3 |
| Customer Workflows | Yes | Yes | #customer-workflows | 2 |
| Employee Workflows | Yes | Yes | #employee-workflows | 3 |
| Strategic & Risk | Yes | Yes | #strategic-risk | 3 |
| AI & GenAI | Yes | Yes | #ai-genai | 3 |
| Consulting | Yes | Yes | N/A | 1 |
| Managed Services | Yes | Yes | N/A | 1 |
| Enhancements | Yes | Yes | N/A | 1 |

**Total service cards**: 17

---

## Content Quality

### Text Content
- [x] All service categories have descriptions
- [x] Capabilities are listed for each service (except Consulting section cards)
- [x] Outcomes/benefits mentioned in descriptions
- [x] No placeholder text in main content
- [x] Consistent formatting across sections

### Internal Links

| Link Text | Destination | Working? |
|-----------|-------------|----------|
| Point6 logo | index.html | Yes |
| Services | services.html | Yes (current page) |
| AI Launchpad (nav) | ai-launchpad.html | Needs verification |
| Results | results.html | Needs verification |
| About | about.html | Needs verification |
| Get in Touch | contact.html | Needs verification |
| Explore AI Launchpad (featured) | ai-launchpad.html | Needs verification |
| Explore AI Launchpad (AI section) | ai-launchpad.html | Needs verification |
| Book a Consultation | External Outlook link | Yes (external) |
| Footer links | Various | Some are placeholders |

### Anchor Links

| Anchor | Present in HTML? | Linked From Navigation? |
|--------|------------------|------------------------|
| #technology-workflows | Yes | No |
| #customer-workflows | Yes | No |
| #employee-workflows | Yes | No |
| #strategic-risk | Yes | No |
| #ai-genai | Yes | No |
| #main-content | Yes | Yes (skip link) |

---

## Technical Analysis

### HTML Structure
- **Semantic sections used**: Yes (nav, main, section, article, footer)
- **Heading hierarchy**: Correct (h1 > h2 > h3 > h4)
- **Lists properly structured**: Yes (ul, ol with proper nesting)
- **ARIA landmarks**: Present and appropriate
- **Skip link**: Present for keyboard accessibility

### CSS Classes Used

**Layout Classes**:
- `.container` - Content container
- `.section` - Standard section spacing
- `.alt-bg` - Alternate background color
- `.services-grid`, `.services-grid-3` - Grid layout for cards
- `.modules-grid` - Grid for module pills

**Component Classes**:
- `.page-header`, `.page-header-content` - Hero section
- `.hero-tag`, `.section-tag` - Tag/label badges
- `.featured-service`, `.featured-service-card`, `.featured-service-badge` - Featured card
- `.service-category`, `.service-category-title`, `.service-category-intro` - Category containers
- `.service-card`, `.service-icon`, `.service-features` - Service cards
- `.methodology-steps`, `.methodology-step`, `.methodology-step-number` - Methodology
- `.module-pill`, `.module-abbr`, `.module-name` - Module pills
- `.cta-section-minimal`, `.cta-minimal` - CTA section
- `.btn`, `.btn-primary` - Buttons

**Navigation Classes**:
- `.site-nav`, `.nav-links`, `.mobile-menu-btn` - Navigation
- `.logo`, `.logo-dot` - Logo
- `.active` - Current page indicator

### Structured Data

The page includes JSON-LD structured data with:
- `@type`: Service
- `serviceType`: ServiceNow Consulting
- `provider`: Organization (Point6)
- `areaServed`: United States
- `hasOfferCatalog`: OfferCatalog with 6 services listed

**Services in structured data**:
1. IT Service Management (ITSM)
2. IT Operations Management (ITOM)
3. Customer Service Management (CSM)
4. HR Service Delivery (HRSD)
5. AI & GenAI Solutions
6. Managed Services

**Note**: ITAM, FSM, SPM, IRM, SecOps not included in structured data

---

## Issues Found

### Critical
None

### Major
1. **Incomplete structured data**: JSON-LD schema missing several services (ITAM, FSM, Employee Center, Workplace Service Delivery, SPM, IRM, SecOps, Consulting, Enhancements)
2. **Placeholder links in footer**: LinkedIn (#), YouTube (#), Privacy (#), Terms (#) are non-functional
3. **OG image TODO**: Comment indicates og-services.jpg needs to be created

### Minor
1. **Copyright year**: Footer shows 2025, may need updating
2. **No outcomes section**: Services list capabilities but don't explicitly highlight outcomes/ROI (mentioned in descriptions but not structured)
3. **No anchor navigation**: Anchor links exist (#technology-workflows, etc.) but no on-page navigation to jump between sections
4. **Inconsistent card counts**: Some categories have 2 cards, others 3 (design choice, not necessarily an issue)

---

## Recommendations

1. **Update structured data**: Add all services to the JSON-LD OfferCatalog to improve SEO and rich snippets
2. **Add internal anchor navigation**: Consider adding a jump-to section menu for quick access to service categories
3. **Create OG image**: Design and add og-services.jpg (1200x630px) for social sharing
4. **Complete footer links**: Replace placeholder # links with actual URLs or remove if not applicable
5. **Consider outcomes highlight**: Add a brief outcomes/benefits bullet to each service card or a dedicated outcomes section
6. **Review copyright year**: Update to 2026 if needed

---

## Comparison to CLAUDE.md Requirements

| Required Service | Present? | Content Complete? |
|------------------|----------|-------------------|
| Technology Workflows (ITSM, ITOM, ITAM) | Yes | Yes - full descriptions and 4 features each |
| Customer Workflows (CSM, Field Service) | Yes | Yes - full descriptions and 4 features each |
| Employee Workflows (HRSD) | Yes | Yes - plus Employee Center and Workplace Service Delivery |
| Strategic Portfolio Management (SPM) | Yes | Yes - full description and 4 features |
| Integrated Risk Management (IRM/GRC) | Yes | Yes - full description and 4 features |
| AI and GenAI | Yes | Yes - Now Assist, Predictive Intelligence, Virtual Agent |
| Consulting | Yes | Yes - description only (simpler card) |
| Managed Services | Yes | Yes - description only (simpler card) |
| Enhancements | Yes | Yes - description only (simpler card) |

**CLAUDE.md states**: Multi-page site including services page
- **Compliance**: Yes

**All services are displayed expanded** (not hidden in accordions):
- **Compliance**: Yes - all service cards are visible without user interaction

---

## Summary

The services.html page is well-structured and comprehensive. It successfully showcases all ServiceNow service offerings with:

- Clear visual hierarchy and organization
- Complete content for all required service categories
- Proper semantic HTML and accessibility features
- Consistent design patterns matching the site's style
- Strong SEO implementation (meta tags, Open Graph, structured data)

The main areas for improvement are:
1. Completing the structured data to include all services
2. Replacing placeholder footer links
3. Creating the OG image for social sharing

**Overall Status**: Production-ready with minor enhancements recommended
