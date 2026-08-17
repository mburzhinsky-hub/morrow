import Image from 'next/image';
import { newsSignals } from '@/data/content';

export default function NewsColumn() {
  return (
    <aside className="news-column">
      <div className="news-head"><h2>Сигналы</h2><span>проверенные источники</span></div>
      <div className="news-list">
        {newsSignals.map((item) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="news-item">
            <div className="news-thumb"><Image src={item.image} alt="" fill sizes="80px" /></div>
            <div>
              <small>{item.category} · {item.source}</small>
              <h3>{item.title}</h3>
              <span>{item.date}</span>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
