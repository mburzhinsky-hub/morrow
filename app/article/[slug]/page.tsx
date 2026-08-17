import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/ShareButtons';
import StoryCard from '@/components/StoryCard';
import ArticleBody from '@/components/ArticleBody';
import { articleTypeLabels, articles, categories, getArticle } from '@/data/content';

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

function toIsoDate(date: string) {
  const [day, month, year] = date.split('.');
  return year && month && day ? `${year}-${month}-${day}` : date;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const category = categories[article.category];
  const related = (article.related || []).map(getArticle).filter(Boolean).slice(0, 3);
  const published = toIsoDate(article.date);
  const structured = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.lead,
    datePublished: published, dateModified: published, author: { '@type': 'Organization', name: 'Редакция MORROW' },
    publisher: { '@type': 'Organization', name: 'MORROW' }, image: [article.image], articleSection: category.label
  };

  return (
    <>
      <Header />
      <main className="article-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
        <article>
          <header className="article-header shell">
            <Link href={`/${article.category}/`} className="article-category">
              {category.label} · {articleTypeLabels[article.articleType]}
            </Link>
            <h1>{article.title}</h1>
            <p className="article-lead">{article.lead}</p>
            <div className="article-byline">
              <span>Редакция MORROW</span>
              <span>{article.date}</span>
              <span>Чтение {article.readingTime} мин</span>
              <ShareButtons title={article.title} />
            </div>
          </header>
          <div className="article-hero shell">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" />
          </div>
          <ArticleBody article={article} />
        </article>
        {related.length > 0 && (
          <section className="related section shell">
            <div className="mini-section-head"><h2>Читайте также</h2></div>
            <div className="related-grid">{related.map(a => a && <StoryCard article={a} key={a.slug} />)}</div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
