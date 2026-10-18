'use client';

import React, { useState, useEffect } from 'react';
import { FACULTIES } from '@/data/academyData';
import { Cpu, Brain, PenTool, Monitor, Compass } from 'lucide-react';

export function StickyFacultyNav() {
  const [activeSection, setActiveSection] = useState<string>('');

  const getIcon = (id: string, isActive: boolean) => {
    const colorClass = isActive ? 'text-[#E6AD3C]' : 'text-[#1769AA]';
    switch (id) {
      case 'creative-tech':
        return <Cpu className={`w-3.5 h-3.5 ${colorClass}`} />;
      case 'cognitive-performance':
        return <Brain className={`w-3.5 h-3.5 ${colorClass}`} />;
      case 'writing-thought-leadership':
        return <PenTool className={`w-3.5 h-3.5 ${colorClass}`} />;
      case 'computer-education':
        return <Monitor className={`w-3.5 h-3.5 ${colorClass}`} />;
      default:
        return <Compass className={`w-3.5 h-3.5 ${colorClass}`} />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    FACULTIES.forEach((fac) => {
      const el = document.getElementById(fac.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[60px] sm:top-[68px] z-30 bg-[#FAFCFE]/95 backdrop-blur-md border border-[#D9E6F0] rounded-2xl p-2 shadow-xs transition-all">
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 sm:gap-2">
        <span className="label-mono text-[9px] text-[#64748B] pl-2 hidden md:inline shrink-0 font-bold">
          QUICK JUMP:
        </span>
        {FACULTIES.map((fac) => {
          const isActive = activeSection === fac.id;
          return (
            <a
              key={fac.id}
              href={`#${fac.id}`}
              className={`btn-press flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all ${
                isActive
                  ? 'bg-[#12345B] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC] border border-[#D9E6F0]'
              }`}
            >
              <span className="shrink-0">{getIcon(fac.id, isActive)}</span>
              <span className="truncate">{fac.badge}</span>
              <span className="opacity-70 text-[10px] shrink-0">({fac.programs.length})</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
