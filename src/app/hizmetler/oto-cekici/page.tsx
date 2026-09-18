import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';

export const metadata: Metadata = {
  title: 'Oto Çekici Hizmeti | Gümüş Oto Kurtarma',
  description: 'Ümraniye ve Ataşehir çevresinde platformlu oto çekici hizmeti. Binek, SUV ve hafif ticari araçlar için güvenli taşıma ve servis nakli.',
  alternates: {
    canonical: '/hizmetler/oto-cekici/'
  }
};

export default function OtoCekiciDetailPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Hizmetlerimiz', href: '/hizmetler/' },
              { label: 'Oto Çekici', href: '/hizmetler/oto-cekici/' }
            ]}
          />

          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Platformlu Taşıma
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ümraniye ve Ataşehir Oto Çekici Hizmeti
            </h1>
            <p className="text-lead">
              Motor arızası, yakıt tükenmesi, mekanik problem veya muayene/servis nakli gerektiren binek ve hafif ticari araçların güvenli platformlu çekicilerle taşınması.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              marginBottom: '48px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                Hangi Durumlarda Oto Çekici Çağrılır?
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Oto çekici hizmeti; aracın tekerleklerinin ve yürür aksamının dönebildiği, kayar kasa platform üzerine çekilerek güvenle taşınabildiği standart durumlar için idealdir.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>✓</span>
                  <span><strong>Motor / Şanzıman Arızaları:</strong> Araç çalışmadığında veya göstergede acil uyarı lambası yandığında.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>✓</span>
                  <span><strong>Planlı Servis Transferi:</strong> Periyodik bakım, boya/kaporta veya ekspertiz merkezine güvenli nakil.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>✓</span>
                  <span><strong>Yakıt / Akü Tükenmesi:</strong> Aracın kendi gücüyle hareket edemediği durumlarda servise taşıma.</span>
                </li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                Otomatik Vites ve Elektrikli Araçlar
              </h2>
              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Otomatik şanzımanlı veya elektrikli araçlarda sürükleyerek çekme işlemi aktarma organlarına ve elektrik motoruna ciddi zarar verebilir. Bu araçlar için kayar kasa üzerine tüm tekerleklerin bindirildiği platformlu taşıma gereklidir. Çağrı sırasında aracınızın türünü belirtmeniz uygun ekipman için şarttır.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: 'var(--radius-card)',
                  padding: '28px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                  Çekici Talep Ederken Gerekli Bilgiler
                </h3>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    Aracın tam markası, modeli ve vites türü (Manuel / Otomatik).
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    Bulunduğu konum (Cadde adı, sokak veya en yakın tabela).
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    Tekerleklerin serbest dönüp dönmediği.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    Aracın götürüleceği servis veya bırakılacağı nokta.
                  </li>
                </ol>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-dark)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px'
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '8px' }}>
                  Fiyatlandırma Bilgisi
                </h4>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                  Çekici ücreti; alınacak ve bırakılacak yer arasındaki mesafeye ve araç ağırlığına göre hesaplanır.
                </p>
                <Link href="/cekici-ucretini-etkileyen-faktorler/" className="btn btn-outline" style={{ width: '100%', minHeight: '44px', fontSize: '14px' }}>
                  Fiyat Faktörlerini İncele →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaBand />
    </>
  );
}
