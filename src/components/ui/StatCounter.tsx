'use client';

import React from 'react';
import { ACADEMY_METRICS } from '@/data/academyData';

export function StatCounter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {ACADEMY_METRICS.map((metric, idx) => (
        <div
          key={metric.label}
          className="technical-border curve-soft p-5 sm:p-6 bg-white space-y-2 hover:border-[#1769AA] transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#12345B] tracking-tight">
              {metric.value}
            </span>
            <span className="label-mono text-[10px] px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D5E3EF] shrink-0">
              [0{idx + 1}]
            </span>
          </div>
          <h4 className="font-display text-sm sm:text-base font-bold text-[#12345B] leading-snug">
            {metric.label}
          </h4>
          <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed">
            {metric.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
