'use client';

import { useState } from 'react';
import type { Article } from '@/data/content';
import { categories } from '@/data/content';
import { sitePath } from '@/lib/sitePath';

export default function HeroCarousel({ stories }: { stories: Article[] }) {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  const category = categories[story.category];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + stories.length) % stories.length);
  };

  return (
    <section className="hero" aria-label="Материал дня">
      <div key={`bg-${story.slug}`} className="hero-bg" style={{ backgroundImage: `url(${story.image})` }} />
      <div className="hero-shade" />
      <div className="hero-content shell">
        <div key={`copy-${story.slug}`} className="hero-copy hero-copy-animated">
          <div className="eyebrow">{story.eyebrow || 'ВЫБОР РЕДАКЦИИ'} · {category.label}</div>
          <h1>{story.title}</h1>
          <p>{story.lead}</p>
          <div className="hero-meta">Чтение {story.readingTime} мин <span>·</span> {category.ru}</div>
          <a className="pill pill-light" href={sitePath(`/article/${story.slug}/`)}>Читать материал <span>→</span></a>
        </div>
        <div className="hero-pager" aria-label="Переключение главных материалов">
          <span>{String(index + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}</span>
          <button onClick={() => move(-1)} aria-label="Предыдущий материал">←</button>
          <button onClick={() => move(1)} aria-label="Следующий материал">→</button>
        </div>
      </div>
    </section>
  );
}
