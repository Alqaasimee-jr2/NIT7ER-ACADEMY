import React from 'react';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';
import { Cpu, Brain, PenTool, Monitor, ArrowRight, Clock, Layers } from 'lucide-react';

export function FacultyOverviewGrid() {
  const getFacultyIcon = (id: string) => {
    switch (id) {
      case 'creative-tech':
        return <Cpu className="w-5 h-5 text-[#1769AA]" />;
      case 'cognitive-performance':
        return <Brain className="w-5 h-5 text-[#1769AA]" />;
      case 'writing-thought-leadership':
        return <PenTool className="w-5 h-5 text-[#1769AA]" />;
      case 'computer-education':
        return <Monitor className="w-5 h-5 text-[#1769AA]" />;
      default:
        return <Layers className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D9E6F0] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">ACADEMIC DISCIPLINES</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B] tracking-tight mt-1.5">
            4 Foundational Faculties
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mt-0.5">
            12 specialized tracks designed for builders who want deep practical competence, focus stamina, and clear technical prose.
          </p>
        </div>
        <Link
          href="/programs"
          className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B] shrink-0"
        >
          <span>VIEW FULL CATALOG &amp; ROADMAPS</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {FACULTIES.map((fac) => (
          <div
            key={fac.id}
            className="technical-border curve-soft p-5 bg-white border border-[#D9E6F0] hover:border-[#1769AA] rounded-2xl flex flex-col justify-between space-y-4 shadow-xs transition-all group"
          >
            <div className="space-y-3">
              {/* Badge & Number */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="label-mono px-2 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full font-bold">
                  FACULTY {fac.number}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#64748B]">
                  <Clock className="w-3 h-3 text-[#1769AA]" />
                  <span>{fac.duration}</span>
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] shrink-0 group-hover:scale-105 transition-transform">
                  {getFacultyIcon(fac.id)}
                </div>
                <div>
                  <h3 className="text-base font-black text-[#12345B] group-hover:text-[#1769AA] transition-colors leading-snug">
                    {fac.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#1769AA] font-semibold block mt-0.5">
                    {fac.programs.length} Specialized Tracks
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                {fac.description}
              </p>

              {/* Program Tracks List */}
              <div className="pt-2 border-t border-[#D9E6F0]/80 space-y-1.5">
                <span className="label-mono text-[9px] text-[#64748B] block font-bold">
                  SPECIALIZED TRACKS:
                </span>
                <ul className="space-y-1 text-xs text-[#12345B]">
                  {fac.programs.map((prog) => (
                    <li
                      key={prog.id}
                      className="flex items-center justify-between text-[11px] font-mono py-0.5"
                    >
                      <span className="font-bold text-[#1769AA]">{prog.code}</span>
                      <span className="truncate max-w-[170px] text-[#475569]">{prog.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Action Link */}
            <div className="pt-3 border-t border-[#D9E6F0] flex items-center justify-between">
              <Link
                href={`/programs/${fac.id}`}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors"
              >
                <span>Inspect Syllabi</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href={`/apply?track=${fac.id}`}
                className="text-[10px] font-mono px-2.5 py-1 bg-[#EEF7FC] hover:bg-[#12345B] hover:text-white text-[#12345B] rounded-full font-bold transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
