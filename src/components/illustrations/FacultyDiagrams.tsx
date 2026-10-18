import React from 'react';

export function CreativeTechDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="grid-ct" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CFE0EE" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="420" height="175" rx="10" fill="url(#grid-ct)" opacity="0.75" />

      {/* Layer 1: Edge Ingestion */}
      <rect x="14" y="24" width="108" height="126" rx="8" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <rect x="20" y="30" width="96" height="20" rx="4" fill="#12345B" />
      <text x="27" y="43" fill="#E6AD3C" fontSize="8.5" fontFamily="monospace" fontWeight="700">01. EDGE / API</text>
      <text x="24" y="68" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">Next.js 16 App</text>
      <text x="24" y="86" fill="#12345B" fontSize="9" fontFamily="monospace" fontWeight="700">Turbopack SSR</text>
      <text x="24" y="104" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">Streaming RSC</text>
      <rect x="22" y="118" width="92" height="20" rx="4" fill="#EEF7FC" />
      <text x="28" y="131" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">Latency: &lt;40ms</text>

      {/* Connection 1 */}
      <line x1="122" y1="87" x2="152" y2="87" stroke="#1769AA" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="150,83 157,87 150,91" fill="#1769AA" />

      {/* Layer 2: Core Processing & AI Intelligence */}
      <rect x="157" y="16" width="114" height="142" rx="8" fill="#FFFFFF" stroke="#1769AA" strokeWidth="1.75" />
      <rect x="163" y="22" width="102" height="20" rx="4" fill="#E6AD3C" />
      <text x="170" y="35" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">02. AI TELEMETRY</text>
      <text x="167" y="59" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">Multimodal LLM</text>
      <text x="167" y="77" fill="#12345B" fontSize="9" fontFamily="monospace" fontWeight="700">Vector Search</text>
      <text x="167" y="95" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">Tool Execution</text>
      <text x="167" y="113" fill="#12345B" fontSize="9" fontFamily="monospace" fontWeight="700">Semantic RAG</text>
      <rect x="165" y="126" width="98" height="20" rx="4" fill="#12345B" />
      <text x="171" y="139" fill="#E6AD3C" fontSize="8" fontFamily="monospace" fontWeight="700">Typed JSON I/O</text>

      {/* Connection 2 */}
      <line x1="271" y1="87" x2="300" y2="87" stroke="#1769AA" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="298,83 305,87 298,91" fill="#1769AA" />

      {/* Layer 3: Reactive Clients */}
      <rect x="305" y="24" width="101" height="126" rx="8" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <rect x="311" y="30" width="89" height="20" rx="4" fill="#1769AA" />
      <text x="319" y="43" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">03. CLIENTS</text>
      <text x="315" y="68" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">React 19 Web</text>
      <text x="315" y="86" fill="#12345B" fontSize="9" fontFamily="monospace" fontWeight="700">Flutter Mobile</text>
      <text x="315" y="104" fill="#4A607A" fontSize="8.5" fontFamily="sans-serif">Offline Sync</text>
      <rect x="313" y="118" width="85" height="20" rx="4" fill="#EEF7FC" />
      <text x="320" y="131" fill="#12345B" fontSize="8" fontFamily="monospace" fontWeight="700">60 FPS Native</text>
    </svg>
  );
}

export function CognitiveSystemsDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="grid-cs" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CFE0EE" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="420" height="175" rx="10" fill="url(#grid-cs)" opacity="0.75" />

      {/* Central Flow7 Cycle */}
      <circle cx="210" cy="87" r="56" stroke="#D5E3EF" strokeWidth="2.5" />
      <circle cx="210" cy="87" r="56" stroke="#1769AA" strokeWidth="2.5" strokeDasharray="28 14" />

      {/* Center Core */}
      <circle cx="210" cy="87" r="32" fill="#12345B" />
      <text x="210" y="84" textAnchor="middle" fill="#E6AD3C" fontSize="10" fontFamily="monospace" fontWeight="700">FLOW7</text>
      <text x="210" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">STAMINA OS</text>

      {/* Node 1: Top (Intention) */}
      <rect x="148" y="8" width="124" height="32" rx="6" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <text x="210" y="22" textAnchor="middle" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">01. INVIOLABLE GOAL</text>
      <text x="210" y="33" textAnchor="middle" fill="#4A607A" fontSize="7.5" fontFamily="sans-serif">Single-threaded focus</text>

      {/* Node 2: Right (Execution Block) */}
      <rect x="282" y="69" width="126" height="36" rx="6" fill="#FFFFFF" stroke="#1769AA" strokeWidth="1.5" />
      <text x="345" y="85" textAnchor="middle" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">02. DEEP SPRINT (90M)</text>
      <text x="345" y="97" textAnchor="middle" fill="#1769AA" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Friction firewall active</text>

      {/* Node 3: Bottom (Reality Telemetry) */}
      <rect x="148" y="135" width="124" height="32" rx="6" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <text x="210" y="149" textAnchor="middle" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">03. REALITY AUDIT</text>
      <text x="210" y="160" textAnchor="middle" fill="#4A607A" fontSize="7.5" fontFamily="sans-serif">Zero self-deception</text>

      {/* Node 4: Left (Course Correction) */}
      <rect x="12" y="69" width="126" height="36" rx="6" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <text x="75" y="85" textAnchor="middle" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">04. WEEKLY RETRO</text>
      <text x="75" y="97" textAnchor="middle" fill="#4A607A" fontSize="7.5" fontFamily="sans-serif">Compounding velocity</text>
    </svg>
  );
}

