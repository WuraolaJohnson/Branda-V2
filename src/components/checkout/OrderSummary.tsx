'use client';

import React from 'react';
import { MarketCode } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Badge } from '@/components/ui/Badge';
import { ShoppingBag } from 'lucide-react';

interface OrderSummaryProps {
  marketCode: MarketCode;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ marketCode }) => {
  const { cart, getSubtotal, getTax, getTotal } = useCart();
  const { formatPrice, currency } = useCurrency();

  const subtotalUSD = getSubtotal('us');
  const subtotalNGN = getSubtotal('ng');
  const taxUSD = getTax('us');
  const taxNGN = getTax('ng');
  const totalUSD = getTotal('us');
  const totalNGN = getTotal('ng');

  return (
    <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-elevated border border-white/10 sticky top-28">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-xl font-bold font-display flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-brand-coral" />
          Order Items
        </h3>
        <Badge variant="coral">
          {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
        </Badge>
      </div>

      {/* Cart items scrollable list */}
      <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
              <ImageWithFallback
                src={item.image}
                alt={item.serviceName}
                fill
                className="object-cover"
                sizes="60px"
                fallbackTitle={item.serviceName}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-white truncate">{item.serviceName}</div>
              <div className="text-[10px] text-brand-navy-200">
                Qty: {item.quantity} × {formatPrice(item.unitPriceUSD, item.unitPriceNGN)}
              </div>
            </div>
            <div className="text-xs font-bold text-white">
              {formatPrice(item.unitPriceUSD * item.quantity, item.unitPriceNGN * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Total Calculations */}
      <div className="space-y-2 pt-2 text-xs text-brand-navy-200 border-t border-white/10">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-white">{formatPrice(subtotalUSD, subtotalNGN)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-bold text-white">{formatPrice(taxUSD, taxNGN)}</span>
        </div>
        <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/10">
          <span>Total Payable ({currency})</span>
          <span className="text-2xl font-display text-brand-coral">
            {formatPrice(totalUSD, totalNGN)}
          </span>
        </div>
      </div>
    </div>
  );
};
