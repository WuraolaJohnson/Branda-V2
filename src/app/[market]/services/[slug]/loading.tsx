import { Skeleton } from '@/components/ui/Skeleton';

export default function ServiceDetailLoading() {
  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb skeleton */}
        <Skeleton className="w-64 h-4 rounded-md mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column: image gallery + included items */}
          <div className="lg:col-span-6 space-y-10">
            {/* Main image */}
            <Skeleton className="w-full h-[420px] rounded-3xl" />

            {/* Included items block */}
            <div className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-soft space-y-4">
              <Skeleton className="w-48 h-6 rounded-md" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-5 rounded-md" />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: service info & options */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              <Skeleton className="w-20 h-6 rounded-full" />
              <Skeleton className="w-16 h-6 rounded-full" />
            </div>

            {/* Title */}
            <Skeleton className="w-3/4 h-10 rounded-xl" />

            {/* Rating row */}
            <div className="flex items-center gap-3">
              <Skeleton className="w-40 h-7 rounded-full" />
              <Skeleton className="w-36 h-7 rounded-full" />
            </div>

            {/* Price */}
            <Skeleton className="w-48 h-12 rounded-xl" />

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-5/6 h-4 rounded-md" />
              <Skeleton className="w-4/6 h-4 rounded-md" />
            </div>

            {/* Option groups */}
            <div className="space-y-4 pt-4 border-t border-brand-navy/10">
              <Skeleton className="w-24 h-4 rounded-md" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-14 rounded-2xl" />
                ))}
              </div>
            </div>

            {/* Quantity + CTA block */}
            <div className="pt-4 border-t border-brand-navy/10">
              <Skeleton className="w-full h-32 rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Related services */}
        <div className="mt-16 space-y-6">
          <Skeleton className="w-56 h-8 rounded-xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-full h-64 rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
