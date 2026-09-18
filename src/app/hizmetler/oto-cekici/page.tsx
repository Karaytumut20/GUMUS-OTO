import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import SeoTextGuide from '@/components/sections/SeoTextGuide';
import StructuredData from '@/components/seo/StructuredData';
import { businessConfig } from '@/config/business';
import { getServiceSchema } from '@/lib/structured-data';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Oto Çekici Hizmeti',
  description: 'Ümraniye ve Ataşehir çevresinde platformlu oto çekici hizmeti. Binek, SUV ve hafif ticari araçlar için güvenli taşıma ve servis nakli.',
  canonical: '/hizmetler/oto-cekici/'
});

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '40px',
              marginBottom: '48px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                Hangi Durumlarda Oto Çekici Çağrılır?
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7, color: '#111517' }}>
                Oto çekici hizmeti; aracın tekerleklerinin ve yürür aksamının dönebildiği, kayar kasa platform üzerine çekilerek güvenle taşınabildiği standart durumlar için idealdir.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>✓</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Motor / Şanzıman Arızaları:</strong> Araç çalışmadığında veya göstergede acil uyarı lambası yandığında.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>✓</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Planlı Servis Transferi:</strong> Periyodik bakım, boya/kaporta veya ekspertiz merkezine güvenli nakil.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>✓</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Yakıt / Akü Tükenmesi:</strong> Aracın kendi gücüyle hareket edemediği durumlarda servise taşıma.</span>
                </li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                Otomatik Vites ve Elektrikli Araçlar
              </h2>
              <p style={{ lineHeight: 1.7, marginBottom: '20px', color: '#111517' }}>
                Otomatik şanzımanlı veya elektrikli araçlarda sürükleyerek çekme işlemi aktarma organlarına ve elektrik motoruna ciddi zarar verebilir. Bu araçlar için kayar kasa üzerine tüm tekerleklerin bindirildiği platformlu taşıma gereklidir. Çağrı sırasında aracınızın türünü belirtmeniz uygun ekipman için şarttır.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #b8b6af',
                  borderRadius: '4px',
                  padding: '28px',
                  boxShadow: '4px 4px 0 #d8d6ce'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                  Çekici Talep Ederken Gerekli Bilgiler
                </h3>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    Aracın tam markası, modeli ve vites türü (Manuel / Otomatik).
                  </li>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    Bulunduğu konum (Cadde adı, sokak veya en yakın tabela).
                  </li>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    Tekerleklerin serbest dönüp dönmediği.
                  </li>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    Aracın götürüleceği servis veya bırakılacağı nokta.
                  </li>
                </ol>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #b8b6af',
                  borderRadius: '4px',
                  padding: '24px',
                  boxShadow: '4px 4px 0 #d8d6ce'
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#0b0d0e', marginBottom: '8px' }}>
                  Fiyatlandırma Bilgisi
                </h4>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6, color: '#111517' }}>
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

      <SeoTextGuide kicker="PLATFORMLU TAŞIMA REHBERİ" title="Oto çekici sürecinde güvenli yükleme" lead="Ümraniye ve Ataşehir’de oto çekici çağırırken aracın teknik durumu kadar bulunduğu alan ve teslim adresi de planı etkiler. Doğru bilgi, uygun platform ve sabitleme yönteminin seçilmesine yardımcı olur." items={[
        {heading:'Yükleme öncesi araç kontrolü',body:'Çekici gelmeden önce aracın vites konumu, elektronik park freni, direksiyon kilidi ve tekerleklerin hareket durumu değerlendirilir. Kırık aks, inmiş lastik veya alt takım teması varsa bunu önceden bildirin. Araç üzerinde gevşek parça ya da açık bagaj bulunması durumunda yükleme başlamadan gerekli önlemler alınmalıdır.'},
        {heading:'Platforma alma ve sabitleme',body:'Araç kontrollü biçimde kayar kasa üzerine alınır ve uygun sabitleme noktalarından bağlanır. Tampon, marşpiyel ve jant çevresindeki mesafeler gözlenir. Elektrikli, otomatik vitesli, alçak şasili veya uzun dingil mesafeli araçların özellikleri yükleme açısını ve kullanılacak yardımcı aparatı değiştirebilir.'},
        {heading:'Servise veya adrese teslim',body:'Teslim noktası bir servis, sanayi sitesi, otopark ya da özel adres olabilir. Giriş yüksekliği, rampa eğimi ve bırakma alanının genişliği bilinmelidir. Ümraniye ile Ataşehir arasındaki araç nakillerinde güzergâh, trafik ve olası ücretli geçişler ilk görüşmede değerlendirilerek taşıma planına dahil edilir.'}
      ]}/>
      <FinalCtaBand />
      <StructuredData schemas={[getServiceSchema({
        name: 'Oto Çekici Hizmeti',
        description: metadata.description as string,
        url: `${businessConfig.siteUrl}/hizmetler/oto-cekici/`
      })]} />
    </>
  );
}
