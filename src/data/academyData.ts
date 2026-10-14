export interface Faculty {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  shape: 'hexagon' | 'square' | 'triangle' | 'circle';
  shapeColor: 'gold' | 'blue' | 'navy' | 'slate' | 'amber' | 'emerald';
  leadAnchor: string;
  duration: string;
  format: string;
  description: string;
  livingProof: {
    title: string;
    description: string;
    link?: string;
  };
  modules: {
    title: string;
    desc: string;
    topics: string[];
  }[];
  outcomes: string[];
}

export interface LabProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge: 'Live Production' | 'Incubated Lab' | 'Smartboard System' | 'Open Source';
  badgeColor: string;
  shape: 'hexagon' | 'square' | 'triangle' | 'circle';
  shapeColor: 'gold' | 'blue' | 'navy' | 'slate' | 'amber' | 'emerald';
}

export const ACADEMY_METRICS = [
  { label: 'Project-Based Output', value: '100%', detail: 'Every module ends with real deployed software or published writing' },
  { label: 'Core Faculties', value: '4', detail: 'Engineering, Cognitive Systems, Writing, and Computer Education' },
  { label: 'Incubated Lab Products', value: '6+', detail: 'Proven live platforms designed and deployed internally' },
  { label: 'Performance Standard', value: '99+', detail: 'Lighthouse Core Web Vitals speed & latency target' },
];

