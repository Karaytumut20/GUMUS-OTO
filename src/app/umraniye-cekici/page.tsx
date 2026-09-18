import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { UMRANIYE_NEIGHBORHOODS } from '@/data/neighborhoods';
import { businessConfig } from '@/config/business';
import { getPhoneHref, buildWhatsAppUrl } from '@/lib/urls';

export const metadata: Metadata = {
  title: 'Ümraniye Çekici ve Oto Kurtarma | Gümüş',
  description: 'Ümraniye’de 35 mahalle genelinde, TEM ve Şile Yolu akslarında güvenli oto çekici ve kurtarma desteği. Konum ve araç durumunuzla hızlı koordinasyon sağlayın.',
  alternates: {
    canonical: '/umraniye-cekici/'
  }
};

export default function UmraniyeCekiciPage() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye' });

  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri/' },
              { label: 'Ümraniye Çekici', href: '/umraniye-cekici/' }
            ]}
          />

          {/* Başlık & Giriş */}
          <div style={{ maxWidth: '840px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              İlçe Özel Hizmet Sayfası
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ümraniye Çekici ve Oto Kurtarma
            </h1>
            <p className="text-lead" style={{ marginBottom: '28px' }}>
              Anadolu Yakası’nın en hareketli yerleşim ve ticaret merkezlerinden Ümraniye’de, 35 mahalle ve ana otoyol bağlantılarında arıza, kaza ve nakil ihtiyaçlarınız için profesyonel çekici çözümleri.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={phoneHref || '#telefon-bekleniyor'}
                className="btn btn-primary"
                style={{ minHeight: '50px', padding: '0 24px' }}
              >
                <span>{businessConfig.phoneDisplay || 'Ümraniye Çekici Çağır'}</span>
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

          {/* Ümraniye Ulaşım ve Hizmet Dinamikleri */}
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
                Ümraniye’de Çekici İhtiyacına Yönelik Yaklaşımımız
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Ümraniye, hem yoğun nüfuslu mahalle içi sokak dokusuna (Tantavi, İstiklal, Yamanevler) hem de büyük sanayi siteleri (İMES, DES, MODOKO) ile otoyol bağlantılarına (TEM ve Şile Otoyolu) ev sahipliği yapar. Bu çok yönlü coğrafya, her noktada farklı kurtarma stratejisi gerektirir.
              </p>
              <p style={{ marginBottom: '20px', lineHeight: 1.7 }}>
                Tepelik ve eğimli cadde yapılarında kayar kasa çekicinin uygun yanaşma açısını bulması, dar sokaklarda manevra kabiliyeti ve otoyol kenarında can güvenliğinin sağlanması temel önceliğimizdir.
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
                  Mahalle Adını Tam Bilmiyorsanız Ne Yapmalısınız?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Ümraniye’de seyahat ederken tam mahallenizi bilmeyebilirsiniz. Alemdağ Caddesi, Tepeüstü Meydanı, Çakmak Köprüsü, Canpark AVM civarı veya Şile Otoyolu çıkışı gibi bilinen nirengi noktalarını belirtmeniz veya WhatsApp’tan konum pini atmanız ekibimizin sizi bulması için tamamen yeterlidir.
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
                  Ümraniye’de Doğrulanmış Ana Arterler
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🛣️ <strong>TEM O-2 Otoyolu:</strong> Dudullu ve Çamlıca gişeleri güzergahı.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🛣️ <strong>Şile Otoyolu:</strong> Tepeüstü, Ihlamurkuyu ve Çekmeköy aksı.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🛣️ <strong>Alemdağ & Tavukçuyolu Caddesi:</strong> Mahalle içi ana taşıyıcılar.
                  </li>
                  <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                    🏭 <strong>Sanayi Bölgeleri:</strong> İMES, DES ve MODOKO sanayi alanları.
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
                  Trafik Yoğunluğu & Varış Süresi
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Ümraniye trafiği sabah ve akşam mesai saatlerinde köprü ve bağlantı yollarında yoğunlaşır. Asılsız &quot;10 dakikada kapınızdayız&quot; iddiaları yerine; anlık harita verisi ve en uygun çekicimizin durumuna göre gerçekçi varış süresi bildirilir.
                </p>
              </div>
            </div>
          </div>

          {/* 35 Mahalle Listesi */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-dark)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)' }}>
                Ümraniye’nin Kapsanan 35 Mahallesi
              </h2>
              <p className="text-small">
                Aşağıdaki tüm mahallelerden çekici ve oto kurtarma talebi kabul edilmektedir:
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px'
              }}
            >
              {UMRANIYE_NEIGHBORHOODS.map((n) => (
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

          {/* Ümraniye Özel Sıkça Sorulan Sorular */}
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
              Ümraniye Çekici Hizmeti Hakkında Sorular
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  Dudullu ve Şerifali sanayi bölgesinden çekici çağırabilir miyim?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Evet. İMES, DES veya Şerifali çevresindeki oto tamirhanelerine ya da sanayi dışındaki servis noktalarına taşıma talepleri sıklıkla karşılanmaktadır.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  Şile Otoyolu üzerinde aracım bozulursa ne yapmalıyım?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Aracınızı emniyet şeridine çekin, dörtlüleri açın, reflektör yerleştirin ve güvenli bariyer arkasına geçerek bize konum iletin.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                  Ümraniye çekici fiyatı neye göre hesaplanır?
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6 }}>
                  Aracın alındığı mahalle ile gideceği servis mesafesi, araç segmenti ve aracın tekerleklerinin kilitli olup olmaması ücreti belirler.
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
