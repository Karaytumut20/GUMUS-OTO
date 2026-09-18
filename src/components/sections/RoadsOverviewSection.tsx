import React from 'react';
import Link from 'next/link';
import { roadsData } from '@/data/roads';

export default function RoadsOverviewSection() {
  return (
    <section className="section" id="yollar" style={{ backgroundColor: 'rgba(14, 20, 34, 0.45)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>
            Yol &amp; Ulaşım Rehberi
          </span>
          <h2 style={{ marginBottom: '18px' }}>
            Ana Yollar ve Bağlantı Noktaları
          </h2>
          <p className="text-lead">
            TEM (O-2), D-100 (E-5), Şile Yolu veya sanayi bölgelerinde aracınız kaldığında konumunuzu en doğru şekilde nasıl tarif edebilirsiniz?
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '28px',
            marginBottom: '44px'
          }}
        >
          {roadsData.slice(0, 4).map((road, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(245, 158, 11, 0.15)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-brand-yellow)',
                        flexShrink: 0
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                        <line x1="8" y1="2" x2="8" y2="18"/>
                        <line x1="16" y1="6" x2="16" y2="22"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-white)', lineHeight: 1.3 }}>
                      {road.name}
                    </h3>
                  </div>
                  <span className="badge badge-info" style={{ fontSize: '11px', flexShrink: 0 }}>
                    {road.category}
                  </span>
                </div>
                <p className="text-small" style={{ marginBottom: '20px', lineHeight: 1.65, color: '#CBD5E1' }}>
                  {road.description}
                </p>
              </div>
              <div
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-btn)',
                  backgroundColor: 'rgba(8, 12, 20, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderLeft: '3px solid var(--color-brand-yellow)',
                  fontSize: '13px',
                  color: '#94A3B8',
                  lineHeight: 1.55
                }}
              >
                <strong style={{ color: 'var(--color-brand-yellow)' }}>Sürücü Güvenliği:</strong> {road.driverAdvice}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/yol-ve-baglanti-noktalari/" className="btn btn-outline" style={{ padding: '0 32px' }}>
            Tüm Yol, Kavşak ve Sanayi Bölgeleri Rehberini Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
