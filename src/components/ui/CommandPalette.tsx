'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FACULTIES, LAB_PROJECTS, STUDIO_TEAM } from '@/data/academyData';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, []);

  const allItems = useMemo(() => {
    const pages = [
      { id: 'page-home', title: 'Academy Home', category: 'Page', href: '/', sub: 'Main Institutional Overview' },
      { id: 'page-programs', title: 'Faculties & Programs', category: 'Page', href: '/programs', sub: '4 Core Faculties & 12 Specialized Tracks' },
      { id: 'page-labs', title: 'Incubated Studio Labs', category: 'Page', href: '/labs', sub: 'Production Proof & Deployed Systems' },
      { id: 'page-flow7', title: 'Flow7 Focus Simulator', category: 'Interactive Lab', href: '/flow7', sub: '90-Minute Ultradian Rhythm & Reality Logging Engine' },
      { id: 'page-team', title: 'Leadership & Faculty Directors', category: 'Page', href: '/team', sub: 'Meet the Architects Behind NIT7ER' },
      { id: 'page-about', title: 'Philosophy & Manifesto', category: 'Page', href: '/about', sub: 'Competence Over Credentials' },
      { id: 'page-contact', title: 'Direct Studio Channel', category: 'Page', href: '/contact', sub: 'Inquiries, Partnerships & Corporate Training' },
      { id: 'page-apply', title: 'Start Cohort Intake', category: 'Admissions', href: '/apply', sub: 'Diagnostic Application Portal' },
    ];

    const faculties = FACULTIES.map((f) => ({
      id: `fac-${f.id}`,
      title: `${f.badge}: ${f.title}`,
      category: 'Faculty',
      href: `/programs/${f.id}`,
      sub: f.subtitle,
    }));

    const programs = FACULTIES.flatMap((f) =>
      f.programs.map((p) => ({
        id: `prog-${p.id}`,
        title: `${p.code}: ${p.title}`,
        category: 'Program',
        href: `/programs/${f.id}/${p.id}`,
        sub: `${f.badge} • ${p.duration} • ${p.level}`,
      }))
    );

    const labs = LAB_PROJECTS.map((l) => ({
      id: `lab-${l.id}`,
      title: l.title,
      category: 'Studio Lab',
      href: `/labs/${l.id}`,
      sub: `${l.category} • ${l.tagline}`,
    }));

    const directors = STUDIO_TEAM.map((m) => ({
      id: `team-${m.id}`,
      title: m.name,
      category: 'Leadership',
      href: `/team#${m.id}`,
      sub: `${m.role} • ${m.discipline}`,
    }));

    return [...pages, ...faculties, ...programs, ...labs, ...directors];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems.slice(0, 10);
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.sub.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center bg-[#12345B]/60 backdrop-blur-xs pt-12 sm:pt-20 px-3 sm:px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-[#12345B]/15 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-[#12345B]/10 px-3.5 sm:px-4 py-3.5 gap-2">
          <svg className="h-5 w-5 text-[#1769AA] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs (SWE-101), faculties, labs, or pages..."
            className="w-full text-sm text-[#12345B] placeholder-[#4A607A]/60 focus:outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md bg-[#EEF7FC] px-2 py-1 font-mono text-[10px] font-bold text-[#4A607A] hover:text-[#12345B] shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[65vh] sm:max-h-96 overflow-y-auto p-2 divide-y divide-[#12345B]/5">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-sm text-[#4A607A]">
              No matching programs, labs, or pages found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.href)}
                className="w-full flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left hover:bg-[#EEF7FC] transition-colors group"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-display text-sm font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#4A607A] line-clamp-1 mt-0.5">{item.sub}</div>
                </div>
                <span className="shrink-0 rounded-full bg-[#12345B]/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#1769AA]">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#12345B]/10 bg-[#FAFCFE] px-4 py-2.5 text-[11px] text-[#4A607A]">
          <span>Click any item to navigate directly</span>
          <span className="font-mono">⌘K / Ctrl+K</span>
        </div>
      </div>
    </div>
  );
}
