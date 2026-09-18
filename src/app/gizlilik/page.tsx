import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { businessConfig } from '@/config/business';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Gümüş Oto Kurtarma',
  description: 'Gümüş Oto Kurtarma web sitesi gizlilik politikası, veri işleme ilkeleri ve üçüncü taraf servisler hakkında bilgilendirme.',
  alternates: {
    canonical: '/gizlilik/'
  }
};

export default function GizlilikPage() {
  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <Breadcrumb items={[{ label: 'Gizlilik Politikası', href: '/gizlilik/' }]} />

        <div style={{ marginBottom: '40px' }}>
          <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
            Yasal Bilgilendirme
          </span>
          <h1 style={{ marginBottom: '20px' }}>
            Gizlilik ve Çerez Politikası
          </h1>
          <p className="text-lead">
            Bu bilgilendirme, {businessConfig.businessName} (&quot;{businessConfig.brandName}&quot;) web sitesini ziyaret eden kullanıcıların veri gizliliğine ilişkin prensipleri açıklar.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #b8b6af',
            borderRadius: '4px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            boxShadow: '4px 4px 0 #d8d6ce'
          }}
        >
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
              1. Veri Toplama ve İşleme Yaklaşımı
            </h2>
            <p style={{ lineHeight: 1.7, color: '#111517' }}>
              Web sitemiz statik bir mimariyle sunulmakta olup; arka planda çalışan üye veritabanı, form saklama sunucusu veya kullanıcı takip sistemleri barındırmamaktadır. Sitemizi ziyaretiniz sırasında kimlik, kredi kartı veya plaka gibi hassas kişisel verileriniz sunucularımızda depolanmaz.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
              2. WhatsApp ve Telefon İletişimi
            </h2>
            <p style={{ lineHeight: 1.7, color: '#111517' }}>
              Sitede yer alan &quot;Hemen Ara&quot; veya &quot;WhatsApp&quot; butonlarını kullandığınızda; cihazınız doğrudan ilgili iletişim uygulamalarını (Telefon arama ekranı veya WhatsApp Messenger) tetikler. Sitemizdeki WhatsApp mesaj hazırlayıcı formunda doldurduğunuz konum ve araç bilgileri yalnızca URL parametresi olarak WhatsApp uygulamasına aktarılır, üçüncü taraf sunuculara iletilmez. WhatsApp Meta Inc. tarafından sağlanan bağımsız bir servistir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
              3. Tarayıcı Konum İzni
            </h2>
            <p style={{ lineHeight: 1.7, color: '#111517' }}>
              WhatsApp mesaj hazırlayıcı alanındaki &quot;Konumumu Ekle&quot; özelliği, yalnızca sizin açık buton tıklamanız ve tarayıcınızın onay vermesi durumunda tek seferlik koordinat okur. Bu koordinat cihazınızda Google Maps arama linkine dönüştürülür ve sitemiz tarafından kaydedilmez veya analiz edilmez.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
              4. Çerezler (Cookies) ve Üçüncü Taraf Bağlantılar
            </h2>
            <p style={{ lineHeight: 1.7, color: '#111517' }}>
              Web sitemiz varsayılan olarak reklam izleyicisi veya pazarlama çerezi kullanmamaktadır. Sitemizde yer alan Google Haritalar bağlantıları Google LLC altyapısına yönlendirir. İlgili servislerin kendi gizlilik sözleşmeleri geçerlidir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
              5. İletişim ve Haklarınız
            </h2>
            <p style={{ lineHeight: 1.7, color: '#111517' }}>
              Kişisel verilerinizin korunmasına ilişkin haklarınız veya sorularınız için web sitemizdeki iletişim kanalları üzerinden bize başvurabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
