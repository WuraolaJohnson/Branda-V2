import { Service, ServiceOptionGroup, CategoryId, UseCase, Industry, SortOption, MarketCode } from './types';

export const SERVICES: Service[] = [
  // --- DIGITAL CATEGORY ---
  {
    id: 'digital-website-design',
    slug: 'business-website-design',
    name: 'Business Website Design',
    category: 'digital',
    shortDescription: 'Custom, high-performing website built to convert visitors into loyal customers.',
    description: 'Elevate your online presence with a bespoke, mobile-optimized business website. Crafted with Next.js architecture, rapid load times, interactive micro-animations, and full Content Management System integration so your marketing team can update content effortlessly.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 450000,
    startingPriceUSD: 1200,
    compareAtPriceNGN: 550000,
    compareAtPriceUSD: 1500,
    discount: '18% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 42,
    turnaround: '10-14 Business Days',
    useCases: ['Business Launch', 'Corporate', 'E-commerce'],
    industries: ['Technology', 'Finance', 'Real Estate', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      'Up to 8 Custom Page Layouts',
      'Fully Responsive & Mobile-Optimized',
      'CMS / Headless Integration',
      'Basic On-Page SEO Optimization',
      'Interactive Contact Forms & Google Analytics',
      '30-Day Post-Launch Support',
    ],
    options: [
      {
        id: 'pages',
        name: 'Page Scope',
        type: 'select',
        choices: [
          { id: '5-pages', label: 'Up to 5 Pages', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '10-pages', label: 'Up to 10 Pages', priceModifierNGN: 150000, priceModifierUSD: 400 },
          { id: '15-pages', label: 'Up to 15 Pages', priceModifierNGN: 300000, priceModifierUSD: 750 },
        ],
      },
      {
        id: 'turnaround',
        name: 'Delivery Speed',
        type: 'radio',
        choices: [
          { id: 'std-delivery', label: 'Standard (10-14 Days)', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'express-delivery', label: 'Express Rush (5-7 Days)', priceModifierNGN: 120000, priceModifierUSD: 300 },
        ],
      },
    ],
    tags: ['web design', 'nextjs', 'seo', 'digital', 'frontend'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'digital-landing-page',
    slug: 'landing-page-design',
    name: 'High-Converting Landing Page',
    category: 'digital',
    shortDescription: 'Conversion-engineered single-page design for marketing campaigns and product launches.',
    description: 'Maximized for conversion efficiency. We design and build ultra-fast, high-converting landing pages tailored for paid campaign traffic, product announcements, and lead generation.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 180000,
    startingPriceUSD: 450,
    compareAtPriceNGN: 220000,
    compareAtPriceUSD: 550,
    discount: '18% OFF',
    popularity: 'Trending',
    rating: 4.8,
    reviewCount: 31,
    turnaround: '4-6 Business Days',
    useCases: ['Marketing', 'E-commerce', 'Personal Brand'],
    industries: ['Technology', 'Fashion', 'Education'],
    urgency: 'Standard',
    includedItems: [
      'Single High-Impact Converting Layout',
      'A/B Testing Friendly Setup',
      'Copywriting Optimization Support',
      'Lead Capture & CRM Integration',
    ],
    options: [
      {
        id: 'copywriting',
        name: 'Copywriting Service',
        type: 'select',
        choices: [
          { id: 'no-copy', label: 'Client Provides Copy', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'pro-copy', label: 'Professional Sales Copy included', priceModifierNGN: 50000, priceModifierUSD: 120 },
        ],
      },
    ],
    tags: ['landing page', 'conversion', 'ui ux', 'leads'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'digital-social-media',
    slug: 'social-media-design',
    name: 'Social Media Campaign Assets',
    category: 'digital',
    shortDescription: 'Scroll-stopping graphics, carousel templates and animated story assets for social growth.',
    description: 'Transform your brand channels with high-grade visual assets designed specifically for Instagram, LinkedIn, X (Twitter), and Facebook. Includes editable Figma templates.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 95000,
    startingPriceUSD: 250,
    popularity: 'New',
    rating: 4.7,
    reviewCount: 19,
    turnaround: '3-5 Business Days',
    useCases: ['Marketing', 'Personal Brand', 'Events'],
    industries: ['Fashion', 'Food & Hospitality', 'Technology'],
    urgency: 'Standard',
    includedItems: [
      '15 Custom Post Graphic Layouts',
      '5 Multi-Slide Carousel Templates',
      'Story & Reel Cover Presets',
      'Editable Figma Master Source File',
    ],
    options: [
      {
        id: 'pack-size',
        name: 'Asset Pack Size',
        type: 'select',
        choices: [
          { id: '15-posts', label: 'Standard Pack (15 graphics)', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '30-posts', label: 'Growth Pack (30 graphics)', priceModifierNGN: 70000, priceModifierUSD: 180 },
        ],
      },
    ],
    tags: ['social media', 'graphics', 'templates', 'marketing'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- GIFTS CATEGORY ---
  {
    id: 'gifts-branded-mugs',
    slug: 'branded-mugs',
    name: 'Bespoke Ceramic & Travel Mugs',
    category: 'gifts',
    shortDescription: 'Premium ceramic mugs and insulated stainless steel tumblers with laser-etched branding.',
    description: 'Keep your brand top-of-mind with everyday executive drinkware. Finished in matte soft-touch coatings or metallic trim with fade-proof UV sublimation or laser engraving.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 45000,
    startingPriceUSD: 95,
    compareAtPriceNGN: 55000,
    compareAtPriceUSD: 120,
    discount: '18% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 64,
    turnaround: '5-7 Business Days',
    useCases: ['Corporate', 'Events', 'Personal Brand'],
    industries: ['Technology', 'Finance', 'Food & Hospitality'],
    urgency: 'Standard',
    includedItems: [
      'HD Laser Engraving / Color Printing',
      'Individual Protective Box Packaging',
      'Dishwasher & Microwave Safe Ceramic',
      'Free Digital Proof Preview',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Order Quantity',
        type: 'select',
        choices: [
          { id: '25-units', label: '25 Units', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '50-units', label: '50 Units', priceModifierNGN: 35000, priceModifierUSD: 75 },
          { id: '100-units', label: '100 Units', priceModifierNGN: 75000, priceModifierUSD: 160 },
        ],
      },
      {
        id: 'material',
        name: 'Mug Type',
        type: 'radio',
        choices: [
          { id: 'ceramic', label: 'Matte Black Ceramic (11oz)', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'thermal-flask', label: 'Insulated Stainless Steel Flask (16oz)', priceModifierNGN: 20000, priceModifierUSD: 45 },
        ],
      },
    ],
    tags: ['mugs', 'gifts', 'drinkware', 'merchandise'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'gifts-corporate-box',
    slug: 'corporate-gift-box',
    name: 'Executive Onboarding Gift Box',
    category: 'gifts',
    shortDescription: 'Luxurious gift hampers tailored for new hires, high-value clients, and VIP partners.',
    description: 'Make an unforgettable first impression. Packed inside a rigid magnetic closure box featuring custom foiled lettering, filled with branded notebooks, tech accessories, coffee, and custom pen sets.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 125000,
    startingPriceUSD: 280,
    popularity: 'Popular',
    rating: 5.0,
    reviewCount: 38,
    turnaround: '7-10 Business Days',
    useCases: ['Corporate', 'Business Launch'],
    industries: ['Finance', 'Technology', 'Real Estate'],
    urgency: 'Express',
    includedItems: [
      'Custom Foiled Rigid Box with Ribbon',
      'Insulated Thermal Flask',
      'Hardcover Soft-Touch Notebook',
      'Engraved Metal Pen Set',
      'Custom Greeting & Welcome Card',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Box Count',
        type: 'select',
        choices: [
          { id: '10-boxes', label: '10 Boxes', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '25-boxes', label: '25 Boxes', priceModifierNGN: 150000, priceModifierUSD: 320 },
          { id: '50-boxes', label: '50 Boxes', priceModifierNGN: 320000, priceModifierUSD: 700 },
        ],
      },
    ],
    tags: ['corporate gift', 'executive box', 'welcome kit'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'gifts-custom-totes',
    slug: 'custom-tote-bags',
    name: 'Organic Cotton Canvas Tote Bags',
    category: 'gifts',
    shortDescription: 'Eco-conscious heavy canvas totes screen-printed or embroidered with your brand logo.',
    description: 'Durable, stylish, and eco-friendly promotional tote bags crafted from 300gsm organic cotton canvas. Perfect for trade events, retail giveaways, and eco-conscious branding campaigns.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 60000,
    startingPriceUSD: 130,
    popularity: 'Trending',
    rating: 4.8,
    reviewCount: 29,
    turnaround: '5-7 Business Days',
    useCases: ['Events', 'Marketing', 'E-commerce'],
    industries: ['Fashion', 'Food & Hospitality', 'Education'],
    urgency: 'Standard',
    includedItems: [
      '100% Organic Heavyweight Canvas',
      'Reinforced Cross-Stitch Handles',
      'High-Definition Screen Print',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Quantity',
        type: 'select',
        choices: [
          { id: '50-totes', label: '50 Totes', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '100-totes', label: '100 Totes', priceModifierNGN: 50000, priceModifierUSD: 110 },
        ],
      },
    ],
    tags: ['tote bag', 'canvas', 'eco', 'merch'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- CREATE CATEGORY ---
  {
    id: 'create-logo-design',
    slug: 'logo-design',
    name: 'Bespoke Brand Logo Architecture',
    category: 'create',
    shortDescription: 'Memorable, timeless logomark design crafted by senior brand visual architects.',
    description: 'Your logo is the visual cornerstone of your enterprise. We create distinct, scalable, and versatile logo concepts backed by deep competitor research, typography pairing, and vector geometry.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 150000,
    startingPriceUSD: 350,
    compareAtPriceNGN: 190000,
    compareAtPriceUSD: 450,
    discount: '21% OFF',
    popularity: 'Popular',
    rating: 5.0,
    reviewCount: 94,
    turnaround: '5-7 Business Days',
    useCases: ['Business Launch', 'Personal Brand', 'Corporate'],
    industries: ['Technology', 'Fashion', 'Finance', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      '3 Unique Distinct Logo Concepts',
      'Primary, Secondary & Submark Variations',
      'Vector Files (.AI, .EPS, .SVG, .PNG, .PDF)',
      'Full Color Palette & Font Hierarchy Sheet',
      'Full Commercial Copyright Transfer',
    ],
    options: [
      {
        id: 'concepts',
        name: 'Concept Variants',
        type: 'select',
        choices: [
          { id: '3-concepts', label: '3 Initial Concepts', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '5-concepts', label: '5 Premium Concepts + 3D Mockups', priceModifierNGN: 75000, priceModifierUSD: 150 },
        ],
      },
    ],
    tags: ['logo design', 'branding', 'vector', 'identity'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'create-brand-identity',
    slug: 'brand-identity-package',
    name: '360° Visual Brand Identity Package',
    category: 'create',
    shortDescription: 'Comprehensive brand architecture, visual identity, and brand guideline design system.',
    description: 'A complete end-to-end brand identity transformation. From strategic positioning and logomark refinement to color theory, custom pattern assets, tone of voice, and a 40-page brand manual.',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 380000,
    startingPriceUSD: 950,
    compareAtPriceNGN: 450000,
    compareAtPriceUSD: 1100,
    discount: '15% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 57,
    turnaround: '10-14 Business Days',
    useCases: ['Corporate', 'Business Launch', 'E-commerce'],
    industries: ['Finance', 'Technology', 'Real Estate'],
    urgency: 'Standard',
    includedItems: [
      'Full Logo Suite & Iconography',
      'Color System (RGB, CMYK, Pantone, HEX)',
      'Typography & Hierarchy Rules',
      '40-Page Comprehensive Brand Guidelines Book',
      'Stationery & Digital Asset Templates',
    ],
    options: [
      {
        id: 'guidelines-format',
        name: 'Deliverable Package',
        type: 'select',
        choices: [
          { id: 'digital-pdf', label: 'Digital PDF & Cloud Assets', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'printed-book', label: 'Hardcover Printed Book + Digital', priceModifierNGN: 60000, priceModifierUSD: 140 },
        ],
      },
    ],
    tags: ['brand identity', 'guidelines', 'design system', 'strategy'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'create-social-kit',
    slug: 'social-media-brand-kit',
    name: 'Social Media Brand Kit & Grid Layouts',
    category: 'create',
    shortDescription: 'Uniform social profile visuals, highlights, banners, and editable post master kits.',
    description: 'Align your social presence with your core brand identity. We design cohesive channel covers, story highlights, Instagram grid templates, and LinkedIn banner systems.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 85000,
    startingPriceUSD: 200,
    popularity: 'New',
    rating: 4.8,
    reviewCount: 22,
    turnaround: '3-5 Business Days',
    useCases: ['Personal Brand', 'Marketing'],
    industries: ['Fashion', 'Food & Hospitality', 'Education'],
    urgency: 'Standard',
    includedItems: [
      'Avatar & Header Assets (All Platforms)',
      '12 Instagram Highlight Cover Icons',
      'Grid Template System (Figma / Canva)',
    ],
    options: [],
    tags: ['social kit', 'instagram', 'linkedin', 'design'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- STUDIO CATEGORY ---
  {
    id: 'studio-product-photo',
    slug: 'product-photography',
    name: 'Commercial Product Photography',
    category: 'studio',
    shortDescription: 'Studio lighting, 4K resolution macro details, and color-matched ecommerce imagery.',
    description: 'Make your physical products irresistible online. Filmed in our high-end studio with motorized turntables, specialized macro glass, softboxes, and post-production background isolation.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 140000,
    startingPriceUSD: 320,
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 36,
    turnaround: '4-6 Business Days',
    useCases: ['E-commerce', 'Marketing', 'Business Launch'],
    industries: ['Fashion', 'Food & Hospitality', 'Technology'],
    urgency: 'Standard',
    includedItems: [
      '15 High-Resolution Studio Shots',
      'Pure White & Transparent Background Cutouts',
      'Color Match Calibration',
      'Commercial Web & Print Usage Rights',
    ],
    options: [
      {
        id: 'shot-count',
        name: 'Shot Volume',
        type: 'select',
        choices: [
          { id: '15-shots', label: '15 High-Res Shots', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '30-shots', label: '30 High-Res Shots', priceModifierNGN: 90000, priceModifierUSD: 200 },
        ],
      },
    ],
    tags: ['photography', 'product', 'ecommerce', 'studio'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'studio-brand-photoshoot',
    slug: 'brand-photoshoot',
    name: 'Executive & Corporate Team Photoshoot',
    category: 'studio',
    shortDescription: 'On-location or studio portraiture capturing leadership team dynamics and company culture.',
    description: 'Elevate your team page, press releases, and Annual Reports with sleek executive portraits and environment lifestyle photography. Shot by seasoned commercial fashion and corporate directors.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 220000,
    startingPriceUSD: 550,
    popularity: 'Trending',
    rating: 4.9,
    reviewCount: 28,
    turnaround: '5-7 Business Days',
    useCases: ['Corporate', 'Personal Brand'],
    industries: ['Finance', 'Healthcare', 'Real Estate', 'Technology'],
    urgency: 'Express',
    includedItems: [
      'Half-Day On-Location Production',
      'Portraits for up to 8 Key Team Members',
      'High-End Skin Retouching & Color Grading',
    ],
    options: [],
    tags: ['portraits', 'team photoshoot', 'studio', 'corporate'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'studio-event-branding',
    slug: 'event-branding-setup',
    name: 'Event & Trade Exhibition Branding Setup',
    category: 'studio',
    shortDescription: 'Turnkey tradeshow booth visuals, registration counters, lightboxes, and architectural graphics.',
    description: 'Command the attention of the entire convention hall. Complete architectural spatial design, tension fabric walls, illuminated LED lightboxes, and on-site assembly supervision.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 500000,
    startingPriceUSD: 1400,
    popularity: 'Popular',
    rating: 5.0,
    reviewCount: 15,
    turnaround: '7-12 Business Days',
    useCases: ['Events', 'Corporate', 'Marketing'],
    industries: ['Technology', 'Finance', 'Real Estate'],
    urgency: 'Express',
    includedItems: [
      '3D Booth Architectural Renderings',
      'Modular Aluminum Frame & Fabric Prints',
      'LED Lighted Counters & Media Towers',
      'Logistics & Setup Coordination',
    ],
    options: [],
    tags: ['event', 'tradeshow', 'exhibition', 'booth'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- PRINTS CATEGORY ---
  {
    id: 'prints-business-cards',
    slug: 'business-cards',
    name: 'Luxury Embossed Business Cards',
    category: 'prints',
    shortDescription: 'Tactile 400gsm soft-touch cotton cards with raised foil lettering and painted edges.',
    description: 'Handing over your card should feel like a moment of luxury. Printed on ultra-thick 400gsm cotton stock with optional gold/silver foil stamping, spot UV gloss finish, and custom painted edge colors.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 35000,
    startingPriceUSD: 75,
    compareAtPriceNGN: 45000,
    compareAtPriceUSD: 95,
    discount: '22% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 112,
    turnaround: '3-5 Business Days',
    useCases: ['Corporate', 'Personal Brand', 'Business Launch'],
    industries: ['Finance', 'Real Estate', 'Technology', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      '400gsm Premium Soft-Touch Heavyweight Stock',
      'Full Double-Sided Color Printing',
      'Protective Acrylic Presentation Case',
      'Free Digital Print Proof',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Card Quantity',
        type: 'select',
        choices: [
          { id: '100-cards', label: '100 Cards', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '250-cards', label: '250 Cards', priceModifierNGN: 20000, priceModifierUSD: 45 },
          { id: '500-cards', label: '500 Cards', priceModifierNGN: 40000, priceModifierUSD: 85 },
          { id: '1000-cards', label: '1,000 Cards', priceModifierNGN: 70000, priceModifierUSD: 145 },
        ],
      },
      {
        id: 'finish',
        name: 'Special Finish',
        type: 'radio',
        choices: [
          { id: 'standard-matte', label: 'Standard Matte Finish', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'gold-foil', label: 'Raised Gold Foil Stamping', priceModifierNGN: 15000, priceModifierUSD: 30 },
          { id: 'spot-uv', label: 'Selective Spot UV Gloss', priceModifierNGN: 12000, priceModifierUSD: 25 },
        ],
      },
    ],
    tags: ['business cards', 'prints', 'embossed', 'stationery'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'prints-flyers',
    slug: 'flyers',
    name: 'Marketing Flyers & Promotional Leaflets',
    category: 'prints',
    shortDescription: 'Vibrant glossy flyers available in A5/A4 formats for street marketing and events.',
    description: 'Reach thousands of prospective customers with crisp, full-color offset flyers printed on 250gsm gloss paper stock. Crisp details, accurate pantone shades, and scratch-resistant coating.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 40000,
    startingPriceUSD: 85,
    popularity: 'Trending',
    rating: 4.8,
    reviewCount: 78,
    turnaround: '2-4 Business Days',
    useCases: ['Marketing', 'Events', 'E-commerce'],
    industries: ['Food & Hospitality', 'Fashion', 'Education'],
    urgency: 'Express',
    includedItems: [
      '250gsm Premium Gloss Paper',
      'Vibrant Double-Sided Printing',
      'Bundled & Poly-Wrapped for Easy Distribution',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Print Quantity',
        type: 'select',
        choices: [
          { id: '250-flyers', label: '250 Copies (A5)', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '500-flyers', label: '500 Copies (A5)', priceModifierNGN: 25000, priceModifierUSD: 50 },
          { id: '1000-flyers', label: '1,000 Copies (A5)', priceModifierNGN: 45000, priceModifierUSD: 90 },
        ],
      },
    ],
    tags: ['flyers', 'marketing', 'prints', 'leaflet'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'prints-event-backdrop',
    slug: 'event-backdrops',
    name: 'Tension Fabric Event Backdrops & Step-and-Repeats',
    category: 'prints',
    shortDescription: 'Seamless tension fabric photo backdrops for red carpet galas, product reveals, and conferences.',
    description: 'No glare, no wrinkles. High-resolution dye-sublimation printing on stretch polyester fabric paired with a lightweight, tool-free aluminum frame assembly.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 130000,
    startingPriceUSD: 310,
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 45,
    turnaround: '4-6 Business Days',
    useCases: ['Events', 'Corporate', 'Marketing'],
    industries: ['Fashion', 'Technology', 'Real Estate'],
    urgency: 'Standard',
    includedItems: [
      '8ft x 8ft Seamless Stretch Fabric Banner',
      'Anodized Aluminum Snap-Lock Frame',
      'Padded Canvas Carrying Duffel Case',
    ],
    options: [
      {
        id: 'size',
        name: 'Backdrop Dimension',
        type: 'select',
        choices: [
          { id: '8x8', label: '8ft x 8ft Standard', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '10x8', label: '10ft x 8ft Grand Wall', priceModifierNGN: 35000, priceModifierUSD: 80 },
        ],
      },
    ],
    tags: ['backdrop', 'banner', 'event', 'red carpet'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'prints-brochures',
    slug: 'branded-brochures',
    name: 'Tri-Fold & Multi-Page Corporate Brochures',
    category: 'prints',
    shortDescription: 'Sleek presentation brochures with metallic foil highlights and saddle-stitched binding.',
    description: 'Tell your story with elegance. Perfectly folded multi-page booklets printed on velvet-laminated paper stock designed to present your company overview and product line to major buyers.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 75000,
    startingPriceUSD: 175,
    popularity: 'New',
    rating: 4.8,
    reviewCount: 33,
    turnaround: '4-6 Business Days',
    useCases: ['Corporate', 'Business Launch'],
    industries: ['Finance', 'Real Estate', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      '300gsm Velvet Laminated Cover',
      'Precision Score Folding',
      'High-Density Color Reproduction',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Brochure Quantity',
        type: 'select',
        choices: [
          { id: '100-units', label: '100 Copies', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '250-units', label: '250 Copies', priceModifierNGN: 40000, priceModifierUSD: 95 },
        ],
      },
    ],
    tags: ['brochure', 'corporate print', 'tri-fold', 'booklet'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'prints-stickers',
    slug: 'stickers',
    name: 'Custom Die-Cut Vinyl Packaging Stickers',
    category: 'prints',
    shortDescription: 'Weatherproof vinyl stickers cut precisely to your brand logo shape.',
    description: 'Thick, durable vinyl protects your stickers from scratches, rain & sunlight. Perfect for product packaging, mailer boxes, laptops, and giveaway swag bags.',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 25000,
    startingPriceUSD: 550,
    popularity: 'Trending',
    rating: 4.9,
    reviewCount: 88,
    turnaround: '2-4 Business Days',
    useCases: ['E-commerce', 'Marketing', 'Personal Brand'],
    industries: ['Fashion', 'Food & Hospitality'],
    urgency: 'Express',
    includedItems: [
      'Weatherproof Matte or Gloss Vinyl',
      'Precision Laser Die-Cutting',
      'Easy-Peel Backing Paper',
    ],
    options: [
      {
        id: 'quantity',
        name: 'Sticker Quantity',
        type: 'select',
        choices: [
          { id: '100-stickers', label: '100 Stickers', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '500-stickers', label: '500 Stickers', priceModifierNGN: 30000, priceModifierUSD: 60 },
        ],
      },
    ],
    tags: ['stickers', 'die-cut', 'vinyl', 'packaging'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'prints-posters',
    slug: 'posters',
    name: 'Large Format Gallery & Retail Posters',
    category: 'prints',
    shortDescription: 'Museum-quality archival satin paper posters for store fronts and indoor advertising.',
    description: 'Bold, saturated color output using 12-ink pigment printers. Mounted on 200gsm satin paper stock with glare-resistant satin coating.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 30000,
    startingPriceUSD: 65,
    popularity: 'New',
    rating: 4.7,
    reviewCount: 20,
    turnaround: '2-3 Business Days',
    useCases: ['Events', 'Marketing'],
    industries: ['Fashion', 'Education', 'Food & Hospitality'],
    urgency: 'Standard',
    includedItems: [
      '200gsm Archival Satin Paper',
      'High-Density Pigment Inks',
      'Protective Mailing Tube Packaging',
    ],
    options: [],
    tags: ['posters', 'prints', 'gallery', 'retail'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- EVENTS CATEGORY ---
  {
    id: 'events-backdrop',
    slug: 'custom-event-backdrop',
    name: 'Custom Event Backdrop & Step-and-Repeat',
    category: 'events',
    shortDescription: 'High-impact tension fabric backdrops and photo media walls for launches, galas, and red carpets.',
    description: 'Command attention at product launches, trade expos, and press events. Printed on wrinkle-free matte polyester tension fabric that absorbs camera flash without glare. Includes a lightweight, tool-free telescoping aluminum frame and durable carry bag.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 145000,
    startingPriceUSD: 320,
    compareAtPriceNGN: 175000,
    compareAtPriceUSD: 380,
    discount: '17% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 44,
    turnaround: '3-5 Business Days',
    useCases: ['Events', 'Marketing', 'Corporate'],
    industries: ['Fashion', 'Technology', 'Food & Hospitality', 'Real Estate'],
    urgency: 'Express',
    includedItems: [
      'Seamless Tension Fabric Banner',
      'Telescoping Aluminum Stand Kit',
      'Heavy-Duty Padded Carrying Bag',
      'Pre-Flight Print Artwork Inspection',
    ],
    options: [
      {
        id: 'dimensions',
        name: 'Backdrop Dimensions',
        type: 'select',
        choices: [
          { id: '8x8', label: '8 x 8 ft Standard Square', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '10x8', label: '10 x 8 ft Wide Media Wall', priceModifierNGN: 35000, priceModifierUSD: 75 },
          { id: '12x8', label: '12 x 8 ft Panoramic Wall', priceModifierNGN: 65000, priceModifierUSD: 140 },
        ],
      },
      {
        id: 'hardware',
        name: 'Hardware Package',
        type: 'radio',
        choices: [
          { id: 'full-kit', label: 'Complete Kit with Frame & Bag', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'fabric-only', label: 'Replacement Fabric Banner Only', priceModifierNGN: -30000, priceModifierUSD: -65 },
        ],
      },
    ],
    tags: ['event backdrop', 'step and repeat', 'events', 'photo wall', 'red carpet'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },
  {
    id: 'events-rollup-banners',
    slug: 'rollup-banner-stands',
    name: 'Deluxe Roll-Up Pull-Up Banners',
    category: 'events',
    shortDescription: 'Portable retractable pull-up banners with aluminum broad base and vivid anti-curl film.',
    description: 'Setup instant professional branding anywhere in 30 seconds. Printed on premium anti-curl, tear-resistant blockout PET film with rich high-resolution saturation. Retracts neatly into a weighted broad aluminum cassette with chrome end-caps.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 52000,
    startingPriceUSD: 115,
    compareAtPriceNGN: 65000,
    compareAtPriceUSD: 140,
    discount: '20% OFF',
    popularity: 'Popular',
    rating: 4.9,
    reviewCount: 31,
    turnaround: '2-3 Business Days',
    useCases: ['Events', 'Marketing', 'Business Launch'],
    industries: ['Technology', 'Education', 'Healthcare', 'Finance'],
    urgency: 'Express',
    includedItems: [
      'Heavy-Duty Retractable Cassette',
      'Anti-Curl Blockout Film Graphic',
      'Padded Travel Carrying Bag',
      'Snap-Top Graphic Rail',
    ],
    options: [
      {
        id: 'base',
        name: 'Base Construction',
        type: 'radio',
        choices: [
          { id: 'standard', label: 'Standard Dual-Foot Aluminum', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'deluxe', label: 'Broad Base Deluxe Chrome', priceModifierNGN: 18000, priceModifierUSD: 40 },
        ],
      },
      {
        id: 'quantity',
        name: 'Package Quantity',
        type: 'select',
        choices: [
          { id: '1-stand', label: '1 Stand', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '2-stands', label: '2 Stands Bundle', priceModifierNGN: 45000, priceModifierUSD: 100 },
          { id: '4-stands', label: '4 Stands Expo Kit', priceModifierNGN: 90000, priceModifierUSD: 200 },
        ],
      },
    ],
    tags: ['rollup banner', 'pull up banner', 'events', 'trade show', 'stands'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- GIFTS EXPANSION (BRANDED MUGS) ---
  {
    id: 'gifts-mugs',
    slug: 'branded-mugs-drinkware',
    name: 'Custom Branded Ceramic & Travel Mugs',
    category: 'gifts',
    shortDescription: 'High-definition wrap-around printed mugs and insulated travel tumblers for clients and teams.',
    description: 'Keep your brand top-of-mind every morning. High-grade stoneware ceramic mugs and double-wall vacuum insulated stainless steel tumblers personalized with your logo or artwork. Dishwasher safe with vibrant, scratch-proof sublimation printing.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 48000,
    startingPriceUSD: 95,
    compareAtPriceNGN: 60000,
    compareAtPriceUSD: 120,
    discount: '20% OFF',
    popularity: 'Trending',
    rating: 4.9,
    reviewCount: 36,
    turnaround: '4-6 Business Days',
    useCases: ['Corporate', 'Marketing', 'Personal Brand'],
    industries: ['Technology', 'Finance', 'Education', 'Food & Hospitality'],
    urgency: 'Standard',
    includedItems: [
      '360° Full-Wrap Precision Imprint',
      'Individual Protective Presentation Boxes',
      'Microwave & Dishwasher Safe Coating',
    ],
    options: [
      {
        id: 'style',
        name: 'Drinkware Style',
        type: 'select',
        choices: [
          { id: 'matte-11oz', label: 'Classic Matte Ceramic 11oz', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'twotone-15oz', label: 'Two-Tone Ceramic 15oz', priceModifierNGN: 15000, priceModifierUSD: 30 },
          { id: 'tumbler', label: 'Insulated Stainless Steel Tumbler', priceModifierNGN: 35000, priceModifierUSD: 70 },
        ],
      },
      {
        id: 'pack',
        name: 'Pack Quantity',
        type: 'radio',
        choices: [
          { id: '25-pack', label: '25 Units Starter Pack', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '50-pack', label: '50 Units Office Pack', priceModifierNGN: 35000, priceModifierUSD: 70 },
          { id: '100-pack', label: '100 Units Enterprise Pack', priceModifierNGN: 65000, priceModifierUSD: 130 },
        ],
      },
    ],
    tags: ['mugs', 'drinkware', 'gifts', 'swag', 'corporate gifts'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },

  // --- PRINTS EXPANSION (FOIL BUSINESS CARDS) ---
  {
    id: 'prints-foil-cards',
    slug: 'foil-business-cards',
    name: 'Luxury Foil Stamped Business Cards',
    category: 'prints',
    shortDescription: 'Extra-thick 450gsm cardstock with metallic gold, rose gold, or holographic foil embellishments.',
    description: 'Exude unyielding prestige when introducing your business. Printed on ultra-dense 450gsm silk cardstock, coated with velvet soft-touch laminate, and finished with precision heat-stamped metallic foil highlights on your logo and typography.',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 58000,
    startingPriceUSD: 130,
    compareAtPriceNGN: 70000,
    compareAtPriceUSD: 155,
    discount: '16% OFF',
    popularity: 'Popular',
    rating: 5.0,
    reviewCount: 52,
    turnaround: '3-5 Business Days',
    useCases: ['Business Launch', 'Corporate', 'Personal Brand'],
    industries: ['Finance', 'Real Estate', 'Technology', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      '450gsm Heavyweight Silk Stock',
      'Velvet Soft-Touch Dual Lamination',
      'Precision Metallic Foil Stamping',
      'Corner Shaping & Rigid Storage Box',
    ],
    options: [
      {
        id: 'foil',
        name: 'Metallic Foil Accent',
        type: 'radio',
        choices: [
          { id: 'gold', label: 'Gleaming Gold Foil', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'rose-gold', label: 'Modern Rose Gold Foil', priceModifierNGN: 0, priceModifierUSD: 0 },
          { id: 'silver-holo', label: 'Silver Holographic Foil', priceModifierNGN: 12000, priceModifierUSD: 25 },
        ],
      },
      {
        id: 'quantity',
        name: 'Print Quantity',
        type: 'select',
        choices: [
          { id: '250', label: '250 Cards', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '500', label: '500 Cards', priceModifierNGN: 25000, priceModifierUSD: 55 },
          { id: '1000', label: '1,000 Cards', priceModifierNGN: 45000, priceModifierUSD: 100 },
        ],
      },
    ],
    tags: ['business cards', 'foil cards', 'luxury print', 'prints'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },

  // --- PACKAGING CATEGORY ---
  {
    id: 'packaging-mailer-boxes',
    slug: 'custom-mailer-boxes',
    name: 'Custom Kraft Shipping & Mailer Boxes',
    category: 'packaging',
    shortDescription: 'Durable corrugated e-commerce mailers with full-color interior and exterior branding.',
    description: 'Turn order unboxing into your most viral brand moment. Engineered from sturdy, sustainably sourced E-flute corrugated cardboard, custom-printed edge-to-edge in full vibrant color inside and out to protect your items and delight recipients.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 98000,
    startingPriceUSD: 215,
    compareAtPriceNGN: 120000,
    compareAtPriceUSD: 260,
    discount: '18% OFF',
    popularity: 'Trending',
    rating: 4.9,
    reviewCount: 29,
    turnaround: '5-7 Business Days',
    useCases: ['E-commerce', 'Marketing', 'Business Launch'],
    industries: ['Fashion', 'Food & Hospitality', 'Technology'],
    urgency: 'Standard',
    includedItems: [
      'Durable E-Flute Corrugated Board',
      'Edge-to-Edge CMYK Print',
      'Fold-and-Lock Easy Assembly Design',
      'Sample Proof Pre-Production',
    ],
    options: [
      {
        id: 'size',
        name: 'Mailer Dimensions',
        type: 'select',
        choices: [
          { id: 'compact', label: 'Compact (8 x 6 x 3 in)', priceModifierNGN: -15000, priceModifierUSD: -30 },
          { id: 'medium', label: 'Medium (10 x 8 x 4 in)', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'large', label: 'Large (14 x 10 x 5 in)', priceModifierNGN: 28000, priceModifierUSD: 60 },
        ],
      },
      {
        id: 'sides',
        name: 'Print Coverage',
        type: 'radio',
        choices: [
          { id: 'outside-only', label: 'Outside Exterior Only', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'inside-outside', label: 'Full 360° Inside & Outside', priceModifierNGN: 22000, priceModifierUSD: 45 },
        ],
      },
    ],
    tags: ['packaging', 'mailer boxes', 'boxes', 'unboxing', 'ecommerce'],
    featured: true,
    marketAvailability: ['ng', 'us'],
  },

  // --- APPAREL CATEGORY ---
  {
    id: 'apparel-polo-shirts',
    slug: 'embroidered-polo-shirts',
    name: 'Executive Embroidered Polo Shirts',
    category: 'apparel',
    shortDescription: 'Heavyweight pique cotton polos with crisp, high-density chest embroidery.',
    description: 'Unite your company with professional corporate wear. Tailored from 220gsm combed pique cotton featuring knit collars, reinforced plackets, and your company insignia embroidered with up to 10,000 precision stitches for everlasting durability.',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    ],
    startingPriceNGN: 65000,
    startingPriceUSD: 140,
    popularity: 'New',
    rating: 4.8,
    reviewCount: 24,
    turnaround: '4-6 Business Days',
    useCases: ['Corporate', 'Events', 'Business Launch'],
    industries: ['Technology', 'Finance', 'Real Estate', 'Healthcare'],
    urgency: 'Standard',
    includedItems: [
      '220gsm Heavyweight Pique Cotton',
      'Left-Chest High-Density Embroidery',
      'Individual Polybag Packaging',
      'Sizes XS to 3XL Supported',
    ],
    options: [
      {
        id: 'color',
        name: 'Garment Color',
        type: 'radio',
        choices: [
          { id: 'navy', label: 'Midnight Navy', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: 'white', label: 'Crisp White', priceModifierNGN: 0, priceModifierUSD: 0 },
          { id: 'charcoal', label: 'Heather Charcoal', priceModifierNGN: 0, priceModifierUSD: 0 },
        ],
      },
      {
        id: 'bundle',
        name: 'Order Bundle',
        type: 'select',
        choices: [
          { id: '12-polos', label: '12 Polos Starter Team', priceModifierNGN: 0, priceModifierUSD: 0, isDefault: true },
          { id: '25-polos', label: '25 Polos Department Bundle', priceModifierNGN: 55000, priceModifierUSD: 120 },
          { id: '50-polos', label: '50 Polos Enterprise Fleet', priceModifierNGN: 110000, priceModifierUSD: 240 },
        ],
      },
    ],
    tags: ['apparel', 'polo shirts', 'embroidery', 'workwear', 'merch'],
    featured: false,
    marketAvailability: ['ng', 'us'],
  },
];

// Utility functions for business logic

export function getAllServices(marketCode?: MarketCode): Service[] {
  if (!marketCode) return SERVICES;
  return SERVICES.filter((s) => s.marketAvailability.includes(marketCode));
}

export function getServiceBySlug(slug: string, marketCode?: MarketCode): Service | undefined {
  const service = SERVICES.find((s) => s.slug === slug || s.id === slug);
  if (!service) return undefined;
  if (marketCode && !service.marketAvailability.includes(marketCode)) return undefined;
  return service;
}

export function getServicesByCategory(category: CategoryId, marketCode?: MarketCode): Service[] {
  let list = SERVICES.filter((s) => s.category === category);
  if (marketCode) {
    list = list.filter((s) => s.marketAvailability.includes(marketCode));
  }
  return list;
}

export function getFeaturedServices(marketCode: MarketCode = 'ng'): Service[] {
  if (marketCode === 'us') {
    // Curated US-specific featured solutions
    const usFeaturedIds = [
      'digital-website-design',
      'digital-landing-page',
      'packaging-mailer-boxes',
      'gifts-corporate-box',
    ];
    return SERVICES.filter(
      (s) => usFeaturedIds.includes(s.id) && s.marketAvailability.includes('us')
    );
  }

  // Curated Nigeria-specific featured solutions
  const ngFeaturedIds = [
    'prints-business-cards',
    'gifts-mugs',
    'create-logo-design',
    'events-backdrop',
  ];
  return SERVICES.filter(
    (s) => ngFeaturedIds.includes(s.id) && s.marketAvailability.includes('ng')
  );
}

export function getRelatedServices(currentService: Service, limit = 4, marketCode?: MarketCode): Service[] {
  let candidates = SERVICES.filter((s) => s.id !== currentService.id);
  if (marketCode) {
    candidates = candidates.filter((s) => s.marketAvailability.includes(marketCode));
  }

  // Priority 1: Same category
  // Priority 2: Matching use cases or tags
  const scored = candidates.map((s) => {
    let score = 0;
    if (s.category === currentService.category) score += 5;
    const commonUseCases = s.useCases.filter((uc) => currentService.useCases.includes(uc));
    score += commonUseCases.length * 2;
    const commonTags = s.tags.filter((t) => currentService.tags.includes(t));
    score += commonTags.length * 1;
    return { service: s, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((item) => item.service);
}

export interface FilterParams {
  category?: string;
  useCase?: string;
  industry?: string;
  urgency?: string;
  popularity?: string;
  search?: string;
  sort?: SortOption;
  marketCode?: MarketCode;
}

export function filterAndSortServices(params: FilterParams): Service[] {
  let result = getAllServices(params.marketCode);

  // Category filter
  if (params.category && params.category !== 'all') {
    result = result.filter((s) => s.category.toLowerCase() === params.category?.toLowerCase());
  }

  // Use Case filter
  if (params.useCase && params.useCase !== 'all') {
    result = result.filter((s) =>
      s.useCases.some((uc) => uc.toLowerCase() === params.useCase?.toLowerCase())
    );
  }

  // Industry filter
  if (params.industry && params.industry !== 'all') {
    result = result.filter((s) =>
      s.industries.some((ind) => ind.toLowerCase() === params.industry?.toLowerCase())
    );
  }

  // Urgency filter
  if (params.urgency && params.urgency !== 'all') {
    result = result.filter((s) => s.urgency.toLowerCase() === params.urgency?.toLowerCase());
  }

  // Popularity tag filter
  if (params.popularity && params.popularity !== 'all') {
    result = result.filter((s) => s.popularity.toLowerCase() === params.popularity?.toLowerCase());
  }

  // Search keyword filter (matches name, description, category, tags, industries)
  if (params.search && params.search.trim() !== '') {
    const q = params.search.toLowerCase().trim();
    result = result.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q)) ||
        s.industries.some((i) => i.toLowerCase().includes(q)) ||
        s.useCases.some((u) => u.toLowerCase().includes(q))
    );
  }

  // Sorting
  const sort = params.sort || 'recommended';
  const isUS = params.marketCode === 'us';

  result = [...result].sort((a, b) => {
    if (sort === 'price-asc') {
      const priceA = isUS ? a.startingPriceUSD : a.startingPriceNGN;
      const priceB = isUS ? b.startingPriceUSD : b.startingPriceNGN;
      return priceA - priceB;
    }
    if (sort === 'price-desc') {
      const priceA = isUS ? a.startingPriceUSD : a.startingPriceNGN;
      const priceB = isUS ? b.startingPriceUSD : b.startingPriceNGN;
      return priceB - priceA;
    }
    if (sort === 'popular') {
      return b.reviewCount - a.reviewCount;
    }
    if (sort === 'newest') {
      return (b.popularity === 'New' ? 1 : 0) - (a.popularity === 'New' ? 1 : 0);
    }
    // Recommended default (rating * reviewCount weight)
    return b.rating * b.reviewCount - a.rating * a.reviewCount;
  });

  return result;
}
