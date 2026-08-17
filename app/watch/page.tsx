import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { watchItems } from '@/data/content';

export const metadata: Metadata = { title: 'WATCH', description: 'Лекции, исследования и видео, которые стоят времени.' };

export default function WatchPage() {
  return <><Header/><main className="simple-page"><section className="page-masthead shell"><span className="section-kicker">MORROW / WATCH</span><h1>WATCH</h1><p>Здесь мы не притворяемся, что ссылка — обязательно видео. В первой редакции показываем только проверенные материалы из официальных источников; YouTube-подборка подключается после отдельной редакционной верификации.</p></section><section className="shell section"><div className="watch-page-grid">{watchItems.map(item => <a href={item.href} target="_blank" rel="noreferrer" key={item.title} className="watch-page-card"><div className="watch-page-image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 45vw"/></div><span>{item.category} · {item.duration}</span><h2>{item.title}</h2><p>{item.description}</p><b>{item.channel} ↗</b></a>)}</div></section></main><Footer/></>;
}
