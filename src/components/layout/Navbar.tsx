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
    { label: 'Curriculum & Tracks', href: '/programs' },
    { label: 'Labs & Incubator', href: '/labs' },
    { label: 'Philosophy & Story', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Mark & Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <N7BrandMark size="md" variant="carbon" className="group-hover:border-[#E6AD3C] transition-colors" />
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
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-white/70 border border-[#D9E6F0] rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all ${
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
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/apply"
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs sm:text-sm font-bold tracking-tight rounded-full transition-all shadow-sm border border-[#12345B]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span>Start Intake</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/apply"
              className="px-3 py-1.5 bg-[#12345B] text-white text-xs font-bold rounded-full"
            >
              Apply
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
        <div className="md:hidden border-b border-[#D9E6F0] bg-[#FAFCFE]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
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

          <div className="pt-3 border-t border-[#D9E6F0]">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-press w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#12345B] text-white font-bold text-sm rounded-full shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span>Start Diagnostic Intake</span>
              <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
