'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [message, setMessage] = useState('');
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('Форма работает в demo-режиме. Подключите свой email-провайдер в components/Newsletter.tsx.');
  };
  return (
    <section className="newsletter shell">
      <div>
        <span className="section-kicker">MORROW DAILY</span>
        <h2>Пять вещей, которые стоят вашего времени. Каждое утро.</h2>
        <p>Без агрессивных попапов. Один короткий редакционный дайджест.</p>
      </div>
      <form onSubmit={submit}>
        <label className="sr-only" htmlFor="newsletter-email">Email</label>
        <input id="newsletter-email" type="email" placeholder="you@example.com" required />
        <button type="submit">Подписаться →</button>
        {message && <small role="status">{message}</small>}
      </form>
    </section>
  );
}
