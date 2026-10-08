'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, MarketCode } from '@/data/types';
import { CURRENCIES, formatCurrency, convertAmount, isValidCurrency } from '@/data/markets';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  setMarket: (market: MarketCode) => void;
  formatPrice: (amountUSD: number, amountNGN?: number) => string;
  getPriceValue: (amountUSD: number, amountNGN?: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const MARKET_DEFAULTS: Record<MarketCode, CurrencyCode> = { ng: 'NGN', us: 'USD' };

function storageKey(market: MarketCode) {
  return `branda_v2_mkt_${market}`;
}

export function CurrencyProvider({
  children,
  defaultMarket = 'ng',
}: {
  children: React.ReactNode;
  defaultMarket?: MarketCode;
}) {
  const [market, setMarketState] = useState<MarketCode>(defaultMarket);
  const [currency, setCurrencyState] = useState<CurrencyCode>(MARKET_DEFAULTS[defaultMarket]);

  // On mount (or when market changes), restore the per-market saved currency
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey(market));
      if (stored && isValidCurrency(stored)) {
        setCurrencyState(stored as CurrencyCode);
      } else {
        setCurrencyState(MARKET_DEFAULTS[market]);
      }
    } catch {
      setCurrencyState(MARKET_DEFAULTS[market]);
    }
  }, [market]);

  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(storageKey(market), newCurrency);
    } catch {
      // ignore
    }
  };

  const setMarket = (newMarket: MarketCode) => {
    setMarketState(newMarket);
    // currency will be restored from per-market localStorage in the effect above
  };

  const getPriceValue = (amountUSD: number, amountNGN?: number): number => {
    if (currency === 'NGN' && amountNGN !== undefined) {
      return amountNGN;
    }
    if (currency === 'USD') {
      return amountUSD;
    }
    // Convert from USD to GBP or CAD
    return convertAmount(amountUSD, 'USD', currency);
  };

  const formatPrice = (amountUSD: number, amountNGN?: number): string => {
    const value = getPriceValue(amountUSD, amountNGN);
    return formatCurrency(value, currency);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        setMarket,
        formatPrice,
        getPriceValue,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Graceful fallback when outside provider
    return {
      currency: 'USD' as CurrencyCode,
      setCurrency: () => {},
      setMarket: () => {},
      formatPrice: (amountUSD: number) => `$${amountUSD.toFixed(2)}`,
      getPriceValue: (amountUSD: number) => amountUSD,
    };
  }
  return context;
}
