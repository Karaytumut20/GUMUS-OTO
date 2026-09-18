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
  title: 'Oto Kurtarma Hizmeti',
  description: 'Ümraniye ve Ataşehir çevresinde zorlu durumlar için oto kurtarma desteği. Tekerleği kilitlenen, yoldan çıkan veya vinç gerektiren araçlar için profesyonel müdahale.',
  canonical: '/hizmetler/oto-kurtarma/'
});

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '40px',
              marginBottom: '48px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                Oto Kurtarma ile Oto Çekici Arasındaki Fark Nedir?
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7, color: '#111517' }}>
                Oto çekici, tekerlekleri serbest dönen ve düz zeminde bulunan araçları platforma alırken; <strong style={{ color: '#0b0d0e' }}>oto kurtarma</strong>, aracın fiziksel engellerle karşılaştığı veya standart çekicinin açı alamadığı zorlu senaryolarda devreye girer.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>⚡</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Kilitli Tekerlek ve Direksiyon:</strong> Elektronik el freni kilitlenen veya rot kırılması nedeniyle dönmeyen tekerlekler için kayıcı pabuç ve vinç kullanımı.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>⚡</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Şarampol ve Yol Dışı Kurtarma:</strong> Yağışlı havalarda yoldan çıkan, kaldırıma askıda kalan veya çukura saplanan araçların emniyetle yola alınması.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#111517' }}>
                  <span style={{ color: '#765b00', fontWeight: 900 }}>⚡</span>
                  <span><strong style={{ color: '#0b0d0e' }}>Kapalı Otopark ve Dar Alan Müdahalesi:</strong> Tavan yüksekliği kısıtlı yer altı otoparklarında kalan araçlar için alçak profilli özel kurtarma araçları.</span>
                </li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                Kurtarma Beklerken Güvenlik Önlemleri
              </h2>
              <p style={{ lineHeight: 1.7, marginBottom: '20px', color: '#111517' }}>
                Aracınız otoyol kenarında veya tehlikeli bir virajda kaldıysa, aracın içinde beklemeyiniz. Dörtlü flaşörleri açın, reflektörü yeterli mesafeye koyun ve bariyerin arkasındaki güvenli noktaya geçerek ekibimizin gelmesini bekleyiniz.
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
                  Kurtarma Çağrısında Belirtilecek Hususlar
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    📍 <strong style={{ color: '#0b0d0e' }}>Aracın Pozisyonu:</strong> Yol içinde mi, kanalda mı, askıda mı?
                  </li>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    ⚙️ <strong style={{ color: '#0b0d0e' }}>Yürür Aksam:</strong> Tekerleklerin dönme engeli var mı?
                  </li>
                  <li style={{ fontSize: '14px', color: '#111517' }}>
                    🏢 <strong style={{ color: '#0b0d0e' }}>Giriş Koşulları:</strong> Kapalı otopark ise tavan yüksekliği nedir?
                  </li>
                </ul>
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
                  Kurtarma Operasyonu Fiyatlandırması
                </h4>
                <p className="text-small" style={{ marginBottom: '16px', lineHeight: 1.6, color: '#111517' }}>
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

      <SeoTextGuide kicker="KURTARMA OPERASYONU REHBERİ" title="Zorlu konumlarda doğru müdahale planı" lead="Oto kurtarma, yalnızca aracı çekmekten ibaret değildir. Aracın açısı, zeminin taşıma gücü, trafik akışı ve hasarlı parçalar birlikte değerlendirilerek kontrollü bir çalışma alanı oluşturulur." items={[
        {heading:'Yol dışına çıkan araçlar',body:'Şarampol, toprak zemin, kanal kenarı veya eğimli alanda kalan araçlarda gelişigüzel çekme ek hasara yol açabilir. Aracın bulunduğu açı, zemine oturan bölümü ve güvenli bağlantı noktaları fotoğrafla değerlendirilmelidir. Yağış, çamur ve görüş koşulları kurtarma aracının konumlandırılacağı alanı da etkiler.'},
        {heading:'Kilitli tekerlek ve hasarlı yürür aksam',body:'Kaza sonrası tekerleği dönmeyen, aksı kırılan, direksiyonu kilitlenen veya elektronik park freni açılmayan araçlar standart biçimde sürüklenmemelidir. Kayıcı pabuç, makara, vinç ya da ek destek ekipmanı gerekebilir. Hasarlı tarafı ve aracın yere temas eden noktalarını açıkça belirtmek doğru hazırlığı sağlar.'},
        {heading:'Dar alan ve kapalı otopark',body:'Kapalı otoparklarda tavan yüksekliği, kolon aralığı, dönüş mesafesi ve rampa eğimi standart çekicinin girişini sınırlayabilir. Kat bilgisi, giriş yüksekliği tabelası ve aracın çıkış yönü talep sırasında paylaşılmalıdır. Ön değerlendirme yapıldıktan sonra alana uygun kurtarma yöntemi belirlenir.'}
      ]}/>
      <FinalCtaBand />
      <StructuredData schemas={[getServiceSchema({
        name: 'Oto Kurtarma Hizmeti',
        description: metadata.description as string,
        url: `${businessConfig.siteUrl}/hizmetler/oto-kurtarma/`
      })]} />
    </>
  );
}
