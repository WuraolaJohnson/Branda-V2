'use client';

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Service, MarketCode } from '@/data/types';
import { ServiceCard } from './ServiceCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceGridProps {
  services: Service[];
  marketCode: MarketCode;
  pageSize?: number;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  marketCode,
  pageSize = 9,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(services.length / pageSize) || 1;
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (validPage - 1) * pageSize;
  const currentServices = services.slice(startIndex, startIndex + pageSize);

  const setPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    router.push(pathname);
  };

  if (services.length === 0) {
    return (
      <EmptyState
        title="No branding services found"
        description="We couldn't find any services matching your active filter criteria or search keyword."
        actionLabel="Clear All Filters"
        onAction={handleClearFilters}
      />
    );
  }

  return (
    <div className="space-y-10">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentServices.map((service) => (
          <ServiceCard key={service.id} service={service} marketCode={marketCode} />
        ))}
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-navy/10 text-center sm:text-left">
          <div className="text-xs font-semibold text-brand-muted">
            Showing <span className="text-brand-navy font-bold">{startIndex + 1}</span> to{' '}
            <span className="text-brand-navy font-bold">
              {Math.min(startIndex + pageSize, services.length)}
            </span>{' '}
            of <span className="text-brand-navy font-bold">{services.length}</span> services
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(validPage - 1)}
              disabled={validPage <= 1}
              className="p-2 rounded-xl border border-brand-navy/15 bg-white text-brand-navy hover:bg-brand-navy/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === validPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={cn(
                    'w-9 h-9 rounded-xl text-xs font-bold transition-all shadow-sm',
                    isActive
                      ? 'bg-brand-navy text-white'
                      : 'bg-white border border-brand-navy/15 text-brand-navy hover:bg-brand-navy/5'
                  )}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setPage(validPage + 1)}
              disabled={validPage >= totalPages}
              className="p-2 rounded-xl border border-brand-navy/15 bg-white text-brand-navy hover:bg-brand-navy/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
