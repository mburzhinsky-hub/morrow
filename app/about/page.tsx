import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'О MORROW' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="simple-page">
        <section className="page-masthead shell">
          <span className="section-kicker">О MORROW</span>
          <h1>Отбирать важное.<br />Смотреть глубже.</h1>
          <p>MORROW — русскоязычное медиа о здоровье, работе, деньгах, отношениях, культуре и жизни. Мы находим темы, которые заслуживают внимания, проверяем факты и сохраняем пространство для собственного взгляда читателя.</p>
        </section>
        <section id="principles" className="manifesto shell section">
          <div><span>01</span><h2>Источники раньше выводов</h2><p>Фактические утверждения ведут к первичным или официальным источникам. Сила вывода всегда соответствует качеству данных.</p></div>
          <div><span>02</span><h2>Точность важнее громкости</h2><p>Исследование остаётся исследованием, а наблюдение — наблюдением. Заголовок помогает войти в тему, а не преувеличивает её.</p></div>
          <div><span>03</span><h2>Культура как способ видеть</h2><p>Книги, архитектура, выставки и музыка занимают здесь центральное место — как опыт, удовольствие и возможность смотреть на мир внимательнее.</p></div>
          <div><span>04</span><h2>Время читателя — редакционный ресурс</h2><p>Материал попадает в MORROW, когда он действительно стоит времени: фактом, идеей, маршрутом или новым взглядом.</p></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
