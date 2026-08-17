import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchClient from '@/components/SearchClient';

export const metadata: Metadata = { title: 'Поиск' };
export default function SearchPage() { return <><Header/><main className="simple-page"><section className="page-masthead shell compact"><span className="section-kicker">ПОИСК</span><h1>Что вы хотите понять?</h1></section><section className="shell section search-section"><SearchClient/></section></main><Footer/></>; }
