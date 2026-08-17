'use client';

import { useMemo, useState } from 'react';
import { events } from '@/data/content';

export default function EventFilters() {
  const [city, setCity] = useState('Все города');
  const [category, setCategory] = useState('Все категории');
  const filtered = useMemo(() => events.filter(event => (city === 'Все города' || event.city === city) && (category === 'Все категории' || event.category === category)), [city, category]);
  return (
    <>
      <div className="filters">
        <label>Город<select value={city} onChange={e => setCity(e.target.value)}><option>Все города</option><option>Москва</option></select></label>
        <label>Категория<select value={category} onChange={e => setCategory(e.target.value)}><option>Все категории</option><option>Искусство</option></select></label>
        <label>Дата<select defaultValue="Ближайшие"><option>Ближайшие</option><option>До конца октября</option><option>До конца ноября</option></select></label>
      </div>
      <div className="events-list-page">
        {filtered.map((event) => (
          <a className="event-page-card" key={event.id} href={event.url} target="_blank" rel="noreferrer">
            <div className="event-page-date"><strong>{event.date}</strong><span>{event.city}</span></div>
            <div><small>{event.category}</small><h2>{event.title}</h2><p>{event.description}</p><div className="event-details"><span>{event.place}</span><span>{event.time}</span></div></div>
            <b>↗</b>
          </a>
        ))}
      </div>
    </>
  );
}
