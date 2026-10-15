import React from 'react';
import Link from 'next/link';
import { N7BrandMark } from '@/components/N7BrandMark';
import { ArrowRight, Home, BookOpen, Layers, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full technical-border curve-asymmetric p-8 sm:p-12 bg-white text-center space-y-6 border border-[#D9E6F0] shadow-sm relative overflow-hidden">
        {/* Subtle Watermark */}
        <div
          className="absolute -right-8 -top-8 w-48 h-48 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />

        <div className="space-y-3 relative z-10">
          <N7BrandMark size="lg" variant="gold" className="mx-auto" />
          
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[10px] font-mono font-bold text-[#1769AA]">
            <span>404 // ROUTE UNDEFINED</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight">
            Academic Sector Not Found
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md mx-auto">
            You navigated to an unmapped coordinate. Reconnect with the verified NIT7ER Academy directory sectors below:
          </p>
        </div>

        {/* Directory Recovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono relative z-10">
          <Link
            href="/"
            className="btn-press flex items-center justify-between p-3 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl text-left transition-colors text-[#12345B] font-bold group"
          >
            <span className="flex items-center gap-2">
              <Home className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Academy Core</span>
            </span>
            <ArrowRight className="w-3 h-3 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/programs"
            className="btn-press flex items-center justify-between p-3 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl text-left transition-colors text-[#12345B] font-bold group"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>12 Programs</span>
            </span>
            <ArrowRight className="w-3 h-3 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/labs"
            className="btn-press flex items-center justify-between p-3 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl text-left transition-colors text-[#12345B] font-bold group"
          >
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Studio Labs</span>
            </span>
            <ArrowRight className="w-3 h-3 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="btn-press flex items-center justify-between p-3 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl text-left transition-colors text-[#12345B] font-bold group"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Contact Desk</span>
            </span>
            <ArrowRight className="w-3 h-3 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="pt-2 relative z-10">
          <Link
            href="/apply"
            className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-mono text-xs font-bold rounded-full shadow-sm transition-colors"
          >
            <span>START DIAGNOSTIC INTAKE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
