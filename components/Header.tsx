'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { categories } from '@/data/content';
import { sitePath } from '@/lib/sitePath';

export default function Header({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`site-header ${dark ? 'header-dark' : ''} ${scrolled ? 'header-scrolled' : ''} ${open ? 'header-menu-open' : ''}`}>
      <div className="header-inner shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="MORROW — главная">
          <span className="brand-star">✦</span>
          <span>MORROW</span>
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <Link href="/#today">Сегодня</Link>
          {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => (
            <a key={key} href={sitePath(`/${key}/`)}>{categories[key].label[0] + categories[key].label.slice(1).toLowerCase()}</a>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="icon-button" href="/search" aria-label="Поиск">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>
            <span/><span/>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-panel ${open ? 'open' : ''}`} aria-label="Мобильная навигация" aria-hidden={!open}>
        <Link href="/#today" onClick={() => setOpen(false)}>Сегодня</Link>
        {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => (
          <a key={key} href={sitePath(`/${key}/`)} onClick={() => setOpen(false)}>{categories[key].label}</a>
        ))}
        <Link href="/events" onClick={() => setOpen(false)}>События</Link>
        <Link href="/watch" onClick={() => setOpen(false)}>Подборка</Link>
      </nav>
    </header>
  );
}
