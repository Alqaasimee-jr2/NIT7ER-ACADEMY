'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { GeometricShape } from '@/components/GeometricShapes';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Curriculum & Tracks', href: '/programs' },
    { label: 'Labs & Showcase', href: '/labs' },
    { label: 'Philosophy & Story', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Institution Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#12345B] text-amber-400 flex items-center justify-center border border-[#0A1E36] shadow-xs group-hover:scale-105 transition-transform">
              <GeometricShape type="hexagon" color="gold" size="md" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#12345B]">
                  NIT7ER
                </span>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-amber-100 text-amber-900 border border-amber-300">
                  Academy
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest hidden sm:block">
                Creative Tech &amp; Mind Institute
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#12345B]'
                      : 'text-slate-600 hover:text-[#12345B] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Apply CTA & Quick Links */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/apply"
              className="na-action inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#12345B] hover:bg-[#0A1E36] text-white text-xs sm:text-sm font-bold shadow-xs border border-[#12345B] transition-colors"
            >
              <span>Apply to Cohort</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/apply"
              className="px-3 py-1.5 rounded-md bg-[#12345B] text-white text-xs font-bold"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#12345B]'
                      : 'text-slate-700 hover:text-[#12345B] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#12345B] text-white font-bold text-sm shadow-xs"
            >
              <span>Apply for Cohort Enrollment</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
