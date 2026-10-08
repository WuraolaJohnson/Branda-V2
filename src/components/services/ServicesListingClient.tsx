'use client';

import React, { useState } from 'react';
import { Service, MarketCode } from '@/data/types';
import { ServiceGrid } from './ServiceGrid';
import { ServiceFilters } from './ServiceFilters';
import { ServiceSort } from './ServiceSort';
import { ServiceSearch } from './ServiceSearch';
import { FilterDrawer } from './FilterDrawer';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServicesListingClientProps {
  services: Service[];
  marketCode: MarketCode;
}

export const ServicesListingClient: React.FC<ServicesListingClientProps> = ({
  services,
  marketCode,
}) => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Search & Top Action Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 max-w-2xl">
          <ServiceSearch />
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3">
          {/* Mobile Filter Toggle Button */}
          <Button
            variant="outline"
            size="md"
            onClick={() => setIsFilterDrawerOpen(true)}
            className="lg:hidden flex items-center gap-2"
          >
            <Filter className="w-4 h-4 text-brand-coral" />
            <span>Filters</span>
          </Button>

          {/* Sort Dropdown */}
          <ServiceSort />
        </div>
      </div>

      {/* Main Catalog Section: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28">
          <ServiceFilters />
        </aside>

        {/* Services Grid & Pagination */}
        <div className="lg:col-span-9">
          <ServiceGrid services={services} marketCode={marketCode} pageSize={9} />
        </div>
      </div>

      {/* Mobile Filter Bottom Sheet Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
      />
    </div>
  );
};
