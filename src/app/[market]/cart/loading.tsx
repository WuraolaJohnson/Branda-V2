import { Skeleton } from '@/components/ui/Skeleton';

export default function CartLoading() {
  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Skeleton className="w-40 h-4 rounded-md mb-8" />

        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <Skeleton className="w-56 h-9 rounded-xl" />
            <Skeleton className="w-80 h-4 rounded-md" />
          </div>
          <Skeleton className="w-28 h-9 rounded-xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart items */}
          <div className="lg:col-span-8 space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-brand-navy/10 shadow-soft flex gap-5"
              >
                <Skeleton className="w-20 h-20 rounded-2xl flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="w-3/4 h-5 rounded-md" />
                  <Skeleton className="w-1/2 h-4 rounded-md" />
                  <div className="flex items-center justify-between pt-1">
                    <Skeleton className="w-32 h-9 rounded-2xl" />
                    <Skeleton className="w-20 h-6 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-4">
            <Skeleton className="w-full h-72 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
