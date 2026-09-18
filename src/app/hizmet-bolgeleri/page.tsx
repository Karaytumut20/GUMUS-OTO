import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import NeighborhoodSearch from '@/components/forms/NeighborhoodSearch';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import SeoTextGuide from '@/components/sections/SeoTextGuide';
import { UMRANIYE_NEIGHBORHOODS, ATASEHIR_NEIGHBORHOODS } from '@/data/neighborhoods';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Hizmet Bölgeleri ve Mahalle Rehberi',
  description: 'Ümraniye’nin 35 ve Ataşehir’in 17 mahallesini kapsayan kapsamlı çekici ve kurtarma bölge rehberi. Mahallenizi arayın ve hizmet detaylarını öğrenin.',
  canonical: '/hizmet-bolgeleri/'
});

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            <Link
              href="/umraniye-cekici/"
              className="card region-link-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0b0d0e' }}>
                    Ümraniye Çekici
                  </h2>
                  <span className="badge badge-info">35 Mahalle</span>
                </div>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6, color: '#111517' }}>
                  Şerifali, Dudullu, Çakmak, Tepeüstü, Atakent, Ihlamurkuyu ve diğer tüm mahallelerde hızlı çekici erişimi.
                </p>
              </div>
              <span className="btn btn-primary" style={{ width: '100%', minHeight: '46px', fontSize: '15px' }}>
                Ümraniye Özel Sayfası →
              </span>
            </Link>

            <Link
              href="/atasehir-cekici/"
              className="card region-link-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0b0d0e' }}>
                    Ataşehir Çekici
                  </h2>
                  <span className="badge badge-info">17 Mahalle</span>
                </div>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6, color: '#111517' }}>
                  Barbaros, İçerenköy, Küçükbakkalköy, Ferhatpaşa, Yenisahra, Kayışdağı ve Finans Merkezi çevresi.
                </p>
              </div>
              <span className="btn btn-primary" style={{ width: '100%', minHeight: '46px', fontSize: '15px' }}>
                Ataşehir Özel Sayfası →
              </span>
            </Link>
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
              backgroundColor: '#ffffff',
              border: '1px solid #b8b6af',
              borderRadius: '4px',
              boxShadow: '4px 4px 0 #d8d6ce'
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0b0d0e', marginBottom: '8px' }}>
              📌 Hizmet Kapsamı ve Operasyonel Not
            </h3>
            <p className="text-small" style={{ lineHeight: 1.6, color: '#111517' }}>
              Yukarıda listelenen 52 mahalle, işletmemizin çekici ve kurtarma yönlendirmesi sağladığı coğrafi hizmet bölgesini ifade eder. Her mahallede bağımsız fiziksel bir şube bulunduğu iddiası taşınmaz; mobil filomuz koordineli olarak çağrılara en yakın konumdan müdahale eder.
            </p>
          </div>
        </div>
      </div>

      <SeoTextGuide kicker="BÖLGESEL ERİŞİM REHBERİ" title="Mahalle, semt ve bağlantı yolu bilgisi" lead="Çekici talebinde yalnızca ilçe adını vermek yerine mahalleyi, yakın caddeyi ve yol yönünü paylaşmak doğru noktaya erişimi kolaylaştırır. Aşağıdaki bilgiler Ümraniye ve Ataşehir’de konum tarifini hazırlamanıza yardımcı olur." items={[
        {heading:'Ümraniye çekici bölgeleri',body:'Şerifali, Tatlısu, Çakmak, Ihlamurkuyu, Dudullu, Tepeüstü, Atakent, Yamanevler, Madenler ve çevre mahallelerde talep oluştururken yakın ana yol veya kavşağı belirtin. TEM bağlantıları, Şile Otoyolu ve Alemdağ Caddesi çevresinde yolun gidiş yönü özellikle önemlidir.'},
        {heading:'Ataşehir çekici bölgeleri',body:'Barbaros, İçerenköy, Küçükbakkalköy, Yenisahra, Kayışdağı, Ferhatpaşa, Örnek ve Finans Merkezi çevresinde konum piniyle birlikte cadde veya site girişini yazın. O-4, D-100 ve Kozyatağı bağlantılarında aracın hangi yönde kaldığını paylaşmak yaklaşım rotasını netleştirir.'},
        {heading:'Mahalle sayfaları nasıl kullanılır?',body:'Listedeki her mahalle kartı kendi detay rehberine açılır. Bu sayfalarda yerel çekici ve oto kurtarma aramaları, yakındaki yollar, bilinen noktalar, talep sırasında verilecek bilgiler ve komşu mahalle bağlantıları bulunur. Aradığınız bölgeyi filtre alanına yazarak ilgili sayfaya doğrudan geçebilirsiniz.'}
      ]}/>
      <FinalCtaBand />
    </>
  );
}
