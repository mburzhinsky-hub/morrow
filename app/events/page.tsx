import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventFilters from '@/components/EventFilters';

export const metadata: Metadata = { title: 'Events', description: 'Проверенные выставки и события из официальных источников.' };

export default function EventsPage() {
  return <><Header/><main className="simple-page"><section className="page-masthead shell"><span className="section-kicker">MORROW / EVENTS</span><h1>На этой неделе</h1><p>Только события с официальными страницами. Даты в этой сборке проверены на 17 августа 2026 года.</p></section><section className="shell section"><EventFilters/></section></main><Footer/></>;
}
