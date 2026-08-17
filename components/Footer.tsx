import Link from 'next/link';
import { categories } from '@/data/content';
import { sitePath } from '@/lib/sitePath';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-brand"><span className="brand-star">✦</span><strong>MORROW</strong><p>Меньше информационного шума.<br/>Больше того, что действительно стоит времени.</p></div>
      <div className="footer-links">
        <div><span>РУБРИКИ</span>{(Object.keys(categories) as Array<keyof typeof categories>).map(k => <a key={k} href={sitePath(`/${k}/`)}>{categories[k].label}</a>)}</div>
        <div><span>MORROW</span><Link href="/about">О проекте</Link><Link href="/about#principles">Принципы редакции</Link></div>
        <div><span>ФОРМАТЫ</span><p className="footer-format">Разбор</p><p className="footer-format">Перспектива</p><p className="footer-format">Гид</p><p className="footer-format">Эссе</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MORROW</span><span>Редакционные материалы · проверяемые источники</span></div>
    </footer>
  );
}
