import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/cormorant-garamond';
import '@fontsource-variable/manrope';
import { sitePath } from '@/lib/sitePath';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'MORROW — меньше шума, больше важного', template: '%s — MORROW' },
  description: 'Премиальное русскоязычное медиа о здоровье, работе, деньгах, отношениях, культуре и стиле жизни.',
  applicationName: 'MORROW',
  metadataBase: new URL('https://mburzhinsky-hub.github.io/morrow/'),
  manifest: sitePath('/manifest.webmanifest'),
  icons: {
    icon: [
      { url: sitePath('/icon.svg'), type: 'image/svg+xml' },
      { url: sitePath('/icons/morrow-192.png'), sizes: '192x192', type: 'image/png' },
      { url: sitePath('/icons/morrow-512.png'), sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: sitePath('/icons/morrow-apple-touch.png'), sizes: '180x180', type: 'image/png' }]
  },
  appleWebApp: {
    capable: true,
    title: 'MORROW',
    statusBarStyle: 'black-translucent'
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: 'MORROW',
    description: 'Меньше информационного шума. Больше того, что действительно стоит времени.',
    type: 'website',
    locale: 'ru_RU'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0d0f10'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
