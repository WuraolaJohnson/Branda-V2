'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { MarketCode } from '@/data/types';
import { MarketSelector } from './MarketSelector';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  marketCode: MarketCode;
}

export const Navbar: React.FC<NavbarProps> = ({ marketCode }) => {
  const { itemCount } = useCart();
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on page navigation
  useEffect(() => {
    setShowMegaMenu(false);
  }, [pathname]);

  // Close mega menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMegaMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/${marketCode}/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header
        onMouseLeave={() => setShowMegaMenu(false)}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-navy/10 shadow-soft py-3'
            : 'bg-brand-offwhite/95 backdrop-blur-sm border-b border-brand-navy/5 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link
              href={`/${marketCode}`}
              onMouseEnter={() => setShowMegaMenu(false)}
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-display font-black text-lg tracking-tight group-hover:scale-105 transition-transform shadow-card">
                B<span className="text-brand-coral font-bold text-sm">2</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-extrabold text-brand-navy text-xl leading-none tracking-tight">
                  BRANDA <span className="text-brand-coral font-sans text-xs uppercase tracking-widest font-bold">V2</span>
                </span>
                <span className="text-[10px] text-brand-muted font-semibold tracking-wider uppercase">
                  Branding Ecosystem
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link
                href={`/${marketCode}#services`}
                onMouseEnter={() => setShowMegaMenu(false)}
                className="text-sm font-semibold text-brand-navy hover:text-brand-coral transition-colors"
              >
                Services
              </Link>

              <div
                className="relative py-2 flex items-center gap-1"
                onMouseEnter={() => setShowMegaMenu(true)}
              >
                <Link
                  href={`/${marketCode}/categories`}
                  className="text-sm font-semibold text-brand-navy hover:text-brand-coral transition-colors"
                >
                  Categories
                </Link>
                <button
                  type="button"
                  onClick={() => setShowMegaMenu((prev) => !prev)}
                  className="p-1 text-brand-navy/60 hover:text-brand-coral transition-colors focus:outline-none"
                  aria-expanded={showMegaMenu}
                  aria-label="Toggle categories menu"
                >
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      showMegaMenu && 'rotate-180 text-brand-coral'
                    )}
                  />
                </button>
              </div>

              <Link
                href={`/${marketCode}#how-it-works`}
                onMouseEnter={() => setShowMegaMenu(false)}
                className="text-sm font-semibold text-brand-navy hover:text-brand-coral transition-colors"
              >
                How It Works
              </Link>

              <Link
                href={`/${marketCode}#about`}
                onMouseEnter={() => setShowMegaMenu(false)}
                className="text-sm font-semibold text-brand-navy hover:text-brand-coral transition-colors"
              >
                About
              </Link>
            </nav>

            {/* Right Actions */}
            <div
              className="flex items-center gap-2 sm:gap-3"
              onMouseEnter={() => setShowMegaMenu(false)}
            >
              {/* Desktop Only Actions */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Search Bar / Icon */}
                <div className="relative">
                  {isSearchOpen ? (
                    <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-64 pl-9 pr-8 py-1.5 text-xs bg-white border border-brand-coral rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40 shadow-sm"
                      />
                      <Search className="w-4 h-4 text-brand-coral absolute left-2.5" />
                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute right-2 text-xs text-brand-muted hover:text-brand-navy"
                      >
                        ✕
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2 text-brand-navy hover:text-brand-coral hover:bg-brand-navy/5 rounded-xl transition-colors focus:outline-none"
                      aria-label="Open search"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Market & Currency Selector */}
                <MarketSelector currentMarket={marketCode} />

                {/* Account / Sign In Link */}
                {isLoggedIn ? (
                  <Link
                    href="/account"
                    className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 text-brand-navy hover:text-brand-coral hover:bg-brand-navy/5 rounded-xl transition-all focus:outline-none"
                    aria-label="My Account"
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-coral/10 border border-brand-coral/30 flex items-center justify-center text-[11px] font-bold text-brand-coral">
                      {user?.fullName ? user.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'ME'}
                    </div>
                    <span className="hidden xl:inline text-xs font-bold text-brand-navy">
                      {user?.fullName?.split(' ')[0] || 'Account'}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/account/login"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-navy hover:text-brand-coral bg-brand-offwhite hover:bg-brand-coral/10 border border-brand-navy/15 hover:border-brand-coral/30 rounded-xl transition-all shadow-2xs focus:outline-none"
                    aria-label="Sign In"
                  >
                    <User className="w-3.5 h-3.5 text-brand-coral" />
                    <span>Sign In</span>
                  </Link>
                )}

                {/* Cart Button */}
                <Link
                  href={`/${marketCode}/cart`}
                  className="relative p-2.5 bg-brand-navy text-white hover:bg-brand-navy-800 rounded-xl transition-all shadow-card flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-coral/50"
                  aria-label="View Shopping Cart"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-coral" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-brand-coral text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse-subtle">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Hamburger Menu Button (Shown on mobile, hidden on lg) */}
              <button
                onClick={() => setShowMobileMenu(true)}
                className="lg:hidden p-2.5 text-brand-navy hover:text-brand-coral bg-white hover:bg-brand-navy/5 rounded-2xl transition-colors focus:outline-none border border-brand-navy/15 shadow-sm flex items-center justify-center"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop MegaMenu Overlay */}
        {showMegaMenu && (
          <MegaMenu
            marketCode={marketCode}
            onClose={() => setShowMegaMenu(false)}
          />
        )}
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        marketCode={marketCode}
      />
    </>
  );
};
