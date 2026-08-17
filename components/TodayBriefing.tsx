import Link from 'next/link';
import { todayItems } from '@/data/content';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

export default function TodayBriefing() {
  return (
    <section id="today" className="today-section section shell">
      <div className="section-heading split-heading">
        <div>
          <span className="section-kicker">КОРОТКАЯ РЕДАКЦИОННАЯ ПОДБОРКА</span>
          <h2>СЕГОДНЯ</h2>
          <p>Что стоит вашего времени сегодня</p>
        </div>
      </div>
      <div className="today-grid">
        {todayItems.map((item) => {
          const className = 'today-item';
          const content = (
            <>
              <div className="today-index"><span>{item.number}</span><b>/ {item.type}</b></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="today-meta"><span>{item.source}</span><span>{item.date}</span><span>{item.duration}</span></div>
              <ExternalLinkIcon className="today-arrow" />
            </>
          );
          if ('external' in item && item.external) {
            return <a className={className} key={item.number} href={item.href} target="_blank" rel="noreferrer">{content}</a>;
          }
          return <Link className={className} key={item.number} href={item.href}>{content}</Link>;
        })}
      </div>
    </section>
  );
}
