import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileActionBar from '@/components/layout/MobileActionBar';
import StructuredData from '@/components/seo/StructuredData';
import { businessConfig } from '@/config/business';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: {
    default: 'Ümraniye ve Ataşehir Çekici | Gümüş Oto Kurtarma',
    template: '%s | Gümüş Oto Kurtarma'
  },
  description: 'Ümraniye ve Ataşehir’de oto çekici ve kurtarma için Gümüş Oto Kurtarma ile iletişime geçin. Konum ve araç bilgilerinize göre hizmet detaylarını öğrenin.',
  keywords: [
    'Ümraniye çekici',
    'Ataşehir çekici',
    'Gümüş oto kurtarma',
    'Ümraniye oto çekici',
    'Ataşehir oto çekici',
    'oto kurtarma İstanbul',
    'en yakın çekici',
    'acil çekici',
    'araç çekici',
    'yol yardım',
    'oto kurtarıcı',
    'servise araç nakli',
    'TEM çekici',
    'Şile Yolu çekici',
    'D-100 çekici',
    'Dudullu çekici',
    'İçerenköy çekici',
    'Şerifali çekici',
    'Finans Merkezi çekici'
  ],
  authors: [{ name: businessConfig.businessName }],
  creator: businessConfig.brandName,
  publisher: businessConfig.brandName,
  applicationName: businessConfig.brandName,
  category: 'Oto çekici ve oto kurtarma',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: 'Ümraniye ve Ataşehir Çekici | Gümüş Oto Kurtarma',
    description: 'Ümraniye ve Ataşehir çevresinde profesyonel oto çekici ve kurtarma hizmeti.',
    url: businessConfig.siteUrl,
    siteName: businessConfig.businessName,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gümüş Oto Kurtarma - Ümraniye ve Ataşehir Çekici'
      }
    ],
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ümraniye ve Ataşehir Çekici | Gümüş Oto Kurtarma',
    description: 'Ümraniye ve Ataşehir çevresinde oto çekici ve kurtarma hizmeti.',
    images: ['/images/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '64x64', type: 'image/png' }
    ]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B0D10'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="skip-link">
          İçeriğe Atla
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} style={{ outline: 'none', flex: 1 }}>
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <StructuredData />
      </body>
    </html>
  );
}
