import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı. Gümüş Oto Kurtarma hizmetleri ve iletişim sayfalarına ana menüden ulaşabilirsiniz.',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          backgroundColor: '#ffffff',
          border: '1px solid #b8b6af',
          borderRadius: '4px',
          padding: '48px 32px',
          boxShadow: '4px 4px 0 #d8d6ce'
        }}
      >
        <span
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#f2b705',
            lineHeight: 1,
            display: 'block',
            marginBottom: '16px'
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
          Sayfa Bulunamadı
        </h1>
        <p className="text-small" style={{ marginBottom: '32px', lineHeight: 1.6, color: '#111517' }}>
          Aradığınız sayfa taşınmış, silinmiş veya hatalı yazılmış olabilir. Ümraniye ve Ataşehir oto çekici hizmetlerimiz için ana sayfamıza dönebilirsiniz.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary" style={{ padding: '0 24px' }}>
            Ana Sayfaya Dön
          </Link>
          <Link href="/iletisim/" className="btn btn-outline" style={{ padding: '0 24px' }}>
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
