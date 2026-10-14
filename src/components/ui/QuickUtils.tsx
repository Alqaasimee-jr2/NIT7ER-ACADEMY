'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp, Search, Check, Copy } from 'lucide-react';

export function NavigationScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // When navigating to a new path without a hash anchor, scroll to top instantly
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="btn-press fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#12345B] hover:bg-[#1769AA] text-white flex items-center justify-center shadow-lg border border-[#E6AD3C]/40 transition-all group"
    >
      <ArrowUp className="w-4 h-4 text-[#E6AD3C] group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

export function CommandPaletteTrigger() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open search command palette"
      className="btn-press flex items-center gap-2 px-3 py-1.5 bg-[#EEF7FC] hover:bg-[#D9E6F0] border border-[#D9E6F0] rounded-full text-xs font-mono text-[#64748B] hover:text-[#12345B] transition-colors"
    >
      <Search className="w-3.5 h-3.5 text-[#1769AA]" />
      <span className="hidden sm:inline">Search tracks...</span>
      <kbd className="text-[10px] bg-white px-1.5 py-0.2 rounded border border-[#D9E6F0] text-[#12345B] font-bold">
        ⌘K
      </kbd>
    </button>
  );
}

export function CopyableItem({
  text,
  label,
  className = '',
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${text}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-colors border ${
        copied
          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
          : 'bg-[#EEF7FC] text-[#12345B] border-[#D9E6F0] hover:border-[#1769AA]'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-600" />
          <span className="font-bold">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3 text-[#1769AA]" />
          <span>{label || text}</span>
        </>
      )}
    </button>
  );
}
