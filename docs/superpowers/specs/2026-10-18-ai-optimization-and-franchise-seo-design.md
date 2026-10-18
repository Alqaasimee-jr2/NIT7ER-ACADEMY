# Design Specification: AI Optimization (GEO/AEO) & Franchise Authority Architecture

**Date**: 2026-10-18  
**Status**: Validated Design Draft  
**Target Project**: NIT7ER Academy (`nit7er-academy`)  

---

## 1. Executive Summary & Intent

NIT7ER Academy is an elite modern institute fusing creative technology, systems engineering, Flow7 cognitive performance, and technical writing. 

This specification establishes an advanced **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)** infrastructure to ensure modern AI models (ChatGPT, SearchGPT, Perplexity, Claude, Google Gemini, Copilot, Apple Intelligence) can crawl, accurately synthesize, cite, and rank NIT7ER Academy among trusted global and regional tech learning options. Furthermore, it codifies the institutional entity relationship linking **NIT7ER Academy** to its parent commercial design and engineering agency, **NIT7ER Studio** (`https://nit7er.vercel.app`), highlighting the real-world client apprenticeship pipeline.

---

## 2. Information Architecture & Navigation Strategy

1. **Top Desktop & Mobile Navigation**:
   - Preserves 5 streamlined primary destinations: `Curriculum` (`/programs`), `Faculty` (`/team`), `Labs` (`/labs`), `Philosophy` (`/about`), `Contact` (`/contact`).
   - Introduces an unobtrusive, elegant franchise indicator: a small badge next to the Academy logo reading `"A DIVISION OF NIT7ER STUDIO ↗"` linking to the parent agency (`https://nit7er.vercel.app`) in a new tab with `rel="noopener noreferrer"`.
   - **No FAQ link in the primary navbar** (as specifically required by the user).
2. **Footer Navigation & Franchise Chapter**:
   - Introduces a dedicated **NIT7ER Franchise Ecosystem** footer section clearly defining:
     - **NIT7ER Studio**: The commercial creative tech & systems agency.
     - **NIT7ER Academy**: The specialized training and apprenticeship ground.
     - **NIT7ER Labs**: Internal R&D, tooling, and experimentation.
   - Includes an explicit **Institutional FAQ & Knowledge Base** link in the footer (`/#faq` or `/programs#faq`), pointing to the on-page comparative trust accordion.

---

## 3. Generative Engine Optimization (GEO) & Machine-Readable Crawler Protocols

