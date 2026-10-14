'use client';

import React from 'react';
import { ACADEMY_METRICS } from '@/data/academyData';

export function StatCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {ACADEMY_METRICS.map((metric, idx) => (
        <div
          key={metric.label}
          className="technical-border p-4 sm:p-5 bg-white space-y-1.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-[#121212] tracking-tight">
              {metric.value}
            </span>
            <span className="label-mono text-[9px] text-[#C9A84C]">
              [METRIC 0{idx + 1}]
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-[#121212] leading-snug">
            {metric.label}
          </h4>
          <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed">
            {metric.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
