'use client';

import { useState } from 'react';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <button className="share-button" onClick={share}>{copied ? 'Ссылка скопирована' : <><span>Поделиться</span><ExternalLinkIcon /></>}</button>;
}
