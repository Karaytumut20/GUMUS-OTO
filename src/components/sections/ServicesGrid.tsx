import React from 'react';
import Link from 'next/link';
import { servicesData, unverifiedServiceNotes } from '@/data/services';

export default function ServicesGrid() {
  return (
    <section className="section" id="hizmetler" style={{ backgroundColor: 'rgba(14, 20, 34, 0.4)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge">Profesyonel Hizmetler</span>
          </div>
          <h2 style={{ marginBottom: '18px' }}>
            Ümraniye ve Ataşehir İçin Çekici ve Kurtarma
          </h2>
          <p className="text-lead">
            Aracınızın türüne, mekanik arıza durumuna ve bulunduğu noktanın fiziksel şartlarına göre doğru ekipman ve güvenli taşıma desteği.
          </p>
        </div>

        {/* Ana Doğrulanmış Hizmet Kartları Izgarası */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}
        >
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="card dark-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 32px',
                background: 'linear-gradient(160deg, rgba(24,34,53,0.85) 0%, rgba(12,17,28,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: '2px solid var(--color-brand-yellow)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div className="icon-podium" style={{ width: '56px', height: '56px' }}>
                    {svc.id === 'oto-cekici' ? (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 18H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-2"/>
                        <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/>
                        <circle cx="7" cy="18" r="2"/>
                        <circle cx="17" cy="18" r="2"/>
                        <path d="M9 11h2"/>
                      </svg>
                    ) : (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="2" y1="20" x2="22" y2="20"/>
                        <path d="M6 20V4l10 8"/>
                        <path d="M14 8l6 4-6 4"/>
                        <path d="M16 12v6"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', lineHeight: 1.2 }}>
                      {svc.title}
                    </h3>
                    <span style={{ fontSize: '12px', color: 'var(--color-brand-yellow)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Doğrulanmış Temel Hizmet
                    </span>
                  </div>
                </div>

                <p style={{ marginBottom: '24px', lineHeight: 1.65, color: '#CBD5E1' }}>
                  {svc.shortDescription}
                </p>

                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-brand-yellow)', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                    Öne Çıkan Kullanım Senaryoları
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {svc.idealFor.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{ fontSize: '14.5px', color: '#94A3B8', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.5 }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(245, 158, 11, 0.15)',
                            color: 'var(--color-brand-yellow)',
                            fontSize: '11px',
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href={svc.href}
                  className="btn btn-outline"
                  style={{ width: '100%', minHeight: '50px', fontSize: '15px', fontWeight: 700 }}
                >
                  {svc.title} Detaylarını İncele →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Amblemde Belirtilen Ek Hizmetler Hakkında Şeffaf Not */}
        <div
          className="card dark-card"
          style={{
            background: 'linear-gradient(160deg, rgba(24, 34, 53, 0.8) 0%, rgba(13, 19, 32, 0.9) 100%)',
            borderTop: '2px solid var(--color-brand-yellow)',
            padding: '36px 32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: 'var(--color-brand-yellow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-white)' }}>
              Marka Amblemindeki Ek Hizmetler Hakkında Bilgilendirme
            </h3>
          </div>
          <p className="text-small" style={{ marginBottom: '22px', lineHeight: 1.65, color: '#94A3B8' }}>
            İşletme logosunda akü takviye ve lastik yol yardım ibareleri yer almaktadır. Bu hizmetler seyyar müdahale aracı ve nöbetçi ekip uygunluğuna göre çağrı sırasında değerlendirilmektedir:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
            {unverifiedServiceNotes.map((note, idx) => (
              <div
                key={idx}
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(8, 12, 20, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.07)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="beacon-dot" style={{ backgroundColor: 'var(--color-brand-yellow)', width: '6px', height: '6px' }} />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-yellow)' }}>
                    {note.title}
                  </span>
                </div>
                <span style={{ display: 'block', fontSize: '13px', color: '#94A3B8', lineHeight: 1.5 }}>
                  {note.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
