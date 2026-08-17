import Image from 'next/image';
import { newsSignals } from '@/data/content';

export default function NewsColumn() {
  return (
    <aside className="news-column">
      <div className="news-head">
        <div><span className="section-kicker">РЕДАКЦИОННЫЙ РАДАР</span><h2>Сигналы</h2></div>
        <span>Коротко о том, что изменилось</span>
      </div>
      <div className="news-list">
        {newsSignals.map((item, index) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={`news-item ${index === 0 ? 'news-featured' : ''}`}>
            <div className="news-thumb"><Image src={item.image} alt="" fill sizes={index === 0 ? "360px" : "96px"} /></div>
            <div className="news-copy">
              <div className="news-meta"><small>{item.category}</small><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
              <div className="news-source"><span>{item.source}</span><b>↗</b></div>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
