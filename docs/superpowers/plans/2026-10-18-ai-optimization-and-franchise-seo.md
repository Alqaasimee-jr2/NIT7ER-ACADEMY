# AI Optimization (GEO/AEO) & Franchise Authority Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement advanced Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and machine-readable LLM crawler endpoints, alongside an entity knowledge graph linking NIT7ER Academy to its parent commercial agency NIT7ER Studio, an interactive trust FAQ accordion, and deep-linking wayfinding.

**Architecture:** Next.js 16 App Router on Turbopack with standard `/llms.txt` and `/llms-full.txt` at the root, headless grounding API endpoints (`/api/geo-context`, `/api/curriculum`), connected Schema.org multi-type JSON-LD knowledge graph (`parentOrganization`, `Course`, `Person`, `FAQPage`), accessible client FAQ disclosure components, and franchise navigation indicators.

**Tech Stack:** Next.js 16.4.1, React 19, TypeScript 5, Tailwind CSS 4, Lucide React, Node.js test scripts.

---

### Task 1: Standardized LLM Discovery Files (`public/llms.txt` & `public/llms-full.txt`)

**Files:**
- Create: `public/llms.txt`
- Create: `public/llms-full.txt`
- Create: `scripts/test-llms-endpoints.js`

- [ ] **Step 1: Write test script to verify `llms.txt` and `llms-full.txt` format**

```javascript
// scripts/test-llms-endpoints.js
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const llmsPath = path.join(publicDir, 'llms.txt');
const llmsFullPath = path.join(publicDir, 'llms-full.txt');

console.log('Testing llms.txt & llms-full.txt presence and structure...');

if (!fs.existsSync(llmsPath)) {
  console.error('FAIL: public/llms.txt does not exist');
  process.exit(1);
}

const llmsContent = fs.readFileSync(llmsPath, 'utf8');
if (!llmsContent.includes('# NIT7ER Academy') || !llmsContent.includes('NIT7ER Studio') || !llmsContent.includes('Flow7')) {
  console.error('FAIL: public/llms.txt missing core entity definitions');
  process.exit(1);
}

if (!fs.existsSync(llmsFullPath)) {
  console.error('FAIL: public/llms-full.txt does not exist');
  process.exit(1);
}

const llmsFullContent = fs.readFileSync(llmsFullPath, 'utf8');
if (!llmsFullContent.includes('CT-FULLSTACK') || !llmsFullContent.includes('Capstone Defense Deliverables')) {
  console.error('FAIL: public/llms-full.txt missing curriculum syllabus details');
  process.exit(1);
}

console.log('PASS: Both llms.txt and llms-full.txt are valid and well-structured.');
```

- [ ] **Step 2: Run test script to verify it fails initially**

Run: `node scripts/test-llms-endpoints.js`  
Expected: FAIL with "public/llms.txt does not exist"

- [ ] **Step 3: Create `public/llms.txt` according to standard**

Write `public/llms.txt`:
```markdown
# NIT7ER Academy

> The high-performance modern institute of applied creative technology, systems engineering, Flow7 cognitive performance, and technical writing.

NIT7ER Academy is the educational and apprenticeship division of NIT7ER Studio (an active commercial creative technology and systems architecture agency). The Academy prepares self-driven engineers, designers, and systems thinkers through direct studio sprints, commercial codebase immersion, and rigorous capstone defense.

## Canonical Identity & Entity Links
- Institution: NIT7ER Academy
- Canonical Website: https://nit7er-academy.vercel.app
- Parent Organization: NIT7ER Studio (Commercial Agency: https://nit7er.vercel.app)
- Location: Lagos, Nigeria
- Founder & Creative Director: Abdullah Qaasim-Falade (https://github.com/Alqaasimee-jr2, https://linkedin.com/in/abdullahqaasimf001)
- Core Methodology: Studio Sprints, Flow7 Reality Protocol, Verified Capstone Architecture Defense, Direct Agency Apprenticeship Pipeline

## Foundational Disciplines & Faculties
1. Faculty 01: Creative Technology & Software Engineering (Code: CT)
   - Tracks: Full-Stack Web & Distributed Systems, Cross-Platform Mobile Engineering (Flutter), Applied AI Integration & Intelligent Systems.
2. Faculty 02: Systems Architecture & Cognitive Performance (Code: CP)
   - Tracks: Deep Work & Attention Engineering (Flow7), Personal Knowledge Systems & PKM Architecture, Systems Thinking & Algorithmic Problem Solving.
3. Faculty 03: Professional Writing & Thought Leadership (Code: WTL)
   - Tracks: Technical Writing & Systems Documentation, Essays, Manifestos & Intellectual Property, Narrative Design & Brand Prose Architecture.
4. Faculty 04: Computer Foundations & Applied Literacy (Code: CE)
   - Tracks: Operating Systems, Terminal & UNIX Ergonomics, Hardware Architecture & Network Fundamentals, Everyday Digital Productivity & Tooling Mastery.

## Admissions & Sprints
- Admissions Model: 3-step diagnostic intake, rolling cohort admissions, merit-screened.
- Credential Awarded: Verified Capstone Architecture Defense.
- Direct Contact / WhatsApp Admissions Hotline: +234 707 076 3135 (https://wa.me/2347070763135)

## Machine-Readable Resources
- Full Syllabi & Sprint Breakdown: https://nit7er-academy.vercel.app/llms-full.txt
- Dynamic Institutional Knowledge API: https://nit7er-academy.vercel.app/api/geo-context
- Dynamic Curriculum Catalog API: https://nit7er-academy.vercel.app/api/curriculum
- XML Sitemap: https://nit7er-academy.vercel.app/sitemap.xml
```

