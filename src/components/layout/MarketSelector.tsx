'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MARKETS, CURRENCIES } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { useCurrency } from '@/context/CurrencyContext';
import { ChevronDown, Globe, Coins, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarketSelectorProps {
  currentMarket: MarketCode;
  className?: string;
}

export const MarketSelector: React.FC<MarketSelectorProps> = ({ currentMarket, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { currency, setCurrency, setMarket } = useCurrency();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchMarket = (targetMarket: MarketCode) => {
    if (targetMarket !== currentMarket) {
      // Tell context to switch market → restores per-market currency from localStorage
      setMarket(targetMarket);

      let newPath = pathname;
      if (pathname.startsWith(`/${currentMarket}`)) {
        newPath = pathname.replace(`/${currentMarket}`, `/${targetMarket}`);
      } else {
        newPath = `/${targetMarket}${pathname}`;
      }

      const queryString =
        typeof window !== 'undefined' ? window.location.search.replace(/^\?/, '') : '';
      const targetUrl = queryString ? `${newPath}?${queryString}` : newPath;

      router.push(targetUrl);
    }
  };

  const currentMarketData = MARKETS[currentMarket] || MARKETS.ng;
  const currentCurrencyData = CURRENCIES[currency] || CURRENCIES.NGN;
  const marketList: MarketCode[] = ['ng', 'us'];

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white border border-brand-navy/15 hover:border-brand-coral/40 shadow-sm text-xs font-bold text-brand-navy hover:text-brand-coral transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Country and Currency Selector"
      >
        <span className="text-sm leading-none flex items-center">{currentMarketData.flag}</span>
        <span className="font-bold leading-none hidden md:inline">
          {currentMarket === 'us' ? 'USA' : 'Nigeria'}
        </span>
        <span className="text-[11px] font-semibold leading-none text-brand-coral bg-brand-coral/10 px-1.5 py-0.5 rounded-md flex items-center">
          {currency} ({currentCurrencyData.symbol})
        </span>
        <ChevronDown
          className={cn('w-3.5 h-3.5 text-brand-navy/60 transition-transform duration-200', {
            'rotate-180': isOpen,
          })}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 max-w-[calc(100vw-2rem)] origin-top-right rounded-3xl bg-white shadow-elevated border border-brand-navy/10 z-50 p-4 space-y-4 animate-in fade-in zoom-in-95 duration-150">
          {/* Market / Country Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-brand-navy/60 px-1">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-coral" /> Country Market
              </span>
              <span className="text-[10px] text-brand-muted">Subfolder Route</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {marketList.map((code) => {
                const m = MARKETS[code];
                const isSelected = code === currentMarket;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      switchMarket(code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'flex items-center gap-2 p-2.5 rounded-2xl text-left border text-xs font-bold transition-all',
                      isSelected
                        ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                        : 'border-brand-navy/10 hover:border-brand-navy/20 hover:bg-brand-navy/5 text-brand-navy'
                    )}
                  >
                    <span className="text-base">{m.flag}</span>
                    <div className="flex flex-col">
                      <span className="leading-tight">{code === 'us' ? 'USA' : 'Nigeria'}</span>
                      <span
                        className={cn(
                          'text-[10px]',
                          isSelected ? 'text-brand-navy-200' : 'text-brand-muted'
                        )}
                      >
                        /{code}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Currency Section */}
          <div className="space-y-2 pt-2 border-t border-brand-navy/10">
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-brand-navy/60 px-1">
              <span className="flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-brand-coral" /> Currency Display
              </span>
              <span className="text-[10px] text-brand-muted">Active: {currency}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(CURRENCIES) as (keyof typeof CURRENCIES)[]).map((cCode) => {
                const c = CURRENCIES[cCode];
                const isSelected = cCode === currency;
                return (
                  <button
                    key={cCode}
                    type="button"
                    onClick={() => {
                      setCurrency(cCode);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'flex items-center justify-between p-2 rounded-xl text-left border text-xs font-bold transition-all',
                      isSelected
                        ? 'border-brand-coral bg-brand-coral/10 text-brand-coral font-extrabold ring-1 ring-brand-coral'
                        : 'border-brand-navy/10 hover:border-brand-navy/20 hover:bg-brand-navy/5 text-brand-navy'
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">{c.flag}</span>
                      <span className="text-[11px]">{c.code} ({c.symbol})</span>
                    </div>
                    {isSelected && <Check className="w-3 h-3 text-brand-coral flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
