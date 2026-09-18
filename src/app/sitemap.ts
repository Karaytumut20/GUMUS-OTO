import type { MetadataRoute } from 'next';
import { businessConfig } from '@/config/business';
import { ALL_NEIGHBORHOODS } from '@/data/neighborhoods';
import { getNeighborhoodPath } from '@/data/local-seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessConfig.siteUrl;
  const now = new Date('2026-09-18');
  const core = [
    ['',1],['/hizmetler/',.9],['/hizmetler/oto-cekici/',.9],['/hizmetler/oto-kurtarma/',.9],
    ['/hizmet-bolgeleri/',.9],['/umraniye-cekici/',.95],['/atasehir-cekici/',.95],
    ['/yol-ve-baglanti-noktalari/',.85],['/cekici-ucretini-etkileyen-faktorler/',.8],
    ['/hakkimizda/',.6],['/iletisim/',.8],['/gizlilik/',.3]
  ] as const;
  return [
    ...core.map(([path,priority])=>({url:`${base}${path}`,lastModified:now,changeFrequency:'monthly' as const,priority})),
    ...ALL_NEIGHBORHOODS.map(area=>({url:`${base}${getNeighborhoodPath(area)}`,lastModified:now,changeFrequency:'monthly' as const,priority:.8}))
  ];
}
