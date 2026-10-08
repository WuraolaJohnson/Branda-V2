'use client';

import React, { useState } from 'react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceGalleryProps {
  mainImage: string;
  gallery: string[];
  serviceName: string;
}

export const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  mainImage,
  gallery,
  serviceName,
}) => {
  const images = gallery && gallery.length > 0 ? gallery : [mainImage];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Frame */}
      <div className="relative w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden bg-brand-offwhite border border-brand-navy/10 shadow-elevated group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src={images[activeImageIndex]}
              alt={`${serviceName} image ${activeImageIndex + 1}`}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 600px"
              fallbackTitle={serviceName}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-1">
          {images.map((img, idx) => {
            const isActive = idx === activeImageIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all focus:outline-none ${
                  isActive
                    ? 'border-brand-coral ring-2 ring-brand-coral/30 scale-105 shadow-md'
                    : 'border-brand-navy/10 hover:border-brand-navy/30 opacity-70 hover:opacity-100'
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${serviceName} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  fallbackTitle={`${serviceName} preview ${idx + 1}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
