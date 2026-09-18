import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import NeighborhoodSearch from '@/components/forms/NeighborhoodSearch';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { UMRANIYE_NEIGHBORHOODS, ATASEHIR_NEIGHBORHOODS } from '@/data/neighborhoods';

export const metadata: Metadata = {
  title: 'Hizmet Bölgeleri ve Mahalle Rehberi | Gümüş Oto Kurtarma',
  description: 'Ümraniye’nin 35 ve Ataşehir’in 17 mahallesini kapsayan kapsamlı çekici ve kurtarma bölge rehberi. Mahallenizi arayın ve hizmet detaylarını öğrenin.',
  alternates: {
    canonical: '/hizmet-bolgeleri/'
  }
};

export default function HizmetBolgeleriPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri/' }]} />

          <div style={{ maxWidth: '840px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Coğrafi Kapsam & 52 Mahalle
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ümraniye ve Ataşehir Hizmet Bölgeleri
            </h1>
            <p className="text-lead">
              Ümraniye’nin 35, Ataşehir’in 17 mahallesi ve bu ilçeleri çevreleyen ana otoyol kesişimlerinde profesyonel çekici ve oto kurtarma yönlendirmesi.
            </p>
          </div>

          {/* İlçe Hızlı Yönlendirme Kartları */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-white)' }}>
                    Ümraniye Çekici
                  </h2>
                  <span className="badge badge-info">35 Mahalle</span>
                </div>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                  Şerifali, Dudullu, Çakmak, Tepeüstü, Atakent, Ihlamurkuyu ve diğer tüm mahallelerde hızlı çekici erişimi.
                </p>
              </div>
              <Link href="/umraniye-cekici/" className="btn btn-primary" style={{ width: '100%', minHeight: '46px', fontSize: '15px' }}>
                Ümraniye Özel Sayfası →
              </Link>
            </div>

            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-white)' }}>
                    Ataşehir Çekici
                  </h2>
                  <span className="badge badge-info">17 Mahalle</span>
                </div>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                  Barbaros, İçerenköy, Küçükbakkalköy, Ferhatpaşa, Yenisahra, Kayışdağı ve Finans Merkezi çevresi.
                </p>
              </div>
              <Link href="/atasehir-cekici/" className="btn btn-primary" style={{ width: '100%', minHeight: '46px', fontSize: '15px' }}>
                Ataşehir Özel Sayfası →
              </Link>
            </div>
          </div>

          {/* Mahalle Arama ve Liste Bileşeni */}
          <NeighborhoodSearch
            umraniyeList={UMRANIYE_NEIGHBORHOODS}
            atasehirList={ATASEHIR_NEIGHBORHOODS}
          />

          {/* Açıklama & Şeffaflık Notu */}
          <div
            style={{
              marginTop: '56px',
              padding: '24px 28px',
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)'
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '8px' }}>
              📌 Hizmet Kapsamı ve Operasyonel Not
            </h3>
            <p className="text-small" style={{ lineHeight: 1.6 }}>
              Yukarıda listelenen 52 mahalle, işletmemizin çekici ve kurtarma yönlendirmesi sağladığı coğrafi hizmet bölgesini ifade eder. Her mahallede bağımsız fiziksel bir şube bulunduğu iddiası taşınmaz; mobil filomuz koordineli olarak çağrılara en yakın konumdan müdahale eder.
            </p>
          </div>
        </div>
      </div>

      <FinalCtaBand />
    </>
  );
}
