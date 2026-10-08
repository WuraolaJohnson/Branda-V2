import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://branda-v2.vercel.app';
  const markets = ['ng', 'us'];

  const routes: MetadataRoute.Sitemap = [];

  // Home and Pillar routes
  markets.forEach((m) => {
    routes.push({
      url: `${baseUrl}/${m}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
    routes.push({
      url: `${baseUrl}/${m}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    routes.push({
      url: `${baseUrl}/${m}/services`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
  });

  // Dynamic Service Detail routes
  SERVICES.forEach((service) => {
    service.marketAvailability.forEach((m) => {
      routes.push({
        url: `${baseUrl}/${m}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return routes;
}
