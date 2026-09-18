import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppMessageBuilder from '@/components/forms/WhatsAppMessageBuilder';
import { businessConfig } from '@/config/business';
import { getPhoneHref } from '@/lib/urls';
import SeoTextGuide from '@/components/sections/SeoTextGuide';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'İletişim ve Konum Bildirme',
  description: 'Gümüş Oto Kurtarma iletişim bilgileri, telefon arama bağlantısı, WhatsApp talep hazırlayıcı ve Google Haritalar işletme kaydı.',
  canonical: '/iletisim/'
});

export default function IletisimPage() {
  const phoneHref = getPhoneHref();

  return (
    <><div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'İletişim', href: '/iletisim/' }]} />

        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
            Hızlı İletişim
          </span>
          <h1 style={{ marginBottom: '20px' }}>
            İletişim ve Konum Bildirme
          </h1>
          <p className="text-lead">
            Aracınız yolda kaldığında acil çekici talebinde bulunmak veya servis nakli planlamak için aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            marginBottom: '64px'
          }}
        >
          {/* Sol Kolon: İletişim Kanalları & Doğrulanmış Veriler */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Telefon Kartı (Birincil Eylem) */}
            <div className="card">
              <span className="badge badge-warning" style={{ marginBottom: '12px', fontSize: '11px' }}>
                Birincil Eylem
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0b0d0e', marginBottom: '8px' }}>
                Telefon ile Arayın
              </h2>
              <p className="text-small" style={{ marginBottom: '20px', lineHeight: 1.6, color: '#111517' }}>
                Acil arıza veya kaza durumunda operatörümüzle doğrudan görüşüp anlık durumunuzu aktarın.
              </p>

              {businessConfig.phoneDisplay ? (
                <a
                  href={phoneHref || '#'}
                  className="btn btn-primary"
                  style={{ width: '100%', minHeight: '52px', fontSize: '17px' }}
                >
                  📞 {businessConfig.phoneDisplay}
                </a>
              ) : (
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: '#fffdf5',
                    border: '1px solid #e7dfc8',
                    borderRadius: '4px'
                  }}
                >
                  <strong style={{ color: '#765b00', display: 'block', fontSize: '14px', marginBottom: '4px', fontWeight: 900 }}>
                    Telefon Doğrulaması Bekleniyor
                  </strong>
                  <p className="text-small" style={{ fontSize: '13px', color: '#111517' }}>
                    İşletmenin güncel telefon hattı doğrulanma aşamasındadır. Sağdaki WhatsApp mesaj hazırlayıcıyı veya aşağıdaki Google Haritalar profilini kullanabilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* Çalışma Saatleri & Bölge Bilgisi */}
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '14px' }}>
                Çalışma Modeli ve Bölge Kapsamı
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ fontSize: '14px', color: '#111517' }}>
                  📍 <strong style={{ color: '#0b0d0e' }}>Hizmet Modeli:</strong> Mobil Çekici ve Kurtarma Filosu (Yerinde müdahale).
                </li>
                <li style={{ fontSize: '14px', color: '#111517' }}>
                  🏙️ <strong style={{ color: '#0b0d0e' }}>Hizmet Sahası:</strong> Ümraniye (35 Mahalle) ve Ataşehir (17 Mahalle) geneli.
                </li>
                <li style={{ fontSize: '14px', color: '#111517' }}>
                  🕒 <strong style={{ color: '#0b0d0e' }}>Çalışma Saatleri:</strong> Çağrı anındaki operasyonel nöbetçi ekip durumuna göre yönlendirme yapılır.
                </li>
              </ul>
            </div>

            {/* Google Haritalar Kartı */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #b8b6af',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: '4px 4px 0 #d8d6ce'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '8px' }}>
                Google Haritalar Kaydı
              </h3>
              <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6, color: '#111517' }}>
                Kullanıcı tarafından sağlanan doğrulanmış koordinatlar: <code style={{ backgroundColor: '#f4f2ec', padding: '2px 6px', borderRadius: '2px', color: '#0b0d0e', fontWeight: 700 }}>41.0035652, 29.1248068</code>. İşletme hizmet bölgesi modeliyle çalışmaktadır.
              </p>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', minHeight: '46px', fontSize: '14px' }}
              >
                Google Haritalar’da Gör ↗
              </a>
            </div>
          </div>

          {/* Sağ Kolon: WhatsApp Mesaj Hazırlayıcı */}
          <div>
            <WhatsAppMessageBuilder />
          </div>
        </div>
      </div>
    </div>
    <SeoTextGuide kicker="TALEP HAZIRLAMA REHBERİ" title="Çekici çağırmadan önce üç bilgiyi hazırlayın" lead="Telefon veya WhatsApp üzerinden ilk mesajı eksiksiz göndermeniz, talebin daha kısa sürede değerlendirilmesini sağlar. Konum ve araç ayrıntıları netleşmeden kesin ekipman, süre veya ücret değerlendirmesi yapılamaz." items={[
      {heading:'Canlı konum ve yol yönü',body:'WhatsApp üzerinden canlı konum ya da sabit konum pini gönderin. Bulunduğunuz mahalleyi, caddeyi, yakın kavşağı ve mümkünse görünen tabelayı yazın. Ana yol veya otoyoldaysanız Avrupa ya da Anadolu yönü, emniyet şeridi veya çıkış numarası gibi ayrıntıları mutlaka ekleyin.'},
      {heading:'Araç ve arıza bilgisi',body:'Marka, model, araç sınıfı ve vites türünü paylaşın. Motor çalışıyor mu, tekerlekler dönüyor mu, direksiyon veya park freni kilitli mi açıkça belirtin. Kaza, aks kırılması, lastik hasarı ya da aracın zemine oturması söz konusuysa güvenli bir noktadan fotoğraf gönderin.'},
      {heading:'Teslim adresi ve erişim',body:'Aracın bırakılacağı servis, sanayi sitesi, otopark veya açık adresi ilk görüşmede bildirin. Kapalı otoparklarda kat ve tavan yüksekliği; dar sokaklarda giriş yönü; site içinde ise kapı ve blok bilgisi önemlidir. Bu ayrıntılar güzergâh ve ekipman planının hazırlanmasını kolaylaştırır.'}
    ]}/></>
  );
}
