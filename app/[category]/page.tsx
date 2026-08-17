import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { articleTypeLabels, articles, categories, getCategoryArticles, type CategoryKey } from '@/data/content';

const valid = Object.keys(categories) as CategoryKey[];

export function generateStaticParams() {
  return valid.map(category => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!valid.includes(category as CategoryKey)) return {};
  const meta = categories[category as CategoryKey];
  return { title: `${meta.label} · ${meta.ru}`, description: meta.description };
}

function materialLabel(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} материал`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} материала`;
  return `${count} материалов`;
}

export default async function CategoryRoute({ params }: { params: Promise<{ category: string }> }) {
  const { category: raw } = await params;
  if (!valid.includes(raw as CategoryKey)) notFound();
  const category = raw as CategoryKey;
  const meta = categories[category];
  const items = getCategoryArticles(category);
  const feature = items[0];
  const latest = items.slice(1);
  const recommendations = valid
    .filter(key => key !== category)
    .map(key => articles.find(article => article.category === key))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .slice(0, 4);

  return (
    <>
      <Header />
      <main className={`category-page category-${category}`}>
        <section className="category-masthead shell">
          <div><span className="section-kicker">MORROW / {meta.label}</span><h1>{meta.label}</h1></div>
          <p>{meta.description}</p>
        </section>
        <section className="category-feature shell">
          <StoryCard article={feature} large />
          <div className="category-feature-copy">
            <span>ГЛАВНЫЙ МАТЕРИАЛ · {articleTypeLabels[feature.articleType].toUpperCase()}</span>
            <h2>{feature.title}</h2>
            <p>{feature.lead}</p>
            <Link href={`/article/${feature.slug}`}>Читать →</Link>
          </div>
        </section>
        <section className="section shell">
          <div className="mini-section-head"><h2>Новые материалы</h2><span>{materialLabel(items.length)}</span></div>
          <div className="category-latest-grid">{latest.map(a => <StoryCard key={a.slug} article={a} />)}</div>
        </section>
        <section className="category-picks dark-section">
          <div className="shell">
            <div className="mini-section-head light-head"><h2>Выбор редакции</h2><span>Из других рубрик</span></div>
            <div className="category-picks-grid">{recommendations.map(a => <StoryCard key={a.slug} article={a} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