export const FACULTIES: Faculty[] = [
  {
    id: 'creative-tech',
    number: '01',
    title: 'Creative Technology & Software Engineering',
    subtitle: 'Full-Stack Web Systems, Mobile Apps & AI Architectures',
    tagline: 'Engineering robust, production-grade applications with zero fluff.',
    badge: 'Flagship Faculty',
    badgeColor: 'bg-blue-100 text-[#12345B] border-blue-200',
    shape: 'square',
    shapeColor: 'navy',
    leadAnchor: 'Modern Web, Flutter & Intelligent Systems',
    duration: '16 Weeks Intensive',
    format: 'Cohort Studio & Live Code Reviews',
    description:
      'Master the art of building scalable, lightning-fast digital products. Move past toy tutorials into production Next.js 16 architectures, reactive state machines, cross-platform Flutter/Dart engineering, and practical AI telemetry integrations.',
    livingProof: {
      title: 'Clasquera & Production Web Engines',
      description: 'Audio-based lesson accountability platform integrating Flutter recording apps with Gemini Pro verification via Firebase Functions.',
      link: 'https://github.com/Alqaasimee-jr2/Clasquera-Landing-page',
    },
    modules: [
      {
        title: 'Modern Architecture & Next.js 16 App Router',
        desc: 'Server components, streaming layouts, data hydrations, and edge rendering pipelines.',
        topics: ['React 19 Server Actions', 'Tailwind CSS v4 Design Tokens', 'TypeScript Strict Mode', 'Core Web Vitals Optimization'],
      },
      {
        title: 'Cross-Platform Mobile Interop (Flutter & Dart)',
        desc: 'Crafting responsive mobile software with clean architecture and reactive state management.',
        topics: ['Flutter Widget Tree Engineering', 'Native Device APIs & Audio Capture', 'Offline-First SQLite Cache', 'Riverpod State Management'],
      },
      {
        title: 'API Engineering, Serverless & AI Integration',
        desc: 'Connecting frontends to resilient backends, asynchronous queues, and AI models.',
        topics: ['Next.js Route Handlers & Microservices', 'Firebase Cloud Functions', 'Gemini Pro Multi-modal Prompt Engineering', 'JWT Auth & Security'],
      },
      {
        title: 'Production Deployment & Continuous Telemetry',
        desc: 'Hardening projects for live traffic with real-time error tracking and telemetry.',
        topics: ['Vercel Edge Network Configuration', 'Automated CI/CD Workflows', 'Performance Analytics Monitoring', 'Production Auditing'],
      },
    ],
    outcomes: [
      'Architect full-stack web applications capable of handling live commercial traffic',
      'Deploy cross-platform Flutter applications with native device integrations',
      'Integrate AI services (speech-to-text, LLM verification) into real business software',
      'Ship clean, maintainable codebases adhering to strict TypeScript standards',
    ],
  },
  {
    id: 'cognitive-performance',
    number: '02',
    title: 'Cognitive Performance & Systems Architecture',
    subtitle: 'Flow7 Execution Methodology & Personal Operational Infrastructure',
    tagline: 'Replace to-do list guilt with ruthless action awareness.',
    badge: 'Founder Discipline',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    shape: 'hexagon',
    shapeColor: 'gold',
    leadAnchor: 'The Flow7 Performance Model',
    duration: '8 Weeks Intensive',
    format: 'Daily Execution Logs & Weekly Reflection Halaqahs',
    description:
      'High-level technical ability is useless without cognitive stamina and ruthless execution habits. This discipline teaches builders how to manage cognitive energy, log reality without self-deception, eliminate friction, and maintain relentless shipping cadences.',
    livingProof: {
      title: 'Flow7 Time Awareness Journal',
      description: 'The mobile-first reality tracking and cognitive regulation engine built by NIT7ER to track execution and eliminate friction.',
      link: 'https://flow7-two.vercel.app',
    },
    modules: [
      {
        title: 'The Reality Audit & Habit Telemetry',
        desc: 'Discarding wishful thinking in favor of raw execution data and time logs.',
        topics: ['The Flow7 Logging Protocol', 'Friction Points Identification', 'Energy Cycle Mapping', 'Self-Deception Elimination'],
      },
      {
        title: 'Deep Work Block Engineering',
        desc: 'Designing cognitive boundaries that protect high-leverage focus sessions.',
        topics: ['Focus Session Architecture', 'Context-Switching Cost Minimization', 'Cognitive Rest Intervals', 'Digital Distraction Firewalls'],
      },
      {
        title: 'Personal Operational Systems (Solo Builder OS)',
        desc: 'Building custom dashboards and automation that handle life and work logistics.',
        topics: ['Task Triage Matrices', 'Automated Workflow Pipelines', 'Project Staging Architecture', 'Energy-Based Task Scheduling'],
      },
      {
        title: 'Long-Arc Stamina & Output Consistency',
        desc: 'Maintaining disciplined development speed across multi-month project cycles without burnout.',
        topics: ['Pacing vs Sprinting', 'Reflection & Course Correction Cadences', 'Physical Alignment & Nutrition (Diet7)', 'Mental Endurance Protocols'],
      },
    ],
    outcomes: [
      'Master the Flow7 reality-tracking protocol for daily output measurement',
      'Consistently achieve 4+ hours of uninterrupted deep cognitive work daily',
      'Build personal operating infrastructure that automates administrative friction',
      'Develop sustained mental endurance for complex multi-week software builds',
    ],
  },
  {
    id: 'writing-thought-leadership',
    number: '03',
    title: 'Writing & Thought Leadership',
    subtitle: 'Technical Documentation, Product Storytelling & Clear Thinking',
    tagline: 'Clear writing is the highest form of structured thinking.',
    badge: 'Intellectual Discipline',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    shape: 'triangle',
    shapeColor: 'emerald',
    leadAnchor: 'The Architecture of Precise Prose',
    duration: '10 Weeks Intensive',
    format: 'Weekly Critiques & Published Essays',
    description:
      'Code is only half the battle. Elite creators, founders, and engineers distinguish themselves through crisp, unambiguous writing. Learn to author technical whitepapers, architectural decision records (ADRs), compelling product essays, and high-converting marketing copy.',
    livingProof: {
      title: 'OAUMods Campus Research Dossier & Technical Specs',
      description: '18 comprehensive research volumes and architectural specifications authoritatively mapping complex spatial systems.',
      link: 'https://github.com/Alqaasimee-jr2/OAUMods/tree/main/research',
    },
    modules: [
      {
        title: 'The Mechanics of Clear Prose',
        desc: 'Eliminating jargon, reducing sentence cognitive load, and structuring arguments.',
        topics: ['Sentence Deconstruction', 'Active Voice Dominance', 'Information Hierarchy', 'Rhythm & Reader Retention'],
      },
      {
        title: 'Technical Documentation & Architectural Specs',
        desc: 'Writing software documentation that engineers and clients actually read and respect.',
        topics: ['System Architecture Blueprints', 'API Documentation & OpenAPI Specs', 'RFC (Request for Comments) Authoring', 'Walkthroughs & Changelogs'],
      },
      {
        title: 'Product Storytelling & Narrative Engineering',
        desc: 'Framing complex software products as irresistible solutions to burning problems.',
        topics: ['Positioning Statements', 'Feature-to-Benefit Translation', 'Case Study Structuring', 'Founder Essay Writing'],
      },
      {
        title: 'High-Converting Copy & Public Communication',
        desc: 'Writing for landing pages, client proposals, pitch decks, and digital channels.',
        topics: ['Landing Page Headline Crafting', 'Microcopy & UX Writing', 'Proposal & Pitch Deck Architecture', 'Distribution Strategy'],
      },
    ],
    outcomes: [
      'Write technical documentation and architecture blueprints with executive clarity',
      'Author compelling case studies that convert readers into believers or clients',
      'Craft high-impact landing page copy that drives action and signups',
      'Articulate complex technical systems to non-technical stakeholders effortlessly',
    ],
  },
  {
    id: 'computer-education',
    number: '04',
    title: 'Computer Education & Digital Foundations',
    subtitle: 'Core Systems Literacy, Computational Thinking & EdTech Engineering',
    tagline: 'Demystifying the machine from fundamental silicon to interactive glass.',
    badge: 'Foundational Faculty',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    shape: 'circle',
    shapeColor: 'amber',
    leadAnchor: 'Computing from First Principles',
    duration: '12 Weeks Intensive',
    format: 'Laboratory Workshops & Smartboard Experiments',
    description:
      'A rigorous grounding in how computing actually works. From binary abstractions, data structures, and computer architecture to building classroom-ready interactive software tailored for smartboards and offline environments.',
    livingProof: {
      title: 'Lang Huey Smartboard Engine',
      description: 'Experimental 100% offline interactive French learning software designed for Nigerian smartboards and classrooms (NERDC curriculum).',
      link: 'https://www.youtube.com',
    },
    modules: [
      {
        title: 'First Principles: How Computers Think',
        desc: 'Data representation, memory models, binary logic, and CPU instruction cycles.',
        topics: ['Logic Gates & Boolean Algebra', 'Memory Hierarchy & Registers', 'Operating System Abstractions', 'Process & Thread Management'],
      },
      {
        title: 'Computational Thinking & Data Structures',
        desc: 'Approaching real-world challenges through algorithmic decomposition and patterns.',
        topics: ['Arrays, Hash Maps, Trees & Graphs', 'Algorithm Complexity & Big-O', 'Recursion & Dynamic Programming', 'State Machine Modeling'],
      },
      {
        title: 'Offline-First Systems for Emerging Markets',
        desc: 'Designing educational tools that perform flawlessly without internet connectivity.',
        topics: ['Local Storage Engines & IndexDB', 'PWA Caching & Service Workers', 'Data Synchronization on Reconnect', 'Resource-Constrained Optimization'],
      },
      {
        title: 'Interactive Display & Smartboard Engineering',
        desc: 'Building tactile, large-screen educational software for modern classrooms.',
        topics: ['Touch Gesture Handlers & Multi-Touch', 'Canvas & SVG Rendering for Big Screens', 'Gamified Pedagogy Interfaces', 'NERDC Curriculum Mapping'],
      },
    ],
    outcomes: [
      'Grasp computing from low-level fundamentals to high-level application code',
      'Think algorithmically to solve complex real-world data and logic challenges',
      'Build resilient offline-first software that runs in bandwidth-constrained environments',
      'Develop interactive classroom applications for smartboards and digital displays',
    ],
  },
];

