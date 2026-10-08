export type MarketCode = 'ng' | 'us';

export type CurrencyCode = 'NGN' | 'USD' | 'GBP' | 'CAD';

export interface Market {
  code: MarketCode;
  name: string;
  flag: string;
  currency: CurrencyCode;
  currencySymbol: string;
  locale: string;
  taxRate: number; // e.g. 0.075 for 7.5%
  heroTitle: string;
  heroSubtitle: string;
  phoneContact: string;
  emailContact: string;
}

export type CategoryId =
  | 'digital'
  | 'gifts'
  | 'create'
  | 'studio'
  | 'prints'
  | 'events'
  | 'packaging'
  | 'apparel';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  iconName: string;
  features: string[];
}

export type UseCase =
  | 'Business Launch'
  | 'Corporate'
  | 'Events'
  | 'Marketing'
  | 'Personal Brand'
  | 'E-commerce';

export type Industry =
  | 'Technology'
  | 'Fashion'
  | 'Food & Hospitality'
  | 'Finance'
  | 'Real Estate'
  | 'Healthcare'
  | 'Education';

export type Urgency = 'Standard' | 'Express';

export type PopularityTag = 'Popular' | 'Trending' | 'New';

export type SortOption =
  | 'recommended'
  | 'price-asc'
  | 'price-desc'
  | 'popular'
  | 'newest';

export interface ServiceOptionChoice {
  id: string;
  label: string;
  priceModifierNGN: number;
  priceModifierUSD: number;
  isDefault?: boolean;
}

export interface ServiceOptionGroup {
  id: string;
  name: string;
  type: 'select' | 'radio';
  choices: ServiceOptionChoice[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  startingPriceNGN: number;
  startingPriceUSD: number;
  compareAtPriceNGN?: number;
  compareAtPriceUSD?: number;
  discount?: string;
  popularity: PopularityTag;
  rating: number; // e.g. 4.9
  reviewCount: number;
  turnaround: string; // e.g. "3-5 Business Days"
  useCases: UseCase[];
  industries: Industry[];
  urgency: Urgency;
  includedItems: string[];
  options: ServiceOptionGroup[];
  tags: string[];
  featured: boolean;
  marketAvailability: MarketCode[];
}

export interface SelectedServiceOptions {
  [optionGroupId: string]: string; // choiceId
}

export interface CartItem {
  id: string; // unique cart item id (service.id + option summary)
  serviceId: string;
  serviceSlug: string;
  serviceName: string;
  category: CategoryId;
  image: string;
  unitPriceNGN: number;
  unitPriceUSD: number;
  quantity: number;
  selectedOptions: {
    groupName: string;
    choiceLabel: string;
    choiceId: string;
  }[];
  turnaround: string;
}

export interface OrderCustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  additionalNotes?: string;
}

export interface Order {
  id: string; // e.g. BRD-2026-48291
  marketCode: MarketCode;
  createdAt: string;
  items: CartItem[];
  subtotalNGN: number;
  subtotalUSD: number;
  taxNGN: number;
  taxUSD: number;
  totalNGN: number;
  totalUSD: number;
  customer: OrderCustomerInfo;
  status: 'Received' | 'In Production' | 'Out for Delivery' | 'Completed';
  estimatedDelivery: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  defaultMarket: MarketCode;
  savedAddresses: {
    address: string;
    city: string;
    state: string;
    country: string;
  }[];
}
