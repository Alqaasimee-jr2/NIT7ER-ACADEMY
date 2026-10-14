import React from 'react';
import Link from 'next/link';
import { N7BrandMark } from '@/components/N7BrandMark';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#D9E6F0] bg-white pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-2.5">
              <Link href="/" className="inline-block group">
                <N7BrandMark type="logo" variant="gold" size="md" className="transition-transform group-hover:scale-105" />
              </Link>
              <div>
                <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] text-[10px]">
                  Institute of Applied Creative Technology // Lagos &amp; Global
                </span>
              </div>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
              Practical education in software engineering, cognitive focus, technical writing, and computing foundations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] bg-[#EEF7FC] text-[#12345B] rounded-full flex items-center justify-center hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Faculties */}
          <div className="md:col-span-4 space-y-3">
            <span className="label-mono block text-[#12345B]">
              Academic Disciplines
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link href="/programs#creative-tech" className="gold-link">
                  01. Creative Tech &amp; Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs#cognitive-performance" className="gold-link">
                  02. Cognitive Performance &amp; Systems (Flow7)
                </Link>
              </li>
              <li>
                <Link href="/programs#writing-thought-leadership" className="gold-link">
                  03. Writing &amp; Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs#computer-education" className="gold-link">
                  04. Computer Education &amp; Digital Foundations
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="label-mono block text-[#12345B]">
              Incubator &amp; Studio
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link href="/labs" className="gold-link flex items-center gap-1">
                  <span>NIT7ER Labs Showcase</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="gold-link flex items-center gap-1">
                  <span>Founder Thesis &amp; Story</span>
                </Link>
              </li>
              <li>
                <Link href="/apply" className="font-bold text-[#12345B] hover:text-[#1769AA] transition-colors">
                  Apply for Admission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="gold-link flex items-center gap-1">
                  <span>Contact &amp; Admissions Desk</span>
                </Link>
              </li>
              <li>
                <a
                  href={FOUNDER_INFO.studioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-link flex items-center gap-1"
                >
                  <span>NIT7ER Studio Central</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D9E6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 NIT7ER Academy. All rights reserved. Directed by {FOUNDER_INFO.name}.</p>
          <div className="flex items-center gap-4">
            <span className="label-mono flex items-center gap-1.5 text-[#12345B]">
              <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
              <span>Next.js 16 • React 19 • Tailwind v4</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
