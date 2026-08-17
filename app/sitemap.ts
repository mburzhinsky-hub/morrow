import type { MetadataRoute } from 'next';
import { articles, categories } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://morrow.example';
  return [
    { url: base, lastModified: new Date('2026-08-17') },
    ...Object.keys(categories).map(category => ({ url: `${base}/${category}`, lastModified: new Date('2026-08-17') })),
    ...articles.map(article => ({ url: `${base}/article/${article.slug}`, lastModified: new Date('2026-08-17') })),
    { url: `${base}/events`, lastModified: new Date('2026-08-17') },
    { url: `${base}/watch`, lastModified: new Date('2026-08-17') },
    { url: `${base}/about`, lastModified: new Date('2026-08-17') }
  ];
}
