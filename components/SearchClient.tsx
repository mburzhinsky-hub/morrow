'use client';

import { useMemo, useState } from 'react';
import { articleTypeLabels, articles, categories } from '@/data/content';
import { sitePath } from '@/lib/sitePath';

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
          <a href={sitePath(`/article/${article.slug}/`)} key={article.slug} className="search-result">
            <span>{categories[article.category].label} · {articleTypeLabels[article.articleType].toUpperCase()}</span><h2>{article.title}</h2><p>{article.lead}</p><small>{article.readingTime} мин →</small>
          </a>
        ))}
      </div>
    </div>
  );
}
