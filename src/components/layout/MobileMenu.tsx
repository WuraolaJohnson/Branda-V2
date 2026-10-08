'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MarketCode } from '@/data/types';
import { CATEGORIES } from '@/data/categories';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  X,
  Search,
  ShoppingBag,
  User,
  Sparkles,
  Layers,
  Globe,
  HelpCircle,
  Package,
  Info,
  Palette,
  Camera,
  Printer,
  Shirt,
  LucideIcon,
} from 'lucide-react';
import { MarketSelector } from './MarketSelector';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  marketCode: MarketCode;
}

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Gift: Package,
  Palette,
  Camera,
  Printer,
  Sparkles,
  Package,
  Shirt,
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, marketCode }) => {
  const router = useRouter();
  const { itemCount } = useCart();
  const { user, isLoggedIn } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/${marketCode}/services?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-elevated p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10">
            <Link href={`/${marketCode}`} onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-display font-black text-sm shadow-card">
                B<span className="text-brand-coral font-bold text-xs">2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-brand-navy text-base leading-none tracking-tight">
                  BRANDA <span className="text-brand-coral font-sans text-xs uppercase font-bold">V2</span>
                </span>
                <span className="text-[10px] text-brand-muted font-semibold tracking-wider uppercase mt-0.5">
                  Branding Ecosystem
                </span>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-brand-navy/70 hover:text-brand-navy rounded-xl hover:bg-brand-navy/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search services (e.g. logo, cards)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-brand-offwhite border border-brand-navy/15 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
            <Search className="w-4 h-4 text-brand-coral absolute left-3.5 top-3" />
          </form>

          {/* Market & Currency Selector Row */}
          <div className="p-3.5 rounded-2xl bg-brand-offwhite border border-brand-navy/10 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-brand-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-coral" /> Country & Currency
              </span>
            </div>
            <div className="pt-0.5">
              <MarketSelector currentMarket={marketCode} inline className="w-full" />
            </div>
          </div>

          {/* Core Action Links with Icons */}
          {/* Core Action Links with Icons */}
          <div className="space-y-2.5">
            {/* Cart Link with Live Item Count */}
            <Link
              href={`/${marketCode}/cart`}
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/95 transition-all shadow-card group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-4 h-4 text-brand-coral" />
                </div>
                <span className="font-bold text-sm text-white whitespace-nowrap">Shopping Cart</span>
              </div>
              <span className="bg-brand-coral text-white text-xs px-2.5 py-1 rounded-full font-bold whitespace-nowrap flex-shrink-0 ml-2 shadow-sm">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>
            </Link>

            {/* Services Ecosystem */}
            <Link
              href={`/${marketCode}#services`}
              onClick={onClose}
              className="flex items-center px-3.5 py-2.5 rounded-2xl bg-brand-mint/30 hover:bg-brand-mint/50 text-brand-navy font-bold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-brand-mint/60 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-brand-coral" />
                </div>
                <span className="whitespace-nowrap">Services Ecosystem</span>
              </div>
            </Link>

            {/* All Categories Directory */}
            <Link
              href={`/${marketCode}/categories`}
              onClick={onClose}
              className="flex items-center px-3.5 py-2.5 rounded-2xl bg-brand-cream/60 hover:bg-brand-cream text-brand-navy font-bold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-brand-cream flex items-center justify-center flex-shrink-0 border border-brand-navy/5">
                  <Layers className="w-4 h-4 text-brand-coral" />
                </div>
                <span className="whitespace-nowrap">All 8 Brand Pillars</span>
              </div>
            </Link>
          </div>

          {/* Pillars List */}
          <div className="space-y-1.5 pt-2">
            <div className="text-[11px] font-bold text-brand-muted uppercase tracking-wider px-1">
              Brand Pillars
            </div>
            <div className="space-y-1 max-h-48 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-1">
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICON_MAP[cat.iconName] || Layers;
                return (
                  <Link
                    key={cat.id}
                    href={`/${marketCode}/services?category=${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center px-3 py-2 rounded-xl text-xs font-semibold text-brand-navy hover:bg-brand-navy/5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 text-brand-coral" />
                      <span>{cat.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Secondary Links */}
          <div className="pt-3 border-t border-brand-navy/10 space-y-1 text-xs font-semibold text-brand-navy">
            <Link
              href={`/${marketCode}#how-it-works`}
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-brand-navy/5 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-brand-coral" />
              <span>How It Works</span>
            </Link>
            <Link
              href={`/${marketCode}#about`}
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-brand-navy/5 transition-colors"
            >
              <Info className="w-4 h-4 text-brand-coral" />
              <span>About Branda V2</span>
            </Link>
            <Link
              href={isLoggedIn ? "/account" : "/account/login"}
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-brand-navy/5 hover:bg-brand-coral/10 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-brand-coral" />
                <span className="font-bold text-brand-navy">
                  {isLoggedIn ? `My Account (${user?.fullName?.split(' ')[0]})` : 'Sign In / Demo Access'}
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white text-brand-coral border border-brand-navy/10">
                {isLoggedIn ? 'Dashboard' : 'Demo Available'}
              </span>
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 mt-4 border-t border-brand-navy/10 text-center">
          <p className="text-[11px] text-brand-muted">
            © {new Date().getFullYear()} Branda V2 Ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};
