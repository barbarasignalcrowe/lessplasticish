import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lessplasticish.com';
  const routes = [
    '',
    '/start-here-after-the-plastic-detox',
    '/water-filter-swaps-plastic-bottle-waste',
    '/starter-checklist',
    '/about',
    '/disclosure'
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
