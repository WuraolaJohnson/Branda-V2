import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'digital',
    name: 'Digital',
    slug: 'digital',
    shortDescription: 'Websites, digital experiences and online brand solutions.',
    description:
      'Empower your enterprise with high-converting web applications, bespoke UI/UX designs, and scalable digital design systems engineered for modern growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Popular',
    iconName: 'Globe',
    features: ['High-Performance Web Design', 'Conversion-Focused Landing Pages', 'Social Media Brand Kits'],
  },
  {
    id: 'gifts',
    name: 'Gifts',
    slug: 'gifts',
    shortDescription: 'Thoughtful branded gifts and corporate gifting.',
    description:
      'Transform client relations and team culture with curated executive gift boxes, customized lifestyle merch, and premium branded employee welcome packages.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
    badge: 'Trending',
    iconName: 'Gift',
    features: ['Executive Onboarding Boxes', 'Custom Drinkware & Mugs', 'Premium Eco-Friendly Totes'],
  },
  {
    id: 'create',
    name: 'Create',
    slug: 'create',
    shortDescription: 'Creative design and visual brand assets.',
    description:
      'Distinctive brand identities, memorable vector logomarks, typography guidelines, and complete multi-channel visual toolkits crafted by master art directors.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Essential',
    iconName: 'Palette',
    features: ['Bespoke Logo Architecture', '360° Visual Brand Strategy', 'Comprehensive Typography Toolkits'],
  },
  {
    id: 'studio',
    name: 'Studio',
    slug: 'studio',
    shortDescription: 'Professional branding, workspace and production services.',
    description:
      'Bring your physical spaces and creative content to life with 4K commercial photography, high-impact tradeshow installations, and office graphics.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    badge: 'Enterprise',
    iconName: 'Camera',
    features: ['Commercial Product Photography', 'Full Office & Event Branding', 'Videography & Campaign Assets'],
  },
  {
    id: 'prints',
    name: 'Prints',
    slug: 'prints',
    shortDescription: 'Business cards, flyers, packaging, banners and printed materials.',
    description:
      'Tactile excellence using heavy-weight cotton cards, spot UV embellishments, eco-friendly luxury packaging, and ultra-durable vinyl trade displays.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop',
    badge: 'High Demand',
    iconName: 'Printer',
    features: ['Tactile Embossed Business Cards', 'Luxury Foil Business Cards', 'Large Format Trade Displays'],
  },
  {
    id: 'events',
    name: 'Events',
    slug: 'events',
    shortDescription: 'Event backdrops, media walls, trade show booths and displays.',
    description:
      'Command the stage and red carpet with tension fabric event backdrops, custom step-and-repeat media walls, premium retractable banner stands, and modular expo exhibits.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    badge: 'New & Essential',
    iconName: 'Sparkles',
    features: ['Tension Fabric Backdrops', 'Step & Repeat Media Walls', 'Deluxe Roll-Up Banners'],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    slug: 'packaging',
    shortDescription: 'Custom mailer boxes, product sleeves and retail unboxing.',
    description:
      'Turn every product delivery into a memorable unboxing journey with custom branded corrugated mailer boxes, gold foil sticker seals, tissue paper, and rigid boxes.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    badge: 'High Impact',
    iconName: 'Package',
    features: ['Custom Kraft Mailer Boxes', 'Gold Foil Sticker Labels', 'Luxury Product Sleeves'],
  },
  {
    id: 'apparel',
    name: 'Apparel',
    slug: 'apparel',
    shortDescription: 'Embroidered polos, corporate hoodies and branded workwear.',
    description:
      'Dress your team and brand advocates in ultra-comfortable, retail-grade apparel featuring precision direct-to-garment printing and high-density embroidery.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    badge: 'Merch Favorite',
    iconName: 'Shirt',
    features: ['Precision Embroidered Polos', 'Heavyweight Organic Hoodies', 'Structured Custom Caps'],
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id || cat.slug === id);
}
