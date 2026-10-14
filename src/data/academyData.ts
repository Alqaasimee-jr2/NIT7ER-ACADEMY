export interface CourseModule {
  number?: string;
  title: string;
  desc: string;
  topics: string[];
}

export interface CapstoneProject {
  title: string;
  description: string;
  deliverable: string;
}

export interface Program {
  id: string;
  code: string;
  title: string;
  tagline: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  format: string;
  targetAudience: string;
  description: string;
  modules: CourseModule[];
  learningOutcomes: string[];
  capstoneProject: CapstoneProject;
}

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
  programs: Program[];
  modules: CourseModule[];
  outcomes: string[];
  caseStudy?: {
    title: string;
    project: string;
    description: string;
    link?: string;
  };
  livingProof: {
    title: string;
    description: string;
    link?: string;
  };
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
  { label: 'Project-Based Output', value: '100%', detail: 'Every track culminates in a deployed software system, operating protocol, or published documentation dossier' },
  { label: 'Core Faculties', value: '4', detail: 'Creative Engineering, Cognitive Architecture, Professional Prose, and Computer Foundations' },
  { label: 'Specialized Programs', value: '12', detail: 'Industry-standard curricula with structured sprint modules, hands-on labs, and verified capstones' },
  { label: 'Production Standard', value: 'Zero Fluff', detail: 'Pure discipline fundamentals and rigorous execution without superficial tutorials or toy exercises' },
];

