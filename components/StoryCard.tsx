import Image from 'next/image';
import Link from 'next/link';
import { articleTypeLabels, categories, type Article } from '@/data/content';

export default function StoryCard({ article, large = false }: { article: Article; large?: boolean }) {
  const category = categories[article.category];
  return (
    <Link href={`/article/${article.slug}`} className={`story-card ${large ? 'story-large' : ''}`}>
      <div className="story-image"><Image src={article.image} alt={article.imageAlt} fill sizes={large ? '(max-width: 900px) 100vw, 48vw' : '(max-width: 900px) 100vw, 32vw'} /></div>
      <div className="story-overlay" />
      <div className="story-copy">
        <span>{category.label} · {articleTypeLabels[article.articleType].toUpperCase()}</span>
        <h3>{article.title}</h3>
        {large && <p>{article.lead}</p>}
        <small>Чтение {article.readingTime} мин</small>
      </div>
    </Link>
  );
}
