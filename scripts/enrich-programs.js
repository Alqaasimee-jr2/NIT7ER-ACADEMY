const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'academyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const weeklyData = {
  'full-stack-web': {
    totalProjects: '4 Production Projects (3 Sprints + 1 Full SaaS Capstone)',
    weeklyHours: '12–14 Hours / Week (Live Critiques + Async Sprints)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–04',
        title: 'Component Engines & React 19 Hydration Boundaries',
        description: 'Server Components, dynamic route segments, streaming suspense layouts, and custom design token integration with Tailwind v4.',
        sprintProject: 'Multi-Tab High-Performance Workspace Layout with Suspense Streaming & Hydration telemetry',
        tools: ['Next.js 16', 'React 19 Actions', 'TypeScript 5', 'Tailwind CSS v4'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 05–08',
        title: 'Resilient Edge APIs, Auth & Microservice Architecture',
        description: 'Edge route handlers, session management, OAuth & JWT authentication, webhook listeners, and distributed rate-limiting middleware.',
        sprintProject: 'Type-Safe Microservice API with Automated Webhooks, Rate Limiting & OAuth Session Engine',
        tools: ['Next.js Route Handlers', 'Jose / JWT', 'Upstash Redis', 'Zod Schemas'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 09–12',
        title: 'Relational Schemas, PostgreSQL & Data Pipeline Optimization',
        description: 'ACID transactions, relational joins, index optimization, Prisma/Drizzle ORM, and high-concurrency Redis caching layers.',
        sprintProject: 'Multi-Tenant Relational Database Layer with Migration Sprints & Automated Seed Scripts',
        tools: ['PostgreSQL', 'Drizzle ORM', 'Redis Cache', 'Neon Serverless'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 13–16',
        title: 'Hardening, CI/CD Pipeline & Live Capstone Defense',
        description: 'Automated Playwright test suites, GitHub Actions deployment pipelines, performance budgeting, and live commercial capstone defense.',
        sprintProject: 'Commercial Multi-Tenant SaaS Platform live on Edge URL with Subscription Billing',
        tools: ['Vercel Edge', 'GitHub Actions', 'Playwright', 'Core Web Vitals'],
      },
    ],
  },
  'mobile-app-engineering': {
    totalProjects: '4 Native-Grade Mobile Projects (3 Sprints + 1 Deployed APK/IPA)',
    weeklyHours: '10–12 Hours / Week (Emulation Labs + Device Testing)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Declarative Layouts & Custom Widget Ergonomics',
        description: 'Widget tree lifecycle, custom painters, tactile gestural interactions, and fluid 60fps animations across iOS and Android.',
        sprintProject: 'Adaptive Cross-Platform Media Player UI with 60fps Gesture Animations',
        tools: ['Flutter 3.x', 'Dart 3', 'Material 3', 'Cupertino Icons'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–07',
        title: 'Reactive State Architecture & Clean Domain Separation',
        description: 'Riverpod and BLoC state containers, immutable models, domain repository patterns, and dependency injection trees.',
        sprintProject: 'Production State Container with Offline Cache Repositories & Immutable Entities',
        tools: ['Riverpod 2', 'Freezed', 'Dartz', 'GetIt DI'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 08–10',
        title: 'Hardware Interop, Sensor APIs & Background Execution',
        description: 'Microphone audio streaming, camera sensor capture, background geolocation tracking, and local notification scheduling.',
        sprintProject: 'Hardware Diagnostic Field Recorder with Audio Waveform Spectrum & Geo-Tagging',
        tools: ['Record Audio API', 'Camera2 Plugin', 'Geolocator', 'Local Notifications'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 11–14',
        title: 'Offline-First SQLite Sync & App Store Deployment',
        description: 'SQLite database persistence with Drift, optimistic UI reconciliation, sync conflict resolution, and Fastlane store bundling.',
        sprintProject: 'Offline-First Field Utility Application with Auto-Sync & Installable APK',
        tools: ['SQLite', 'Drift ORM', 'Fastlane', 'TestFlight / Play Console'],
      },
    ],
  },
  'applied-ai-systems': {
    totalProjects: '4 Intelligent Systems (3 Evaluation Sprints + 1 Autonomous Agent)',
    weeklyHours: '12–14 Hours / Week (Model Benchmarks + API Pipelines)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Foundation Model Inference & Strict Structured Outputs',
        description: 'Token context windows, prompt instruction hierarchy, JSON schema enforcement, and temperature calibration across LLMs.',
        sprintProject: 'Deterministic Extraction & Semantic Classification Engine with JSON Schema Guarantees',
        tools: ['Gemini 2.5/3', 'OpenAI API', 'Pydantic / Zod', 'Instructor'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–06',
        title: 'Vector Embeddings, Semantic Indexing & Hybrid RAG',
        description: 'Vector chunking strategies, dense embeddings, hybrid keyword/vector search, and re-ranking pipelines with Reciprocal Rank Fusion.',
        sprintProject: 'Hybrid RAG Knowledge Retrieval System with Semantic Chunking & Citation Grounding',
        tools: ['pgvector', 'Text-Embedding-004', 'Pinecone', 'LangChain Core'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 07–09',
        title: 'Multimodal Audio, Vision & Grounding Pipelines',
        description: 'Audio transcription analysis, image OCR and spatial understanding, and automated rubric verification systems.',
        sprintProject: 'Multimodal Audio Lesson Verification Engine with Evidence Highlighting',
        tools: ['Gemini Multimodal API', 'Whisper STT', 'Firebase Cloud Functions'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 10–12',
        title: 'Autonomous Tool-Calling Agents & Production Telemetry',
        description: 'Multi-turn agent loops, sandboxed tool execution, safety guardrails, token latency tracing, and live capstone defense.',
        sprintProject: 'Autonomous Agentic Assistant with Sandboxed Tool Execution & Telemetry Tracing',
        tools: ['LangGraph', 'OpenTelemetry', 'Vercel AI SDK', 'Helicone'],
      },
    ],
  },
  'deep-work-attention': {
    totalProjects: '4 Cognitive Artifacts (3 Focus Sprints + 1 Complete Focus Protocol)',
    weeklyHours: '8–10 Hours / Week (Daily Focus Sessions + Weekly Review)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–02',
        title: 'Attention Baselines & Environmental De-Frictioning',
        description: 'Quantifying baseline attention span, auditing screen micro-interruptions, and configuring clean physical & digital workstations.',
        sprintProject: 'Personal Environmental Ergonomics & Notification De-Frictioning Audit',
        tools: ['Workstation Configuration', 'Notification Filters', 'Audit Framework'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 03–05',
        title: 'Flow7 Reality Logging & Resistance Diagnostics',
        description: 'Logging focus sessions daily without to-do list guilt, diagnosing friction vectors, and categorizing procrastination patterns.',
        sprintProject: '21-Day Flow7 Reality Log with Root-Cause Friction Diagnostics',
        tools: ['Flow7 Protocol', 'Friction Categorization Matrix', 'Daily Telemetry'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 06–08',
        title: '90-Minute Monotask Sprint Conditioning',
        description: 'Expanding deep cognitive stamina, mastering the physical transition into flow state, and managing dopamine depletion.',
        sprintProject: 'Stamina Expansion Sprint Dossier (50 Consecutive 90-Minute Unbroken Sprints)',
        tools: ['Monotask Timers', 'Ultradian Rhythm Sync', 'Focus Logging'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Cognitive Recovery & Long-Term Protocol Defense',
        description: 'Active rest frameworks, neurological resets, preventing burnout cycles, and institutional defense of personal focus protocols.',
        sprintProject: 'Production-Grade Focus Operating Protocol with Emergency Friction Protocols',
        tools: ['Recovery Matrix', 'Executive Operating Manual', 'Burnout Shields'],
      },
    ],
  },
  'personal-operating-systems': {
    totalProjects: '4 Operational Systems (3 Workspace Sprints + 1 Deployed Builder OS)',
    weeklyHours: '8–10 Hours / Week (Daily Cadence + Weekly Telemetry)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–02',
        title: 'Task Decoupling & Anti-To-Do Architecture',
        description: 'Replacing overwhelming to-do lists with state containers, daily single-priority focus, and unambiguous execution cues.',
        sprintProject: 'Decoupled State Task Architecture & Daily Shipping Protocol',
        tools: ['Markdown Systems', 'Obsidian / Plain Text', 'Priority Matrix'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 03–05',
        title: 'Personal Telemetry & Output Tracking Dashboard',
        description: 'Automating weekly time tracking, output velocity metrics, and project shipping logs into a dashboard.',
        sprintProject: 'Personal Telemetry Dashboard with Real-Time Output Analytics',
        tools: ['Notion API / Sheets', 'Local Dashboard Script', 'Metrics Engine'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 06–08',
        title: 'Async Studio Workflows & Peer Critique Routines',
        description: 'Structuring clear asynchronous pull request requests, bug reports, and progress briefs without meeting fatigue.',
        sprintProject: 'Async Collaboration Manual & Structured Code Review Rhythm',
        tools: ['Git PR Templates', 'Loom / Screen Recorders', 'Async Protocol'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Sustainable Execution Cadence & System Defense',
        description: 'Quarterly review sprints, annual roadmapping, cognitive debt retirement, and defending your personal OS.',
        sprintProject: 'Fully Integrated Builder Operating System with Automated Weekly Cadence',
        tools: ['Builder OS Repository', 'Automation Cron', 'Review Template'],
      },
    ],
  },
  'technical-writing-architecture': {
    totalProjects: '4 Engineering Dossiers (3 Spec Sprints + 1 Complete Architecture Spec)',
    weeklyHours: '8–10 Hours / Week (Drafting Sprints + Peer Critiques)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–02',
        title: 'Architecture Decision Records (ADR) Engineering',
        description: 'Context, decision drivers, considered options, trade-off matrices, and consequences documented for engineering teams.',
        sprintProject: 'Comprehensive Suite of 5 Architecture Decision Records for a Distributed System',
        tools: ['Markdown ADR Spec', 'Trade-off Matrices', 'Git Documentation'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 03–05',
        title: 'Developer Experience (DX) & Interactive API Docs',
        description: 'OpenAPI 3.1 specifications, code snippet generation across Python/TypeScript/Go, and error response dictionaries.',
        sprintProject: 'Interactive Production API Reference with Realistic Code Examples & Schemas',
        tools: ['OpenAPI 3.1', 'Mintlify / Swagger', 'cURL / SDK Snippets'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 06–08',
        title: 'System Topology Diagrams & Incident Post-Mortems',
        description: 'Mermaid and C4 model diagrams, data flow charts, and blameless post-mortem incident documentation.',
        sprintProject: 'Production Blameless Post-Mortem & Incident Recovery Architecture Dossier',
        tools: ['Mermaid.js', 'C4 Architectural Modeling', 'Incident Frameworks'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Enterprise Technical Dossier Synthesis & Defense',
        description: 'Assembling complete system architecture dossiers that satisfy executive and engineering leadership, defended live.',
        sprintProject: 'Complete System Architecture Specification Dossier for an Enterprise Web Platform',
        tools: ['Executive Summaries', 'Comprehensive Architecture Dossier', 'Live Defense'],
      },
    ],
  },
  'essay-craft-thought-leadership': {
    totalProjects: '4 Published Works (3 Editorial Drafts + 1 3-Part Monograph Series)',
    weeklyHours: '10–12 Hours / Week (Reading, Drafting & Editorial Feedback)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Logical Architecture & Thesis Framing',
        description: 'Developing non-obvious contrarian theses, inductive and deductive argument mapping, and outline structuring.',
        sprintProject: 'Contrarian Technical Thesis Outline with Supporting Evidence Matrix',
        tools: ['Argument Mapping', 'Source Verification', 'Thesis Frameworks'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–06',
        title: 'Rhetorical Devices, Sentence Rhythm & Voice',
        description: 'Cadence, syntactic variation, concrete metaphors, ruthless editing of clichés, and developing an authoritative authorial voice.',
        sprintProject: '2,500-Word Published Longform Essay on Modern Technical Craft',
        tools: ['Substack / Medium', 'Style Guides', 'Editorial Redlines'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 07–09',
        title: 'Deep Investigative Tech Case Studies',
        description: 'Deconstructing industry shifts, architectural failures, or historic innovations with precision and journalistic integrity.',
        sprintProject: 'In-Depth Technical Case Study Dissecting Commercial Infrastructure Failures',
        tools: ['Primary Research', 'Data Visualization', 'Interview Transcripts'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 10–12',
        title: 'Monograph Series Publishing & Platform Launch',
        description: 'Distribution strategies, editorial pitch letters, newsletter syndication, and final publication of a thought leadership monograph.',
        sprintProject: '3-Part Published Thought Leadership Monograph Series with Distribution Plan',
        tools: ['Platform Syndication', 'Editorial Monograph', 'Audience Growth'],
      },
    ],
  },
  'high-conversion-copywriting': {
    totalProjects: '4 Commercial Assets (3 Conversion Sprints + 1 Full Brand Copy Dossier)',
    weeklyHours: '8–10 Hours / Week (Copy Sprints + Conversion Teardowns)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–02',
        title: 'Customer Psychology, ICPs & Value Propositions',
        description: 'Customer interviews, voice-of-customer mining, pain point extraction, and crafting high-resonance value propositions.',
        sprintProject: 'Voice-of-Customer Mining Matrix & Value Proposition Hierarchy',
        tools: ['Customer Persona Mapping', 'JTBD Frameworks', 'Interview Synthesizer'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 03–05',
        title: 'Landing Page Information Architecture & Wireframing',
        description: 'Above-the-fold hooks, feature-benefit translation, objection neutralization sequences, and social proof placement.',
        sprintProject: 'Full-Length SaaS Landing Page Copy Wireframe with Objection Handlers',
        tools: ['Wireframe Copy Layouts', 'Conversion Frameworks', 'Headline Testing'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 06–08',
        title: 'Lifecycle Email Sequences & Onboarding Funnels',
        description: 'Welcome series, activation drips, churn prevention triggers, and high-conversion transaction emails.',
        sprintProject: '5-Part Product Onboarding & Activation Email Sequence',
        tools: ['Email Flow Mapping', 'Subject Line Optimization', 'ESP Integrations'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Microcopy, CTA Tuning & A/B Testing Matrix',
        description: 'Button microcopy, form labels, error state empathy, conversion rate optimization (CRO) testing hypotheses, and capstone defense.',
        sprintProject: 'Complete Go-To-Market Brand Messaging & Copy Dossier with A/B Testing Plan',
        tools: ['CRO Testing Matrix', 'Brand Voice Guidelines', 'Final Copy Dossier'],
      },
    ],
  },
  'computer-fundamentals-os': {
    totalProjects: '4 Technical Lab Builds (3 System Labs + 1 Hardware & OS Field Manual)',
    weeklyHours: '8–10 Hours / Week (Hands-On Labs + CLI Exercises)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Hardware Architecture, Buses & Silicon Foundations',
        description: 'CPU instruction cycles, ALU, RAM hierarchy, caching levels, storage controllers, motherboard buses, and power delivery.',
        sprintProject: 'Component Architecture Diagnostic Map & Custom Hardware Build Specification',
        tools: ['Hardware Diagnostic Utilities', 'Motherboard Schematics', 'Component Specs'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–06',
        title: 'Operating System Internals & Process Scheduling',
        description: 'Kernel architectures, memory paging, interrupt handling, process lifecycles, and disk partitioning formats (GPT/MBR, ext4, NTFS).',
        sprintProject: 'Dual-Boot System Configuration & Kernel Process Monitoring Suite',
        tools: ['Disk Management', 'Kernel Tools', 'System Monitor / Task Manager'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 07–09',
        title: 'Command Line Fluency (Bash & PowerShell)',
        description: 'Filesystem navigation, piping, standard I/O redirection, environment variables, automation scripts, and permissions (chmod/chown/ACLs).',
        sprintProject: 'Cross-Platform Automation Script Suite for Automated Workspace Health Checks',
        tools: ['Bash Shell', 'PowerShell 7', 'Environment Configuration'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 10–12',
        title: 'Hardware Diagnostics, Recovery & Systems Defense',
        description: 'POST beep diagnostics, bootloader recovery, memory testing (MemTest86), thermal profiling, and defending your diagnostic manual.',
        sprintProject: 'Hardware & OS Troubleshooting Diagnostic Field Manual with Live Recovery Demo',
        tools: ['MemTest86', 'UEFI/BIOS Config', 'Diagnostic Checklists'],
      },
    ],
  },
  'productivity-suites-cloud': {
    totalProjects: '4 Production Office Systems (3 Workflow Sprints + 1 Enterprise Automation Engine)',
    weeklyHours: '8–10 Hours / Week (Spreadsheet Labs + Cloud Workflows)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Advanced Spreadsheet Engineering (Excel & Google Sheets)',
        description: 'INDEX/MATCH, XLOOKUP, dynamic arrays, nested logic, Pivot Tables, conditional modeling, and data validation rules.',
        sprintProject: 'Dynamic Financial Modeling & Budgeting Dashboard with Automated Aggregations',
        tools: ['Microsoft Excel 365', 'Google Sheets', 'Pivot Tables & Dynamic Arrays'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–06',
        title: 'Cloud Workspaces & Structured Document Systems',
        description: 'Standardized document styling, multi-user permissions, version history recovery, collaborative workflows, and shared cloud drives.',
        sprintProject: 'Standardized Corporate Document Template Suite with Multi-Author Permissions',
        tools: ['Google Workspace', 'Microsoft 365', 'Shared Drive Governance'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 07–08',
        title: 'Data Visualizations & Executive Presentation Architecture',
        description: 'Information hierarchy, charting best practices, presentation slide pacing, and converting raw metrics into boardroom decks.',
        sprintProject: 'High-Impact Executive Presentation Deck with Interactive Data Charts',
        tools: ['PowerPoint / Google Slides', 'Chart Design Frameworks'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Cross-App Automation & Automated Administrative Engines',
        description: 'Connecting forms, spreadsheets, and notification pipelines using webhooks and native formulas, with final workflow defense.',
        sprintProject: 'Automated Multi-Step Administrative Workflow Engine connecting Forms & Sheets',
        tools: ['Google Apps Script', 'Power Automate', 'Automated Office Engine'],
      },
    ],
  },
  'internet-literacy-cyber-hygiene': {
    totalProjects: '4 Security Defense Systems (3 Audit Sprints + 1 Enterprise Cyber Hygiene Plan)',
    weeklyHours: '8–10 Hours / Week (Security Audits + Network Configuration)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–02',
        title: 'Threat Modeling, Phishing & Social Engineering Defenses',
        description: 'Analyzing spear-phishing attack vectors, inspecting email headers, link sanitization, and cataloging personal attack surfaces.',
        sprintProject: 'Personal Digital Threat Model & Attack Surface Assessment Report',
        tools: ['Email Header Analyzers', 'Threat Model Matrix', 'Link Verification Tools'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 03–05',
        title: 'Credential Architecture, Password Vaults & FIDO2 2FA',
        description: 'Zero-knowledge password vaults, passkeys, hardware security keys (YubiKey), and eliminating single points of failure.',
        sprintProject: 'Zero-Trust Credential Architecture Setup with Hardware Key Enforcement',
        tools: ['Bitwarden / 1Password', 'FIDO2 / WebAuthn', 'TOTP Authenticators'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 06–08',
        title: 'Encrypted Networking, VPNs & Endpoint Hardening',
        description: 'Configuring DNS-over-HTTPS (DoH), router firewall hardening, VPN tunneling, Wi-Fi security protocols (WPA3), and device encryption (BitLocker/FileVault).',
        sprintProject: 'Hardened Home & Mobile Network Profile with Encrypted DNS & Full-Disk Encryption',
        tools: ['NextDNS / Cloudflare DoH', 'WireGuard / VPN', 'BitLocker / FileVault'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 09–10',
        title: 'Backup Strategies, Ransomware Defenses & Incident Plan',
        description: '3-2-1 backup methodology, immutable cloud backups, ransomware mitigation, account recovery drills, and plan defense.',
        sprintProject: 'Comprehensive Cyber Hygiene Defense & Disaster Recovery Playbook',
        tools: ['3-2-1 Backup Tools', 'Encrypted Cloud Storage', 'Disaster Recovery Checklists'],
      },
    ],
  },
  'computational-thinking-automation': {
    totalProjects: '4 Computational Solutions (3 Scripting Sprints + 1 Full Automation Pipeline)',
    weeklyHours: '10–12 Hours / Week (Algorithm Design + Python Labs)',
    weeklyPhases: [
      {
        phase: 'Phase 01',
        weeks: 'Weeks 01–03',
        title: 'Problem Decomposition, Abstraction & Flowcharting',
        description: 'Breaking messy commercial problems into sub-problems, flowchart notation, and pseudocode algorithms before touching code.',
        sprintProject: 'Visual Algorithm Flowchart & Pseudocode Blueprint for a Real-World Logistics Bottleneck',
        tools: ['Flowcharting Software', 'Pseudocode Standards', 'Decomposition Matrix'],
      },
      {
        phase: 'Phase 02',
        weeks: 'Weeks 04–06',
        title: 'Data Structures, Search & Sorting Fundamentals',
        description: 'Arrays, hash maps, queues, stacks, binary search, Big-O algorithmic complexity analysis, and pattern matching.',
        sprintProject: 'Interactive Data Sorting & Search Tool with Algorithmic Big-O Comparison',
        tools: ['Python 3', 'Data Structure Visualizers', 'Complexity Benchmark Scripts'],
      },
      {
        phase: 'Phase 03',
        weeks: 'Weeks 07–09',
        title: 'Practical Python Automation & File Processing',
        description: 'Reading CSV/JSON files, regular expression text parsing, directory cleanup, automated web requests, and scheduled script runs.',
        sprintProject: 'Automated Data Extraction & File Processing Script Suite with Error Logging',
        tools: ['Python 3', 'BeautifulSoup / Requests', 'RegEx Engines', 'Cron / Task Scheduler'],
      },
      {
        phase: 'Phase 04',
        weeks: 'Weeks 10–12',
        title: 'End-to-End Pipeline Optimization & Capstone Defense',
        description: 'Packaging standalone CLI automation tools, writing documentation and error boundaries, and defending your automation pipeline.',
        sprintProject: 'Complete Algorithmic Automation Pipeline with Clean CLI & Documentation',
        tools: ['Python CLI (Click/Argparse)', 'Automated Test Suite', 'Comprehensive Documentation'],
      },
    ],
  },
};

// Now parse and inject into academyData.ts
// We'll replace each program object by adding totalProjects, weeklyHours, and weeklyPhases
for (const [progId, data] of Object.entries(weeklyData)) {
  const idRegex = new RegExp(`id:\\s*'${progId}',[\\s\\S]*?capstoneProject:\\s*\\{[\\s\\S]*?\\},`);
  const match = content.match(idRegex);
  if (match) {
    const original = match[0];
    const injection = `        totalProjects: ${JSON.stringify(data.totalProjects)},
        weeklyHours: ${JSON.stringify(data.weeklyHours)},
        weeklyPhases: ${JSON.stringify(data.weeklyPhases, null, 10).replace(/\\n/g, '\n        ')},`;
    
    const replacement = original + '\n' + injection;
    content = content.replace(original, replacement);
    console.log(`Enriched program: ${progId}`);
  } else {
    console.warn(`Could not find program: ${progId}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully enriched academyData.ts with all 12 program syllabi, weekly phases, and projects!');
