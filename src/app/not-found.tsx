import React from 'react';
import Link from 'next/link';

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
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-border-dark)',
          borderRadius: 'var(--radius-card)',
          padding: '48px 32px'
        }}
      >
        <span
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: 'var(--color-brand-yellow)',
            lineHeight: 1,
            display: 'block',
            marginBottom: '16px'
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
          Sayfa Bulunamadı
        </h1>
        <p className="text-small" style={{ marginBottom: '32px', lineHeight: 1.6 }}>
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
