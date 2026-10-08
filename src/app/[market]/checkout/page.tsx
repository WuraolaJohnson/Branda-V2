'use client';

import React from 'react';
import { notFound, useRouter } from 'next/navigation';
import { isValidMarket } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { useCart } from '@/context/CartContext';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';

interface CheckoutPageProps {
  params: {
    market: string;
  };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-12 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Checkout' }]} />
          <EmptyCart marketCode={marketCode} />
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Cart', href: `/${marketCode}/cart` },
            { label: 'Checkout' },
          ]}
        />

        <div>
          <h1 className="text-3xl font-extrabold text-brand-navy font-display tracking-tight">
            Checkout & Order Confirmation
          </h1>
          <p className="text-xs text-brand-muted">
            Provide your contact details and delivery location to submit your branding order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <CheckoutForm marketCode={marketCode} />
          </div>

          <div className="lg:col-span-5">
            <OrderSummary marketCode={marketCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
