import React from 'react';
import Link from 'next/link';
import {
  Code2,
  BrainCircuit,
  PenTool,
  Monitor,
  Flame,
  ArrowRight,
  Send,
  Layers,
} from 'lucide-react';
import { GeometricShape } from '@/components/GeometricShapes';

export function QuickLaunchpad() {
  const launchpadItems = [
    {
      title: 'Creative Technology',
      subtitle: 'Next.js 16, Flutter, AI integrations & APIs',
      href: '/programs#creative-tech',
      icon: Code2,
      badge: 'Track 01',
      badgeColor: 'bg-blue-100 text-[#12345B] border-blue-200',
      shape: 'square' as const,
      shapeColor: 'navy' as const,
    },
    {
      title: 'Cognitive Systems (Flow7)',
      subtitle: 'Reality logging, stamina & focus frameworks',
      href: '/programs#cognitive-performance',
      icon: BrainCircuit,
      badge: 'Track 02',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      shape: 'hexagon' as const,
      shapeColor: 'gold' as const,
    },
    {
      title: 'Writing & Thought Leadership',
      subtitle: 'Technical specs, architectural prose & copy',
      href: '/programs#writing-thought-leadership',
      icon: PenTool,
      badge: 'Track 03',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      shape: 'triangle' as const,
      shapeColor: 'emerald' as const,
    },
    {
      title: 'Computer Education',
      subtitle: 'First principles, algorithms & smartboards',
      href: '/programs#computer-education',
      icon: Monitor,
      badge: 'Track 04',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
      shape: 'circle' as const,
      shapeColor: 'amber' as const,
    },
    {
      title: 'NIT7ER Labs Showcase',
      subtitle: 'Live products: Flow7, Clasquera, Lang Huey',
      href: '/labs',
      icon: Layers,
      badge: 'Proof of Work',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      shape: 'hexagon' as const,
      shapeColor: 'blue' as const,
    },
    {
      title: 'Cohort Enrollment',
      subtitle: 'Hybrid application with WhatsApp confirmation',
      href: '/apply',
      icon: Send,
      badge: 'Admissions Open',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      shape: 'square' as const,
      shapeColor: 'gold' as const,
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between pb-1 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-500" />
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#12345B]">
            Academy Launchpad &amp; Core Tracks
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-semibold">Immediate pathway access</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {launchpadItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group na-card p-3.5 sm:p-5 flex flex-col justify-between hover:border-[#12345B] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-[#12345B] group-hover:text-amber-400 text-[#12345B] flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <GeometricShape type={item.shape} color={item.shapeColor} size="sm" />
                </div>
                <div className="space-y-1">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 border rounded-xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#12345B] group-hover:text-[#1769AA] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500 group-hover:text-[#12345B]">
                <span>Explore Track</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
