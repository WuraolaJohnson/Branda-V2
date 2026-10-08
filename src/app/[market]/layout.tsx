import { isValidMarket } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MarketCurrencySync } from '@/components/layout/MarketCurrencySync';

interface MarketLayoutProps {
  children: React.ReactNode;
  params: {
    market: string;
  };
}

export default function MarketLayout({ children, params }: MarketLayoutProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <MarketCurrencySync marketCode={marketCode} />
      <Navbar marketCode={marketCode} />
      <main className="flex-1">{children}</main>
      <Footer marketCode={marketCode} />
    </div>
  );
}
