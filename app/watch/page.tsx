import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { watchItems } from '@/data/content';

export const metadata: Metadata = { title: 'Подборка', description: 'Лекции, исследования и материалы на русском языке, которые стоят времени.' };

export default function WatchPage() {
  return <><Header/><main className="simple-page"><section className="page-masthead shell"><span className="section-kicker">MORROW / ПОДБОРКА</span><h1>Смотреть и читать</h1><p>Проверенные русскоязычные материалы: лекции, разборы и тексты без случайных рекомендаций из алгоритмической ленты.</p></section><section className="shell section"><div className="watch-page-grid">{watchItems.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={item.title} className="watch-page-card"><div className="watch-page-image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 45vw"/></div><span>{item.category} · {item.duration}</span><h2>{item.title}</h2><p>{item.description}</p><b>{item.channel} ↗</b></a>)}</div></section></main><Footer/></>;
}
