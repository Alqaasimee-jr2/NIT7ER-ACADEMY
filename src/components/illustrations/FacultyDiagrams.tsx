import React from 'react';

export function CreativeTechDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Grid */}
      <defs>
        <pattern id="grid-ct" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E5E0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="400" height="160" fill="url(#grid-ct)" opacity="0.6" />

      {/* Layer 1: Edge Ingestion */}
      <rect x="20" y="30" width="90" height="100" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />
      <rect x="25" y="35" width="80" height="16" fill="#121212" />
      <text x="32" y="47" fill="#F5C842" fontSize="8" fontFamily="monospace" fontWeight="bold">01. EDGE / API</text>
      <text x="30" y="70" fill="#71717A" fontSize="7" fontFamily="sans-serif">Next.js 16 Server</text>
      <text x="30" y="85" fill="#121212" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Turbopack SSR</text>
      <text x="30" y="100" fill="#71717A" fontSize="7" fontFamily="sans-serif">Streaming RSC</text>
      <text x="30" y="115" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">Latency: &lt;40ms</text>

      {/* Connection 1 */}
      <line x1="110" y1="80" x2="150" y2="80" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="150,77 156,80 150,83" fill="#C9A84C" />

      {/* Layer 2: Core Processing & AI Intelligence */}
      <rect x="155" y="20" width="100" height="120" fill="#FFFFFF" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="160" y="25" width="90" height="16" fill="#C9A84C" />
      <text x="168" y="37" fill="#121212" fontSize="8" fontFamily="monospace" fontWeight="bold">02. AI TELEMETRY</text>
      <text x="168" y="60" fill="#71717A" fontSize="7" fontFamily="sans-serif">Multimodal Inference</text>
      <text x="168" y="75" fill="#121212" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Vector Embeddings</text>
      <text x="168" y="90" fill="#71717A" fontSize="7" fontFamily="sans-serif">Function Calling</text>
      <text x="168" y="105" fill="#121212" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Semantic RAG &amp; Tools</text>
      <text x="168" y="125" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">Output: Validated JSON</text>

      {/* Connection 2 */}
      <line x1="255" y1="80" x2="290" y2="80" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="290,77 296,80 290,83" fill="#C9A84C" />

      {/* Layer 3: Reactive Clients */}
      <rect x="295" y="30" width="85" height="100" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />
      <rect x="300" y="35" width="75" height="16" fill="#121212" />
      <text x="307" y="47" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">03. CLIENTS</text>
      <text x="306" y="70" fill="#71717A" fontSize="7" fontFamily="sans-serif">React 19 Canvas</text>
      <text x="306" y="85" fill="#121212" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Flutter Mobile</text>
      <text x="306" y="100" fill="#71717A" fontSize="7" fontFamily="sans-serif">Offline Cache</text>
      <text x="306" y="115" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">60 FPS Native</text>
    </svg>
  );
}

export function CognitiveSystemsDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="grid-cs" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E5E0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="400" height="160" fill="url(#grid-cs)" opacity="0.6" />

      {/* Central Flow7 Cycle */}
      <circle cx="200" cy="80" r="55" stroke="#E5E5E0" strokeWidth="2" />
      <circle cx="200" cy="80" r="55" stroke="#C9A84C" strokeWidth="2" strokeDasharray="30 15" />

      {/* Center Core */}
      <circle cx="200" cy="80" r="28" fill="#121212" />
      <text x="183" y="78" fill="#F5C842" fontSize="8.5" fontFamily="monospace" fontWeight="bold">FLOW7</text>
      <text x="178" y="88" fill="#D1D1CB" fontSize="6.5" fontFamily="monospace">STAMINA OS</text>

      {/* Node 1: Top (Intention) */}
      <rect x="155" y="10" width="90" height="26" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <text x="165" y="24" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">01. INVIOLABLE GOAL</text>
      <text x="165" y="32" fill="#71717A" fontSize="6" fontFamily="sans-serif">Single-threaded focus</text>

      {/* Node 2: Right (Execution Block) */}
      <rect x="270" y="65" width="95" height="30" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <text x="278" y="79" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">02. DEEP SPRINT (90M)</text>
      <text x="278" y="89" fill="#C9A84C" fontSize="6" fontFamily="sans-serif">Friction firewalls active</text>

      {/* Node 3: Bottom (Reality Telemetry) */}
      <rect x="155" y="125" width="90" height="26" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <text x="164" y="138" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">03. REALITY AUDIT</text>
      <text x="164" y="146" fill="#71717A" fontSize="6" fontFamily="sans-serif">Zero self-deception</text>

      {/* Node 4: Left (Course Correction) */}
      <rect x="35" y="65" width="95" height="30" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <text x="43" y="79" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">04. WEEKLY RETRO</text>
      <text x="43" y="89" fill="#71717A" fontSize="6" fontFamily="sans-serif">Compounding velocity</text>
    </svg>
  );
}

