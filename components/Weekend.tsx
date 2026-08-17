import Link from 'next/link';
import { weekend } from '@/data/content';

export default function Weekend() {
  return (
    <section className="weekend section dark-section">
      <div className="shell">
        <div className="section-heading weekend-heading">
          <span className="section-kicker">EDITORIAL PRODUCT</span>
          <h2>MORROW WEEKEND</h2>
          <p>Как хорошо провести ближайшие выходные</p>
        </div>
        <div className="weekend-grid">
          {weekend.map((item) => {
            const external = item.href.startsWith('http');
            const body = <><span>{item.type}</span><h3>{item.title}</h3><p>{item.text}</p><b>→</b></>;
            return external ? <a href={item.href} target="_blank" rel="noreferrer" key={item.type} className="weekend-card">{body}</a> : <Link href={item.href} key={item.type} className="weekend-card">{body}</Link>;
          })}
        </div>
      </div>
    </section>
  );
}
