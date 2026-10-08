import { Market, MarketCode, CurrencyCode } from './types';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  locale: string;
  rateFromUSD: number; // 1 USD = rateFromUSD
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    flag: '🇳🇬',
    locale: 'en-NG',
    rateFromUSD: 1550,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    flag: '🇺🇸',
    locale: 'en-US',
    rateFromUSD: 1.0,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    flag: '🇬🇧',
    locale: 'en-GB',
    rateFromUSD: 0.78,
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    flag: '🇨🇦',
    locale: 'en-CA',
    rateFromUSD: 1.36,
  },
};

export const MARKETS: Record<MarketCode, Market> = {
  ng: {
    code: 'ng',
    name: 'Nigeria',
    flag: '🇳🇬',
    currency: 'NGN',
    currencySymbol: '₦',
    locale: 'en-NG',
    taxRate: 0.075, // 7.5% VAT
    heroTitle: 'Build Your Brand Without the Hassle.',
    heroSubtitle:
      'Elevate your business with Nigeria’s leading creative, printing, digital & corporate gifting ecosystem. Custom configured & delivered to your doorstep in Lagos, Abuja & nationwide.',
    phoneContact: '+234 800 272 6322',
    emailContact: 'hello.ng@branda.com.ng',
  },
  us: {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    taxRate: 0.0825, // 8.25% Sales Tax
    heroTitle: 'Everything Your Brand Needs, In One Place.',
    heroSubtitle:
      'Discover, customize, and order premium brand identity assets, corporate merch, packaging, and custom web experiences with enterprise turnarounds and expedited US delivery.',
    phoneContact: '+1 (800) 555-BRANDA',
    emailContact: 'hello.us@branda.com',
  },
};

export const DEFAULT_MARKET: MarketCode = 'ng';

export function isValidMarket(market: string): market is MarketCode {
  return market === 'ng' || market === 'us';
}

export function isValidCurrency(currency: string): currency is CurrencyCode {
  return currency === 'NGN' || currency === 'USD' || currency === 'GBP' || currency === 'CAD';
}

export function convertAmount(
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode
): number {
  if (fromCurrency === toCurrency) return amount;
  // Convert from source to USD base
  const amountInUSD = amount / CURRENCIES[fromCurrency].rateFromUSD;
  // Convert from USD to target
  return amountInUSD * CURRENCIES[toCurrency].rateFromUSD;
}

export function formatCurrency(
  amount: number,
  currencyOrMarket: CurrencyCode | MarketCode = 'ng'
): string {
  // Normalize if market code was provided
  let currencyCode: CurrencyCode;
  if (currencyOrMarket === 'ng') {
    currencyCode = 'NGN';
  } else if (currencyOrMarket === 'us') {
    currencyCode = 'USD';
  } else if (isValidCurrency(currencyOrMarket)) {
    currencyCode = currencyOrMarket;
  } else {
    currencyCode = 'NGN';
  }

  const config = CURRENCIES[currencyCode] || CURRENCIES.NGN;

  if (currencyCode === 'NGN') {
    return `${config.symbol}${Math.round(amount).toLocaleString('en-NG')}`;
  }

  return `${config.symbol}${amount.toLocaleString(config.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
