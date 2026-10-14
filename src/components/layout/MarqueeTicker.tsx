import React from 'react';

export function MarqueeTicker() {
  const items = [
    'FACULTY 01 // NEXT.JS 16 APPS',
    'FACULTY 02 // FLOW7 REALITY TELEMETRY',
    'FACULTY 03 // ARCHITECTURAL SPECS & PROSE',
    'FACULTY 04 // COMPUTING & DIGITAL FOUNDATIONS',
    'INCUBATED LABS // CLASQUERA AI',
    'INCUBATED LABS // LANG HUEY OFFLINE ENGINE',
    'STAMINA OS // 90-MIN DEEP SPRINTS',
    'ZERO TOY PROJECTS // 100% PRODUCTION CODE',
    'COHORT ADMISSIONS OPEN // 2026/2027',
  ];

  return (
    <div className="w-full bg-[#EEF7FC] border-y border-[#D9E6F0] py-2 overflow-hidden select-none">
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