export const FACULTIES: Faculty[] = [
  {
    id: 'creative-tech',
    number: '01',
    title: 'Creative Technology & Software Engineering',
    subtitle: 'Full-Stack Web Systems, Mobile Apps & Applied AI Architecture',
    tagline: 'Architect and ship resilient, production-grade applications that stand up to real market demands.',
    badge: 'Faculty 01',
    leadAnchor: 'Modern Web, Flutter & Intelligent Systems',
    duration: '12–16 Weeks per Track',
    format: 'Cohort Studio & Live Code Reviews',
    diagram: 'creative-tech',
    description:
      'Learn the engineering rigor needed to build scalable digital products from a blank terminal. We move beyond toy tutorials into modern Next.js 16 architectures, reactive state engines, cross-platform Flutter/Dart engineering, and production AI integration pipelines.',
    caseStudy: {
      title: 'Clasquera & Production Web Engines',
      project: 'Clasquera',
      description: 'Audio-based lesson accountability platform integrating Flutter recording apps with Gemini Pro verification via Firebase Cloud Functions.',
      link: 'https://github.com/Alqaasimee-jr2/Clasquera-Landing-page',
    },
    livingProof: {
      title: 'Clasquera & Production Web Engines',
      description: 'Audio-based lesson accountability platform integrating Flutter recording apps with Gemini Pro verification via Firebase Cloud Functions.',
      link: 'https://github.com/Alqaasimee-jr2/Clasquera-Landing-page',
    },
    programs: [
      {
        id: 'full-stack-web',
        code: 'SWE-101',
        title: 'Full-Stack Web Systems & Cloud Architecture',
        tagline: 'Build modern, performant web platforms from database schema to global edge deployment.',
        duration: '16 Weeks',
        level: 'Intermediate',
        format: 'Live Studio & Collaborative Code Sprints',
        targetAudience: 'Aspiring software engineers, frontend developers transitioning to full-stack, and product builders.',
        description:
          'A comprehensive engineering program covering modern React 19 paradigms, Next.js 16 App Router architecture, serverless backend microservices, relational data modeling with PostgreSQL, and cloud edge deployment.',
        modules: [
          {
            number: '01',
            title: 'Modern Frontend Architecture & Component Engines',
            desc: 'Server components, streaming layouts, client hydration boundaries, and design token integration.',
            topics: ['React 19 Server Actions', 'Next.js 16 App Router', 'Tailwind CSS v4 Design Tokens', 'TypeScript Strict Mode'],
          },
          {
            number: '02',
            title: 'Resilient API Engineering & Backend Services',
            desc: 'Architecting secure route handlers, RESTful microservices, and asynchronous background jobs.',
            topics: ['Edge Route Handlers', 'Authentication (JWT & OAuth)', 'Rate Limiting & Middleware', 'Webhook Ingestion'],
          },
          {
            number: '03',
            title: 'Relational Data Modeling & Storage Layers',
            desc: 'Designing performant relational database schemas, transactions, and caching layers.',
            topics: ['PostgreSQL & Prisma/Drizzle', 'Database Migrations & Indexes', 'Redis In-Memory Caching', 'Blob & Asset Storage'],
          },
          {
            number: '04',
            title: 'Production Deployment, CI/CD & Telemetry',
            desc: 'Hardening web applications for commercial traffic with automated testing and continuous monitoring.',
            topics: ['Vercel Edge & Cloudflare Workers', 'GitHub Actions CI/CD', 'Core Web Vitals Telemetry', 'Error Boundary Logging'],
          },
        ],
        learningOutcomes: [
          'Architect and deploy full-stack web platforms capable of handling real concurrent users',
          'Implement secure, type-safe APIs with automated schema validation and role-based access',
          'Design optimized PostgreSQL schemas with efficient indexes and ACID transactional safety',
          'Configure automated CI/CD deployment pipelines with zero-downtime releases and observability',
        ],
        capstoneProject: {
          title: 'Commercial Multi-Tenant SaaS Platform',
          description: 'A fully functional software-as-a-service application complete with authentication, subscription billing, multi-tenant database isolation, dynamic dashboard analytics, and live edge deployment.',
          deliverable: 'Live Deployed URL & Public GitHub Repository with complete README and Architecture Decision Records (ADRs)',
        },
      },
      {
        id: 'mobile-app-engineering',
        code: 'SWE-102',
        title: 'Cross-Platform Mobile Application Engineering',
        tagline: 'Engineer high-performance iOS and Android applications with clean architecture.',
        duration: '14 Weeks',
        level: 'Intermediate',
        format: 'Project Workshops & Device Emulation Labs',
        targetAudience: 'Software builders wanting to ship fluid, native-feeling mobile applications across iOS and Android.',
        description:
          'Master cross-platform mobile development using Flutter and Dart. Build responsive, tactile mobile user interfaces, implement robust reactive state management, interface directly with native hardware sensors, and architect offline-first data stores.',
        modules: [
          {
            number: '01',
            title: 'Flutter UI Foundations & Declarative Layouts',
            desc: 'Composing custom widget trees, animations, theme systems, and responsive screen adaptation.',
            topics: ['Flutter Widget Tree Lifecycle', 'Material 3 & Cupertino Theming', 'Custom Painters & Gestures', 'Adaptive Screen Ergonomics'],
          },
          {
            number: '02',
            title: 'Reactive State Management & Clean Architecture',
            desc: 'Decoupling presentation, business logic, and repository data sources.',
            topics: ['Riverpod & BLoC Patterns', 'Repository & Data Source Design', 'Immutable State Models', 'Dependency Injection'],
          },
          {
            number: '03',
            title: 'Hardware Interop & Device APIs',
            desc: 'Harnessing device capabilities including camera, microphone, geolocation, and background sync.',
            topics: ['Audio & Camera Hardware Interop', 'Geolocation & Permissions', 'Local Notifications Engine', 'Background Fetch'],
          },
          {
            number: '04',
            title: 'Offline-First Architecture & Release Pipelines',
            desc: 'Structuring persistent local databases, background synchronization, and app store bundling.',
            topics: ['SQLite & Drift ORM', 'Optimistic UI Updates', 'Data Conflict Resolution', 'Fastlane & App Store Distribution'],
          },
        ],
        learningOutcomes: [
          'Develop fluid 60fps cross-platform mobile applications for iOS and Android from a single codebase',
          'Implement clean architecture with maintainable state separation and repository abstraction',
          'Integrate native device sensors, audio processing, and camera APIs safely across permissions',
          'Build resilient offline-first mobile applications with local database persistence and background sync',
        ],
        capstoneProject: {
          title: 'Offline-First Field Utility Application',
          description: 'A native-grade mobile utility application designed for field data collection, audio recording, offline caching with SQLite, and automated remote synchronization when connectivity resumes.',
          deliverable: 'Installable APK / TestFlight release and documented source code with widget test coverage',
        },
      },
      {
        id: 'applied-ai-systems',
        code: 'SWE-103',
        title: 'Applied AI & Intelligent Systems Integration',
        tagline: 'Integrate foundation models, structured agentic loops, and semantic search into modern software.',
        duration: '12 Weeks',
        level: 'Advanced',
        format: 'Intensive Lab & Model Evaluation Sprints',
        targetAudience: 'Developers and engineers seeking to leverage AI primitives for deterministic, production software products.',
        description:
          'Go beyond shallow chat prompts. Learn to integrate state-of-the-art multimodal AI models into production software. Master structured JSON outputs, function calling, vector embeddings, retrieval-augmented generation (RAG), and agentic workflows.',
        modules: [
          {
            number: '01',
            title: 'Foundation Models & Multimodal Inference',
            desc: 'Understanding tokenization, context windows, model parameters, and multimodal audio/vision pipelines.',
            topics: ['LLM Architectures & Context Windows', 'Multimodal Ingestion (Audio & Vision)', 'Prompt Engineering & System Directives', 'API Optimization & Latency'],
          },
          {
            number: '02',
            title: 'Structured Output Generation & Function Calling',
            desc: 'Compelling foundation models to produce deterministic, schema-validated JSON data structures.',
            topics: ['JSON Schema & Zod/Pydantic Parsing', 'Function Calling & Tool Definition', 'Defensive Error Handling', 'Deterministic Output Guarantees'],
          },
          {
            number: '03',
            title: 'Retrieval-Augmented Generation (RAG) & Vector Stores',
            desc: 'Building intelligent search systems over proprietary documentation and databases.',
            topics: ['Vector Embeddings Generation', 'Semantic Chunking Strategies', 'Vector Databases & Similarity Search', 'Re-Ranking & Hybrid Search'],
          },
          {
            number: '04',
            title: 'Autonomous Agents & Production Observability',
            desc: 'Engineering multi-step reasoning agents with tool usage, memory buffers, and cost telemetry.',
            topics: ['Agentic Loops & Task Planning', 'Short-Term & Long-Term Memory', 'Cost & Token Telemetry Monitoring', 'Safety Guardrails & Evals'],
          },
        ],
        learningOutcomes: [
          'Integrate leading multimodal foundation models into commercial web and mobile applications',
          'Enforce strict JSON schema guarantees from generative models for automated backend pipelines',
          'Design and deploy production-grade RAG systems with semantic chunking and vector indexing',
          'Build autonomous agent workflows with custom tool execution, audit logs, and cost controls',
        ],
        capstoneProject: {
          title: 'Enterprise AI Knowledge & Action Engine',
          description: 'An intelligent systems service that ingests corporate documents, builds vector indexes, retrieves contextual evidence with citations, and executes automated multi-step operations via validated function calling.',
          deliverable: 'Deployed AI Service with benchmark evaluation report and interactive demo interface',
        },
      },
    ],
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
    title: 'Cognitive Performance & Mind Architecture',
    subtitle: 'Attention Economics, Deep Work Habits & Personal Operating Infrastructure',
    tagline: 'Replace to-do list guilt and wishful thinking with quantified daily execution awareness.',
    badge: 'Faculty 02',
    leadAnchor: 'The Science of Sustained High-Output Focus',
    duration: '8 Weeks per Track',
    format: 'Daily Execution Telemetry & Weekly Systems Debriefs',
    diagram: 'cognitive-systems',
    description:
      'Raw talent is useless without stamina and disciplined execution habits. This discipline trains builders to manage cognitive energy, log reality without self-deception, eliminate operational drag, and maintain a steady shipping cadence.',
    caseStudy: {
      title: 'Flow7 Time Awareness Journal',
      project: 'Flow7',
      description: 'The mobile-first reality tracking and cognitive regulation engine built by NIT7ER to track execution and eliminate friction.',
      link: 'https://flow7-two.vercel.app',
    },
    livingProof: {
      title: 'Flow7 Time Awareness Journal',
      description: 'The mobile-first reality tracking and cognitive regulation engine built by NIT7ER to track execution and eliminate friction.',
      link: 'https://flow7-two.vercel.app',
    },
    programs: [
      {
        id: 'deep-work-attention',
        code: 'COG-201',
        title: 'Deep Work, Attention Economics & Focus Engineering',
        tagline: 'Master the neurobiology of focus to reliably sustain 4+ hours of daily intellectual output.',
        duration: '8 Weeks',
        level: 'All Levels',
        format: 'Personal Audits & Structured Focus Sprints',
        targetAudience: 'Software engineers, writers, founders, and knowledge workers struggling with cognitive fragmentation and digital distraction.',
        description:
          'Attention is the scarcest cognitive resource in modern knowledge work. Study the neurobiology of attention, calculate the real costs of context-switching, engineer distraction-free environments, and implement structured deep-focus sprint protocols.',
        modules: [
          {
            number: '01',
            title: 'Attention Economics & Cognitive Load Theory',
            desc: 'Analyzing dopamine baselines, continuous partial attention, and the neurochemistry of deep focus.',
            topics: ['Dopamine Baseline Regulation', 'Context-Switching Switching Tax', 'Working Memory Constraints', 'Attention Residue Mitigation'],
          },
          {
            number: '02',
            title: 'Focus Sprint Architecture & Session Design',
            desc: 'Designing 90-minute ultradian rhythm sprints with structured pre-flight rituals and clean exit states.',
            topics: ['90-Minute Focus Sprint Cycles', 'Pre-Session Friction Elimination', 'Cognitive Warmup Protocols', 'Intentional Rest Intervals'],
          },
          {
            number: '03',
            title: 'Environmental & Digital Friction Firewalls',
            desc: 'Designing physical and digital boundaries that make distraction difficult and deep work effortless.',
            topics: ['Notification Kill Switches', 'Hardware Device Segregation', 'Asynchronous Communication Guardrails', 'Workspace Ergonomics'],
          },
          {
            number: '04',
            title: 'Physical Alignment & Mental Endurance',
            desc: 'Aligning sleep architecture, circadian cycles, and physical energy to support sustained cognitive stamina.',
            topics: ['Circadian Cycle Synchronization', 'Nutrition & Brain Fog Prevention', 'Active Physical Recovery', 'Burnout Prevention Protocols'],
          },
        ],
        learningOutcomes: [
          'Eliminate chronic digital distraction and establish 4+ hours of daily uninterrupted deep work',
          'Deploy systematic pre-flight sprint rituals that induce focused mental flow states on demand',
          'Design an inviolable digital and physical environment shielded from attention theft',
          'Build long-term intellectual stamina without cognitive exhaustion or creative burnout',
        ],
        capstoneProject: {
          title: 'Personal Focus Architecture & 21-Day Execution Log',
          description: 'A comprehensive focus system blueprint including workspace rules, notification firewalls, daily sprint schedules, and an audited 21-day telemetry log tracking focus hours and distraction friction.',
          deliverable: 'Audited 21-Day Focus Telemetry Dossier with retrospective performance analysis',
        },
      },
      {
        id: 'personal-operating-systems',
        code: 'COG-202',
        title: 'Personal Operating Systems & Execution Telemetry',
        tagline: 'Replace wishful thinking with objective reality logging and automated personal infrastructure.',
        duration: '8 Weeks',
        level: 'All Levels',
        format: 'Systems Building & Weekly Operational Debriefs',
        targetAudience: 'Solo founders, independent contractors, and leaders seeking systematic order in their daily logistics and output.',
        description:
          'Build your personal operational infrastructure. Move beyond chaotic task lists to objective reality tracking, energy-based task scheduling, root-cause bottleneck diagnostics, and automated personal dashboards.',
        modules: [
          {
            number: '01',
            title: 'The Reality Audit & Habit Telemetry',
            desc: 'Discarding wishful thinking in favor of raw execution data, time auditing, and friction diagnostics.',
            topics: ['Reality vs Plan Auditing', 'Friction Points Identification', 'Energy Cycle Mapping', 'Self-Deception Elimination'],
          },
          {
            number: '02',
            title: 'Task Triage & Cognitive Energy Mapping',
            desc: 'Classifying tasks by leverage and matching high-friction demands to peak energy windows.',
            topics: ['Leverage vs Shallow Work Matrix', 'Energy-Based Task Scheduling', 'Project Staging Architecture', 'Daily Inviolable Priority'],
          },
          {
            number: '03',
            title: 'Weekly Retrospectives & Compounding Velocity',
            desc: 'Structuring weekly operational debriefs to evaluate progress, course-correct, and compound velocity.',
            topics: ['The Weekly Debrief Cadence', 'Root-Cause Bottleneck Analysis', 'Pacing vs Unsustainable Sprinting', 'Course-Correction Protocols'],
          },
          {
            number: '04',
            title: 'Personal Dashboard & Workflow Automation',
            desc: 'Building custom dashboards and automations that handle logistical friction and task routing.',
            topics: ['Personal Builder OS Architecture', 'Automated Daily Check-ins', 'Knowledge & Resource Vaults', 'Review Cadence Reminders'],
          },
        ],
        learningOutcomes: [
          'Track daily output with objective metrics, eliminating ungrounded wishful thinking',
          'Allocate high-leverage intellectual work strictly to peak biological energy windows',
          'Conduct weekly structured debriefs that diagnose operational bottlenecks and compound velocity',
          'Build and deploy a functional personal operating system for daily execution and project staging',
        ],
        capstoneProject: {
          title: 'Deployed Solo Builder OS & 30-Day Operational Audit',
          description: 'A customized, operational personal dashboard integrating daily reality tracking, high-leverage task triage, weekly retrospective logging, and project velocity metrics.',
          deliverable: 'Live Personal OS Dashboard with 30-day verified execution telemetry and retrospective report',
        },
      },
    ],
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
    title: 'Professional Writing & Thought Leadership',
    subtitle: 'Technical Architecture Specs, Persuasive Essays & High-Conversion Copy',
    tagline: 'Clear writing is the sharpest indicator of structured thinking.',
    badge: 'Faculty 03',
    leadAnchor: 'The Architecture of Precise Prose',
    duration: '8–10 Weeks per Track',
    format: 'Weekly Peer Critiques & Published Portfolios',
    diagram: 'writing',
    description:
      'Writing is a foundational engineering primitive. The most impactful founders and technologists distinguish themselves through crisp, unambiguous prose. Learn to write technical architecture specifications, clear whitepapers, persuasive case studies, and high-converting product narratives.',
    caseStudy: {
      title: 'OAUMods Campus Research Dossier & Technical Specs',
      project: 'OAUMods Research',
      description: '18 comprehensive research volumes and architectural specifications authoritatively mapping complex spatial systems.',
      link: 'https://github.com/Alqaasimee-jr2/OAUMods/tree/main/research',
    },
    livingProof: {
      title: 'OAUMods Campus Research Dossier & Technical Specs',
      description: '18 comprehensive research volumes and architectural specifications authoritatively mapping complex spatial systems.',
      link: 'https://github.com/Alqaasimee-jr2/OAUMods/tree/main/research',
    },
    programs: [
      {
        id: 'technical-writing-architecture',
        code: 'WRT-301',
        title: 'Technical Writing & System Architecture Documentation',
        tagline: 'Author software documentation, architecture blueprints, and engineering specs that command authority.',
        duration: '10 Weeks',
        level: 'All Levels',
        format: 'Document Workshops & Rigorous Red-Line Critiques',
        targetAudience: 'Software engineers, technical leads, architects, and founders who must communicate complex technical concepts clearly.',
        description:
          'Software engineering fails without clarity. Learn to write authoritative system documentation: Architecture Decision Records (ADRs), RFCs (Request for Comments), clear OpenAPI specifications, incident postmortems, and developer quickstarts.',
        modules: [
          {
            number: '01',
            title: 'The Mechanics of Precise Prose',
            desc: 'Eliminating jargon, reducing cognitive burden, and structuring technical arguments.',
            topics: ['Active Voice & Sentence Deconstruction', 'Information Hierarchy', 'Precise Terminology Rules', 'Cognitive Load Reduction'],
          },
          {
            number: '02',
            title: 'Architecture Decision Records (ADRs) & RFCs',
            desc: 'Authoring RFCs and design documents that persuade engineering teams and align stakeholders.',
            topics: ['ADR Anatomy & Tradeoff Matrices', 'RFC Authoring & Consensus Building', 'Non-Functional Requirements Specs', 'Edge-Case Documentation'],
          },
          {
            number: '03',
            title: 'API Reference & Developer Onboarding',
            desc: 'Writing developer documentation, quickstarts, and schema catalogs that engineers love using.',
            topics: ['OpenAPI & Interactive Documentation', 'Quickstart Tutorial Engineering', 'Error Code Catalogs & Troubleshooting', 'Changelogs & Semantic Versioning'],
          },
          {
            number: '04',
            title: 'Incident Postmortems & System Runbooks',
            desc: 'Documenting production incidents blamelessly with root-cause timelines and mitigation strategies.',
            topics: ['Blameless Postmortem Frameworks', 'Timeline & Root-Cause Analysis (5 Whys)', 'Operational Runbooks & SOPs', 'Disaster Recovery Documentation'],
          },
        ],
        learningOutcomes: [
          'Author concise, authoritative Architecture Decision Records (ADRs) that justify design choices',
          'Write technical RFCs that build engineering consensus across distributed teams',
          'Produce clear, comprehensive API references and developer onboarding guides',
          'Document complex cloud and software architectures without ambiguity or redundant jargon',
        ],
        capstoneProject: {
          title: 'Comprehensive Software Architecture & RFC Dossier',
          description: 'A complete, published technical documentation suite for a production system, including 3 Architecture Decision Records (ADRs), an engineering RFC for a major feature, an interactive API spec, and an incident runbook.',
          deliverable: 'Published Documentation Site (e.g. Mintlify, Docusaurus, or GitBook) with full review artifact',
        },
      },
      {
        id: 'essay-craft-thought-leadership',
        code: 'WRT-302',
        title: 'Essay Craft, Rhetoric & Editorial Thought Leadership',
        tagline: 'Structure compelling long-form essays, intellectual arguments, and domain-defining perspectives.',
        duration: '10 Weeks',
        level: 'All Levels',
        format: 'Editorial Seminars & Public Publishing Sprints',
        targetAudience: 'Thinkers, researchers, founders, and domain experts seeking to build an enduring public archive of ideas.',
        description:
          'Move from passive consumer to authoritative public intellectual. Learn classical rhetoric, dialectical argumentation, synthesis of dense research, narrative rhythm, and essay architecture for digital publication.',
        modules: [
          {
            number: '01',
            title: 'Classical Rhetoric & Thesis Architecture',
            desc: 'Formulating rigorous theses, structuring persuasive arguments, and addressing counter-arguments.',
            topics: ['The Aristotelian Appeals (Logos/Ethos/Pathos)', 'Thesis Formulation & Scope', 'Dialectical Argumentation', 'Steel-Manning Counter-Arguments'],
          },
          {
            number: '02',
            title: 'Narrative Voice & Intellectual Style',
            desc: 'Developing an unmistakable, authoritative perspective with vivid cadence and rhythm.',
            topics: ['Cadence, Metaphor & Sentence Rhythm', 'Personal Voice vs Academic Rigor', 'Hook Crafting & Opening Frames', 'Memorable Phrasing & Aphorisms'],
          },
          {
            number: '03',
            title: 'Research Synthesis & Investigative Whitepapers',
            desc: 'Synthesizing dense primary literature and empirical data into lucid, accessible prose.',
            topics: ['Primary Source Evaluation', 'Data Storytelling & Evidence Framing', 'Citation & Intellectual Integrity', 'Whitepaper Architecture'],
          },
          {
            number: '04',
            title: 'Editorial Publication & Distribution Strategy',
            desc: 'Polishing essays for publication and building a compounding digital archive of domain ideas.',
            topics: ['Substack & Long-Form Publishing', 'Editorial Self-Editing Checklists', 'Headline & Abstract Optimization', 'Distribution & Public Discussion'],
          },
        ],
        learningOutcomes: [
          'Formulate and defend compelling intellectual theses with rigorous evidence and dialectic structure',
          'Write captivating long-form essays that retain reader attention from opening hook to conclusion',
          'Translate dense domain research and data into lucid, engaging public thought leadership',
          'Establish a persistent, authoritative public body of published work that builds professional credibility',
        ],
        capstoneProject: {
          title: 'Published 3,500-Word Thesis Essay & Thought Leadership Archive',
          description: 'A deeply researched, beautifully crafted long-form essay exploring a fundamental problem in technology, education, or philosophy, edited through peer red-lines and published to a public platform.',
          deliverable: 'Published Long-Form Essay with bibliography and accompanying executive summary abstract',
        },
      },
      {
        id: 'high-conversion-copywriting',
        code: 'WRT-303',
        title: 'High-Conversion Copywriting & Brand Messaging',
        tagline: 'Craft compelling value propositions, landing page copy, and commercial narratives that compel action.',
        duration: '8 Weeks',
        level: 'All Levels',
        format: 'Creative Studio & Conversion Teardowns',
        targetAudience: 'Founders, marketers, product designers, and creators who need words that convert visitors into active customers.',
        description:
          'Learn the behavioral psychology and linguistic architecture behind words that sell. Master value proposition articulation, landing page narrative hierarchy, product microcopy, and persuasive pitch presentations.',
        modules: [
          {
            number: '01',
            title: 'Customer Psychology & Value Proposition Design',
            desc: 'Unearthing acute customer pain points and framing solutions in irresistible terms.',
            topics: ['Jobs-To-Be-Done (JTBD) Messaging', 'Pain Point vs Desired State Dynamics', 'Unique Value Proposition Formulas', 'Competitive Positioning Angles'],
          },
          {
            number: '02',
            title: 'Landing Page Copy Architecture',
            desc: 'Structuring above-the-fold headers, social proof sections, objection counters, and calls to action.',
            topics: ['Headline Formulas & Power Hooks', 'Feature-to-Benefit Translation', 'Objection Inoculation & FAQs', 'Call-to-Action (CTA) Psychology'],
          },
          {
            number: '03',
            title: 'UX Writing & Product Microcopy',
            desc: 'Designing crisp microcopy for buttons, empty states, error messages, and user onboarding.',
            topics: ['Form Helper Text & Microcopy', 'Error State Remediation', 'Onboarding Flow Dialogue', 'Clarity over Cleverness'],
          },
          {
            number: '04',
            title: 'Commercial Proposals & Pitch Deck Storytelling',
            desc: 'Writing high-stakes proposals and investment decks that secure contracts and funding.',
            topics: ['The Narrative Arc of a Pitch Deck', 'Commercial Proposal Architecture', 'Executive Summaries that Close', 'Pricing Presentation Framing'],
          },
        ],
        learningOutcomes: [
          'Author high-converting landing page copy that clearly communicates value and drives conversions',
          'Translate complex software features into tangible, emotion-driven customer benefits',
          'Write concise, user-friendly UI microcopy that reduces interface friction and drop-off',
          'Draft executive-grade pitch decks and commercial client proposals with undeniable clarity',
        ],
        capstoneProject: {
          title: 'Complete Commercial Messaging & Launch Copy Blueprint',
          description: 'A comprehensive brand and conversion copywriting package for a real product: landing page copy (hero, features, social proof, CTA), product onboarding microcopy, and a 10-slide executive pitch deck.',
          deliverable: 'Commercial Copy Deck & Figma/HTML Landing Page Prototype showcasing live copy implementation',
        },
      },
    ],
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
    subtitle: 'Hardware Anatomy, Operating Systems, Office Productivity & Cyber Hygiene',
    tagline: 'Understand computing from physical hardware components to everyday digital productivity and security.',
    badge: 'Faculty 04',
    leadAnchor: 'Comprehensive Computing Foundations from First Principles',
    duration: '8–12 Weeks per Track',
    format: 'Laboratory Workshops & Hands-on Workstation Sprints',
    diagram: 'computer-education',
    description:
      'A true, grounded education in computing. Learn how computers actually work from the physical hardware (motherboard, CPU, memory, storage, peripherals) to operating system navigation (Windows, macOS, Linux), file management, command-line terminal essentials, modern productivity suites (Word, Excel, PowerPoint), internet safety, and computational problem-solving.',
    caseStudy: {
      title: 'Lang Huey Educational Engine',
      project: 'Lang Huey',
      description: 'Experimental offline educational software engineered to teach foundational curricula in bandwidth-constrained classroom environments.',
      link: 'https://youtube.com',
    },
    livingProof: {
      title: 'Lang Huey Educational Engine',
      description: 'Experimental offline educational software engineered to teach foundational curricula in bandwidth-constrained classroom environments.',
      link: 'https://youtube.com',
    },
    programs: [
      {
        id: 'computer-fundamentals-os',
        code: 'CMP-401',
        title: 'Computer Fundamentals & Operating System Mastery',
        tagline: 'Understand computing from physical hardware components to operating system navigation and terminal basics.',
        duration: '12 Weeks',
        level: 'Beginner',
        format: 'Hands-on Hardware Labs & Workstation Sprints',
        targetAudience: 'Absolute beginners, students, career switchers, and anyone seeking complete mastery of modern personal computers.',
        description:
          'Demystify the computer. Learn the physical anatomy of computer hardware (CPU, RAM, Motherboard, Storage drives, Power supply, and I/O devices). Gain confident fluency across modern operating systems (Windows, macOS, and Linux), understand file hierarchies, master storage navigation, and learn foundational command line terminal commands.',
        modules: [
          {
            number: '01',
            title: 'Hardware Anatomy & System Components',
            desc: 'Dissecting the computer: how physical parts connect, process data, and communicate.',
            topics: ['Motherboard, CPU & Socket Architecture', 'RAM vs Storage (SSD NVMe vs HDD)', 'GPU, Power Supply & Thermal Cooling', 'Input/Output Peripherals & Ports (USB, HDMI, DisplayPort)'],
          },
          {
            number: '02',
            title: 'Operating System Architecture & Navigation',
            desc: 'Mastering the core interface, settings, and administration across Windows, macOS, and Linux.',
            topics: ['Windows 11 Administration & Shortcuts', 'macOS System Settings & Finder', 'Linux Desktop (Ubuntu/Debian) Basics', 'Device Drivers & Hardware Configuration'],
          },
          {
            number: '03',
            title: 'File Systems, Storage & Directory Management',
            desc: 'Organizing digital workspaces with hierarchical folders, file extensions, and backup structures.',
            topics: ['Hierarchical Directory Trees & Paths', 'File Extensions, Associations & Formats', 'Compression (.zip, .tar.gz) & Archival', 'External Storage & Partitioning Basics'],
          },
          {
            number: '04',
            title: 'Command Line & Terminal Foundations',
            desc: 'Navigating and managing computer systems directly through PowerShell and Bash terminal prompts.',
            topics: ['Terminal Basics (cd, ls, dir, mkdir, rm)', 'File Permissions & Elevated Administrator Privileges', 'Environment Variables & System PATH', 'Simple Batch & Bash Automation Scripts'],
          },
        ],
        learningOutcomes: [
          'Identify, inspect, and troubleshoot physical computer hardware components with complete confidence',
          'Fluently navigate, configure, and maintain Windows, macOS, and Linux operating systems',
          'Maintain clean, organized file directory structures with automated backups and versioning habits',
          'Use the command line terminal comfortably to navigate directories and perform batch file operations',
        ],
        capstoneProject: {
          title: 'Workstation Setup, Maintenance & CLI Automation Project',
          description: 'A complete hands-on project configuring a workstation from scratch: verifying hardware specifications, setting up user environments and permissions, configuring organized directory hierarchies, and writing a terminal script that performs automated file housekeeping.',
          deliverable: 'Documented Workstation Audit Report with functional automation script and demonstration video',
        },
      },
      {
        id: 'productivity-suites-cloud',
        code: 'CMP-402',
        title: 'Modern Productivity Suites & Cloud Workflows',
        tagline: 'Master professional document authoring, spreadsheet modeling, slide presentations, and cloud collaboration.',
        duration: '10 Weeks',
        level: 'Beginner',
        format: 'Hands-on Business Simulation & Office Labs',
        targetAudience: 'Students, administrative professionals, founders, and knowledge workers who want to produce elite-level documents, spreadsheets, and presentations.',
        description:
          'Become exceptionally productive with industry-standard productivity tools. Master Microsoft Word and Google Docs for structured institutional documents, harness Microsoft Excel and Google Sheets for data modeling and formulas, create polished presentations in PowerPoint, and manage cloud workspaces.',
        modules: [
          {
            number: '01',
            title: 'Advanced Document Engineering (Word & Docs)',
            desc: 'Formatting institutional reports, automated tables of contents, citations, and typography.',
            topics: ['Styles & Paragraph Formatting Hierarchies', 'Automated Tables of Contents & Footnotes', 'Multi-Column Layouts & Table Formatting', 'Header/Footer Pagination & Section Breaks'],
          },
          {
            number: '02',
            title: 'Spreadsheet Modeling & Data Analysis (Excel & Sheets)',
            desc: 'Formulas, dynamic functions, data sorting, Pivot Tables, and visual chart dashboards.',
            topics: ['Core Formulas (SUM, AVERAGE, COUNTIF, IF)', 'Lookup Functions (XLOOKUP, VLOOKUP, INDEX/MATCH)', 'Pivot Tables & Dynamic Aggregations', 'Conditional Formatting & Chart Dashboards'],
          },
          {
            number: '03',
            title: 'Visual Presentation Design (PowerPoint & Slides)',
            desc: 'Structuring compelling business presentations with clean typography, contrast, and layout rules.',
            topics: ['Slide Master Templates & Layout Design', 'Information Density & Visual Hierarchy', 'Chart & Infographic Presentation', 'Presenter View & Slide Show Delivery'],
          },
          {
            number: '04',
            title: 'Cloud Workspaces & Collaborative Hygiene',
            desc: 'Managing shared drives, permissions, real-time collaboration, and version control.',
            topics: ['Google Workspace & Microsoft 365 Architecture', 'Drive Permissions, Sharing & File Protection', 'Version History & Restoring Past Revisions', 'Collaborative Commenting & Task Assignments'],
          },
        ],
        learningOutcomes: [
          'Format publish-ready institutional reports and manuals with automated styling and tables of contents',
          'Build dynamic financial, inventory, or operational spreadsheets with advanced formulas and Pivot Tables',
          'Design clean, persuasive corporate slide decks that communicate key metrics effectively',
          'Organize and administrate shared cloud workspaces across team members with secure permissions',
        ],
        capstoneProject: {
          title: 'Institutional Operations & Analytics Dossier',
          description: 'A complete organizational operations suite: an automated budget and inventory spreadsheet with interactive Pivot Charts, a professionally formatted 15-page operational report, and a 10-slide executive summary presentation deck.',
          deliverable: 'Complete Office Suite Bundle (.xlsx, .docx, .pptx) and shared cloud drive link',
        },
      },
      {
        id: 'internet-literacy-cyber-hygiene',
        code: 'CMP-403',
        title: 'Internet Literacy, Cyber Hygiene & Digital Safety',
        tagline: 'Navigate the modern web securely, protect sensitive personal data, and defend against cyber threats.',
        duration: '8 Weeks',
        level: 'All Levels',
        format: 'Security Audits & Defensive Simulation Workshops',
        targetAudience: 'Everyone who uses a smartphone or computer connected to the internet and wants to be safe from fraud, account takeovers, and data leaks.',
        description:
          'Understand how the internet operates and how to protect yourself on it. Learn networking fundamentals (browsers, URLs, DNS, IP addresses, Wi-Fi security), master password vaults, configure hardware and software Two-Factor Authentication (2FA), identify phishing attacks, and protect personal digital privacy.',
        modules: [
          {
            number: '01',
            title: 'How the Internet Works & Web Foundations',
            desc: 'Demystifying web browsers, HTTP/HTTPS encryption, DNS lookups, IP addresses, and Wi-Fi networks.',
            topics: ['Browser Mechanics & Cache/Cookies', 'HTTP vs HTTPS & SSL/TLS Certificates', 'DNS & URL Anatomy (Domains, Subdomains)', 'Wi-Fi Encryption (WPA2/WPA3) & Router Safety'],
          },
          {
            number: '02',
            title: 'Password Management & Two-Factor Authentication (2FA)',
            desc: 'Eliminating weak, reused passwords and deploying encrypted password vaults with strong 2FA.',
            topics: ['Password Entropy & Brute Force Economics', 'Password Managers (Bitwarden, 1Password)', 'Time-Based OTP (Authenticator Apps)', 'FIDO2 Hardware Security Keys & Passkeys'],
          },
          {
            number: '03',
            title: 'Social Engineering, Phishing & Threat Defense',
            desc: 'Recognizing malicious emails, fraudulent websites, imposter scams, malware, and ransomware.',
            topics: ['Phishing & Spear-Phishing Detection', 'Malicious Link Inspection & Domain Spoofing', 'Malware, Spyware & Ransomware Vectors', 'Safe Download Protocols & Antivirus Scanners'],
          },
          {
            number: '04',
            title: 'Privacy Hygiene, Data Backups & Digital Footprint',
            desc: 'Protecting private communications, minimizing tracking, and executing 3-2-1 backup strategies.',
            topics: ['Browser Privacy Extensions & Tracker Blocking', 'The 3-2-1 Backup Rule (Local & Cloud)', 'Data Encryption & Secure File Deletion', 'Social Media Privacy Auditing & Exposure Control'],
          },
        ],
        learningOutcomes: [
          'Navigate the internet with clear comprehension of underlying networking and encryption protocols',
          'Deploy and manage an encrypted password manager with multi-factor authentication across all accounts',
          'Identify and neutralize sophisticated phishing scams, spoofed domains, and social engineering attacks',
          'Implement a verified 3-2-1 backup protocol to protect critical personal and work files from loss or ransomware',
        ],
        capstoneProject: {
          title: 'Complete Personal & Household Cyber Hygiene Audit',
          description: 'A comprehensive security hardening project: auditing all online accounts, migrating to an encrypted password vault with 2FA, securing home Wi-Fi configurations, and establishing a verified local and cloud backup routine.',
          deliverable: 'Personal Cybersecurity Audit Dossier with security score before and after implementation',
        },
      },
      {
        id: 'computational-thinking-automation',
        code: 'CMP-404',
        title: 'Computational Thinking & Practical Automation',
        tagline: 'Develop structured algorithmic problem-solving habits and automate repetitive computer tasks.',
        duration: '10 Weeks',
        level: 'Beginner',
        format: 'Logic Puzzles & Desktop Scripting Labs',
        targetAudience: 'Beginners and non-programmers who want to learn how to think algorithmically and automate tedious computer chores.',
        description:
          'Bridging computer literacy and computer programming. Learn computational thinking: breaking complex problems into sub-problems (decomposition), recognizing patterns, designing algorithm flowcharts, and writing simple, useful scripts to automate repetitive daily tasks on your computer.',
        modules: [
          {
            number: '01',
            title: 'Decomposition & Pattern Recognition',
            desc: 'Breaking complex real-world workflows into discrete, solvable procedural steps.',
            topics: ['Problem Decomposition Strategies', 'Pattern Recognition in Data Sets', 'Abstraction & Generalization', 'Edge-Case Identification'],
          },
          {
            number: '02',
            title: 'Algorithm Flowcharts & Pseudocode',
            desc: 'Visualizing algorithmic decision logic before touching any computer code.',
            topics: ['Flowchart Symbols & Logic Mapping', 'Conditional Logic (IF/THEN/ELSE)', 'Looping Structures (WHILE/FOR)', 'Pseudocode Writing Standards'],
          },
          {
            number: '03',
            title: 'Core Computational Primitives',
            desc: 'Hands-on understanding of variables, data types, lists, conditions, and reusable functions.',
            topics: ['Variables & Data Types (Strings, Numbers, Booleans)', 'Lists & Arrays for Storing Collections', 'Functions & Modular Code Reusability', 'State Tracking & Execution Tracing'],
          },
          {
            number: '04',
            title: 'Practical Desktop Task Automation',
            desc: 'Writing beginner-friendly scripts to automate real desktop chores like file renaming and data extraction.',
            topics: ['Batch File Renaming & Organizing', 'Extracting Text & Data from Documents', 'Automated Email or Report Reminders', 'Scheduling Automated Computer Tasks'],
          },
        ],
        learningOutcomes: [
          'Approach ambiguous, complex problems with systematic computational decomposition',
          'Draw precise algorithmic flowcharts representing decision logic and iterative loops',
          'Understand core programming primitives (variables, loops, conditions, functions) conceptually',
          'Create practical automation scripts that eliminate hours of repetitive manual computer tasks',
        ],
        capstoneProject: {
          title: 'Automated Desktop File Organizer & Report Generator',
          description: 'An automation project designed to monitor a downloads folder, categorize incoming files by extension and date into structured directories, and generate a daily summary log of organized files.',
          deliverable: 'Functional Automation Script with flowchart diagram, user guide, and execution demo',
        },
      },
    ],
    modules: [
      {
        title: 'Hardware Anatomy & Operating Systems',
        desc: 'Computer components, CPU/RAM, storage drives, and operating system navigation.',
        topics: ['CPU, RAM & Storage Architecture', 'Windows & macOS System Navigation', 'File Systems & Directory Trees', 'Terminal & Command Line Basics'],
      },
      {
        title: 'Modern Productivity Suites (Docs & Sheets)',
        desc: 'Professional document authoring, spreadsheet modeling, and collaborative cloud suites.',
        topics: ['Advanced Document Formatting', 'Spreadsheet Formulas & Pivot Tables', 'Slide Presentation Design', 'Cloud Workspace Management'],
      },
      {
        title: 'Internet Literacy & Cyber Hygiene',
        desc: 'Web security, safe browsing, password managers, 2FA, and phishing defense.',
        topics: ['Browsers, DNS & Encryption', 'Password Managers & 2FA Tokens', 'Phishing & Threat Identification', 'Data Privacy & Backup Strategies'],
      },
      {
        title: 'Computational Thinking & Practical Automation',
        desc: 'Algorithmic logic, flowcharts, problem decomposition, and basic desktop task scripting.',
        topics: ['Problem Decomposition', 'Flowcharts & Pseudocode', 'Core Logic Primitives', 'Automating Repetitive Tasks'],
      },
    ],
    outcomes: [
      'Grasp computing from physical hardware components to operating system navigation',
      'Master professional document authoring and advanced spreadsheet data modeling',
      'Protect digital identity, devices, and personal accounts against modern cyber threats',
      'Apply computational thinking and simple automation scripts to eliminate repetitive chores',
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
    tagline: '100% Offline Educational Software for Resource-Constrained Environments',
    description:
      'Tactile, offline-first educational software tailored for classrooms in bandwidth-constrained environments, demonstrating resilient offline caching and interactive audio.',
    impact: 'Deployed for classroom interaction in Nigerian schools',
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
  phone: '+2347070763135',
  whatsappUrl: 'https://wa.me/2347070763135?text=Hello%20NIT7ER%20Academy%2C%20I%20am%20interested%20in%20applying%20for%20a%20cohort.',
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
