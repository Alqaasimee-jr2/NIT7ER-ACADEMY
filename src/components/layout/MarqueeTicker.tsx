import React from 'react';

export function MarqueeTicker() {
  const items = [
    'CT-101: Full-Stack Systems & Architecture',
    'CT-102: Interactive Web & Creative Computation',
    'CT-103: Mobile Engineering & Resilient Offline Apps',
    'CP-201: Flow State Engineering & Deep Work Protocol',
    'CP-202: Cognitive Energy Architecture & Stamina',
    'CP-203: Deliberate Practice & Skill Compounding',
    'WTL-301: Technical Prose as an Engineering Primitive',
    'WTL-302: Strategic Writing & Product Narratives',
    'WTL-303: Rhetoric, Argumentation & Public Discourse',
    'CE-401: Computing Foundations & Hardware Logic',
    'CE-402: Internet Literacy, Protocols & Cyber Hygiene',
    'CE-403: Algorithms, Data Structures & Computational Thinking',
  ];

  return (
    <div className="w-full bg-[#EEF7FC] border-y border-[#D9E6F0] py-2 overflow-hidden select-none" aria-label="Academic Programs">
      <div className="marquee-track flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C]"></span>
            <span className="font-mono text-[11px] font-bold tracking-wider text-[#12345B]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
