import Link from 'next/link';
import { events } from '@/data/content';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

export default function EventsPreview() {
  return (
    <section className="events-preview">
      <div className="mini-section-head"><h2>На этой неделе</h2><Link href="/events">Все события →</Link></div>
      <div className="event-stack">
        {events.slice(0, 3).map((event, i) => (
          <a key={event.id} href={event.url} target="_blank" rel="noreferrer" className="event-row">
            <div className="event-date"><span>{String(i + 1).padStart(2, '0')}</span><b>{event.date}</b></div>
            <div><small>{event.category} · {event.city}</small><h3>{event.title}</h3><p>{event.place}</p></div>
            <ExternalLinkIcon className="event-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
