'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { isValidMarket } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { useCart } from '@/context/CartContext';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CartItemRow } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { Button } from '@/components/ui/Button';
import { Trash2 } from 'lucide-react';

interface CartPageProps {
  params: {
    market: string;
  };
}

export default function CartPage({ params }: CartPageProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;
  const { cart, clearCart } = useCart();

  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Shopping Cart' }]} />

        {cart.length === 0 ? (
          <EmptyCart marketCode={marketCode} />
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-brand-navy font-display tracking-tight">
                  Your Project Cart
                </h1>
                <p className="text-xs text-brand-muted">
                  Review configured options and quantities before proceeding to checkout.
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                Clear Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Items List */}
              <div className="lg:col-span-8 space-y-4">
                {cart.map((item) => (
                  <CartItemRow key={item.id} item={item} marketCode={marketCode} />
                ))}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-4">
                <CartSummary marketCode={marketCode} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