export const LAB_PROJECTS: LabProject[] = [
  {
    id: 'flow7',
    title: 'Flow7',
    category: 'Cognitive Engine',
    tagline: 'Mobile-first time awareness journal & cognitive regulation layer',
    description:
      'A performance platform for builders and solo creators that tracks daily execution across key life areas, replaces to-do list guilt with action awareness, and generates weekly reflections.',
    impact: 'Daily execution logging with quantified focus metrics',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Edge', 'LocalStorage Sync'],
    liveUrl: 'https://flow7-two.vercel.app',
    badge: 'Live Production',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    shape: 'hexagon',
    shapeColor: 'gold',
  },
  {
    id: 'clasquera',
    title: 'Clasquera',
    category: 'EdTech & AI System',
    tagline: 'Lesson Accountability System for Private Schools',
    description:
      'A Flutter teacher app that records classroom sessions, dispatches audio to Firebase Cloud Functions for transcription, and analyzes instruction against the approved lesson plan using Gemini Pro.',
    impact: 'Ensures lesson fidelity and teaching compliance across school wings',
    techStack: ['Flutter', 'Dart', 'Firebase Functions', 'Google Gemini Pro', 'Next.js'],
    githubUrl: 'https://github.com/Alqaasimee-jr2/Clasquera-Landing-page',
    badge: 'Incubated Lab',
    badgeColor: 'bg-blue-100 text-[#12345B] border-blue-200',
    shape: 'square',
    shapeColor: 'navy',
  },
  {
    id: 'lang-huey',
    title: 'Lang Huey',
    category: 'EdTech Engine',
    tagline: '100% Offline French Software for Nigerian Smartboards',
    description:
      'Interactive, tactile French language educational software tailored for smart classrooms and interactive flat panels, aligned with the NERDC syllabus and optimized for zero-internet reliability.',
    impact: 'Deployed for classroom smartboard interaction in Nigerian schools',
    techStack: ['HTML5 Canvas', 'Vanilla JS', 'Offline PWA', 'Interactive Audio'],
    badge: 'Smartboard System',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    shape: 'triangle',
    shapeColor: 'emerald',
  },
  {
    id: 'oaumods',
    title: 'OAUMods',
    category: 'Campus Companion',
    tagline: 'Authoritative Digital Compass & Masterplan Navigator for OAU',
    description:
      'A comprehensive offline-first companion covering 15 university faculties, GPA simulation, physical clearance pipelines, transit tariffs, and interactive geospatial mapping of Arieh Sharon’s architectural masterplan.',
    impact: 'Navigational guide and academic utility for thousands of Great Ife students',
    techStack: ['Next.js 16', 'React 19', 'Leaflet GPS', 'Tailwind CSS v4', 'TypeScript'],
    githubUrl: 'https://github.com/Alqaasimee-jr2/OAUMods',
    badge: 'Live Production',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    shape: 'hexagon',
    shapeColor: 'blue',
  },
  {
    id: 'restaurante',
    title: 'Restaurante',
    category: 'Commercial Web',
    tagline: 'High-Conversion Hospitality Prototype & Reservation Interface',
    description:
      'A modern restaurant website prototype demonstrating responsive UI design, rich culinary presentation, dynamic menu filtering, and customer reservation flows.',
    impact: 'Proof of high-speed commercial client acquisition interfaces',
    techStack: ['JavaScript', 'HTML5', 'Modern CSS', 'Vercel Deployment'],
    liveUrl: 'https://restaurante-rose-gamma.vercel.app',
    badge: 'Live Production',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    shape: 'circle',
    shapeColor: 'slate',
  },
  {
    id: 'pr-guardian',
    title: 'PR Pre-Flight Guardian',
    category: 'Developer Tooling',
    tagline: 'Automated Pull Request Code Quality & Safety CLI',
    description:
      'CLI tool developed during the IBM Bob 2.0 Hackathon (Team junkieBob) providing proactive static code analysis, security pre-checks, and automated PR validation before merge.',
    impact: 'Prevents broken builds and insecure merges in collaborative software teams',
    techStack: ['Node.js', 'CLI Automation', 'Git Hooks', 'Static Analysis'],
    badge: 'Open Source',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    shape: 'square',
    shapeColor: 'amber',
  },
];

