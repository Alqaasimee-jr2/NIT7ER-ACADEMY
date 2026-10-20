<div align="center">

# NIT7ER Academy

**The High-Performance Institute of Applied Creative Technology, Cognitive Systems & Thought Leadership**

Practical education for self-driven builders, creators, and entrepreneurs. Software engineering, cognitive execution, technical writing, and computer fundamentals, taught through production work instead of theory.

[**Live Site**](https://nit7er-academy.vercel.app) · [**Programs**](https://nit7er-academy.vercel.app/programs) · [**Studio Labs**](https://nit7er-academy.vercel.app/labs) · [**Flow7 Simulator**](https://nit7er-academy.vercel.app/flow7) · [**Apply**](https://nit7er-academy.vercel.app/apply)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

</div>

---

## What this is

This repository is the source code for the NIT7ER Academy website: the public face, program catalog, admissions intake, and showcase for the Academy.

NIT7ER Academy is the education and talent-engineering division of **[NIT7ER Studio](https://nit7er.vercel.app)**, a commercial creative technology and systems architecture agency based in Lagos, Nigeria. The premise is simple: most degrees and bootcamps don't produce engineers who are ready for real commercial software. So students here train inside simulated studio sprints, and top graduates apprentice on live client deliverables.

I built the site the way I'd want the Academy to operate: fast, production-grade, and honest about what it teaches. The site itself is a working example of the stack taught in the Software Engineering faculty.

## What the site covers

### 4 Faculties, 12 Programs

| Faculty | Programs |
|---|---|
| **01 · Creative Technology & Software Engineering** | **SWE-101** Full-Stack Web Systems & Cloud Architecture (16 weeks) · **SWE-102** Cross-Platform Mobile Application Engineering (14 weeks) · **SWE-103** Applied AI & Intelligent Systems Integration (12 weeks) |
| **02 · Cognitive Performance & Mind Architecture** | **COG-201** Deep Work, Attention Economics & Focus Engineering · **COG-202** Personal Operating Systems & Execution Telemetry |
| **03 · Professional Writing & Thought Leadership** | **WRT-301** Technical Writing & System Architecture Documentation · **WRT-302** Essay Craft, Rhetoric & Editorial Thought Leadership · **WRT-303** High-Conversion Copywriting & Brand Messaging |
| **04 · Computer Education & Digital Foundations** | **CMP-401** Computer Fundamentals & OS Mastery · **CMP-402** Modern Productivity Suites & Cloud Workflows · **CMP-403** Internet Literacy, Cyber Hygiene & Digital Safety · **CMP-404** Computational Thinking & Practical Automation |

Every track ends in a verified capstone. For SWE-101, that is a commercial multi-tenant SaaS platform with authentication, subscription billing, tenant isolation, analytics, and a live deployment, verified by a deployed URL and a public repo with a full README and Architecture Decision Records.

### Studio Labs (incubated products)

The Labs section showcases production systems built inside NIT7ER Studio:

- **Flow7**: mobile-first time awareness journal and cognitive regulation layer. Replaces task-list anxiety with objective reality logs and weekly debriefs. There is an interactive simulator on the site at `/flow7`.
- **Clasquera**: lesson accountability for private schools. Flutter captures classroom audio, and Gemini Pro (via Firebase Cloud Functions) benchmarks delivery against approved schemes of work.
- **Lang Huey**: 100% offline educational software for smartboards in bandwidth-constrained classrooms, aligned to the NERDC curriculum and in live use at Precious Muslims Sprout, Lagos.
- **OAUMods Compass**, **Restaurante Web**, **PR Pre-Flight Guardian**: additional case studies in the Labs index.

### Admissions pipeline

A four-stage path: Diagnostic Intake → Strategy & Baseline Session → Studio Sprints & Reality Logging → Capstone Defense & Deployment.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript 5 |
| Motion | Framer Motion |
| Icons | lucide-react |
| Effects | canvas-confetti |
| Observability | Vercel Analytics, Vercel Speed Insights |
| Linting | ESLint 9 with `eslint-config-next` |
| Hosting | Vercel |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
# clone
git clone https://github.com/Alqaasimee-jr2/NIT7ER-ACADEMY.git
cd NIT7ER-ACADEMY

# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
NIT7ER-ACADEMY/
├── src/                 # Application source (routes, components, content)
├── public/              # Static assets, including brand imagery
├── scripts/             # Project utility scripts
├── docs/                # Internal documentation and working notes
├── AGENTS.md            # Guidance for AI coding agents working in this repo
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

### Public routes

| Route | Purpose |
|---|---|
| `/` | Home: faculties, incubated products, admission pipeline, FAQ |
| `/programs` | Full 12-track catalog, with per-faculty and per-program syllabus pages |
| `/labs` | Studio Labs showcase and case studies |
| `/flow7` | Flow7 focus simulator |
| `/team` | Leadership and faculty |
| `/about` | Philosophy and founder thesis |
| `/apply` | Diagnostic intake, accepts `?track=` and `?program=` to pre-select a path |
| `/contact` | Admissions desk |

## Working with AI agents

This repo includes an `AGENTS.md` at the root. If you use an AI coding agent (Claude Code, Codex, Cursor, and similar), point it there first. It carries the conventions the agent should follow in this codebase.

## Deployment

The site is deployed on Vercel. Pushes to `main` ship to production at [nit7er-academy.vercel.app](https://nit7er-academy.vercel.app). For a self-hosted setup, run `npm run build` followed by `npm run start` on any Node host.

## Related projects

- [NIT7ER Studio](https://nit7er.vercel.app): the commercial agency behind the Academy
- [Flow7 Landing Page](https://github.com/Alqaasimee-jr2/Flow7-Landing-Page): [live](https://flow7-two.vercel.app)
- [Clasquera Landing Page](https://github.com/Alqaasimee-jr2/Clasquera-Landing-page): [live](https://clasquera.vercel.app)
- [Lang Huey](https://lang-huey.vercel.app)

## Contributing

This is a founder-directed project, so the roadmap is set by me. That said, bug reports and fixes are welcome. Open an issue first for anything beyond a small fix so we can agree on direction before you spend time on it.

## Author

**Abdullah Qaasim-Falade**, Founder & Director, NIT7ER Studio & Academy, Lagos, Nigeria.

[GitHub](https://github.com/Alqaasimee-jr2) · [LinkedIn](https://www.linkedin.com/in/abdullahqaasimf001) · [Instagram](https://instagram.com/nit7er)

## License

© 2026 NIT7ER. All rights reserved.
