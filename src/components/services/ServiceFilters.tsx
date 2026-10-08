'use client';

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { UseCase, Industry, Urgency, PopularityTag } from '@/data/types';
import { Filter, RotateCcw, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const USE_CASES: UseCase[] = [
  'Business Launch',
  'Corporate',
  'Events',
  'Marketing',
  'Personal Brand',
  'E-commerce',
];

const INDUSTRIES: Industry[] = [
  'Technology',
  'Fashion',
  'Food & Hospitality',
  'Finance',
  'Real Estate',
  'Healthcare',
  'Education',
];

const URGENCIES: Urgency[] = ['Standard', 'Express'];
const POPULARITY_TAGS: PopularityTag[] = ['Popular', 'Trending', 'New'];

export const ServiceFilters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategory = searchParams.get('category') || 'all';
  const currentUseCase = searchParams.get('useCase') || 'all';
  const currentIndustry = searchParams.get('industry') || 'all';
  const currentUrgency = searchParams.get('urgency') || 'all';
  const currentPopularity = searchParams.get('popularity') || 'all';

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push(pathname);
  };

  const hasActiveFilters =
    currentCategory !== 'all' ||
    currentUseCase !== 'all' ||
    currentIndustry !== 'all' ||
    currentUrgency !== 'all' ||
    currentPopularity !== 'all' ||
    searchParams.has('search');

  return (
    <div className="space-y-6 bg-white p-6 rounded-3xl border border-brand-navy/10 shadow-soft">
      <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10">
        <h3 className="text-base font-bold text-brand-navy font-display flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-coral" />
          Filter Services
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-semibold text-brand-coral hover:text-brand-coral-hover flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Category
        </label>
        <div className="space-y-1">
          <button
            onClick={() => setFilter('category', 'all')}
            className={cn(
              'w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between',
              currentCategory === 'all'
                ? 'bg-brand-navy text-white'
                : 'text-brand-navy/80 hover:bg-brand-navy/5'
            )}
          >
            <span>All Categories</span>
            {currentCategory === 'all' && <Check className="w-3.5 h-3.5 text-brand-coral" />}
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.slug)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between',
                currentCategory === cat.slug
                  ? 'bg-brand-navy text-white'
                  : 'text-brand-navy/80 hover:bg-brand-navy/5'
              )}
            >
              <span>{cat.name}</span>
              {currentCategory === cat.slug && <Check className="w-3.5 h-3.5 text-brand-coral" />}
            </button>
          ))}
        </div>
      </div>

      {/* Use Case Filter */}
      <div className="space-y-2 pt-2 border-t border-brand-navy/10">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Use Case
        </label>
        <select
          value={currentUseCase}
          onChange={(e) => setFilter('useCase', e.target.value)}
          className="w-full px-3 py-2 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
        >
          <option value="all">All Use Cases</option>
          {USE_CASES.map((uc) => (
            <option key={uc} value={uc}>
              {uc}
            </option>
          ))}
        </select>
      </div>

      {/* Industry Filter */}
      <div className="space-y-2 pt-2 border-t border-brand-navy/10">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Industry
        </label>
        <select
          value={currentIndustry}
          onChange={(e) => setFilter('industry', e.target.value)}
          className="w-full px-3 py-2 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
        >
          <option value="all">All Industries</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Urgency Filter */}
      <div className="space-y-2 pt-2 border-t border-brand-navy/10">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Delivery Speed
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('urgency', 'all')}
            className={cn(
              'flex-1 py-1.5 px-2 rounded-xl text-xs font-bold border transition-colors',
              currentUrgency === 'all'
                ? 'bg-brand-navy text-white border-brand-navy'
                : 'bg-white border-brand-navy/15 text-brand-navy hover:bg-brand-navy/5'
            )}
          >
            All
          </button>
          {URGENCIES.map((urg) => (
            <button
              key={urg}
              onClick={() => setFilter('urgency', urg)}
              className={cn(
                'flex-1 py-1.5 px-2 rounded-xl text-xs font-bold border transition-colors',
                currentUrgency.toLowerCase() === urg.toLowerCase()
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white border-brand-navy/15 text-brand-navy hover:bg-brand-navy/5'
              )}
            >
              {urg}
            </button>
          ))}
        </div>
      </div>

      {/* Popularity Filter */}
      <div className="space-y-2 pt-2 border-t border-brand-navy/10">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Status Tag
        </label>
        <div className="flex flex-wrap gap-1.5">
          {POPULARITY_TAGS.map((tag) => {
            const isActive = currentPopularity.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                onClick={() => setFilter('popularity', isActive ? 'all' : tag)}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-bold transition-all border',
                  isActive
                    ? 'bg-brand-coral text-white border-brand-coral shadow-sm'
                    : 'bg-brand-cream/60 border-brand-cream-dark/40 text-brand-navy hover:bg-brand-cream'
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
