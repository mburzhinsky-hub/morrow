import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryStrip from '@/components/CategoryStrip';
import TodayBriefing from '@/components/TodayBriefing';
import StoryCard from '@/components/StoryCard';
import NewsColumn from '@/components/NewsColumn';
import BookWeek from '@/components/BookWeek';
import EventsPreview from '@/components/EventsPreview';
import Weekend from '@/components/Weekend';
import WatchPreview from '@/components/WatchPreview';
import Footer from '@/components/Footer';
import { articles, heroSlugs } from '@/data/content';

export default function Home() {
  const heroes = heroSlugs.map(slug => articles.find(article => article.slug === slug)!).filter(Boolean);
  const mainStories = [
    articles.find(a => a.slug === '150-minut-dvizheniya-v-nedelyu')!,
    articles.find(a => a.slug === 'gde-ai-uskoryaet-rabotu')!,
    articles.find(a => a.slug === 'kak-smotret-arhitekturu')!
  ];
  const discovery = articles.find(a => a.slug === 'muzei-bez-marafona')!;

  return (
    <>
      <Header dark />
      <main>
        <HeroCarousel stories={heroes} />
        <CategoryStrip />
        <TodayBriefing />

        <section className="section shell home-editorial">
          <div className="main-column">
            <div className="mini-section-head"><div><span className="section-kicker">ВЫБОР РЕДАКЦИИ</span><h2>Главное сегодня</h2></div></div>
            <div className="main-stories-grid">
              {mainStories.map((article, index) => <StoryCard article={article} large={index === 0} key={article.slug} />)}
            </div>
          </div>
          <NewsColumn />
        </section>

        <section className="discovery shell section">
          <StoryCard article={discovery} large />
          <div className="discovery-note">
            <span className="section-kicker">КУЛЬТУРА / МАРШРУТ</span>
            <h2>В музее не обязательно успевать всё.</h2>
            <p>Один зал, несколько работ и время на детали — маршрут, который оставляет место собственному взгляду, а не только списку обязательных точек.</p>
          </div>
        </section>

        <section className="section shell culture-utility-grid">
          <BookWeek />
          <EventsPreview />
        </section>

        <Weekend />
        <WatchPreview />
      </main>
      <Footer />
    </>
  );
}
