import type { Metadata } from 'next';
import { businessConfig } from '@/config/business';

type PageMetadataInput = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
};

export function createPageMetadata({ title, description, canonical, keywords }: PageMetadataInput): Metadata {
  const socialTitle = title.includes(businessConfig.brandName)
    ? title
    : `${title} | ${businessConfig.brandName}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: businessConfig.brandName,
      locale: 'tr_TR',
      type: 'website',
      images: [{
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${title} - ${businessConfig.brandName}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/images/og-image.png']
    }
  };
}
