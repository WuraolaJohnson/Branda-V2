'use client';

import React from 'react';
import Link from 'next/link';
import { Service, MarketCode } from '@/data/types';
import { useCurrency } from '@/context/CurrencyContext';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Star, Clock, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
  marketCode: MarketCode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, marketCode }) => {
  const { addItem } = useCart();
  const { formatPrice, currency } = useCurrency();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Generate default options
    const defaultOptions = service.options.map((opt) => {
      const defaultChoice = opt.choices.find((c) => c.isDefault) || opt.choices[0];
      return {
        groupName: opt.name,
        choiceLabel: defaultChoice ? defaultChoice.label : '',
        choiceId: defaultChoice ? defaultChoice.id : '',
      };
    });

    addItem({
      serviceId: service.id,
      serviceSlug: service.slug,
      serviceName: service.name,
      category: service.category,
      image: service.image,
      unitPriceNGN: service.startingPriceNGN,
      unitPriceUSD: service.startingPriceUSD,
      quantity: 1,
      selectedOptions: defaultOptions,
      turnaround: service.turnaround,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-3xl p-4 border border-brand-navy/10 hover:border-brand-navy/30 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
    >
      <div>
        {/* Image & Badges Container */}
        <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-4 bg-brand-offwhite">
          <ImageWithFallback
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fallbackTitle={service.name}
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <Badge variant="navy" className="text-[10px] uppercase font-bold tracking-wider">
              {service.category}
            </Badge>
            {service.discount && (
              <Badge variant="coral" className="text-[10px] font-bold">
                {service.discount}
              </Badge>
            )}
          </div>
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-brand-navy flex items-center gap-1 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{service.rating}</span>
            <span className="text-brand-muted text-[10px]">({service.reviewCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Link href={`/${marketCode}/services/${service.slug}`}>
            <h3 className="text-lg font-bold text-brand-navy font-display group-hover:text-brand-coral transition-colors line-clamp-1">
              {service.name}
            </h3>
          </Link>

          <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Turnaround Badge */}
        <div className="flex items-center gap-1.5 text-[11px] text-brand-navy/70 font-semibold mt-3 pt-3 border-t border-brand-navy/5">
          <Clock className="w-3.5 h-3.5 text-brand-coral" />
          <span>Turnaround: {service.turnaround}</span>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="mt-4 pt-3 border-t border-brand-navy/10 space-y-3">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs text-brand-muted block font-medium">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-brand-navy font-display">
                {formatPrice(service.startingPriceUSD, service.startingPriceNGN)}
              </span>
              {service.compareAtPriceUSD && (
                <span className="text-xs text-brand-muted line-through font-medium">
                  {formatPrice(service.compareAtPriceUSD, service.compareAtPriceNGN)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 pt-1">
          <Link href={`/${marketCode}/services/${service.slug}`} className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full group/btn text-xs font-semibold py-2 px-3 whitespace-nowrap justify-center h-9"
            >
              <span>View Service</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 flex-shrink-0 group-hover/btn:translate-x-0.5 transition-transform hidden sm:inline-block" />
            </Button>
          </Link>
          <Button
            variant="coral"
            size="sm"
            onClick={handleQuickAdd}
            className="w-full text-xs font-bold py-2 px-3 whitespace-nowrap justify-center shadow-sm hover:shadow h-9"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
