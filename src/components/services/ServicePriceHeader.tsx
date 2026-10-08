'use client';

import React from 'react';
import { MarketCode } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { useCurrency } from '@/context/CurrencyContext';

interface ServicePriceHeaderProps {
  startingPriceUSD: number;
  startingPriceNGN: number;
  compareAtPriceUSD?: number;
  compareAtPriceNGN?: number;
  marketCode: MarketCode;
}

export const ServicePriceHeader: React.FC<ServicePriceHeaderProps> = ({
  startingPriceUSD,
  startingPriceNGN,
  compareAtPriceUSD,
  compareAtPriceNGN,
  marketCode,
}) => {
  const { formatPrice, currency } = useCurrency();
  const market = MARKETS[marketCode] || MARKETS.ng;

  return (
    <div className="p-4 rounded-2xl bg-white border border-brand-navy/10 flex items-baseline justify-between shadow-soft">
      <div>
        <span className="text-xs text-brand-muted block font-medium">Starting Base Price</span>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-extrabold font-display text-brand-navy">
            {formatPrice(startingPriceUSD, startingPriceNGN)}
          </span>
          {compareAtPriceUSD && (
            <span className="text-sm text-brand-muted line-through font-medium">
              {formatPrice(compareAtPriceUSD, compareAtPriceNGN)}
            </span>
          )}
        </div>
      </div>
      <span className="text-xs font-bold text-brand-coral bg-brand-coral/10 px-3 py-1.5 rounded-full">
        {market.name} Market · {currency}
      </span>
    </div>
  );
};
