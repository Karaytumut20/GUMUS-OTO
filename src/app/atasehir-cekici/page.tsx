import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { ATASEHIR_NEIGHBORHOODS } from '@/data/neighborhoods';
import { businessConfig } from '@/config/business';
import { getPhoneHref, buildWhatsAppUrl } from '@/lib/urls';

export const metadata: Metadata = {
  title: 'Ataşehir Çekici ve Oto Kurtarma | Gümüş',
  description: 'Ataşehir’de 17 mahalle genelinde, D-100 (E-5), TEM ve İstanbul Finans Merkezi çevresinde profesyonel oto çekici ve yol yardım desteği.',
  alternates: {
    canonical: '/atasehir-cekici/'
  }
};

export default function AtasehirCekiciPage() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ataşehir' });

  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri/' },
              { label: 'Ataşehir Çekici', href: '/atasehir-cekici/' }
            ]}
          />

          {/* Başlık & Giriş */}
          <div style={{ maxWidth: '840px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              İlçe Özel Hizmet Sayfası
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ataşehir Çekici ve Oto Kurtarma
            </h1>
            <p className="text-lead" style={{ marginBottom: '28px' }}>
              İstanbul Finans Merkezi, D-100 (E-5) ve TEM otoyolu kesişiminde yer alan Ataşehir’in 17 mahallesinde; arıza, kaza ve kapalı otopark kurtarma ihtiyaçlarına özel profesyonel ekipmanlarla yanınızdayız.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={phoneHref || '#telefon-bekleniyor'}
                className="btn btn-primary"
                style={{ minHeight: '50px', padding: '0 24px' }}
              >
                <span>{businessConfig.phoneDisplay || 'Ataşehir Çekici Çağır'}</span>
              </a>
              <Link
                href={whatsApp.url || '/iletisim/'}
                className="btn btn-whatsapp"
                style={{ minHeight: '50px', padding: '0 22px' }}
              >
                <span>WhatsApp’tan Konum İlet</span>
              </Link>
            </div>
          </div>

          {/* Ataşehir Dinamikleri */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              marginBottom: '56px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                Ataşehir’e Özgü Çekici İhtiyaçları ve Çözümlerimiz
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Ataşehir; Barbaros ve Batı Ataşehir’deki yüksek katlı plazalar, derin yer altı otoparkları, D-100 karayolunun yoğun transit trafiği ve Ferhatpaşa/YEDPA gibi ticaret/lojistik alanlarını bir arada barındırır.
              </p>
              <p style={{ marginBottom: '20px', lineHeight: 1.7 }}>
                Özellikle Finans Merkezi ve AVM otoparklarında (eksi 2, eksi 3. katlar) tavan yüksekliği kısıtlaması nedeniyle standart çekiciler giriş yapamaz. Bu durumlarda alçak profilli kurtarma araçları ve özel çekici aparatları devreye alınır.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px',
                  marginBottom: '24px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '10px' }}>
                  D-100 (E-5) ve Yan Yollarda Konum Tarifi
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Yenisahra, Kozyatağı veya İçerenköy mevkisinde yolda kaldıysanız, gidiş yönünüzün Kadıköy mü yoksa Kartal/Pendik mi olduğunu mutlaka belirtiniz. En yakın üst geçit veya metro çıkışı adı, çekicimizin ters yöne girmeden en kısa yoldan ulaşmasını sağlar.
                </p>
              </div>
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
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '14px' }}>
                  Ataşehir’de Öne Çıkan Noktalar
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🏢 <strong>İstanbul Finans Merkezi:</strong> Plaza kapalı otopark kurtarma.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🛣️ <strong>D-100 (E-5) & Kozyatağı Kavşağı:</strong> Hızlı yan yol çekici desteği.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    📦 <strong>YEDPA Ticaret Merkezi:</strong> Lojistik ve ticari araç transferleri.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🔧 <strong>Bostancı Sanayi Yakınlığı:</strong> İçerenköy ve Küçükbakkalköy’den sanayiye hızlı servis nakli.
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
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '8px' }}>
                  Atatürk Mahallesi Ayrımı
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  İstanbul Anadolu Yakası’nda hem Ümraniye’de hem de Ataşehir’de &quot;Atatürk Mahallesi&quot; bulunmaktadır. Çağrı esnasında karışıklığı önlemek için ilçenizi ve yakın caddeleri lütfen teyit ediniz.
                </p>
              </div>
            </div>
          </div>

          {/* 17 Mahalle Listesi */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-dark)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)' }}>
                Ataşehir’in Kapsanan 17 Mahallesi
              </h2>
              <p className="text-small">
                Aşağıdaki tüm mahallelerden oto çekici ve kurtarma çağrısı kabul edilmektedir:
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px'
              }}
            >
              {ATASEHIR_NEIGHBORHOODS.map((n) => (
                <div
                  key={n.id}
                  style={{
                    backgroundColor: 'var(--color-surface-card)',
                    border: '1px solid var(--color-border-dark)',
                    borderRadius: 'var(--radius-btn)',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-text-light)'
                  }}
                >
                  {n.name}
                </div>
              ))}
            </div>
          </div>

          {/* Ataşehir Özel Sorular */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '36px',
              marginBottom: '48px'
            }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '20px' }}>
              Ataşehir Çekici Hizmeti Hakkında Sorular
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  Kapalı otoparkta kalan aracımı çekebilir misiniz?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Evet. Tavan yüksekliği uygun özel donanımlı kurtarma araçlarımızla yer altı otoparklarından güvenle araç çıkarılabilmektedir.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  İçerenköy veya Küçükbakkalköy’den Bostancı Sanayi Sitesi’ne çekici ücreti nasıl belirlenir?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Kısa mesafe servis nakillerinde araç modeli ve yürür durumu göz önüne alınarak görüşmede en uygun ücret doğrudan iletilir.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  Ataşehir’de gece çekici desteği var mı?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Gece çağrılarında nöbetçi ekibimizin o anki uygunluğu teyit edilerek yönlendirme yapılır; asılsız süre garantisi verilmez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaBand />
    </>
  );
}
