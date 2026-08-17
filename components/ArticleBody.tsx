import type { Article } from '@/data/content';

const defaultTitles = {
  evidence: {
    evidence: 'Что известно',
    nuance: 'Где заканчивается уверенность',
    practice: 'Что можно применить'
  },
  perspective: {
    evidence: 'Что стоит за этой идеей',
    nuance: 'Где картина сложнее',
    practice: 'Редакционный вывод'
  },
  guide: {
    evidence: 'На что смотреть',
    nuance: 'Что легко упустить',
    practice: 'Как попробовать'
  }
} as const;

function Sources({ article }: { article: Article }) {
  return (
    <section className="sources" aria-labelledby={`sources-${article.slug}`}>
      <h2 id={`sources-${article.slug}`}>Источники</h2>
      {article.sources.map(source => (
        <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
          <div>
            <strong>{source.title}</strong>
            <span>{source.organization} · {source.date}</span>
          </div>
          <b aria-hidden="true">↗</b>
        </a>
      ))}
    </section>
  );
}

function ArticleRail({ article }: { article: Article }) {
  const label = article.articleType === 'guide' ? 'МАРШРУТ' : 'КРАТКО';
  return (
    <aside className="article-rail" aria-label={label.toLowerCase()}>
      <span>{label}</span>
      {article.keyFacts.map((fact, index) => (
        <p key={fact}>
          <b>{String(index + 1).padStart(2, '0')}</b>
          {fact}
        </p>
      ))}
    </aside>
  );
}

export default function ArticleBody({ article }: { article: Article }) {
  const hasRail = article.articleType === 'evidence' || article.articleType === 'guide';

  if (article.articleType === 'essay') {
    return (
      <div className="article-body-grid article-body-grid--wide article-body-essay shell">
        <div className="reading-column essay-column">
          <p className="dropcap">{article.thesis}</p>
          <p>{article.evidence}</p>
          <div className="essay-divider" aria-hidden="true"><span>✦</span></div>
          <p>{article.nuance}</p>
          <p>{article.practice}</p>
          <Sources article={article} />
        </div>
      </div>
    );
  }

  const titles = article.sectionTitles || defaultTitles[article.articleType];

  return (
    <div className={`article-body-grid article-body-${article.articleType} ${hasRail ? '' : 'article-body-grid--wide'} shell`}>
      {hasRail && <ArticleRail article={article} />}
      <div className="reading-column">
        <p className="dropcap">{article.thesis}</p>
        <h2>{titles.evidence}</h2>
        <p>{article.evidence}</p>
        <h2>{titles.nuance}</h2>
        <p>{article.nuance}</p>
        <h2>{titles.practice}</h2>
        <p>{article.practice}</p>
        <Sources article={article} />
      </div>
    </div>
  );
}
