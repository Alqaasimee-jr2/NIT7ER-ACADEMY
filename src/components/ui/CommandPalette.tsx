'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FACULTIES, LAB_PROJECTS } from '@/data/academyData';
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  Layers,
  Send,
  Mail,
  Home,
  Compass,
} from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

interface SearchItem {
  id: string;
  title: string;
  category: 'Program' | 'Faculty' | 'Lab' | 'Page';
  subtitle: string;
  href: string;
  badge?: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile all search items
  const allItems: SearchItem[] = [
    // Pages
    { id: 'page-home', title: 'Home Overview', category: 'Page', subtitle: 'Main landing and studio overview', href: '/' },
    { id: 'page-programs', title: 'Academic Catalog', category: 'Page', subtitle: 'All 4 faculties and 12 programs', href: '/programs' },
    { id: 'page-labs', title: 'NIT7ER Labs Showcase', category: 'Page', subtitle: 'Incubated systems and case studies', href: '/labs' },
    { id: 'page-about', title: 'Philosophy & Founder Story', category: 'Page', subtitle: 'Founder story and institutional thesis', href: '/about' },
    { id: 'page-apply', title: 'Cohort Application', category: 'Page', subtitle: 'Diagnostic intake queue', href: '/apply' },
    { id: 'page-contact', title: 'Contact & Admissions Desk', category: 'Page', subtitle: 'Direct lines and WhatsApp inquiry', href: '/contact' },

    // Faculties
    ...FACULTIES.map((fac) => ({
      id: `faculty-${fac.id}`,
      title: `${fac.badge}: ${fac.title}`,
      category: 'Faculty' as const,
      subtitle: fac.tagline,
      href: `/programs#${fac.id}`,
      badge: fac.badge,
    })),

    // Programs
    ...FACULTIES.flatMap((fac) =>
      fac.programs.map((prog) => ({
        id: `prog-${prog.id}`,
        title: `${prog.code}: ${prog.title}`,
        category: 'Program' as const,
        subtitle: `${prog.duration} • ${prog.tagline}`,
        href: `/programs#${fac.id}`,
        badge: prog.code,
      }))
    ),

    // Labs
    ...LAB_PROJECTS.map((lab) => ({
      id: `lab-${lab.id}`,
      title: lab.title,
      category: 'Lab' as const,
      subtitle: `${lab.category} — ${lab.tagline}`,
      href: `/labs#${lab.id}`,
      badge: lab.badge,
    })),
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          (item.badge && item.badge.toLowerCase().includes(query.toLowerCase()))
      )
    : allItems.slice(0, 8); // Default top 8 items

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomTrigger = () => setIsOpen(true);
    window.addEventListener('open-command-palette', handleCustomTrigger);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-command-palette', handleCustomTrigger);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    router.push(item.href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick Navigator Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="technical-border curve-asymmetric relative w-full max-w-xl bg-white border border-[#D9E6F0] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#D9E6F0] bg-[#FAFCFE]">
          <Search className="w-4 h-4 text-[#1769AA] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search programs, faculties, labs, or topics (e.g. 101, Flutter, Focus)..."
            className="flex-1 bg-transparent border-none text-xs sm:text-sm text-[#12345B] placeholder:text-[#94A3B8] focus:outline-none font-medium"
          />
          <span className="label-mono text-[9px] px-2 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#64748B] rounded">
            ESC to close
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#64748B]">
              No matching programs or resources found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? 'bg-[#12345B] text-white'
                      : 'hover:bg-[#EEF7FC] text-[#12345B]'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                          isSelected
                            ? 'bg-white/20 text-[#E6AD3C]'
                            : 'bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0]'
                        }`}
                      >
                        {item.category.toUpperCase()}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p
                      className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-[#D9E6F0]' : 'text-[#64748B]'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected ? 'text-[#E6AD3C]' : 'text-[#94A3B8]'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#FAFCFE] border-t border-[#D9E6F0] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
          <span>↑↓ to navigate • ↵ to select</span>
          <span className="text-[#1769AA] font-bold">NIT7ER Studio Navigator</span>
        </div>
      </div>
    </div>
  );
}
