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
            <N7BrandMark size="md" variant="carbon" className="group-hover:border-[#C9A84C] transition-colors" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#121212]">
                  NIT7ER
                </span>
                <span className="label-mono px-1.5 py-0.5 bg-[#F9F3E5] text-[#9B7C28] border border-[#E5E5E0]">
                  Academy
                </span>
              </div>
              <p className="label-mono text-[9px] text-[#71717A] hidden sm:block">
                Systems • Mind • Code
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs lg:text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#121212] font-bold border-b-2 border-[#C9A84C]'
                      : 'text-[#71717A] hover:text-[#121212] hover:bg-black/5 rounded-xs'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121212] hover:bg-[#27272A] text-white text-xs sm:text-sm font-bold tracking-tight transition-all border border-[#121212] shadow-xs"
            >
              <span>Apply for Cohort</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F5C842]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/apply"
              className="px-3 py-1.5 bg-[#121212] text-white text-xs font-bold"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121212] hover:bg-black/5 rounded-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#121212]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E5E0] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-white text-[#121212] border-l-2 border-[#C9A84C]'
                      : 'text-[#71717A] hover:text-[#121212]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5E5E0]">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#121212] text-white font-bold text-sm"
            >
              <span>Apply for Cohort Enrollment</span>
              <ArrowRight className="w-4 h-4 text-[#F5C842]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
