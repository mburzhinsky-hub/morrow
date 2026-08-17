import type { MetadataRoute } from 'next';
import { sitePath } from '@/lib/sitePath';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: sitePath('/'),
    name: 'MORROW',
    short_name: 'MORROW',
    description: 'Русскоязычное медиа о здоровье, работе, деньгах, отношениях, культуре и жизни.',
    start_url: sitePath('/'),
    scope: sitePath('/'),
    display: 'standalone',
    background_color: '#f4f1ea',
    theme_color: '#0d0f10',
    lang: 'ru',
    dir: 'ltr',
    icons: [
      {
        src: sitePath('/icons/morrow-192.png'),
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: sitePath('/icons/morrow-512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: sitePath('/icons/morrow-maskable-512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  };
}
