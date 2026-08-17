import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventFilters from '@/components/EventFilters';

export const metadata: Metadata = { title: 'События', description: 'Проверенные выставки и события в России из официальных источников.' };

export default function EventsPage() {
  return <><Header/><main className="simple-page"><section className="page-masthead shell"><span className="section-kicker">MORROW / СОБЫТИЯ</span><h1>Куда сходить</h1><p>Только события в России с официальными страницами. Актуальность подборки проверена 17 августа 2026 года.</p></section><section className="shell section"><EventFilters/></section></main><Footer/></>;
}
