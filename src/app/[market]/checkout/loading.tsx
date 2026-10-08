import { Skeleton } from '@/components/ui/Skeleton';

export default function CheckoutLoading() {
  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <Skeleton className="w-48 h-4 rounded-md" />

        {/* Page header */}
        <div className="space-y-2">
          <Skeleton className="w-72 h-9 rounded-xl" />
          <Skeleton className="w-96 h-4 rounded-md" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checkout form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-brand-navy/10 shadow-soft space-y-6">
            {/* Section heading */}
            <Skeleton className="w-40 h-6 rounded-md" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="col-span-2 w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
            </div>

            <div className="pt-4 border-t border-brand-navy/10">
              <Skeleton className="w-36 h-5 rounded-md mb-3" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-14 rounded-2xl" />
                ))}
              </div>
            </div>

            <Skeleton className="w-full h-14 rounded-2xl mt-4" />
          </div>

          {/* Order summary */}
          <div className="lg:col-span-5">
            <Skeleton className="w-full h-80 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
