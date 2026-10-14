export interface Faculty {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  leadAnchor: string;
  duration: string;
  format: string;
  diagram: 'creative-tech' | 'cognitive-systems' | 'writing' | 'computer-education';
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
}

export const ACADEMY_METRICS = [
  { label: 'Project-Based Output', value: '100%', detail: 'Every track culminates in deployed software, operational systems, or published documentation' },
  { label: 'Core Faculties', value: '4', detail: 'Creative Engineering, Cognitive Architecture, Structured Prose, and Core Computing' },
  { label: 'Incubated Lab Systems', value: '6+', detail: 'Active software platforms engineered, deployed, and run by our studio' },
  { label: 'Production Standard', value: 'Zero Fluff', detail: 'No toy exercises, hypothetical exams, or unfinished tutorial code' },
];

export const FACULTIES: Faculty[] = [
  {
    id: 'creative-tech',
    number: '01',
    title: 'Creative Technology & Software Engineering',
    subtitle: 'Full-Stack Web Systems, Mobile Apps & AI Architectures',
    tagline: 'Architect and ship resilient, production-grade applications that stand up to real market demands.',
    badge: 'Faculty 01',
    leadAnchor: 'Modern Web, Flutter & Intelligent Systems',
    duration: '16 Weeks Intensive',
    format: 'Cohort Studio & Live Code Reviews',
    diagram: 'creative-tech',
    description:
      'Learn the engineering rigor needed to build scalable digital products from a blank terminal. We move beyond toy tutorials into modern Next.js 16 architectures, reactive state engines, cross-platform Flutter/Dart development, and production AI integrations.',
    livingProof: {
      title: 'Clasquera & Production Web Engines',
      description: 'Audio-based lesson accountability platform integrating Flutter recording apps with Gemini Pro verification via Firebase Cloud Functions.',
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
    tagline: 'Replace to-do list guilt with quantified daily execution awareness.',
    badge: 'Faculty 02',
    leadAnchor: 'The Flow7 Performance Model',
    duration: '8 Weeks Intensive',
    format: 'Daily Execution Logs & Weekly Systems Debriefs',
    diagram: 'cognitive-systems',
    description:
      'Raw talent is useless without stamina and disciplined execution habits. This discipline trains builders to manage cognitive energy, log reality without self-deception, eliminate operational drag, and maintain a steady shipping cadence.',
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
    tagline: 'Clear writing is the sharpest indicator of structured thinking.',
    badge: 'Faculty 03',
    leadAnchor: 'The Architecture of Precise Prose',
    duration: '10 Weeks Intensive',
    format: 'Weekly Critiques & Published Essays',
    diagram: 'writing',
    description:
      'Writing is a foundational engineering primitive. The most impactful founders and technologists distinguish themselves through crisp, unambiguous prose. Learn to write technical architecture specifications, clear whitepapers, persuasive case studies, and high-converting product narratives.',
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
    tagline: 'Understand computing from silicon logic gates to interactive user interfaces.',
    badge: 'Faculty 04',
    leadAnchor: 'Computing from First Principles',
    duration: '12 Weeks Intensive',
    format: 'Laboratory Workshops & Smartboard Experiments',
    diagram: 'computer-education',
    description:
      'A first-principles foundation in how computers actually work. Study binary abstractions, memory architectures, algorithms, and operating system kernels, then engineer tactile educational software built for smartboards and offline environments.',
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
      'A focus regulation engine that tracks daily output across essential life domains, replaces task-list anxiety with objective reality logs, and generates structured weekly debriefs.',
    impact: 'Daily execution logging with quantified focus metrics',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Edge', 'LocalStorage Sync'],
    liveUrl: 'https://flow7-two.vercel.app',
    badge: 'Live Production',
  },
  {
    id: 'clasquera',
    title: 'Clasquera',
    category: 'EdTech & AI System',
    tagline: 'Lesson Accountability System for Private Schools',
    description:
      'A mobile lesson verification platform for schools. Captures classroom audio via Flutter, transcribes and benchmarks instructional delivery against approved schemes of work using Gemini Pro via Firebase Cloud Functions.',
    impact: 'Ensures lesson fidelity and teaching compliance across school wings',
    techStack: ['Flutter', 'Dart', 'Firebase Functions', 'Google Gemini Pro', 'Next.js'],
    githubUrl: 'https://github.com/Alqaasimee-jr2/Clasquera-Landing-page',
    badge: 'Incubated Lab',
  },
  {
    id: 'lang-huey',
    title: 'Lang Huey',
    category: 'EdTech Engine',
    tagline: '100% Offline French Software for Nigerian Smartboards',
    description:
      'Tactile, offline-first French language educational software tailored for classrooms and interactive smartboards, aligned with the NERDC national curriculum.',
    impact: 'Deployed for classroom smartboard interaction in Nigerian schools',
    techStack: ['HTML5 Canvas', 'Vanilla JS', 'Offline PWA', 'Interactive Audio'],
    badge: 'Smartboard System',
  },
  {
    id: 'oaumods',
    title: 'OAUMods',
    category: 'Campus Companion',
    tagline: 'Authoritative Digital Compass & Masterplan Navigator for OAU',
    description:
      'An authoritative offline-first campus companion spanning 15 faculties, automated GPA projection, clearance workflows, and geospatial navigation across Arieh Sharon’s iconic architectural masterplan.',
    impact: 'Navigational guide and academic utility for thousands of Great Ife students',
    techStack: ['Next.js 16', 'React 19', 'Leaflet GPS', 'Tailwind CSS v4', 'TypeScript'],
    githubUrl: 'https://github.com/Alqaasimee-jr2/OAUMods',
    badge: 'Live Production',
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
  },
  {
    id: 'pr-guardian',
    title: 'PR Pre-Flight Guardian',
    category: 'Developer Tooling',
    tagline: 'Automated Pull Request Code Quality & Safety CLI',
    description:
      'A developer CLI tool built during the IBM Bob 2.0 Hackathon (Team junkieBob) providing proactive static code analysis, security pre-checks, and automated PR validation before merge.',
    impact: 'Prevents broken builds and insecure merges in collaborative software teams',
    techStack: ['Node.js', 'CLI Automation', 'Git Hooks', 'Static Analysis'],
    badge: 'Open Source',
  },
];

export const ENROLLMENT_STAGES = [
  {
    step: '01',
    title: 'Diagnostic Intake Review',
    desc: 'Declare your background, technical focus, and target capstone through our application portal. We evaluate clarity, discipline, and execution intent.',
  },
  {
    step: '02',
    title: 'Strategy & Baseline Session',
    desc: 'A focused 1-on-1 diagnostic review with the director to map your operational bottlenecks, audit habits, and calibrate your sprint trajectory.',
  },
  {
    step: '03',
    title: 'Studio Sprints & Reality Logging',
    desc: 'Build through structured sprint briefs, participate in rigorous weekly code and prose critiques, and log your output daily using the Flow7 protocol.',
  },
  {
    step: '04',
    title: 'Capstone Defense & Deployment',
    desc: 'Ship your production system to a live URL, defend your technical architecture before peers, and transition into the NIT7ER alumni network.',
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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  handle: string;
  quote: string;
  image: string;
  url?: string;
  signature?: string;
}

export const STUDIO_TEAM: TeamMember[] = [
  {
    id: 'abdullah-qaasim',
    name: 'Abdullah Qaasim-Falade',
    role: 'Creative Director & Founder',
    discipline: 'Systems Architecture & Creative Direction',
    handle: '@abdullah.qaasim',
    quote: 'Every brand carries a voice. I just make sure it speaks clearly.',
    image: '/team/team-abdullah-qaasim.png',
    url: 'https://github.com/Alqaasimee-jr2',
    signature: 'A.Q.',
  },
  {
    id: 'yaasir-olajumoke',
    name: 'Yaasir Olajumoke',
    role: 'Visual Design Lead',
    discipline: 'Visual Identity, Form & Spatial Aesthetics',
    handle: '@yaasir.dev',
    quote: 'I don’t design visuals. I translate emotion into form.',
    image: '/team/team-yaasir-olajumoke.png',
    url: 'https://instagram.com/nit7er',
    signature: 'Bolaji',
  },
  {
    id: 'the-g3neral',
    name: 'The G3neral (Adeola Olamilekan)',
    role: 'User Experience Lead',
    discipline: 'User Ergonomics, Experience & Interaction Mechanics',
    handle: '@ad3ola_olamil3kan_',
    quote: 'Design is how a brand feels — not just how it looks.',
    image: '/team/team-the-g3neral.png',
    url: 'https://g3neralola.carrd.co',
    signature: 'G3N',
  },
];

