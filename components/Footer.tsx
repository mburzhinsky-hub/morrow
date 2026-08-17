import Link from 'next/link';
import { categories } from '@/data/content';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-brand"><span className="brand-star">✦</span><strong>MORROW</strong><p>Меньше информационного шума.<br/>Больше того, что действительно стоит времени.</p></div>
      <div className="footer-links">
        <div><span>РУБРИКИ</span>{(Object.keys(categories) as Array<keyof typeof categories>).map(k => <Link key={k} href={`/${k}/`}>{categories[k].label}</Link>)}</div>
        <div><span>MORROW</span><Link href="/about">О проекте</Link><Link href="/about#principles">Принципы редакции</Link><Link href="/about#contact">Контакты</Link><Link href="/about#contact">Реклама</Link></div>
        <div><span>СОЦСЕТИ</span><p className="footer-pending">Telegram · готовим запуск</p><p className="footer-pending">YouTube · готовим запуск</p><p className="footer-pending">Instagram · готовим запуск</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MORROW</span><span>Редакционные материалы · проверяемые источники</span></div>
    </footer>
  );
}
