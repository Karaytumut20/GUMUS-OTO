import React from 'react';
import Link from 'next/link';
import { districts } from '@/data/districts';

export default function RegionOverview() {
  return (
    <section className="section" id="bolgeler" style={{ background: 'linear-gradient(180deg, rgba(8,12,20,0) 0%, rgba(14,20,34,0.5) 100%)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>
            Hizmet Sahamız
          </span>
          <h2 style={{ marginBottom: '18px' }}>
            Ümraniye ve Ataşehir Bölge Kapsamı
          </h2>
          <p className="text-lead">
            Anadolu Yakası’nın iki merkezi ilçesinde, 52 mahalle ve ana otoyol kesişimlerinde koordineli çekici hizmeti.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {districts.map((district) => (
            <div
              key={district.id}
              className="card dark-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px',
                background: 'linear-gradient(160deg, rgba(24,34,53,0.85) 0%, rgba(12,17,28,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: district.id === 'umraniye' ? '2px solid var(--color-brand-yellow)' : '2px solid #38BDF8'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: district.id === 'umraniye' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                        color: district.id === 'umraniye' ? 'var(--color-brand-yellow)' : '#38BDF8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                        <line x1="8" y1="2" x2="8" y2="18"/>
                        <line x1="16" y1="6" x2="16" y2="22"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)' }}>
                      {district.name} Çekici
                    </h3>
                  </div>
                  <span className="badge badge-info" style={{ fontWeight: 800 }}>
                    {district.neighborhoodCount} Mahalle
                  </span>
                </div>

                <p style={{ marginBottom: '24px', lineHeight: 1.7, color: '#CBD5E1' }}>
                  {district.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-brand-yellow)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                    Kritik Ulaşım Aksları:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {district.keyRoads.map((road, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '13px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#E2E8F0',
                          fontWeight: 500
                        }}
                      >
                        {road}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                    Önemli Merkezler:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {district.keyHubs.map((hub, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '13px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: '#CBD5E1'
                        }}
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href={district.pagePath}
                  className="btn"
                  style={{ width: '100%', minHeight: '50px', fontSize: '15px', fontWeight: 700, background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', color: '#fff' }}
                >
                  {district.name} Çekici Sayfası ve Mahalleler →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link
            href="/hizmet-bolgeleri/"
            className="btn btn-outline"
            style={{ padding: '0 32px', fontSize: '15px' }}
          >
            Tüm 52 Mahalleyi ve Bölge Haritasını Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
