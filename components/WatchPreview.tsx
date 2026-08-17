import Image from 'next/image';
import Link from 'next/link';
import { watchItems } from '@/data/content';

export default function WatchPreview() {
  return (
    <section className="section shell">
      <div className="mini-section-head"><div><span className="section-kicker">СМОТРЕТЬ / ЧИТАТЬ / СЛУШАТЬ</span><h2>Смотреть внимательно</h2></div><Link href="/watch">Вся подборка →</Link></div>
      <div className="watch-grid">
        {watchItems.map((item) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="watch-card">
            <div className="watch-image"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw"/><span className="watch-play">↗</span></div>
            <small>{item.category} · {item.duration}</small>
            <h3>{item.title}</h3>
            <p>{item.channel}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
