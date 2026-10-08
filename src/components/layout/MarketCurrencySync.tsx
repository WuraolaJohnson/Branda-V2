'use client';

import { useEffect } from 'react';
import { MarketCode } from '@/data/types';
import { useCurrency } from '@/context/CurrencyContext';

/**
 * Mounted inside [market]/layout — tells CurrencyContext which market
 * is active so it loads the correct per-market currency from localStorage.
 */
export function MarketCurrencySync({ marketCode }: { marketCode: MarketCode }) {
  const { setMarket } = useCurrency();

  useEffect(() => {
    setMarket(marketCode);
  }, [marketCode]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
