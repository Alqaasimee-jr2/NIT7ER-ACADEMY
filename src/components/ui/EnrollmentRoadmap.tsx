import React from 'react';
import Link from 'next/link';
import { ENROLLMENT_STAGES } from '@/data/academyData';
import { GeometricShape } from '@/components/GeometricShapes';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function EnrollmentRoadmap() {
  const shapes: ('square' | 'hexagon' | 'triangle' | 'circle')[] = [
    'square',
    'hexagon',
    'triangle',
    'circle',
  ];
  const colors: ('navy' | 'gold' | 'emerald' | 'amber')[] = [
    'navy',
    'gold',
    'emerald',
    'amber',
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
            Admissions &amp; Progression
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] mt-1">
            The 4-Stage Studio Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-0.5">
            From initial diagnostic alignment to shipping live software and defending your architectural decisions.
          </p>
        </div>
        <Link
          href="/apply"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12345B] hover:text-[#1769AA] transition-colors"
        >
          <span>Begin Application Process</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENROLLMENT_STAGES.map((stage, idx) => (
          <div
            key={stage.step}
            className="na-card p-5 bg-white border border-slate-200 flex flex-col justify-between space-y-4 relative"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-[#12345B] opacity-30">
                  {stage.step}
                </span>
                <GeometricShape
                  type={shapes[idx % shapes.length]}
                  color={colors[idx % colors.length]}
                  size="sm"
                />
              </div>

              <h3 className="font-bold text-sm text-[#12345B]">
                {stage.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Phase {stage.step} Deliverable</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
