import React from 'react';
import Link from 'next/link';
import {
  Code2,
  BrainCircuit,
  PenTool,
  Monitor,
  Layers,
  ArrowRight,
  Send,
} from 'lucide-react';

export function QuickLaunchpad() {
  const launchpadItems = [
    {
      index: '01',
      title: 'Creative Technology',
      subtitle: 'Next.js 16, Flutter, AI telemetry & edge systems',
      href: '/programs#creative-tech',
      icon: Code2,
      badge: 'FACULTY',
    },
    {
      index: '02',
      title: 'Cognitive Systems (Flow7)',
      subtitle: 'Reality logging, stamina & focus frameworks',
      href: '/programs#cognitive-performance',
      icon: BrainCircuit,
      badge: 'STAMINA',
    },
    {
      index: '03',
      title: 'Writing & Thought Leadership',
      subtitle: 'Technical specs, architectural prose & copy',
      href: '/programs#writing-thought-leadership',
      icon: PenTool,
      badge: 'PROSE',
    },
    {
      index: '04',
      title: 'Computer Education',
      subtitle: 'First principles, algorithms & smartboards',
      href: '/programs#computer-education',
      icon: Monitor,
      badge: 'FOUNDATIONS',
    },
    {
      index: '05',
      title: 'NIT7ER Labs Showcase',
      subtitle: 'Live products: Flow7, Clasquera, Lang Huey',
      href: '/labs',
      icon: Layers,
      badge: 'PORTFOLIO',
    },
    {
      index: '06',
      title: 'Cohort Application',
      subtitle: 'Hybrid diagnostic with WhatsApp confirmation',
      href: '/apply',
      icon: Send,
      badge: 'ADMISSIONS',
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E0]">
        <div className="flex items-center gap-2">
          <span className="label-mono text-[#C9A84C]">QUICK ACCESS</span>
          <span className="text-xs font-bold text-[#121212]">
            Studio Core Navigation
          </span>
        </div>
        <span className="label-mono text-[10px] text-[#71717A]">
          Direct Endpoint Launchpad
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {launchpadItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group n7-card p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-sm bg-[#FAF9F6] border border-[#E5E5E0] group-hover:border-[#C9A84C] group-hover:bg-[#121212] group-hover:text-[#F5C842] text-[#121212] flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="label-mono text-[9px] text-[#71717A] group-hover:text-[#C9A84C]">
                    [{item.index} // {item.badge}]
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#121212] group-hover:text-[#9B7C28] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#71717A] line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#E5E5E0] flex items-center justify-between text-xs font-mono font-bold text-[#71717A] group-hover:text-[#121212]">
                <span className="text-[11px]">ACCESS SECTOR</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C9A84C]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