export const ENROLLMENT_STAGES = [
  {
    step: '01',
    title: 'Profile & Intent Review',
    desc: 'Submit your background, current projects, and primary faculty of interest through our application portal. We assess curiosity, discipline, and execution intent.',
  },
  {
    step: '02',
    title: 'Diagnostic Alignment Interview',
    desc: 'A 20-minute 1-on-1 diagnostic conversation to map your current baseline, identify friction points, and tailor your initial project trajectory.',
  },
  {
    step: '03',
    title: 'Studio Immersion & Sprint Cadence',
    desc: 'Join the cohort studio. Work on weekly sprint briefs, engage in code/writing reviews, and log your daily execution using the Flow7 protocol.',
  },
  {
    step: '04',
    title: 'Capstone Defense & Production Launch',
    desc: 'Ship your capstone project to a live URL, defend your technical/architectural decisions, and graduate into the NIT7ER alumni network.',
  },
];

export const FOUNDER_INFO = {
  name: 'Abdullah Qaasim-Falade',
  title: 'Founder & Director, NIT7ER Studio & Academy',
  location: 'Lagos, Nigeria',
  email: 'qaasimkids6@gmail.com',
  phone: '+2349019597944',
  whatsappUrl: 'https://wa.me/2349019597944?text=Hello%20NIT7ER%20Academy%2C%20I%20am%20interested%20in%20applying%20for%20a%20cohort.',
  github: 'https://github.com/Alqaasimee-jr2',
  linkedin: 'http://linkedin.com/in/abdullahqaasimf001',
  instagram: 'https://instagram.com/nit7er',
  studioUrl: 'https://nit7er.vercel.app',
};