export function WritingDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="grid-wr" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CFE0EE" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="420" height="175" rx="10" fill="url(#grid-wr)" opacity="0.75" />

      {/* Spec Sheet Layout */}
      <rect x="28" y="16" width="364" height="142" rx="8" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />

      {/* Document Header Bar */}
      <rect x="28" y="16" width="364" height="28" rx="8" fill="#12345B" />
      <circle cx="46" cy="30" r="3.5" fill="#E6AD3C" />
      <circle cx="58" cy="30" r="3.5" fill="#4FA3D1" />
      <text x="74" y="33" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">TECHNICAL SPECIFICATION // N7-ADR-004</text>

      {/* Visual Hierarchy Lines */}
      <rect x="48" y="56" width="180" height="6" rx="3" fill="#12345B" />
      <rect x="48" y="70" width="310" height="4" rx="2" fill="#94A3B8" />
      <rect x="48" y="80" width="290" height="4" rx="2" fill="#94A3B8" />
      <rect x="48" y="90" width="240" height="4" rx="2" fill="#94A3B8" />

      {/* Callout box */}
      <rect x="48" y="106" width="184" height="38" rx="6" fill="#EEF7FC" stroke="#1769AA" strokeWidth="1.25" />
      <text x="58" y="121" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">ARCHITECTURAL DECISION</text>
      <text x="58" y="135" fill="#12345B" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">Clarity precedes code execution.</text>

      {/* Annotation Marker */}
      <rect x="244" y="106" width="128" height="38" rx="6" fill="#FAFCFE" stroke="#12345B" strokeWidth="1.25" />
      <text x="254" y="121" fill="#4A607A" fontSize="8" fontFamily="monospace" fontWeight="700">PROSE TELEMETRY</text>
      <text x="254" y="135" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">Clarity: 98% Crisp</text>
    </svg>
  );
}

export function ComputerEducationDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="grid-ce" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CFE0EE" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="420" height="175" rx="10" fill="url(#grid-ce)" opacity="0.75" />

      {/* Layer 1: Hardware */}
      <rect x="10" y="24" width="90" height="126" rx="7" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <rect x="15" y="29" width="80" height="20" rx="4" fill="#12345B" />
      <text x="21" y="42" fill="#E6AD3C" fontSize="8" fontFamily="monospace" fontWeight="700">01. HARDWARE</text>
      <text x="18" y="68" fill="#4A607A" fontSize="8" fontFamily="sans-serif">CPU &amp; Cores</text>
      <text x="18" y="86" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">RAM &amp; NVMe</text>
      <text x="18" y="104" fill="#4A607A" fontSize="8" fontFamily="sans-serif">System I/O</text>
      <text x="18" y="126" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">Diagnostics</text>

      <line x1="100" y1="87" x2="112" y2="87" stroke="#1769AA" strokeWidth="2" />

      {/* Layer 2: OS & Shell */}
      <rect x="112" y="20" width="94" height="134" rx="7" fill="#FFFFFF" stroke="#1769AA" strokeWidth="1.5" />
      <rect x="117" y="25" width="84" height="20" rx="4" fill="#1769AA" />
      <text x="123" y="38" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">02. OS &amp; SHELL</text>
      <text x="120" y="64" fill="#4A607A" fontSize="8" fontFamily="sans-serif">Win / Linux</text>
      <text x="120" y="82" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">File Trees</text>
      <text x="120" y="100" fill="#4A607A" fontSize="8" fontFamily="sans-serif">CLI &amp; Bash</text>
      <text x="120" y="118" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">Permissions</text>
      <text x="120" y="138" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">OS Mastery</text>

      <line x1="206" y1="87" x2="218" y2="87" stroke="#1769AA" strokeWidth="2" />

      {/* Layer 3: Productivity */}
      <rect x="218" y="24" width="92" height="126" rx="7" fill="#FFFFFF" stroke="#12345B" strokeWidth="1.5" />
      <rect x="223" y="29" width="82" height="20" rx="4" fill="#12345B" />
      <text x="228" y="42" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">03. WORKFLOW</text>
      <text x="226" y="68" fill="#4A607A" fontSize="8" fontFamily="sans-serif">Docs &amp; Specs</text>
      <text x="226" y="86" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">Spreadsheets</text>
      <text x="226" y="104" fill="#4A607A" fontSize="8" fontFamily="sans-serif">Slide Decks</text>
      <text x="226" y="126" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">Cloud Sync</text>

      <line x1="310" y1="87" x2="322" y2="87" stroke="#E6AD3C" strokeWidth="2" />

      {/* Layer 4: Security */}
      <rect x="322" y="20" width="88" height="134" rx="7" fill="#EEF7FC" stroke="#1769AA" strokeWidth="1.5" />
      <rect x="327" y="25" width="78" height="20" rx="4" fill="#E6AD3C" />
      <text x="333" y="38" fill="#12345B" fontSize="8" fontFamily="monospace" fontWeight="700">04. SECURITY</text>
      <text x="330" y="64" fill="#4A607A" fontSize="8" fontFamily="sans-serif">DNS &amp; HTTPS</text>
      <text x="330" y="82" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">Vaults &amp; 2FA</text>
      <text x="330" y="100" fill="#4A607A" fontSize="8" fontFamily="sans-serif">Zero Phishing</text>
      <text x="330" y="118" fill="#12345B" fontSize="8.5" fontFamily="monospace" fontWeight="700">3-2-1 Backups</text>
      <text x="330" y="138" fill="#1769AA" fontSize="8" fontFamily="monospace" fontWeight="700">Cyber Hygiene</text>
    </svg>
  );
}
