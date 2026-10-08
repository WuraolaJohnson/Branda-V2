'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, notFound } from 'next/navigation';
import { isValidMarket, formatCurrency } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { useAuth } from '@/context/AuthContext';
import { useCurrency } from '@/context/CurrencyContext';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';
import { CheckCircle2, Clock, MapPin, ArrowRight, PackageCheck, Mail } from 'lucide-react';

interface OrderConfirmationProps {
  params: {
    market: string;
  };
}

function ConfirmationContent({ marketCode }: { marketCode: MarketCode }) {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'BRD-2026-48291';
  const { orders } = useAuth();

  const { formatPrice } = useCurrency();
  const matchingOrder = orders.find((o) => o.id === orderId) || orders[0];

  const totalDisplay = matchingOrder
    ? formatPrice(matchingOrder.totalUSD, matchingOrder.totalNGN)
    : '$0.00';

  return (
    <div className="py-16 bg-brand-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-navy/10 shadow-elevated text-center space-y-8">
          {/* Header Badge */}
          <div className="w-20 h-20 rounded-full bg-brand-mint text-brand-mint-text flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-brand-coral" />
          </div>

          <div className="space-y-2">
            <Badge variant="coral">Order Confirmed</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
              Your order is confirmed.
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
              We&apos;ve received your branding specs and our design production team has been assigned.
            </p>
          </div>

          {/* Order ID Banner */}
          <div className="p-4 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-2 shadow-card">
            <div className="text-xs text-brand-navy-200">
              Reference Order Number:
            </div>
            <div className="text-xl font-extrabold font-display text-brand-coral tracking-wider">
              {matchingOrder ? matchingOrder.id : orderId}
            </div>
          </div>

          {/* Order Item List Summary */}
          {matchingOrder && (
            <div className="space-y-4 text-left border-t border-brand-navy/10 pt-6">
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-brand-coral" />
                Ordered Solutions
              </h3>

              <div className="space-y-3">
                {matchingOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-brand-offwhite border border-brand-navy/5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white flex-shrink-0">
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
                      <div className="text-xs font-bold text-brand-navy truncate">{item.serviceName}</div>
                      <div className="text-[11px] text-brand-muted">
                        Qty: {item.quantity} · {formatPrice(item.unitPriceUSD, item.unitPriceNGN)}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-brand-navy">
                      {formatPrice(item.unitPriceUSD * item.quantity, item.unitPriceNGN * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customer & Delivery Specs */}
          {matchingOrder && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs bg-brand-cream/30 p-5 rounded-2xl border border-brand-cream-dark/30">
              <div className="space-y-1">
                <div className="font-bold text-brand-navy flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brand-coral" /> Customer Details
                </div>
                <div className="text-brand-navy/80">{matchingOrder.customer.fullName}</div>
                <div className="text-brand-muted">{matchingOrder.customer.email}</div>
                <div className="text-brand-muted">{matchingOrder.customer.phone}</div>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-brand-navy flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-coral" /> Delivery Location
                </div>
                <div className="text-brand-navy/80">{matchingOrder.customer.address}</div>
                <div className="text-brand-muted">{matchingOrder.customer.city}, {matchingOrder.customer.state}</div>
                <div className="flex items-center gap-1 text-[11px] text-brand-coral font-bold pt-1">
                  <Clock className="w-3 h-3" /> Est: {matchingOrder.estimatedDelivery}
                </div>
              </div>
            </div>
          )}

          {/* Continue Exploring CTA */}
          <div className="pt-4 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${marketCode}/services`}>
              <Button variant="coral" size="lg" className="shadow-card group w-full sm:w-auto">
                Continue Exploring Services
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/account/orders">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Account Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage({ params }: OrderConfirmationProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;

  return (
    <Suspense
      fallback={
        <div className="py-24 max-w-3xl mx-auto px-4">
          <Skeleton className="h-96 w-full rounded-3xl" />
        </div>
      }
    >
      <ConfirmationContent marketCode={marketCode} />
    </Suspense>
  );
}
