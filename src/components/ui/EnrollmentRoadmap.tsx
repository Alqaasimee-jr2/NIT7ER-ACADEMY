import React from 'react';
import Link from 'next/link';
import { ENROLLMENT_STAGES } from '@/data/academyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function EnrollmentRoadmap() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E5E0] pb-3">
        <div>
          <span className="label-mono text-[#C9A84C]">Admission Pipeline</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#121212] tracking-tight mt-1">
            The 4-Stage Studio Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-xl mt-0.5">
            From diagnostic intake to deploying live production software and defending your technical architecture.
          </p>
        </div>
        <Link
          href="/apply"
          className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212]"
        >
          <span>START DIAGNOSTIC APPLICATION</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENROLLMENT_STAGES.map((stage) => (
          <div
            key={stage.step}
            className="technical-border p-5 bg-white flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-2xl font-bold text-[#121212]">
                  {stage.step}
                </span>
                <span className="label-mono text-[9px] text-[#C9A84C]">
                  [PHASE // 0{stage.step}]
                </span>
              </div>

              <h3 className="font-bold text-sm text-[#121212] leading-snug">
                {stage.title}
              </h3>

              <p className="text-xs text-[#71717A] leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-[#E5E5E0] flex items-center gap-1.5 font-mono text-[10px] text-[#71717A]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>STAGE GATE VALIDATED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
