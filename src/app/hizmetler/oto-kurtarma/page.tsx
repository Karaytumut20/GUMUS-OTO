import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';

export const metadata: Metadata = {
  title: 'Oto Kurtarma Hizmeti | Gümüş Oto Kurtarma',
  description: 'Ümraniye ve Ataşehir çevresinde zorlu durumlar için oto kurtarma desteği. Tekerleği kilitlenen, yoldan çıkan veya vinç gerektiren araçlar için profesyonel müdahale.',
  alternates: {
    canonical: '/hizmetler/oto-kurtarma/'
  }
};

export default function OtoKurtarmaDetailPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Hizmetlerimiz', href: '/hizmetler/' },
              { label: 'Oto Kurtarma', href: '/hizmetler/oto-kurtarma/' }
            ]}
          />

          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Zorlu Koşullar & Vinç Desteği
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ümraniye ve Ataşehir Oto Kurtarma Hizmeti
            </h1>
            <p className="text-lead">
              Standart çekicinin yanaşamadığı, aracın şarampole veya kanala kaydığı, tekerleklerin kilitlendiği veya kaza sonrası hareket edemediği durumlarda vinç ve makaralı kurtarma operasyonu.
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
                Oto Kurtarma ile Oto Çekici Arasındaki Fark Nedir?
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Oto çekici, tekerlekleri serbest dönen ve düz zeminde bulunan araçları platforma alırken; <strong>oto kurtarma</strong>, aracın fiziksel engellerle karşılaştığı veya standart çekicinin açı alamadığı zorlu senaryolarda devreye girer.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>⚡</span>
                  <span><strong>Kilitli Tekerlek ve Direksiyon:</strong> Elektronik el freni kilitlenen veya rot kırılması nedeniyle dönmeyen tekerlekler için kayıcı pabuç ve vinç kullanımı.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>⚡</span>
                  <span><strong>Şarampol ve Yol Dışı Kurtarma:</strong> Yağışlı havalarda yoldan çıkan, kaldırıma askıda kalan veya çukura saplanan araçların emniyetle yola alınması.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>⚡</span>
                  <span><strong>Kapalı Otopark ve Dar Alan Müdahalesi:</strong> Tavan yüksekliği kısıtlı yer altı otoparklarında kalan araçlar için alçak profilli özel kurtarma araçları.</span>
                </li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                Kurtarma Beklerken Güvenlik Önlemleri
              </h2>
              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Aracınız otoyol kenarında veya tehlikeli bir virajda kaldıysa, aracın içinde beklemeyiniz. Dörtlü flaşörleri açın, reflektörü yeterli mesafeye koyun ve bariyerin arkasındaki güvenli noktaya geçerek ekibimizin gelmesini bekleyiniz.
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
                  Kurtarma Çağrısında Belirtilecek Hususlar
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    📍 <strong>Aracın Pozisyonu:</strong> Yol içinde mi, kanalda mı, askıda mı?
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    ⚙️ <strong>Yürür Aksam:</strong> Tekerleklerin dönme engeli var mı?
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🏢 <strong>Giriş Koşulları:</strong> Kapalı otopark ise tavan yüksekliği nedir?
                  </li>
                </ul>
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
                  Kurtarma Operasyonu Fiyatlandırması
                </h4>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                  Kurtarma işlemlerinde kullanılan ek donanım ve müdahale süresi fiyatlandırmayı etkiler. Görüşmede şartlar değerlendirilerek açık bilgi sunulur.
                </p>
                <Link href="/cekici-ucretini-etkileyen-faktorler/" className="btn btn-outline" style={{ width: '100%', minHeight: '44px', fontSize: '14px' }}>
                  Fiyat Kriterlerini Oku →
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
