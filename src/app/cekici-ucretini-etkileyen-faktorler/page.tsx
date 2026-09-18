import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { businessConfig } from '@/config/business';
import { getPhoneHref, buildWhatsAppUrl } from '@/lib/urls';

export const metadata: Metadata = {
  title: 'Çekici Ücretini Etkileyen Faktörler | Gümüş Oto Kurtarma',
  description: 'Oto çekici ve kurtarma ücreti nasıl belirlenir? Mesafe, araç tipi, yürür aksam ve erişim şartlarının fiyata etkisi hakkında şeffaf rehber.',
  alternates: {
    canonical: '/cekici-ucretini-etkileyen-faktorler/'
  }
};

export default function PricingFactorsPage() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye / Ataşehir' });

  const allFactors = [
    {
      title: '1. Taşıma Mesafesi (Alınış ve Varış Noktası)',
      desc: 'Çekici maliyetinin ana bileşeni kat edilecek kilometredir. Aynı ilçe içindeki kısa mesafe servis nakli ile karşı yakaya veya uzak sanayi sitelerine yapılacak taşımanın yakıt ve zaman gideri farklıdır.'
    },
    {
      title: '2. Araç Segmenti, Ağırlık ve Ölçüler',
      desc: 'Standart bir hatchback/sedan binek otomobil ile 2.5 tonluk bir SUV, arazi aracı veya uzun şasi hafif ticari minibüsün platforma yüklenmesi farklı kapasitede çekici gerektirir.'
    },
    {
      title: '3. Tekerleklerin ve Şanzımanın Durumu',
      desc: 'Tekerlekleri serbest dönen bir araç kayar kasaya saniyeler içinde çekilebilirken; kilitli tekerlekler, kırık aks veya kilitli otomatik şanzıman durumunda kayıcı pabuçlar (dolly) veya vinç gerekir.'
    },
    {
      title: '4. Fiziksel Konum ve Erişim Zorluğu',
      desc: 'Düz geniş caddede duran bir araç ile yer altı kapalı otoparkının -3. katında tavan yüksekliği kısıtlı alanda kalan araç veya şarampole kaymış bir aracın kurtarma operasyonu farklıdır.'
    },
    {
      title: '5. Gereken Ekipman ve Vinç Desteği',
      desc: 'Standart kayar kasa çekici mi, ahtapot vinç mi yoksa dar alan kurtarıcısı mı gerektiği operasyon maliyetini belirleyen önemli bir kriterdir.'
    },
    {
      title: '6. Hizmet Saati ve Trafik Şartları',
      desc: 'Gündüz standart saatler ile gece nöbetçi operasyonları veya yoğun köprü trafiğinde bekleme durumları planlamaya dahil edilir.'
    },
    {
      title: '7. Otoyol ve Köprü Geçiş Giderleri',
      desc: 'Güzergah üzerinde paralı otoyol, Avrasya Tüneli veya köprü geçişi varsa bu giderler çağrı anında şeffaf bir şekilde netleştirilir.'
    }
  ];

  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Fiyat Faktörleri', href: '/cekici-ucretini-etkileyen-faktorler/' }
            ]}
          />

          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Şeffaf Fiyatlandırma İlkeleri
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Çekici Ücretini Neler Etkiler?
            </h1>
            <p className="text-lead">
              Neden sabit bir taban fiyat vermek yerine araç ve konuma özel fiyatlandırıyoruz? Sürpriz ek masraflarla karşılaşmamanız için tüm kriterleri açıkça paylaşıyoruz.
            </p>
          </div>

          {/* Neden Sahte Fiyat Tablosu Kullanmıyoruz */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px',
              marginBottom: '48px'
            }}
          >
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '12px' }}>
              ℹ️ Dürüst Hizmet: Neden Sabit &quot;X TL&quot; Fiyat Yazmıyoruz?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted-dark)' }}>
              Piyasada sıkça rastlanan &quot;100 TL’den başlayan çekici&quot; gibi yanıltıcı ifadeler, araç başına gidildiğinde katlanan ek ücretlerle sonuçlanmaktadır. Gümüş Oto Kurtarma olarak, aracınızın tam modelini, bulunduğu yeri ve gideceği noktayı çağrı sırasında dinleyip baştan <strong>net ve kesin ücreti</strong> bildiriyoruz. Onayınız olmadan hiçbir gizli maliyet çıkarılmaz.
            </p>
          </div>

          {/* 7 Temel Faktör Listesi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
            {allFactors.map((factor, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px 28px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '8px' }}>
                  {factor.title}
                </h3>
                <p style={{ lineHeight: 1.65, color: 'var(--color-text-light)' }}>
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Doğrudan Fiyat Bilgisi Alma Çağrısı */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-dark)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '36px',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '12px' }}>
              Aracınız İçin Net Fiyat Bilgisi Alın
            </h2>
            <p className="text-small" style={{ maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Konumunuzu ve aracınızın durumunu paylaşarak birkaç dakika içinde net ücret teklifinizi alabilirsiniz.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={phoneHref || '#telefon-bekleniyor'}
                className="btn btn-primary"
                style={{ minHeight: '50px', padding: '0 24px' }}
              >
                Ücret Bilgisi İçin Ara
              </a>
              <Link
                href={whatsApp.url || '/iletisim/'}
                className="btn btn-whatsapp"
                style={{ minHeight: '50px', padding: '0 20px' }}
              >
                WhatsApp’tan Fiyat Sor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaBand />
    </>
  );
}
