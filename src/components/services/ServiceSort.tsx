'use client';

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { SortOption } from '@/data/types';
import { ArrowUpDown } from 'lucide-react';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Most Popular', value: 'popular' },
  { label: 'Newest Arrivals', value: 'newest' },
];

export const ServiceSort: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSort = (searchParams.get('sort') as SortOption) || 'recommended';

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="service-sort-select" className="text-xs font-semibold text-brand-muted hidden sm:inline flex items-center gap-1">
        <ArrowUpDown className="w-3.5 h-3.5 text-brand-coral" />
        <span>Sort By:</span>
      </label>
      <select
        id="service-sort-select"
        aria-label="Sort services"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="px-2.5 sm:px-3.5 py-2 text-xs font-semibold bg-white border border-brand-navy/15 rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40 shadow-sm cursor-pointer max-w-[145px] sm:max-w-none"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
