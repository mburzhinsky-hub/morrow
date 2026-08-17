'use client';

import { useMemo, useState } from 'react';
import { events } from '@/data/content';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

export default function EventFilters() {
  const [city, setCity] = useState('Все города');
  const [category, setCategory] = useState('Все категории');
  const cities = useMemo(() => Array.from(new Set(events.map(event => event.city))), []);
  const categories = useMemo(() => Array.from(new Set(events.map(event => event.category))), []);
  const filtered = useMemo(() => events.filter(event => (city === 'Все города' || event.city === city) && (category === 'Все категории' || event.category === category)), [city, category]);
  return (
    <>
      <div className="filters">
        <label>Город<select value={city} onChange={e => setCity(e.target.value)}><option>Все города</option>{cities.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Категория<select value={category} onChange={e => setCategory(e.target.value)}><option>Все категории</option>{categories.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Период<select defaultValue="Актуальные"><option>Актуальные</option><option>До конца сентября</option><option>До конца ноября</option></select></label>
      </div>
      <div className="events-list-page">
        {filtered.map((event) => (
          <a className="event-page-card" key={event.id} href={event.url} target="_blank" rel="noreferrer">
            <div className="event-page-date"><strong>{event.date}</strong><span>{event.city}</span></div>
            <div><small>{event.category}</small><h2>{event.title}</h2><p>{event.description}</p><div className="event-details"><span>{event.place}</span><span>{event.time}</span></div></div>
            <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </>
  );
}