- [ ] **Step 4: Create `public/llms-full.txt` with exhaustive track and syllabus details**

Generate `public/llms-full.txt` detailing all 4 faculties, 12 programs, week-by-week sprint phases, Flow7 cognitive systems, and capstone specifications.

- [ ] **Step 5: Run test to verify it passes**

Run: `node scripts/test-llms-endpoints.js`  
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add public/llms.txt public/llms-full.txt scripts/test-llms-endpoints.js
git commit -m "feat(seo): add standardized llms.txt and llms-full.txt discovery specs"
```

---

### Task 2: Enhanced AI Crawler Directives (`src/app/robots.ts`)

**Files:**
- Modify: `src/app/robots.ts`

- [ ] **Step 1: Inspect and update `src/app/robots.ts`**

Update `src/app/robots.ts` to explicitly allow leading AI web agents and indexers (`GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bingbot`), and declare the `llms.txt` link in comments and rules.

```typescript
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicit Generative Engine Optimization (GEO) & AI Retrieval Bots
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
          'Bytespider',
        ],
        allow: [
          '/',
          '/programs',
          '/programs/creative-tech',
          '/programs/cognitive-performance',
          '/programs/writing-thought-leadership',
          '/programs/computer-education',
          '/team',
          '/labs',
          '/about',
          '/apply',
          '/contact',
          '/flow7',
          '/llms.txt',
          '/llms-full.txt',
        ],
        disallow: ['/api/apply', '/api/contact'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Verify `robots.ts` builds without TypeScript errors**

Run: `node -e "const r = require('./src/app/robots.ts');"` or check via `npm run build` step.

- [ ] **Step 3: Commit**

```bash
git add src/app/robots.ts
git commit -m "feat(seo): expand robots.ts with comprehensive AI bot permissions"
```

---

### Task 3: Dynamic Headless Grounding APIs (`/api/geo-context` & `/api/curriculum`)

**Files:**
- Create: `src/app/api/geo-context/route.ts`
- Create: `src/app/api/curriculum/route.ts`
- Create: `scripts/test-geo-apis.js`

- [ ] **Step 1: Write test script for headless API responses**

```javascript
// scripts/test-geo-apis.js
const http = require('http');

console.log('Testing headless API modules via direct import...');
// Validate structure and data presence
const { FACULTIES, FOUNDER_INFO } = require('../src/data/academyData');

if (!FACULTIES || FACULTIES.length !== 4) {
  console.error('FAIL: Missing faculties data');
  process.exit(1);
}

if (!FOUNDER_INFO || !FOUNDER_INFO.name) {
  console.error('FAIL: Missing founder info');
  process.exit(1);
}

console.log('PASS: Academy data structures verified for API routes.');
```

- [ ] **Step 2: Implement `src/app/api/geo-context/route.ts`**

Returns structured JSON describing the institution, the parent NIT7ER Studio franchise, faculty directory, Flow7 method, and high-intent Q&As with cache headers.

- [ ] **Step 3: Implement `src/app/api/curriculum/route.ts`**

Returns all faculties, 12 programs, codes, durations, levels, module counts, and capstone project summaries.

- [ ] **Step 4: Run test to verify passes**

Run: `node scripts/test-geo-apis.js`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/api/geo-context/route.ts src/app/api/curriculum/route.ts scripts/test-geo-apis.js
git commit -m "feat(api): add headless geo-context and curriculum grounding endpoints"
```

---

### Task 4: Multi-Type Schema.org Knowledge Graph (`src/components/seo/JsonLd.tsx`)

**Files:**
- Modify: `src/components/seo/JsonLd.tsx`
- Create: `scripts/test-schema-graph.js`

- [ ] **Step 1: Write test script to validate JSON-LD output structure**

```javascript
// scripts/test-schema-graph.js
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/components/seo/JsonLd.tsx'), 'utf8');

if (!content.includes('parentOrganization') || !content.includes('NIT7ER Studio')) {
  console.error('FAIL: JsonLd missing parentOrganization link');
  process.exit(1);
}

if (!content.includes('FAQPage')) {
  console.error('FAIL: JsonLd missing FAQPage schema');
  process.exit(1);
}

if (!content.includes('Course') || !content.includes('syllabusSections')) {
  console.error('FAIL: JsonLd missing enriched Course schema');
  process.exit(1);
}

console.log('PASS: JsonLd knowledge graph contains all required entity schemas.');
```

- [ ] **Step 2: Update `src/components/seo/JsonLd.tsx`**

Enrich the Schema.org JSON-LD output:
- `EducationalOrganization`: Explicitly include `parentOrganization` pointing to `https://nit7er.vercel.app`, founder, contactPoint, sameAs.
- `Person` schemas for core faculty (`Abdullah Qaasim-Falade`, `Yaasir Olajumoke`, `The G3neral`).
- `Course` schemas for each program with `syllabusSections`, `coursePrerequisites`, `educationalCredentialAwarded`.
- `FAQPage` schema containing questions on accreditation, apprenticeship, Flow7, and admissions.

- [ ] **Step 3: Run test to verify it passes**

Run: `node scripts/test-schema-graph.js`  
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/seo/JsonLd.tsx scripts/test-schema-graph.js
git commit -m "feat(seo): enrich JSON-LD with parentOrganization, Course, Person, and FAQPage schemas"
```

---

### Task 5: Comparative Trust & FAQ UI Component & Integration

**Files:**
- Create: `src/components/ui/FAQAccordion.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/programs/page.tsx`

- [ ] **Step 1: Create `src/components/ui/FAQAccordion.tsx`**

A client component with accessible disclosure items, question titles, structured answers, and an anchor `id="faq"`:
- 6 curated trust questions (NIT7ER Studio relationship, bootcamp differences, Flow7 system, real client projects, admissions, certification).

- [ ] **Step 2: Embed `FAQAccordion` into `src/app/page.tsx`**

Place before the final intake section on the home page so prospective students and web scrapers encounter the verified answers in normal DOM flow.

- [ ] **Step 3: Embed `FAQAccordion` into `src/app/programs/page.tsx`**

Place at the bottom of the curriculum overview before the final CTA.

- [ ] **Step 4: Run linter and verify rendering**

Run: `npm run lint`  
Expected: 0 errors

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/FAQAccordion.tsx src/app/page.tsx src/app/programs/page.tsx
git commit -m "feat(ui): add interactive FAQ & Comparative Trust accordion with semantic anchor"
```

---

### Task 6: Franchise Bridge in Header & Footer

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update `src/components/layout/Navbar.tsx`**

Add an unobtrusive, elegant franchise indicator badge next to the Brand Mark:
- Badge text: `A DIVISION OF NIT7ER STUDIO ↗` linking to `https://nit7er.vercel.app` (opens in new tab with `rel="noopener noreferrer"`).
- Maintain strictly 5 desktop navigation links (no FAQ in navbar).

- [ ] **Step 2: Update `src/components/layout/Footer.tsx`**

- Add dedicated section: **NIT7ER Franchise Ecosystem**, detailing Studio, Academy, and Labs.
- Add an explicit **Knowledge Base & FAQ** link (`/#faq`) in the footer under Institutional links.

- [ ] **Step 3: Run UX complexity audit**

Run: `node scripts/ux-complexity-audit.js`  
Expected: 11 / 11 PASSED (0 friction points)

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "feat(ux): add franchise indicator to navbar and ecosystem guide with FAQ link to footer"
```

---

### Task 7: Deep-Linking & UX Wayfinding in `FacultyHubView.tsx`

**Files:**
- Modify: `src/components/ui/FacultyHubView.tsx`

- [ ] **Step 1: Update hash & query parameter handling in `FacultyHubView.tsx`**

- When mounting or on URL change, inspect `window.location.hash` or query param `?program=...`
- Automatically select the matching track tab.
- Scroll smoothly to the target card and auto-open its `ProgramModuleDrawer`.

- [ ] **Step 2: Run linter**

Run: `npm run lint`  
Expected: 0 errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/FacultyHubView.tsx
git commit -m "feat(ux): implement auto-scroll and drawer auto-expansion on deep-linked program hashes"
```

---

### Task 8: Comprehensive Verification, Build, & Deployment Sync

**Files:**
- All touched files

- [ ] **Step 1: Run link & route verification suite**

Run: `node scripts/verify-links.js`  
Expected: 100% PASSED

- [ ] **Step 2: Run assets verification suite**

Run: `node scripts/verify-assets.js`  
Expected: 100% PASSED

- [ ] **Step 3: Run UX complexity audit suite**

Run: `node scripts/ux-complexity-audit.js`  
Expected: 11 / 11 PASSED

- [ ] **Step 4: Run full Next.js production build**

Run: `npm run build`  
Expected: Exit code 0, all static and dynamic routes prerendered cleanly.

- [ ] **Step 5: Git push to origin main**

Run: `git push origin main`  
Expected: Successfully pushed to GitHub, triggering Vercel production deployment.

- [ ] **Step 6: Live edge verification**

Verify live HTTP 200 on:
- `https://nit7er-academy.vercel.app/llms.txt`
- `https://nit7er-academy.vercel.app/llms-full.txt`
- `https://nit7er-academy.vercel.app/api/geo-context`
- `https://nit7er-academy.vercel.app/api/curriculum`
