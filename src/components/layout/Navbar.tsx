'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Curriculum', href: '/programs' },
    { label: 'Labs', href: '/labs' },
    { label: 'Philosophy', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (!href.includes('#') && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-[#D9E6F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Mark & Title */}
          <Link
            href="/"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 shrink-0 group"
          >
            <N7BrandMark size="md" variant="gold" className="transition-transform group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#12345B]">
                  NIT7ER
                </span>
                <span className="label-mono px-2 py-0.5 bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] rounded-full text-[10px]">
                  Academy
                </span>
              </div>
              <p className="label-mono text-[9px] text-[#64748B] hidden sm:block">
                Systems • Mind • Code
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-white/80 border border-[#D9E6F0] rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? 'bg-[#12345B] text-white font-bold shadow-xs'
                      : 'text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA with Pure Essence Pulse Ring */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/apply"
              onClick={() => handleNavClick('/apply')}
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs sm:text-sm font-bold tracking-tight rounded-full transition-all shadow-sm border border-[#12345B]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span>Start Intake</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
            </Link>
          </div>

          {/* Mobile Right Bar: Intake Button + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/apply"
              onClick={() => handleNavClick('/apply')}
              className="btn-press px-3.5 py-1.5 bg-[#12345B] text-white text-xs font-bold font-mono rounded-full shadow-xs"
            >
              Intake
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#12345B] hover:bg-[#EEF7FC] rounded-full transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#12345B]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D9E6F0] bg-[#FAFCFE]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#12345B] text-white'
                      : 'text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D9E6F0] space-y-2">
            <Link
              href="/apply"
              onClick={() => handleNavClick('/apply')}
              className="btn-press w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#12345B] text-white font-bold text-sm rounded-full shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span>Start Diagnostic Intake</span>
              <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
            </Link>
            <p className="text-center font-mono text-[10px] text-[#64748B]">
              Direct Inquiries Hotline: +234 707 076 3135
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
