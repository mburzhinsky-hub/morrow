import Link from 'next/link';
import { categories } from '@/data/content';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-brand"><span className="brand-star">✦</span><strong>MORROW</strong><p>Меньше информационного шума.<br/>Больше того, что действительно стоит времени.</p></div>
      <div className="footer-links">
        <div><span>РУБРИКИ</span>{(Object.keys(categories) as Array<keyof typeof categories>).map(k => <Link key={k} href={`/${k}`}>{categories[k].label}</Link>)}</div>
        <div><span>MORROW</span><Link href="/about">About</Link><Link href="/about#principles">Editorial Principles</Link><Link href="/about#contact">Contact</Link><Link href="/about#contact">Advertise</Link></div>
        <div><span>SOCIAL</span><p className="footer-pending">Telegram · launch pending</p><p className="footer-pending">YouTube · launch pending</p><p className="footer-pending">Instagram · launch pending</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MORROW</span><span>Editorial prototype · source-backed evergreen edition</span></div>
    </footer>
  );
}
