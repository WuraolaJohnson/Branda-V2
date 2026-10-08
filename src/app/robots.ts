import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account/orders', '/account/profile'],
    },
    sitemap: 'https://branda-v2.vercel.app/sitemap.xml',
  };
}
