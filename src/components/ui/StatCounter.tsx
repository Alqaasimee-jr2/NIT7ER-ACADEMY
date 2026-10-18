'use client';

import React from 'react';
import { ACADEMY_METRICS } from '@/data/academyData';

export function StatCounter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
      {ACADEMY_METRICS.map((metric, idx) => (
        <div
          key={metric.label}
          className="technical-border curve-soft p-4 sm:p-5 bg-white space-y-1.5 shadow-xs hover:border-[#1769AA] transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-2xl sm:text-3xl font-mono font-black text-[#12345B] tracking-tight">
              {metric.value}
            </span>
            <span className="label-mono text-[9px] px-2 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] shrink-0">
              [0{idx + 1}]
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-[#12345B] leading-snug">
            {metric.label}
          </h4>
          <p className="text-xs text-[#64748B] leading-relaxed">
            {metric.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
