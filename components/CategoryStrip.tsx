import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/content';

export default function CategoryStrip() {
  return (
    <section className="category-strip shell" aria-label="Рубрики">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => {
        const item = categories[key];
        return (
          <Link href={`/${key}`} className="category-tile" key={key}>
            <div className="category-thumb"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 44vw, 15vw" /></div>
            <span className="category-label">{item.label}</span>
            <strong>{item.ru}</strong>
          </Link>
        );
      })}
    </section>
  );
}
