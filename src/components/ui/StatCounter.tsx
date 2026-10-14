'use client';

import React from 'react';
import { ACADEMY_METRICS } from '@/data/academyData';
import { GeometricShape } from '@/components/GeometricShapes';

export function StatCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {ACADEMY_METRICS.map((metric, idx) => {
        const shapes: ('hexagon' | 'square' | 'triangle' | 'circle')[] = [
          'hexagon',
          'square',
          'triangle',
          'circle',
        ];
        const colors: ('gold' | 'blue' | 'navy' | 'amber')[] = [
          'gold',
          'blue',
          'navy',
          'amber',
        ];

        return (
          <div
            key={metric.label}
            className="na-card p-4 sm:p-5 relative overflow-hidden bg-white border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight">
                {metric.value}
              </span>
              <GeometricShape
                type={shapes[idx % shapes.length]}
                color={colors[idx % colors.length]}
                size="sm"
              />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
              {metric.label}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
              {metric.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}
