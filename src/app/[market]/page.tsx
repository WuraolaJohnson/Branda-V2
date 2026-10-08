import { Metadata } from 'next';
import { isValidMarket, MARKETS } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/home/Hero';
import { MarqueeTicker } from '@/components/home/MarqueeTicker';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TrustSection } from '@/components/home/TrustSection';
import { CTASection } from '@/components/home/CTASection';

interface MarketPageProps {
  params: {
    market: string;
  };
}

export async function generateStaticParams() {
  return [{ market: 'ng' }, { market: 'us' }];
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  if (!isValidMarket(params.market)) return {};
  const market = MARKETS[params.market as MarketCode];
  const baseUrl = 'https://branda-v2.vercel.app';

  return {
    title: `${market.heroTitle} | Branda V2 ${market.name}`,
    description: market.heroSubtitle,
    alternates: {
      canonical: `${baseUrl}/${params.market}`,
      languages: {
        'en-NG': `${baseUrl}/ng`,
        'en-US': `${baseUrl}/us`,
      },
    },
    openGraph: {
      title: `${market.heroTitle} | Branda V2 ${market.name}`,
      description: market.heroSubtitle,
      url: `${baseUrl}/${params.market}`,
      siteName: 'Branda V2',
      locale: market.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${market.heroTitle} | Branda V2`,
      description: market.heroSubtitle,
    },
  };
}

export default function MarketHomePage({ params }: MarketPageProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;

  return (
    <>
      <Hero marketCode={marketCode} />
      <MarqueeTicker />
      <CategoryShowcase marketCode={marketCode} />
      <FeaturedServices marketCode={marketCode} />
      <HowItWorks />
      <TrustSection />
      <CTASection marketCode={marketCode} />
    </>
  );
}
