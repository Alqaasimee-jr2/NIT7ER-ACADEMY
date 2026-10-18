'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { N7BrandMark } from '@/components/N7BrandMark';
import { FACULTIES, FOUNDER_INFO } from '@/data/academyData';

const NAV_LINKS = [
  { href: '/programs', label: 'Faculties' },
  { href: '/labs', label: 'Studio Labs' },
  { href: '/flow7', label: 'Flow7 Simulator' },
  { href: '/team', label: 'Leadership' },
  { href: '/about', label: 'Philosophy' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href?: string) => {
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined' && (!href || !href.includes('#'))) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const openSearchPalette = () => {
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFCFE]/95 backdrop-blur-md border-b border-[#12345B]/10 transition-all">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10 xl:px-12 gap-3">
        {/* Brand Identity */}
        <Link
          href="/"
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none shrink-0"
        >
          <N7BrandMark size="md" variant="gold" className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-[#12345B] leading-none">
              NIT7ER <span className="text-[#1769AA] font-bold">ACADEMY</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#4A607A] uppercase mt-1">
              CREATIVE TECH &amp; SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname?.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 xl:px-4 py-2 rounded-full text-[13px] xl:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#EEF7FC] text-[#1769AA] shadow-2xs border border-[#D5E3EF]'
                    : 'text-[#4A607A] hover:text-[#12345B] hover:bg-[#12345B]/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openSearchPalette}
            aria-label="Search curriculum and pages (Ctrl+K)"
            className="inline-flex items-center gap-2 rounded-full border border-[#D5E3EF] bg-white px-3.5 py-2 text-xs font-medium text-[#4A607A] hover:border-[#1769AA] hover:text-[#12345B] transition-all shadow-2xs cursor-pointer"
          >
            <svg className="h-3.5 w-3.5 text-[#1769AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
            </svg>
            <span className="hidden xl:inline">Search</span>
            <kbd className="rounded bg-[#EEF7FC] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#12345B]">
              ⌘K
            </kbd>
          </button>

          <a
            href={FOUNDER_INFO.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#4A607A] hover:text-[#1769AA] transition-colors px-2 py-1.5"
          >
            <span>STUDIO</span>
            <span className="text-[10px]">↗</span>
          </a>

          <Link
            href="/apply"
            onClick={() => handleNavClick('/apply')}
            className="inline-flex items-center justify-center rounded-full bg-[#12345B] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm hover:bg-[#1769AA] transition-all whitespace-nowrap"
          >
            Start Intake
          </Link>
        </div>

        {/* Mobile & Tablet Controls (<1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={openSearchPalette}
            aria-label="Open curriculum search"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#12345B]/15 bg-white text-[#12345B] hover:bg-[#EEF7FC] transition-colors"
          >
            <svg className="h-4 w-4 text-[#1769AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
            </svg>
          </button>

          <Link
            href="/apply"
            onClick={() => handleNavClick('/apply')}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#12345B] px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase shadow-sm hover:bg-[#1769AA] transition-all"
          >
            Apply
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#12345B]/15 text-[#12345B] hover:bg-[#EEF7FC] transition-colors"
          >
            <span className="sr-only">Toggle Menu</span>
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-b border-[#12345B]/10 bg-[#FAFCFE] px-4 sm:px-6 py-5 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname?.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EEF7FC] text-[#1769AA] font-semibold'
                      : 'text-[#12345B] hover:bg-[#12345B]/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#1769AA]">→</span>
                </Link>
              );
            })}

            {/* Direct Faculty Quick-Jump inside Mobile Menu */}
            <div className="pt-3 mt-2 border-t border-[#12345B]/10">
              <span className="block px-4 mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#4A607A]">
                Direct Faculty Hubs
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {FACULTIES.map((faculty) => (
                  <Link
                    key={faculty.id}
                    href={`/programs/${faculty.id}`}
                    onClick={() => handleNavClick(`/programs/${faculty.id}`)}
                    className="rounded-xl border border-[#12345B]/10 bg-white px-3.5 py-2.5 text-xs font-semibold text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors flex items-center justify-between"
                  >
                    <span className="truncate pr-2">
                      <span className="font-mono text-[10px] text-[#1769AA] mr-1.5">{faculty.number}.</span>
                      {faculty.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#4A607A] shrink-0">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-[#12345B]/10 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/apply"
                onClick={() => handleNavClick('/apply')}
                className="flex-1 flex items-center justify-center rounded-xl bg-[#12345B] py-3.5 px-4 text-xs font-bold tracking-wider text-white uppercase hover:bg-[#1769AA] transition-colors"
              >
                Start Intake Application →
              </Link>
              <a
                href={FOUNDER_INFO.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#12345B]/15 bg-white py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
              >
                <span>NIT7ER Studio Division</span>
                <span>↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
