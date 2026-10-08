'use client';

import React from 'react';
import { ServiceFilters } from './ServiceFilters';
import { X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-3xl p-6 shadow-elevated flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10 mb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-brand-coral" />
            <h3 className="text-lg font-bold text-brand-navy font-display">
              Filter Solutions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-brand-navy/70 hover:text-brand-navy rounded-xl hover:bg-brand-navy/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          <ServiceFilters />
        </div>

        <div className="pt-4 mt-4 border-t border-brand-navy/10">
          <Button variant="coral" size="lg" className="w-full" onClick={onClose}>
            Apply Filters & View Results
          </Button>
        </div>
      </div>
    </div>
  );
};
