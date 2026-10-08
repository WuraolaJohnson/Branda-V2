'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { MarketCode } from '@/data/types';
import {
  Globe,
  Gift,
  Palette,
  Camera,
  Printer,
  Sparkles,
  Package,
  Shirt,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Gift,
  Palette,
  Camera,
  Printer,
  Sparkles,
  Package,
  Shirt,
};

interface MegaMenuProps {
  marketCode: MarketCode;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ marketCode, onClose }) => {
  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-brand-navy/10 shadow-elevated z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Header row */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-navy/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-coral" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
              Branda Categories
            </span>
            <span className="text-xs text-brand-muted hidden sm:inline">
              — Browse tailored solutions by capability
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/${marketCode}/categories`}
              onClick={onClose}
              className="text-xs font-bold text-brand-navy hover:text-brand-coral flex items-center gap-1 group"
            >
              <span>All Categories Directory</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-coral group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={`/${marketCode}/services`}
              onClick={onClose}
              className="text-xs font-bold text-brand-coral hover:text-brand-coral-hover flex items-center gap-1 group"
            >
              <span>Services Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4-Column Compact Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Sparkles;
            return (
              <Link
                key={cat.id}
                href={`/${marketCode}/services?category=${cat.slug}`}
                onClick={onClose}
                className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-brand-navy/10 hover:bg-brand-offwhite transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-coral group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-brand-navy group-hover:text-brand-coral transition-colors truncate">
                      {cat.name}
                    </span>
                    {cat.badge && (
                      <span className="text-[9px] font-bold text-brand-navy/70 bg-brand-mint/60 px-1.5 py-0.2 rounded-full uppercase tracking-wider flex-shrink-0">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-brand-muted truncate leading-tight mt-0.5">
                    {cat.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Footer Strip */}
        <div className="mt-3 pt-2.5 border-t border-brand-navy/5 flex items-center text-[11px] text-brand-muted">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-semibold text-brand-navy/70 flex-shrink-0">Popular:</span>
            <span className="truncate">
              Business Cards • Logo Identity • Branded Mugs • Web Design • Pull-up Banners • Mailer Boxes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
