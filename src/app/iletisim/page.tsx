import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WhatsAppMessageBuilder from '@/components/forms/WhatsAppMessageBuilder';
import { businessConfig } from '@/config/business';
import { getPhoneHref } from '@/lib/urls';

export const metadata: Metadata = {
  title: 'İletişim & Konum Bildirme | Gümüş Oto Kurtarma',
  description: 'Gümüş Oto Kurtarma iletişim bilgileri, telefon arama bağlantısı, WhatsApp talep hazırlayıcı ve Google Haritalar işletme kaydı.',
  alternates: {
    canonical: '/iletisim/'
  }
};

export default function IletisimPage() {
  const phoneHref = getPhoneHref();

  return (
    <div className="section" style={{ paddingTop: '40px' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '8px' }}>
                Telefon ile Arayın
              </h2>
              <p className="text-small" style={{ marginBottom: '20px', lineHeight: 1.6 }}>
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
                    backgroundColor: 'rgba(255, 196, 0, 0.08)',
                    border: '1px solid rgba(255, 196, 0, 0.25)',
                    borderRadius: 'var(--radius-btn)'
                  }}
                >
                  <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', fontSize: '14px', marginBottom: '4px' }}>
                    Telefon Doğrulaması Bekleniyor
                  </strong>
                  <p className="text-small" style={{ fontSize: '13px' }}>
                    İşletmenin güncel telefon hattı doğrulanma aşamasındadır. Sağdaki WhatsApp mesaj hazırlayıcıyı veya aşağıdaki Google Haritalar profilini kullanabilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* Çalışma Saatleri & Bölge Bilgisi */}
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '14px' }}>
                Çalışma Modeli ve Bölge Kapsamı
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                  📍 <strong>Hizmet Modeli:</strong> Mobil Çekici ve Kurtarma Filosu (Yerinde müdahale).
                </li>
                <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                  🏙️ <strong>Hizmet Sahası:</strong> Ümraniye (35 Mahalle) ve Ataşehir (17 Mahalle) geneli.
                </li>
                <li style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)' }}>
                  🕒 <strong>Çalışma Saatleri:</strong> Çağrı anındaki operasyonel nöbetçi ekip durumuna göre yönlendirme yapılır.
                </li>
              </ul>
            </div>

            {/* Google Haritalar Kartı */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-dark)',
                borderRadius: 'var(--radius-card)',
                padding: '24px'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '8px' }}>
                Google Haritalar Kaydı
              </h3>
              <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                Kullanıcı tarafından sağlanan doğrulanmış koordinatlar: <code>41.0035652, 29.1248068</code>. İşletme hizmet bölgesi modeliyle çalışmaktadır.
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
  );
}