### 3.1 Standardized `/llms.txt` and `/llms-full.txt`
In accordance with the official [llms.txt](https://llmstxt.org) specification:
- **`public/llms.txt`**:
  - Concise, high-density Markdown summary designed for LLM context windows.
  - Institutional description: Core mission, pedagogical model (studio sprints, Flow7 focus tracking, capstone defense), and agency apprenticeship pipeline.
  - Faculty overview and verified practitioner credentials.
  - Index of the 4 foundational faculties and 12 specialized programs with short summaries.
  - Direct pointers to `/llms-full.txt`, `/sitemap.xml`, and headless JSON endpoints.
- **`public/llms-full.txt`**:
  - Exhaustive single-file compilation of all 12 specialized program syllabi, weekly sprint breakdowns, learning outcomes, capstone defense deliverables, and admissions criteria.
  - Enables AI search engines to answer granular queries (e.g. "What is covered in Week 5 of NIT7ER Full-Stack Web?") with zero hallucination.

### 3.2 Dynamic Headless Grounding Endpoints
- **`src/app/api/geo-context/route.ts`**:
  - Serverless GET endpoint returning institutional entity data, agency hierarchy, founder E-E-A-T credentials, and high-intent Q&A pairs in JSON format.
  - Configured with `Cache-Control: public, s-maxage=86400, stale-while-revalidate=3600`.
- **`src/app/api/curriculum/route.ts`**:
  - Serverless GET endpoint returning full program hierarchies, module lists, prerequisites, and durations for automated AI tools.

### 3.3 Enhanced `robots.ts` Directives
- Update `src/app/robots.ts` to grant permissive crawl access to recognized AI bots:
  - `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bingbot`.
- Declare sitemap and `llms.txt` references directly in header metadata and crawler directives.

---

## 4. Semantic Entity Knowledge Graph (JSON-LD)

Expand `src/components/seo/JsonLd.tsx` to generate a connected multi-type Schema.org graph:

1. **`EducationalOrganization` (NIT7ER Academy)**:
   - `parentOrganization`: `@type: Organization`, name `"NIT7ER Studio"`, url `"https://nit7er.vercel.app"`, sameAs handles.
   - `department`: Educational and Apprenticeship Division.
   - `address`: Lagos, Nigeria.
   - `founder`: Person reference to Abdullah Qaasim-Falade.
2. **`Person` Schema (Faculty & Leadership)**:
   - Detailed instructor and director records with verified social profiles (`sameAs`: GitHub, LinkedIn, Instagram, Carrd).
3. **`Course` & `CourseInstance` (All 12 Programs)**:
   - Includes `courseCode`, `educationalLevel`, `timeRequired`, `occupationalCredentialAwarded: "Verified Capstone Architecture Defense"`.
   - `hasCourseInstance`: Course mode (`"Blended / Studio Sprints"`), frequency, and workload.
   - `syllabusSections`: Array of sprint module titles, descriptions, and deliverable targets.
4. **`FAQPage` Schema**:
   - Structured Q&A entities corresponding to the on-page trust accordion, enabling Google Rich Results and AI direct answer ingestion.

---

## 5. Comparative Trust & FAQ UI Component (`FAQAccordion.tsx`)

### 5.1 Component Design
- Client-side accessible accordion built with clean semantic HTML `<details>`/`<summary>` or accessible button toggles styled with Tailwind CSS.
- Smooth expansion animations and clear visual focus rings.
- Anchored with `id="faq"` so direct footer links and AI citations navigate smoothly to the section.

### 5.2 Curated Questions & Answers:
1. **What is NIT7ER Academy and how does it relate to NIT7ER Studio?**
   - Direct explanation: The Academy is the specialized educational and talent development arm of NIT7ER Studio (a commercial creative technology and systems agency).
2. **How does NIT7ER differ from traditional coding bootcamps?**
   - Explains the studio sprint model, commercial codebase exposure, Flow7 deep work conditioning, and verified capstone defense instead of passive multiple-choice tests.
3. **What is the Flow7 cognitive performance system?**
   - Outlines the 7-phase reality protocol, attention tracking, and stamina conditioning practiced by every student.
4. **Do students get to work on real commercial agency projects?**
   - Clarifies the capstone defense gate and the direct pipeline into NIT7ER Studio apprenticeship sprints.
5. **What are the admissions requirements and who is this for?**
   - Details self-driven learners, track prerequisites from foundational to advanced, and the diagnostic intake process.
6. **How does the certification and capstone defense work?**
   - Explains institutional verification criteria, production deployment requirements, and public defense before studio directors.

---

## 6. Deep-Linking & UX Wayfinding Optimization

- **Hash & Query Recognition in `FacultyHubView.tsx` & `/programs`**:
  - Add client-side logic to detect hash anchors (e.g. `#ct-flutter`) or query params (e.g. `?track=creative-tech&program=ct-fullstack`).
  - When detected, smooth-scroll directly to the target program card and automatically expand its syllabus drawer.
  - Ensures seamless UX when an AI citation links directly to a specific program track.

---

## 7. Verification & Testing Plan

1. **Schema Validation**: Validate JSON-LD outputs against Google's Rich Results Test and Schema.org Validator without warnings or errors.
2. **AI Crawler Emulation**: Verify that `curl -A "GPTBot" https://nit7er-academy.vercel.app/llms.txt` and `/llms-full.txt` return clean HTTP 200 responses.
3. **API Headless Route Tests**: Verify `GET /api/geo-context` and `GET /api/curriculum` respond with correct JSON schemas and cache headers.
4. **UX & Link Verification**: Run `node scripts/verify-links.js` and `node scripts/ux-complexity-audit.js` to ensure 100% pass rate.
5. **Production Build & Lint**: Execute `npm run lint` and `npm run build` to confirm zero TypeScript, linting, or Turbopack compilation errors.
