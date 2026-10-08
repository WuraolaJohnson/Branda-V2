'use client';

import React from 'react';
import Link from 'next/link';
import { MarketCode } from '@/data/types';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface EmptyCartProps {
  marketCode: MarketCode;
}

export const EmptyCart: React.FC<EmptyCartProps> = ({ marketCode }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-brand-navy/10 shadow-soft my-8">
      <div className="w-20 h-20 rounded-full bg-brand-cream/70 flex items-center justify-center text-brand-navy mb-6">
        <ShoppingBag className="w-10 h-10 text-brand-coral" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display mb-2">
        Your brand is waiting.
      </h2>

      <p className="text-sm text-brand-muted max-w-md mb-8 leading-relaxed">
        Explore services and start building your next project with bespoke prints, web experiences, and executive corporate gifts.
      </p>

      <Link href={`/${marketCode}/services`}>
        <Button variant="coral" size="lg" className="shadow-card group">
          Explore Services
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};
