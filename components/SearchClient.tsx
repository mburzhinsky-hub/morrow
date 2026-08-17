'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { articles, categories } from '@/data/content';

export default function SearchClient() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return articles;
    return articles.filter(article => `${article.title} ${article.lead} ${categories[article.category].label}`.toLowerCase().includes(normalized));
  }, [query]);
  return (
    <div className="search-ui">
      <div className="search-field"><span>⌕</span><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="ИИ, сон, дружба, стоицизм…" aria-label="Поиск по материалам"/></div>
      <div className="search-count">{results.length} материалов</div>
      <div className="search-results">
        {results.map(article => (
          <Link href={`/article/${article.slug}`} key={article.slug} className="search-result">
            <span>{categories[article.category].label}</span><h2>{article.title}</h2><p>{article.lead}</p><small>{article.readingTime} мин →</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
