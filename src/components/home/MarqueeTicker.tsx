'use client';

import React from 'react';
import { Sparkles, Zap, Star, ShieldCheck, Award, Rocket } from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Sparkles, text: 'Logo Design' },
  { icon: Zap, text: 'Instant Turnaround' },
  { icon: Star, text: '99.4% Satisfaction' },
  { icon: ShieldCheck, text: 'Quality Guaranteed' },
  { icon: Award, text: 'Business Cards' },
  { icon: Rocket, text: 'Event Backdrops' },
  { icon: Sparkles, text: 'Branded Merch' },
  { icon: Zap, text: 'Multi-Currency' },
  { icon: Star, text: '15,000+ Orders' },
  { icon: ShieldCheck, text: 'Corporate Gifts' },
  { icon: Award, text: 'Print & Digital' },
  { icon: Rocket, text: 'Custom Mailers' },
];

// Duplicate for seamless loop
const ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand-navy py-3 border-y border-white/10">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-6 text-xs font-bold text-white/80 uppercase tracking-widest"
            >
              <Icon className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />
              <span>{item.text}</span>
              <span className="w-1 h-1 rounded-full bg-brand-coral/50 mx-2 flex-shrink-0" />
            </span>
          );
        })}
      </div>
    </div>
  );
};
