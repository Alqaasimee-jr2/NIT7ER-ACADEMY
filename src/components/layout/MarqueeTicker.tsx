import React from 'react';

export function MarqueeTicker() {
  const items = [
    'SWE-101: Full-Stack Web Systems',
    'SWE-102: Cross-Platform Mobile Engineering',
    'SWE-103: Applied AI & Intelligent Systems',
    'COG-201: Deep Work & Focus Engineering',
    'COG-202: Personal Operating Systems',
    'WRT-301: Technical Writing & Architecture Specs',
    'WRT-302: Essay Craft & Editorial Leadership',
    'WRT-303: High-Conversion Copywriting',
    'CMP-401: Computer Fundamentals & OS Mastery',
    'CMP-402: Modern Productivity Suites',
    'CMP-403: Cyber Hygiene & Digital Safety',
    'CMP-404: Computational Thinking & Automation',
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
