import React from 'react';
import Link from 'next/link';
import { ENROLLMENT_STAGES } from '@/data/academyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function EnrollmentRoadmap() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D9E6F0] pb-3">
        <div>
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Admission Pipeline
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B] tracking-tight mt-1.5">
            The 4-Stage Studio Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mt-0.5">
            From diagnostic intake to deploying live production software and defending your technical architecture.
          </p>
        </div>
        <Link
          href="/apply"
          className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B]"
        >
          <span>START DIAGNOSTIC INTAKE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENROLLMENT_STAGES.map((stage) => (
          <div
            key={stage.step}
            className="technical-border curve-soft p-5 bg-white flex flex-col justify-between space-y-4 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] transition-all hover:-translate-y-0.5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-2xl font-bold text-[#12345B]">
                  {stage.step}
                </span>
                <span className="label-mono text-[9px] px-2 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0]">
                  [PHASE // 0{stage.step}]
                </span>
              </div>

              <h3 className="font-bold text-sm text-[#12345B] leading-snug">
                {stage.title}
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-[#D9E6F0] flex items-center gap-1.5 font-mono text-[10px] text-[#64748B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>STAGE GATE VALIDATED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
