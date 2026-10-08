'use client';

import React from 'react';
import Link from 'next/link';
import { MarketCode } from '@/data/types';
import { MARKETS, CURRENCIES } from '@/data/markets';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface CartSummaryProps {
  marketCode: MarketCode;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ marketCode }) => {
  const { getSubtotal, getTax, getTotal, itemCount } = useCart();
  const { formatPrice, currency } = useCurrency();

  const subtotalUSD = getSubtotal('us');
  const subtotalNGN = getSubtotal('ng');
  const taxUSD = getTax('us');
  const taxNGN = getTax('ng');
  const totalUSD = getTotal('us');
  const totalNGN = getTotal('ng');

  const market = MARKETS[marketCode] || MARKETS.ng;
  const currentCurrency = CURRENCIES[currency] || CURRENCIES.NGN;
  const taxPercentageLabel = (market.taxRate * 100).toFixed(1);

  return (
    <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-elevated border border-white/10 sticky top-28">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-xl font-bold font-display flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-coral" />
          Order Summary
        </h3>
        <Badge variant="coral">
          {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
        </Badge>
      </div>

      <div className="space-y-3 text-xs text-brand-navy-200">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-white text-sm">
            {formatPrice(subtotalUSD, subtotalNGN)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Tax ({taxPercentageLabel}%)</span>
          <span className="font-bold text-white text-sm">
            {formatPrice(taxUSD, taxNGN)}
          </span>
        </div>

        <div className="flex justify-between text-brand-mint font-semibold">
          <span>Delivery & Dispatch</span>
          <span>Calculated at Checkout</span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 space-y-1">
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-bold text-white">Estimated Total</span>
          <span className="text-3xl font-extrabold font-display text-white">
            {formatPrice(totalUSD, totalNGN)}
          </span>
        </div>
        <div className="text-[11px] text-brand-navy-200 text-right">
          Display Currency:{' '}
          <span className="font-bold text-white">
            {currency} ({currentCurrency.symbol})
          </span>
        </div>
      </div>

      <Link href={`/${marketCode}/checkout`} className="block pt-2">
        <Button variant="coral" size="lg" className="w-full shadow-card group">
          Proceed to Checkout
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-brand-navy-200">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-coral flex-shrink-0" />
          <span>Guaranteed enterprise quality & digital proofs</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-brand-coral flex-shrink-0" />
          <span>
            Direct doorstep logistics across{' '}
            {marketCode === 'us' ? 'all 50 US States' : 'Nigeria & West Africa'}
          </span>
        </div>
      </div>
    </div>
  );
};
