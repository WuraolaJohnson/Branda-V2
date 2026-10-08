import { Metadata } from 'next';
import { isValidMarket, MARKETS, formatCurrency } from '@/data/markets';
import { getServiceBySlug, SERVICES } from '@/data/services';
import { MarketCode } from '@/data/types';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { ServiceGallery } from '@/components/services/ServiceGallery';
import { ServicePriceHeader } from '@/components/services/ServicePriceHeader';
import { ServiceOptions } from '@/components/services/ServiceOptions';
import { RelatedServices } from '@/components/services/RelatedServices';
import { Star, Clock, CheckCircle2, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface ServiceDetailProps {
  params: {
    market: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const params: { market: string; slug: string }[] = [];
  const markets: MarketCode[] = ['ng', 'us'];

  markets.forEach((market) => {
    SERVICES.forEach((service) => {
      if (service.marketAvailability.includes(market)) {
        params.push({
          market,
          slug: service.slug,
        });
      }
    });
  });

  return params;
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  if (!isValidMarket(params.market)) return {};
  const marketCode = params.market as MarketCode;
  const service = getServiceBySlug(params.slug, marketCode);
  if (!service) return {};

  const baseUrl = 'https://branda-v2.vercel.app';
  const currentPath = `/${params.market}/services/${service.slug}`;

  return {
    title: `${service.name} | Branda V2 ${marketCode.toUpperCase()}`,
    description: service.shortDescription,
    alternates: {
      canonical: `${baseUrl}${currentPath}`,
      languages: {
        'en-NG': `${baseUrl}/ng/services/${service.slug}`,
        'en-US': `${baseUrl}/us/services/${service.slug}`,
      },
    },
    openGraph: {
      title: `${service.name} | Branda V2 Brand Ecosystem`,
      description: service.description,
      url: `${baseUrl}${currentPath}`,
      siteName: 'Branda V2',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} | Branda V2`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;
  const service = getServiceBySlug(params.slug, marketCode);

  if (!service) {
    notFound();
  }

  const isUS = marketCode === 'us';
  const price = isUS ? service.startingPriceUSD : service.startingPriceNGN;
  const oldPrice = isUS ? service.compareAtPriceUSD : service.compareAtPriceNGN;

  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: `/${marketCode}/services` },
            { label: service.category, href: `/${marketCode}/services?category=${service.category}` },
            { label: service.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Gallery & Included Section */}
          <div className="lg:col-span-6 space-y-10">
            <ServiceGallery
              mainImage={service.image}
              gallery={service.gallery}
              serviceName={service.name}
            />

            {/* What's Included Section */}
            <div className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2 border-b border-brand-navy/10 pb-4">
                <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                What&apos;s Included in This Package
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-navy font-semibold">
                {service.includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-mint text-brand-navy font-extrabold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Service Information & Configuration */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="navy" className="uppercase text-[10px] font-bold">
                  {service.category}
                </Badge>
                {service.discount && (
                  <Badge variant="coral" className="text-[10px] font-bold">
                    {service.discount}
                  </Badge>
                )}
                <Badge variant="mint" className="text-[10px] font-bold">
                  {service.popularity}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                {service.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 text-xs text-brand-navy font-semibold">
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-brand-navy/10 shadow-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{service.rating}</span>
                  <span className="text-brand-muted">({service.reviewCount} Client Reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-brand-navy/70">
                  <Clock className="w-4 h-4 text-brand-coral" />
                  <span>Turnaround: {service.turnaround}</span>
                </div>
              </div>
            </div>

            {/* Price Header */}
            <ServicePriceHeader
              startingPriceUSD={service.startingPriceUSD}
              startingPriceNGN={service.startingPriceNGN}
              compareAtPriceUSD={service.compareAtPriceUSD}
              compareAtPriceNGN={service.compareAtPriceNGN}
              marketCode={marketCode}
            />

            {/* Description */}
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              {service.description}
            </p>

            {/* Service Options Configurator */}
            <ServiceOptions service={service} marketCode={marketCode} />
          </div>
        </div>

        {/* Related Services Cross-Sell */}
        <RelatedServices currentService={service} marketCode={marketCode} />
      </div>
    </div>
  );
}
