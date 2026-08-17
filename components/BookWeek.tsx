import { bookOfWeek } from '@/data/content';

export default function BookWeek() {
  return (
    <article className="book-card">
      <div className="book-cover" aria-label={`Обложка ${bookOfWeek.title}`}>
        <span>MORROW / BOOK</span>
        <strong>FOUR<br/>THOUSAND<br/>WEEKS</strong>
        <small>OLIVER BURKEMAN</small>
      </div>
      <div className="book-copy">
        <span className="section-kicker">КНИГА НЕДЕЛИ</span>
        <h3>{bookOfWeek.title}</h3>
        <div className="book-author">{bookOfWeek.author} · {bookOfWeek.subtitle}</div>
        <p>{bookOfWeek.why}</p>
        <dl>
          <div><dt>Why read it</dt><dd>{bookOfWeek.why}</dd></div>
          <div><dt>What you’ll get</dt><dd>{bookOfWeek.get}</dd></div>
          <div><dt>Reading time</dt><dd>{bookOfWeek.reading}</dd></div>
        </dl>
        <a className="pill pill-outline-light" href={bookOfWeek.source} target="_blank" rel="noreferrer">О книге у издателя <span>↗</span></a>
      </div>
    </article>
  );
}
