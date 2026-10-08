'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useAuth } from '@/context/AuthContext';
import { formatCurrency } from '@/data/markets';
import { Badge } from '@/components/ui/Badge';
import { ShoppingBag, Clock, PackageCheck, Truck } from 'lucide-react';

export const OrderHistory: React.FC = () => {
  const { orders } = useAuth();

  if (orders.length === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-brand-navy/10 text-center shadow-soft">
        <ShoppingBag className="w-12 h-12 text-brand-muted mx-auto mb-3" />
        <h3 className="text-lg font-bold text-brand-navy">No Orders Found</h3>
        <p className="text-xs text-brand-muted mt-1">You haven&apos;t placed any branding service orders yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const isUS = order.marketCode === 'us';
        const total = isUS ? order.totalUSD : order.totalNGN;

        return (
          <div key={order.id} className="bg-white p-6 rounded-3xl border border-brand-navy/10 shadow-soft space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-brand-navy/10">
              <div>
                <div className="text-base font-extrabold text-brand-navy font-display">
                  Order #{order.id}
                </div>
                <div className="text-xs text-brand-muted">
                  Placed on {new Date(order.createdAt).toLocaleDateString()} ({order.marketCode.toUpperCase()} Market)
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    order.status === 'Completed'
                      ? 'mint'
                      : order.status === 'In Production'
                      ? 'coral'
                      : 'cream'
                  }
                >
                  {order.status}
                </Badge>
                <div className="text-lg font-extrabold text-brand-navy font-display">
                  {formatCurrency(total, order.marketCode)}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {order.items.map((item) => {
                const itemPrice = isUS ? item.unitPriceUSD : item.unitPriceNGN;
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-brand-offwhite border border-brand-navy/10 flex-shrink-0">
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
                        Qty: {item.quantity} · {formatCurrency(itemPrice, order.marketCode)} each
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-brand-navy/5 flex items-center justify-between text-xs text-brand-muted">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-brand-coral" />
                <span>Est. Delivery: {order.estimatedDelivery}</span>
              </div>
              <div className="font-semibold text-brand-navy">
                Ship to: {order.customer.city}, {order.customer.state}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
