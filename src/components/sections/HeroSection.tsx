'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';
import { getPhoneHref, buildWhatsAppUrl } from '@/lib/urls';

export default function HeroSection() {
  const [showPhoneNotice, setShowPhoneNotice] = useState(false);
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({
    districtOrNeighborhood: 'Ümraniye / Ataşehir'
  });

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!phoneHref) {
      e.preventDefault();
      setShowPhoneNotice(true);
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '64px',
        paddingBottom: '96px',
        overflow: 'hidden'
      }}
    >
      {/* Top Warm Amber Ambient Lighting */}
      <div className="bg-subtle-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '64px'
          }}
        >
          {/* Sol Kolon: Başlık, Bilgi & Eylem */}
          <div>
            {/* Canlı Operasyon Rozeti */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px', flexWrap: 'wrap' }}>
              <span className="badge-live">
                <span className="beacon-dot" />
                7/24 Aktif Çekici Operasyonu
              </span>
              <span className="badge badge-info">
                📍 Ümraniye &amp; Ataşehir
              </span>
            </div>

            <h1 style={{ marginBottom: '22px' }}>
              Ümraniye ve Ataşehir’de{' '}
              <span className="gradient-text-gold">Oto Çekici</span> ve Kurtarma
            </h1>

            <p className="text-lead" style={{ marginBottom: '28px', maxWidth: '580px' }}>
              Yolda kaldığınızda ya da aracınızın nakli gerektiğinde Gümüş Oto Kurtarma yanınızda. Konumunuzu ve aracınızın durumunu iletin; doğru ekipman ve güvenli çekici ile hemen destek sağlayalım.
            </p>

            {/* Hızlı Güven & Nitelik Çipleri */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                marginBottom: '32px',
                maxWidth: '560px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-brand-yellow)',
                    flexShrink: 0
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-light)', display: 'block' }}>Hızlı Müdahale</span>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted-dark)' }}>Konuma en yakın ekip</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34D399',
                    flexShrink: 0
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-light)', display: 'block' }}>Güvenli Taşıma</span>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted-dark)' }}>Platformlu çekici</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    flexShrink: 0
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                    <line x1="8" y1="2" x2="8" y2="18"/>
                    <line x1="16" y1="6" x2="16" y2="22"/>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-light)', display: 'block' }}>52 Mahalle</span>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted-dark)' }}>Ümraniye + Ataşehir</span>
                </div>
              </div>
            </div>

            {/* CTA Butonları */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a
                href={phoneHref || '#telefon-bekleniyor'}
                onClick={handlePhoneClick}
                className="btn btn-primary"
                style={{ minHeight: '56px', padding: '0 32px', fontSize: '16.5px' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{businessConfig.phoneDisplay || 'Hemen Ara'}</span>
              </a>

              <Link
                href={whatsApp.url || '/iletisim/'}
                className="btn btn-whatsapp"
                style={{ minHeight: '56px', padding: '0 28px', fontSize: '16.5px' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.78.813 2.796.814 3.183 0 5.769-2.587 5.77-5.767 0-3.182-2.587-5.8-5.77-5.8zm3.364 8.21c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.124-.523-1.637-.681-2.696-2.348-2.778-2.457-.082-.11-.663-.882-.663-1.682 0-.8.419-1.194.568-1.356.149-.163.325-.204.433-.204.108 0 .217.001.312.006.1.005.234-.038.366.279.136.326.462 1.127.503 1.209.041.082.069.177.014.286-.055.109-.082.177-.163.272-.082.095-.172.213-.245.286-.082.082-.167.171-.072.334.095.163.423.698.908 1.13.624.556 1.15.728 1.313.81.163.082.258.069.354-.041.095-.109.407-.475.516-.638.109-.163.217-.136.366-.082.149.054.95.448 1.113.53.163.082.272.122.312.19.041.068.041.394-.103.799z"/>
                </svg>
                <span>WhatsApp’tan Konum İlet</span>
              </Link>
            </div>

            {/* Alt Şeffaf Bilgilendirme Notu */}
            <p className="text-small" style={{ color: 'var(--color-text-muted-dark)', lineHeight: 1.6 }}>
              ℹ️ Tahmini ulaşım süresi ve ücret; konumunuza, yol durumuna ve araç tipine göre çağrı sırasında netleştirilir.
            </p>
          </div>

          {/* Sağ Kolon: Showcase Stage with Frosted Glass Frame */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Radiant Ambient Aura */}
            <div
              style={{
                position: 'absolute',
                width: '130%',
                height: '130%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(30, 58, 138, 0.1) 45%, transparent 70%)',
                filter: 'blur(35px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            {/* Vitrin Cam Kartı */}
            <div
              className="card dark-card"
              style={{
                width: '100%',
                maxWidth: '440px',
                position: 'relative',
                background: 'linear-gradient(160deg, rgba(24, 34, 53, 0.75) 0%, rgba(12, 17, 28, 0.85) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderTop: '1px solid rgba(255, 255, 255, 0.22)',
                padding: '36px 28px',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(245, 158, 11, 0.15)',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Üst Yüzen Durum Etiketi */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(8, 12, 20, 0.75)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  marginBottom: '24px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                }}
              >
                <span className="beacon-dot" style={{ backgroundColor: 'var(--color-brand-yellow)', boxShadow: '0 0 8px var(--color-brand-yellow)' }} />
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-brand-yellow)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  GÜMÜŞ OTO KURTARMA
                </span>
              </div>

              {/* Logo Alanı */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  aspectRatio: '1 / 1',
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#070A0F',
                  border: '2px solid rgba(245, 158, 11, 0.45)',
                  boxShadow: '0 0 40px -8px rgba(245, 158, 11, 0.3), inset 0 0 25px rgba(0, 0, 0, 0.9)',
                  marginBottom: '24px'
                }}
              >
                <Image
                  src={businessConfig.logoPath}
                  alt="Gümüş Oto Kurtarma logosu"
                  fill
                  priority
                  sizes="(max-width: 768px) 260px, 300px"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Alt Bilgi Şeridi */}
              <div
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    padding: '10px 8px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Operasyon</span>
                  <strong style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>7/24 Kesintisiz</strong>
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    padding: '10px 8px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Hizmet Alanı</span>
                  <strong style={{ fontSize: '13px', color: 'var(--color-brand-yellow)' }}>Anadolu Yakası</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telefon Doğrulama Bilgilendirme Modalı */}
      {showPhoneNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-notice-title"
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
          onClick={() => setShowPhoneNotice(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              borderTop: '2px solid var(--color-brand-yellow)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-brand-yellow)'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 id="phone-notice-title" style={{ fontSize: '20px', fontWeight: 800 }}>
                İşletme Telefon Hattı Teyit Sürecindedir
              </h3>
            </div>
            <p style={{ marginBottom: '16px', lineHeight: 1.6, color: '#CBD5E1' }}>
              Gümüş Oto Kurtarma&apos;nın resmî çağrı merkezi numarası işletme sahibi tarafından onaylandığında doğrudan arama bağlantısı aktifleşecektir.
            </p>
            <p className="text-small" style={{ marginBottom: '24px', color: 'var(--color-text-muted-dark)' }}>
              Şeffaflık ilkemiz gereği sahte veya geçici numaralar kullanmıyoruz. Doğrulanmış işletme bilgilerine Google Haritalar profilimizden de erişebilirsiniz.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ minHeight: '44px', padding: '0 18px', fontSize: '14px' }}
              >
                Google Haritalar Kaydına Git ↗
              </a>
              <button
                type="button"
                onClick={() => setShowPhoneNotice(false)}
                className="btn btn-primary"
                style={{ minHeight: '44px', padding: '0 22px', fontSize: '14px' }}
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
