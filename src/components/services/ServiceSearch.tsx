'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';

export const ServiceSearch: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSearch = searchParams.get('search') || '';
  const [term, setTerm] = useState(currentSearch);

  useEffect(() => {
    setTerm(currentSearch);
  }, [currentSearch]);

  const handleSearch = (val: string) => {
    setTerm(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val.trim()) {
      params.set('search', val.trim());
      params.set('page', '1'); // reset page to 1
    } else {
      params.delete('search');
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    setTerm('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-brand-coral absolute left-4 pointer-events-none" />
        <input
          type="text"
          value={term}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search branding services (e.g. business cards, logo, web, mugs)..."
          className="w-full pl-12 pr-10 py-3.5 bg-white border border-brand-navy/15 rounded-2xl text-sm font-medium text-brand-navy placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-coral/40 focus:border-brand-coral shadow-soft transition-all"
        />
        {term && (
          <button
            onClick={handleClear}
            className="absolute right-3.5 p-1 text-brand-muted hover:text-brand-navy rounded-lg transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
