import { weekend } from '@/data/content';

export default function Weekend() {
  return (
    <section className="weekend section dark-section">
      <div className="shell">
        <div className="section-heading weekend-heading">
          <span className="section-kicker">РЕДАКЦИОННАЯ ПОДБОРКА</span>
          <h2>MORROW · ВЫХОДНЫЕ</h2>
          <p>Куда сходить в России в ближайшие выходные — только события с официальными страницами</p>
        </div>
        <div className="weekend-grid">
          {weekend.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={`${item.city}-${item.title}`} className="weekend-card">
              <div className="weekend-meta"><span>{item.city}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="weekend-source"><span>{item.place}</span><b>↗</b></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
