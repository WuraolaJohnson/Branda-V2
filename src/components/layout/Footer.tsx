import React from 'react';
import Link from 'next/link';
import { MarketCode } from '@/data/types';
import { CATEGORIES } from '@/data/categories';
import { MARKETS } from '@/data/markets';
import { Sparkles, Globe, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  marketCode: MarketCode;
}

export const Footer: React.FC<FooterProps> = ({ marketCode }) => {
  const currentMarketInfo = MARKETS[marketCode] || MARKETS.ng;

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-coral text-white flex items-center justify-center font-display font-black text-lg shadow-card">
                B2
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                BRANDA <span className="text-brand-coral font-sans text-xs uppercase tracking-widest font-bold">V2</span>
              </span>
            </div>
            <p className="text-sm text-brand-navy-200 max-w-sm leading-relaxed">
              One ecosystem. Everything your brand needs. Discover, configure, and order premium branding, digital, print, and corporate solutions effortlessly.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="p-2.5 bg-white/5 hover:bg-brand-coral rounded-xl text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-brand-coral rounded-xl text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-brand-coral rounded-xl text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-brand-coral rounded-xl text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-brand-coral uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Services
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-navy-200 font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${marketCode}/services?category=${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name} Solutions
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xs font-bold text-brand-coral uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-navy-200 font-medium">
              <li>
                <Link href={`/${marketCode}#about`} className="hover:text-white transition-colors">
                  About Branda
                </Link>
              </li>
              <li>
                <Link href={`/${marketCode}#how-it-works`} className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Customer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Markets & Contact */}
          <div>
            <h4 className="text-xs font-bold text-brand-coral uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Market Support
            </h4>
            <div className="space-y-3 text-xs text-brand-navy-200">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>{currentMarketInfo.flag}</span>
                  <span>{currentMarketInfo.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Phone className="w-3 h-3 text-brand-coral" />
                  <span>{currentMarketInfo.phoneContact}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Mail className="w-3 h-3 text-brand-coral" />
                  <span>{currentMarketInfo.emailContact}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-brand-navy-300">
                <span>Available Markets:</span>
                <Link href="/ng" className="hover:text-brand-coral font-bold">Nigeria 🇳🇬</Link>
                <span>|</span>
                <Link href="/us" className="hover:text-brand-coral font-bold">USA 🇺🇸</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-navy-300">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Branda V2. All rights reserved. Senior Frontend Engineer.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
