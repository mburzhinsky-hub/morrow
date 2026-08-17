import type { Metadata } from 'next';
import '@fontsource-variable/cormorant-garamond';
import '@fontsource-variable/manrope';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'MORROW — меньше шума, больше важного', template: '%s — MORROW' },
  description: 'Премиальное русскоязычное медиа о здоровье, работе, деньгах, отношениях, культуре и стиле жизни.',
  metadataBase: new URL('https://mburzhinsky-hub.github.io/morrow/'),
  openGraph: {
    title: 'MORROW',
    description: 'Меньше информационного шума. Больше того, что действительно стоит времени.',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
