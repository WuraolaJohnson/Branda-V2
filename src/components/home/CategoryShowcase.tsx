'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { MarketCode } from '@/data/types';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryShowcaseProps {
  marketCode: MarketCode;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      type: 'spring',
      stiffness: 130,
      damping: 15,
    },
  }),
};

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ marketCode }) => {
  return (
    <section id="services" className="py-20 bg-white border-b border-brand-navy/5 scroll-mt-20 relative">
      {/* Anchor alias for categories */}
      <span id="categories" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <Badge variant="coral">Complete Brand Architecture · 8 Specialized Pillars</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Discover Our Service Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            From high-converting web applications and tactile prints to custom event backdrops, unboxing mailer boxes, and corporate merchandise, configure and launch every branding touchpoint seamlessly.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-2"
          >
            <Link
              href={`/${marketCode}/categories`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral hover:text-brand-coral-hover group bg-brand-coral/10 hover:bg-brand-coral/15 px-4 py-2 rounded-xl transition-colors"
            >
              <span>Explore Detailed Categories Pillar Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                href={`/${marketCode}/services?category=${cat.slug}`}
                className="group flex flex-col justify-between bg-brand-offwhite rounded-3xl p-5 border border-brand-navy/10 hover:border-brand-coral/30 hover:shadow-elevated transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(110deg, transparent 25%, rgba(246,145,118,0.6) 50%, transparent 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2.5s linear infinite',
                  }}
                />

                <div>
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-brand-navy/5">
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                      fallbackTitle={cat.name}
                    />
                    {cat.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-brand-navy text-white shadow-sm">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-brand-navy font-display group-hover:text-brand-coral transition-colors flex items-center justify-between">
                      <span>{cat.name}</span>
                      <Sparkles className="w-4 h-4 text-brand-coral opacity-0 group-hover:opacity-100 group-hover:animate-wiggle transition-opacity" />
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-brand-navy/10 space-y-1.5">
                    {cat.features.map((feat, i) => (
                      <div key={i} className="text-[11px] font-semibold text-brand-navy/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy/10 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-coral">
                  <span>Explore {cat.name} Solutions</span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-brand-coral group-hover:text-white flex items-center justify-center transition-all shadow-sm group-hover:shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
