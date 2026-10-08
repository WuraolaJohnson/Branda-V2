'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { SERVICES, getServicesByCategory } from '@/data/services';
import { MarketCode, CategoryId } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
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
  CheckCircle2,
  Layers,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

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

interface CategoriesPageClientProps {
  marketCode: MarketCode;
}

export const CategoriesPageClient: React.FC<CategoriesPageClientProps> = ({ marketCode }) => {
  const market = MARKETS[marketCode] || MARKETS.ng;
  const [selectedPillar, setSelectedPillar] = useState<string>('all');

  const filteredCategories =
    selectedPillar === 'all'
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === selectedPillar);

  return (
    <div className="min-h-screen bg-brand-offwhite pb-24">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white pt-14 pb-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-brand-navy-200 mb-6 font-semibold">
            <Link href={`/${marketCode}`} className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-coral">Categories Directory</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="coral">
              {market.flag} {market.name} · Complete Brand Ecosystem
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
              8 Specialized Brand Pillars
            </h1>
            <p className="text-base sm:text-lg text-brand-navy-200 leading-relaxed">
              Explore our core capabilities. From conversion-driven web design and custom corporate merch to luxury printcraft and large-format event backdrops, each pillar is engineered for enterprise-grade execution.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-8 pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedPillar('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                selectedPillar === 'all'
                  ? 'bg-brand-coral text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All Categories ({CATEGORIES.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedPillar(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                  selectedPillar === cat.id
                    ? 'bg-brand-coral text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => {
            const Icon = ICON_MAP[cat.iconName] || Sparkles;
            const servicesInCat = getServicesByCategory(cat.id as CategoryId, marketCode);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-3xl border border-brand-navy/10 overflow-hidden shadow-soft hover:shadow-elevated transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative w-full h-52 bg-brand-navy/5 overflow-hidden">
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 600px"
                      fallbackTitle={cat.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md text-brand-navy flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-brand-coral" />
                      </div>
                      {cat.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy text-white shadow-sm">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <h2 className="text-2xl font-extrabold font-display leading-tight drop-shadow-sm">
                          {cat.name}
                        </h2>
                        <p className="text-xs text-white/90 drop-shadow-sm line-clamp-1">
                          {cat.shortDescription}
                        </p>
                      </div>
                      <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex-shrink-0">
                        {servicesInCat.length} {servicesInCat.length === 1 ? 'Solution' : 'Solutions'}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-brand-navy/5">
                      <div className="text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                        Core Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs font-semibold text-brand-navy/80 bg-brand-offwhite px-3 py-2 rounded-xl"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Available Services in this category */}
                    {servicesInCat.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-brand-navy/5">
                        <div className="text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                          Featured Products
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {servicesInCat.map((s) => (
                            <Link
                              key={s.id}
                              href={`/${marketCode}/services/${s.slug}`}
                              className="text-xs font-semibold text-brand-navy/70 hover:text-brand-coral bg-brand-navy/5 hover:bg-brand-coral/10 px-3 py-1.5 rounded-lg transition-colors truncate max-w-[240px]"
                            >
                              • {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/${marketCode}/services?category=${cat.slug}`}
                    className="block w-full"
                  >
                    <Button
                      variant="coral"
                      size="md"
                      className="w-full justify-between group/btn shadow-sm hover:shadow"
                    >
                      <span>Explore All {cat.name} Services</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Cross-Sell Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <Badge variant="coral">Multi-Pillar Brand Bundling</Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display">
              Looking for individual services and quick configurators?
            </h3>
            <p className="text-xs sm:text-sm text-brand-navy-200 leading-relaxed">
              Browse our comprehensive 24-service catalog to search, filter by urgency or industry, customize package options, and place direct orders.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Link href={`/${marketCode}/services`}>
              <Button variant="coral" size="lg" className="w-full shadow-card">
                <span>View Full Services Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href={`/${marketCode}`}>
              <Button variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
