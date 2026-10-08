'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, ShoppingBag, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AccountSidebar: React.FC = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = [
    { href: '/account', label: 'Overview', icon: LayoutDashboard },
    { href: '/account/orders', label: 'My Orders', icon: ShoppingBag },
    { href: '/account/profile', label: 'Profile Settings', icon: User },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-brand-navy/10 shadow-soft space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-brand-navy/10">
        <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-display font-bold text-lg">
          {user?.fullName?.charAt(0) || 'U'}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-brand-navy truncate">
            {user?.fullName || 'Valued Customer'}
          </h4>
          <p className="text-xs text-brand-muted truncate">{user?.email}</p>
        </div>
      </div>

      <nav className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all',
                isActive
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-brand-navy/80 hover:bg-brand-navy/5'
              )}
            >
              <Icon className={cn('w-4 h-4', isActive ? 'text-brand-coral' : 'text-brand-navy/60')} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-brand-navy/10">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
