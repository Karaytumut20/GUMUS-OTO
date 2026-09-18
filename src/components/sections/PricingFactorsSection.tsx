'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getPhoneHref } from '@/lib/urls';
import { businessConfig } from '@/config/business';

export default function PricingFactorsSection() {
  const [showNotice, setShowNotice] = useState(false);
  const phoneHref = getPhoneHref();

  const factors = [
    {
      title: 'Mesafe (Alış ve Bırakış Noktası)',
      desc: 'Aracın bulunduğu konum ile teslim edileceği servis/tamirhane arasındaki gerçek kilometre hesabı.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="19" r="3"/>
          <path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H5a3 3 0 0 1 0-6h13"/>
        </svg>
      )
    },
    {
      title: 'Araç Tipi ve Boyutu',
      desc: 'Binek sedan, SUV, arazi aracı veya hafif ticari araçların tonaj ve boyut farkı platform seçimini belirler.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    },
    {
      title: 'Yürür Aksam ve Kilitli Durum',
      desc: 'Tekerleklerin dönüp dönmemesi, direksiyon kilidi veya şanzıman durumu özel makara/aparat gerektirebilir.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: 'Fiziksel Konum ve Erişim Şartları',
      desc: 'Kapalı otopark tavan yüksekliği, dar sokaklar veya şarampole kayma gibi kurtarma zorlukları.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      title: 'Kullanılacak Özel Ekipman',
      desc: 'Standart kayar kasa çekici mi yoksa vinç / ahtapot aparat mı gerektiği operasyon maliyetini şekillendirir.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="20" x2="22" y2="20"/>
          <path d="M6 20V4l10 8"/>
          <path d="M14 8l6 4-6 4"/>
          <path d="M16 12v6"/>
        </svg>
      )
    },
    {
      title: 'Köprü, Tünel ve Geçiş Giderleri',
      desc: 'Güzergah üzerinde varsa otoyol, köprü veya ek tünel geçiş ücretleri görüşmede şeffafça belirtilir.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="19" x2="20" y2="19"/>
          <line x1="4" y1="5" x2="20" y2="5"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      )
    }
  ];

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!phoneHref) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  return (
    <section className="section" id="ucret" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '760px', marginBottom: '52px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>
            Şeffaf Fiyatlandırma
          </span>
          <h2 style={{ marginBottom: '18px' }}>
            Çekici Ücretini Neler Etkiler?
          </h2>
          <p className="text-lead">
            Sabit veya aldatıcı taban fiyatlar yerine; konumunuz, aracınızın fiziksel durumu ve mesafenize göre dürüst ve şeffaf fiyat bilgisi sunuyoruz.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {factors.map((item, idx) => (
            <div
              key={idx}
              className="card dark-card"
              style={{
                padding: '30px 28px',
                background: 'linear-gradient(160deg, rgba(24,34,53,0.85) 0%, rgba(12,17,28,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-brand-yellow)',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-white)', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-small" style={{ lineHeight: 1.65, color: '#94A3B8' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fiyat Şeffaflığı Çağrı Kartı */}
        <div
          className="card dark-card"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(14, 20, 34, 0.85) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            padding: '36px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '8px' }}>
              Tahmini ve Net Fiyatı Önceden Öğrenin
            </h3>
            <p className="text-small" style={{ color: '#CBD5E1', lineHeight: 1.6 }}>
              Telefon açtığınızda operatörümüze aracınızın konumunu ve durumunu aktararak operasyon öncesinde net fiyat teyidi alabilirsiniz.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={phoneHref || '#fiyat-al'}
              onClick={handlePhoneClick}
              className="btn btn-primary"
              style={{ padding: '0 24px' }}
            >
              Fiyat Bilgisi İçin Ara ↗
            </a>
            <Link href="/cekici-ucretini-etkileyen-faktorler/" className="btn" style={{ padding: '0 20px', background: 'transparent', border: '2px solid rgba(255,255,255,0.35)', color: '#fff' }}>
              Detaylı Rehber →
            </Link>
          </div>
        </div>
      </div>

      {showNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pricing-notice-title"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setShowNotice(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              borderTop: '2px solid var(--color-brand-yellow)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="pricing-notice-title" style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>
              İşletme Telefon Hattı Teyit Bekliyor
            </h3>
            <p style={{ marginBottom: '16px', lineHeight: 1.6, color: '#CBD5E1' }}>
              Gümüş Oto Kurtarma&apos;nın resmî telefon numarası teyit edildikten sonra arama linki doğrudan çalışacaktır.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ minHeight: '44px', padding: '0 18px', fontSize: '14px' }}
              >
                Google Haritalar Kaydı ↗
              </a>
              <button
                type="button"
                onClick={() => setShowNotice(false)}
                className="btn btn-primary"
                style={{ minHeight: '44px', padding: '0 22px', fontSize: '14px' }}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
