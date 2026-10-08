'use client';

import React from 'react';
import Link from 'next/link';
import { MarketCode } from '@/data/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  marketCode: MarketCode;
}

export const CTASection: React.FC<CTASectionProps> = ({ marketCode }) => {
  return (
    <section className="py-20 bg-brand-cream/40 border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          className="bg-brand-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-elevated border border-white/10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Animated shimmer overlay */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none animate-shimmer"
            style={{
              backgroundImage: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)',
              backgroundSize: '200% 100%',
            }}
          />

          {/* Animated background accents */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-coral/20 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none"
          />

          <div className="space-y-4 max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="coral">Ready To Upgrade?</Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white"
            >
              Elevate Your Brand Identity Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-brand-navy-200 leading-relaxed"
            >
              Explore our full suite of digital experiences, custom prints, and corporate gifts with instant multi-currency configuration and rapid delivery.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10"
          >
            <Link href={`/${marketCode}/services`}>
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <Button variant="coral" size="lg" className="w-full sm:w-auto shadow-card group animate-glow-pulse">
                  <Sparkles className="w-4 h-4 mr-1.5 animate-wiggle" />
                  Browse Catalog
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
