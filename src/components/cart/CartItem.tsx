'use client';

import React from 'react';
import Link from 'next/link';
import { CartItem as CartItemType, MarketCode } from '@/data/types';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Trash2, Minus, Plus, Clock } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  marketCode: MarketCode;
}

export const CartItemRow: React.FC<CartItemProps> = ({ item, marketCode }) => {
  const { updateQuantity, removeItem } = useCart();
  const { formatPrice } = useCurrency();

  const lineSubtotalUSD = item.unitPriceUSD * item.quantity;
  const lineSubtotalNGN = item.unitPriceNGN * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white rounded-3xl border border-brand-navy/10 shadow-soft">
      {/* Product info */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-brand-offwhite border border-brand-navy/10 flex-shrink-0">
          <ImageWithFallback
            src={item.image}
            alt={item.serviceName}
            fill
            className="object-cover"
            sizes="80px"
            fallbackTitle={item.serviceName}
          />
        </div>

        <div className="space-y-1">
          <Link
            href={`/${marketCode}/services/${item.serviceSlug}`}
            className="text-base font-bold text-brand-navy font-display hover:text-brand-coral transition-colors line-clamp-1"
          >
            {item.serviceName}
          </Link>

          {/* Selected options */}
          <div className="text-xs text-brand-muted space-y-0.5">
            {item.selectedOptions.map((opt, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="font-semibold text-brand-navy/70">{opt.groupName}:</span>
                <span>{opt.choiceLabel}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-navy/60 pt-1">
            <Clock className="w-3 h-3 text-brand-coral" />
            <span>{item.turnaround}</span>
          </div>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-navy/5">
        {/* Quantity Controls */}
        <div className="flex items-center border border-brand-navy/20 rounded-2xl bg-brand-offwhite p-1">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-brand-navy hover:bg-white transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-xs font-bold text-brand-navy">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-brand-navy hover:bg-white transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Line Price & Remove */}
        <div className="text-right flex items-center gap-4">
          <div>
            <div className="text-base font-extrabold text-brand-navy font-display">
              {formatPrice(lineSubtotalUSD, lineSubtotalNGN)}
            </div>
            <div className="text-[10px] text-brand-muted font-medium">
              {formatPrice(item.unitPriceUSD, item.unitPriceNGN)} each
            </div>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="p-2 text-red-500/70 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
