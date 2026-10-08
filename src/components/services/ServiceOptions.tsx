'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Service, MarketCode, SelectedServiceOptions } from '@/data/types';
import { useCurrency } from '@/context/CurrencyContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, Zap, Minus, Plus, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceOptionsProps {
  service: Service;
  marketCode: MarketCode;
}

export const ServiceOptions: React.FC<ServiceOptionsProps> = ({ service, marketCode }) => {
  const router = useRouter();
  const { addItem } = useCart();
  const { formatPrice, currency } = useCurrency();

  // Initialize selected options with defaults
  const initialSelected: SelectedServiceOptions = {};
  service.options.forEach((group) => {
    const defaultChoice = group.choices.find((c) => c.isDefault) || group.choices[0];
    if (defaultChoice) {
      initialSelected[group.id] = defaultChoice.id;
    }
  });

  const [selected, setSelected] = useState<SelectedServiceOptions>(initialSelected);
  const [quantity, setQuantity] = useState<number>(1);

  // Calculate dynamic unit price for both currencies
  let basePriceNGN = service.startingPriceNGN;
  let basePriceUSD = service.startingPriceUSD;

  service.options.forEach((group) => {
    const choiceId = selected[group.id];
    if (choiceId) {
      const choice = group.choices.find((c) => c.id === choiceId);
      if (choice) {
        basePriceNGN += choice.priceModifierNGN;
        basePriceUSD += choice.priceModifierUSD;
      }
    }
  });

  const handleOptionSelect = (groupId: string, choiceId: string) => {
    setSelected((prev) => ({ ...prev, [groupId]: choiceId }));
  };

  const buildCartPayload = () => {
    const selectedOptionsDetails = service.options.map((group) => {
      const choiceId = selected[group.id];
      const choice = group.choices.find((c) => c.id === choiceId);
      return {
        groupName: group.name,
        choiceLabel: choice ? choice.label : '',
        choiceId: choiceId || '',
      };
    });

    return {
      serviceId: service.id,
      serviceSlug: service.slug,
      serviceName: service.name,
      category: service.category,
      image: service.image,
      unitPriceNGN: basePriceNGN,
      unitPriceUSD: basePriceUSD,
      quantity,
      selectedOptions: selectedOptionsDetails,
      turnaround: service.turnaround,
    };
  };

  const handleAddToCart = () => {
    addItem(buildCartPayload());
  };

  const handleOrderNow = () => {
    addItem(buildCartPayload());
    router.push(`/${marketCode}/checkout`);
  };

  return (
    <div className="space-y-6">
      {/* Option Groups */}
      {service.options.map((group) => (
        <div key={group.id} className="space-y-2 pt-4 border-t border-brand-navy/10">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
            Select {group.name}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {group.choices.map((choice) => {
              const isSelected = selected[group.id] === choice.id;
              const hasModifier = choice.priceModifierUSD !== 0 || choice.priceModifierNGN !== 0;
              return (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => handleOptionSelect(group.id, choice.id)}
                  className={cn(
                    'p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between',
                    isSelected
                      ? 'border-brand-coral bg-brand-coral/10 text-brand-navy shadow-sm ring-1 ring-brand-coral'
                      : 'border-brand-navy/15 bg-white text-brand-navy/80 hover:bg-brand-navy/5'
                  )}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold">{choice.label}</div>
                    {hasModifier && (
                      <div className="text-[10px] text-brand-coral font-semibold">
                        {choice.priceModifierUSD > 0 ? '+' : ''}
                        {formatPrice(choice.priceModifierUSD, choice.priceModifierNGN)}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-brand-coral text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quantity Selector */}
      <div className="pt-4 border-t border-brand-navy/10 space-y-2">
        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
          Project Quantity / Units
        </label>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-brand-navy/20 rounded-2xl bg-white p-1 shadow-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy/10 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center text-sm font-extrabold text-brand-navy">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy/10 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-brand-muted font-medium">
            Total Unit Price:{' '}
            <span className="font-bold text-brand-navy">
              {formatPrice(basePriceUSD, basePriceNGN)}
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Summary Price & CTAs */}
      <div className="p-5 rounded-3xl bg-brand-navy text-white space-y-4 shadow-elevated border border-white/10">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-medium text-brand-navy-200">Configured Total:</span>
          <span className="text-2xl font-extrabold font-display text-white">
            {formatPrice(basePriceUSD * quantity, basePriceNGN * quantity)}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button variant="coral" size="lg" className="w-full shadow-card" onClick={handleAddToCart}>
            <ShoppingBag className="w-4 h-4 mr-1.5" />
            Add to Cart
          </Button>
          <Button variant="secondary" size="lg" className="w-full" onClick={handleOrderNow}>
            <Zap className="w-4 h-4 mr-1.5 text-brand-coral" />
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};
