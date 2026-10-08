'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { OrderHistory } from '@/components/account/OrderHistory';
import { LayoutDashboard, ShoppingBag, MapPin, Building, ArrowRight } from 'lucide-react';

export default function AccountDashboardPage() {
  const { user, isLoggedIn, orders } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/account/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <div className="py-20 text-center space-y-3">
        <div className="w-8 h-8 border-3 border-brand-coral border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-brand-muted">Directing to Sign In...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-brand-navy text-white rounded-3xl p-8 shadow-elevated border border-white/10 space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <Badge variant="coral">Enterprise Dashboard</Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display mt-2">
              Welcome back, {user?.fullName || 'Valued Partner'}
            </h1>
            <p className="text-xs text-brand-navy-200 mt-1">
              Manage active project orders, saved company addresses, and design assets.
            </p>
          </div>

          <Link href="/ng/services">
            <Button variant="coral" size="sm" className="shadow-card group">
              Start New Order
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Account Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-brand-navy/10 shadow-soft space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
            <Building className="w-4 h-4 text-brand-coral" /> Company Information
          </div>
          <div className="text-sm font-extrabold text-brand-navy">{user?.companyName || 'Apex Creative Studio'}</div>
          <div className="text-xs text-brand-muted">{user?.email}</div>
          <div className="text-xs text-brand-muted">{user?.phone}</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-brand-navy/10 shadow-soft space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-brand-coral" /> Default Address
          </div>
          <div className="text-xs font-bold text-brand-navy">
            {user?.savedAddresses[0]?.address || '14B Admiralty Way, Lekki Phase 1'}
          </div>
          <div className="text-xs text-brand-muted">
            {user?.savedAddresses[0]?.city}, {user?.savedAddresses[0]?.state}
          </div>
          <div className="text-xs text-brand-muted">
            {user?.savedAddresses[0]?.country}
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-brand-coral" /> Recent Orders ({orders.length})
        </h3>
        <OrderHistory />
      </div>
    </div>
  );
}