export function WritingDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="grid-wr" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E5E0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="400" height="160" fill="url(#grid-wr)" opacity="0.6" />

      {/* Spec Sheet Layout */}
      <rect x="40" y="18" width="320" height="124" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />
      
      {/* Document Header Bar */}
      <rect x="40" y="18" width="320" height="24" fill="#FAF9F6" stroke="#E5E5E0" strokeWidth="1" />
      <circle cx="55" cy="30" r="3" fill="#C9A84C" />
      <circle cx="65" cy="30" r="3" fill="#D1D1CB" />
      <text x="80" y="34" fill="#121212" fontSize="8" fontFamily="monospace" fontWeight="bold">TECHNICAL SPECIFICATION // N7-ADR-004</text>

      {/* Visual Hierarchy Columns */}
      <line x1="60" y1="56" x2="220" y2="56" stroke="#121212" strokeWidth="2.5" />
      <line x1="60" y1="68" x2="340" y2="68" stroke="#71717A" strokeWidth="1" />
      <line x1="60" y1="78" x2="320" y2="78" stroke="#71717A" strokeWidth="1" />
      <line x1="60" y1="88" x2="280" y2="88" stroke="#71717A" strokeWidth="1" />

      {/* Callout box */}
      <rect x="60" y="98" width="160" height="30" fill="#F9F3E5" stroke="#C9A84C" strokeWidth="1" />
      <text x="68" y="110" fill="#9B7C28" fontSize="7" fontFamily="monospace" fontWeight="bold">ARCHITECTURAL DECISION</text>
      <text x="68" y="122" fill="#121212" fontSize="7" fontFamily="sans-serif">Clarity precedes code execution.</text>

      {/* Annotation Marker */}
      <rect x="250" y="98" width="110" height="30" fill="#FFFFFF" stroke="#121212" strokeWidth="1" />
      <text x="258" y="110" fill="#121212" fontSize="7" fontFamily="monospace">PROSE METRICS</text>
      <text x="258" y="122" fill="#C9A84C" fontSize="7" fontFamily="monospace" fontWeight="bold">Flesch-Kincaid: 72 (Crisp)</text>
    </svg>
  );
}

export function ComputerEducationDiagram({ className = 'w-full h-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="grid-ce" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E5E0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="400" height="160" fill="url(#grid-ce)" opacity="0.6" />

      {/* Layer 0: Hardware Anatomy & Silicon */}
      <rect x="15" y="30" width="80" height="100" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <rect x="20" y="35" width="70" height="16" fill="#121212" />
      <text x="24" y="46" fill="#F5C842" fontSize="7" fontFamily="monospace" fontWeight="bold">01. HARDWARE</text>
      <text x="22" y="68" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">CPU Architecture</text>
      <text x="22" y="82" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">RAM &amp; NVMe Bus</text>
      <text x="22" y="96" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">Motherboard I/O</text>
      <text x="22" y="112" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">Power &amp; Ports</text>

      <line x1="95" y1="80" x2="110" y2="80" stroke="#121212" strokeWidth="1.5" />

      {/* Layer 1: Operating System & Filesystems */}
      <rect x="110" y="25" width="85" height="110" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <rect x="115" y="30" width="75" height="16" fill="#121212" />
      <text x="120" y="41" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">02. OS &amp; SHELL</text>
      <text x="117" y="64" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">Win / macOS / Linux</text>
      <text x="117" y="78" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">File Hierarchies</text>
      <text x="117" y="92" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">Terminal &amp; Bash</text>
      <text x="117" y="106" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">Path &amp; Permissions</text>
      <text x="117" y="122" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">System Health</text>

      <line x1="195" y1="80" x2="210" y2="80" stroke="#121212" strokeWidth="1.5" />

      {/* Layer 2: Productivity Suites & Cloud */}
      <rect x="210" y="30" width="85" height="100" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
      <rect x="215" y="35" width="75" height="16" fill="#121212" />
      <text x="219" y="46" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">03. PRODUCTIVITY</text>
      <text x="217" y="68" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">Word &amp; Docs Style</text>
      <text x="217" y="82" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">Excel / Pivot Tables</text>
      <text x="217" y="96" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">PowerPoint Decks</text>
      <text x="217" y="112" fill="#C9A84C" fontSize="6.5" fontFamily="monospace">Cloud Sync &amp; M365</text>

      <line x1="295" y1="80" x2="310" y2="80" stroke="#C9A84C" strokeWidth="1.5" />

      {/* Layer 3: Security & Cyber Hygiene */}
      <rect x="310" y="20" width="75" height="120" fill="#F9F3E5" stroke="#C9A84C" strokeWidth="1.5" />
      <rect x="315" y="25" width="65" height="16" fill="#C9A84C" />
      <text x="320" y="36" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">04. SECURITY</text>
      <text x="316" y="58" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">Web &amp; DNS Basics</text>
      <text x="316" y="73" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">Password Vaults</text>
      <text x="316" y="88" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">2FA &amp; Passkeys</text>
      <text x="316" y="103" fill="#121212" fontSize="7" fontFamily="monospace" fontWeight="bold">Phishing Defense</text>
      <text x="316" y="122" fill="#9B7C28" fontSize="6.5" fontFamily="monospace">3-2-1 Backups</text>
    </svg>
  );
}
