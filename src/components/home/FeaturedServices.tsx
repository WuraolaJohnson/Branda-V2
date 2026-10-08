'use client';

import React from 'react';
import Link from 'next/link';
import { getFeaturedServices } from '@/data/services';
import { MarketCode } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedServicesProps {
  marketCode: MarketCode;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ marketCode }) => {
  const featured = getFeaturedServices(marketCode);
  const market = MARKETS[marketCode] || MARKETS.ng;
  const isUS = marketCode === 'us';

  return (
    <section className="py-20 bg-brand-offwhite border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div className="space-y-2">
            <Badge variant="mint">
              {market.flag} Curated for {isUS ? 'US Market' : 'Nigeria'}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
              {isUS ? 'Featured US Enterprise Solutions' : 'Featured Branding Solutions'}
            </h2>
            <p className="text-sm text-brand-muted max-w-xl">
              {isUS
                ? 'High-conversion digital web architectures, custom e-commerce mailers, and executive corporate merch configured for US enterprises.'
                : 'High-demand tactile prints, event backdrops, branded drinkware, and vector identities delivered nationwide across Nigeria.'}
            </p>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              href={`/${marketCode}/services`}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-coral hover:text-brand-coral-hover group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 120 }}
            >
              <ServiceCard service={service} marketCode={marketCode} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
