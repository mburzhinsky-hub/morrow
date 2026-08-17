import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ShareButtons from '@/components/ShareButtons';
import StoryCard from '@/components/StoryCard';
import { articles, categories, getArticle } from '@/data/content';

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.lead,
    openGraph: { title: article.title, description: article.lead, type: 'article', images: [article.image] }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const category = categories[article.category];
  const related = (article.related || []).map(getArticle).filter(Boolean).slice(0, 3);
  const structured = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.lead,
    datePublished: '2026-08-17', dateModified: '2026-08-17', author: { '@type': 'Organization', name: 'Редакция MORROW' },
    publisher: { '@type': 'Organization', name: 'MORROW' }, image: [article.image], articleSection: category.label
  };

  return (
    <>
      <Header />
      <main className="article-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
        <article>
          <header className="article-header shell">
            <Link href={`/${article.category}`} className="article-category">{category.label} · {category.ru}</Link>
            <h1>{article.title}</h1>
            <p className="article-lead">{article.lead}</p>
            <div className="article-byline"><span>Редакция MORROW</span><span>{article.date}</span><span>{article.readingTime} мин</span><ShareButtons title={article.title} /></div>
          </header>
          <div className="article-hero shell"><Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" /></div>
          <div className="article-body-grid shell">
            <aside className="article-rail"><span>В ЭТОМ МАТЕРИАЛЕ</span>{article.keyFacts.map((fact, i) => <p key={fact}><b>{String(i + 1).padStart(2, '0')}</b>{fact}</p>)}</aside>
            <div className="reading-column">
              <p className="dropcap">{article.thesis}</p>
              <h2>Что показывают источники</h2>
              <p>{article.evidence}</p>
              <blockquote>Главный принцип MORROW: не делать вывод сильнее, чем позволяют источники.</blockquote>
              <h2>Где заканчивается уверенность</h2>
              <p>{article.nuance}</p>
              <h2>Что с этим делать</h2>
              <p>{article.practice}</p>
              <section className="key-facts"><span className="section-kicker">КЛЮЧЕВОЕ</span>{article.keyFacts.map(fact => <p key={fact}>— {fact}</p>)}</section>
              <section className="sources"><h2>Источники</h2>{article.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><div><strong>{source.title}</strong><span>{source.organization} · {source.date}</span></div><b>↗</b></a>)}</section>
            </div>
          </div>
        </article>
        {related.length > 0 && <section className="related section shell"><div className="mini-section-head"><h2>Читайте также</h2></div><div className="related-grid">{related.map(a => a && <StoryCard article={a} key={a.slug} />)}</div></section>}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
