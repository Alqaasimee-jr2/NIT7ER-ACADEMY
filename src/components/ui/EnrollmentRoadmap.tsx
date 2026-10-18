import React from 'react';
import Link from 'next/link';
import { ENROLLMENT_STAGES } from '@/data/academyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function EnrollmentRoadmap() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E6F0] pb-4">
        <div>
          <span className="label-mono px-3 py-1 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Admission Pipeline
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] tracking-tight mt-2">
            The 4-Stage Studio Trajectory
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mt-1">
            From diagnostic intake to deploying live production software and defending your technical architecture.
          </p>
        </div>
        <Link
          href="/apply"
          className="gold-link inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#12345B] shrink-0"
        >
          <span>START DIAGNOSTIC INTAKE</span>
          <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ENROLLMENT_STAGES.map((stage) => (
          <div
            key={stage.step}
            className="technical-border curve-soft p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] transition-all hover:-translate-y-0.5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono">
                <span className="font-display text-3xl font-extrabold text-[#12345B]">
                  {stage.step}
                </span>
                <span className="label-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0]">
                  [PHASE // 0{stage.step}]
                </span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-[#12345B] leading-snug">
                {stage.title}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#D9E6F0] flex items-center gap-2 font-mono text-[11px] font-semibold text-[#64748B]">
              <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0" />
              <span>STAGE GATE VALIDATED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
