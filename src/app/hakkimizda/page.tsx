import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import SeoTextGuide from '@/components/sections/SeoTextGuide';
import { businessConfig } from '@/config/business';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Hakkımızda',
  description: 'Gümüş Oto Kurtarma’nın çalışma anlayışı, Ümraniye ve Ataşehir çevresinde sunduğu şeffaf çekici ve yol yardım hizmet ilkeleri.',
  canonical: '/hakkimizda/'
});

export default function HakkimizdaPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Hakkımızda', href: '/hakkimizda/' }]} />

          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Kurumsal Yaklaşım
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Hakkımızda: Güvenilir Yerel Yol Desteği
            </h1>
            <p className="text-lead">
              Gümüş Oto Kurtarma olarak amacımız, yolda kalan sürücülere kafa karışıklığı ve abartılı vaatler yerine sakin, hızlı ve profesyonel bir çekici hizmeti sunmaktır.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '64px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
                Hizmet Anlayışımız
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7, color: '#111517' }}>
                Oto çekici sektöründe en önemli kriter <strong style={{ color: '#0b0d0e' }}>güven</strong> ve <strong style={{ color: '#0b0d0e' }}>doğru bilgilendirmedir</strong>. Aracı arızalanan veya kaza yapan bir sürücü zaten stresli bir durumla karşı karşıyadır.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: 1.7, color: '#111517' }}>
                Biz bu süreci zorlaştırmak yerine; telefon veya WhatsApp üzerinden net konum ve araç bilgisi alıyor, ulaşılabilecek gerçekçi süreyi belirtiyor ve taşıma koşullarını baştan şeffafça paylaşıyoruz.
              </p>
              <p style={{ lineHeight: 1.7, color: '#111517' }}>
                Ümraniye ve Ataşehir ilçelerinin ara sokaklarından TEM ve Şile Otoyolu’na kadar her noktada aracınızın emniyetle taşınmasını sağlıyoruz.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: 'min(100%, 320px)',
                  height: '320px',
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  border: '2px solid #b8b6af',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
                }}
              >
                <Image
                  src={businessConfig.logoPath}
                  alt="Gümüş Oto Kurtarma logosu"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* İlkeler Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
                1. Dürüstlük ve Net Bilgi
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6, color: '#111517' }}>
                Ulaşılamayacak varış süreleri vaat etmiyoruz. Trafik ve konum durumuna göre gerçekçi bilgilendirme yapıyoruz.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
                2. Uygun Ekipman Seçimi
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6, color: '#111517' }}>
                Aracın tekerlek durumuna, şanzıman türüne ve ağırlığına göre doğru platform ve sabitleme aparatlarını kullanıyoruz.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0b0d0e', marginBottom: '10px' }}>
                3. Şeffaf Ücretlendirme
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6, color: '#111517' }}>
                Mesafe ve operasyon zorluğunu baştan değerlendirip onayınız olmadan hiçbir ek maliyet çıkarmıyoruz.
              </p>
            </div>
          </div>

          {/* Google Haritalar Profili Yönlendirmesi */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #b8b6af',
              borderRadius: '4px',
              padding: '36px',
              textAlign: 'center',
              boxShadow: '4px 4px 0 #d8d6ce'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '12px' }}>
              İşletme Kaydımızı İnceleyin
            </h3>
            <p className="text-small" style={{ maxWidth: '600px', margin: '0 auto 20px auto', lineHeight: 1.6, color: '#111517' }}>
              Sahte müşteri referansları veya yapay puanlar yerine, gerçek işletme kaydımızı ve kullanıcı deneyimlerini Google Haritalar üzerinden doğrudan inceleyebilirsiniz.
            </p>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0 24px' }}
            >
              Google Haritalar’da Profilimizi Gör ↗
            </a>
          </div>
        </div>
      </div>

      <SeoTextGuide kicker="ÇALIŞMA PRENSİPLERİ" title="Yerel saha bilgisi, açık iletişim" lead="Gümüş Oto Kurtarma, Ümraniye ve Ataşehir çevresindeki çekici taleplerini araç, konum ve yol koşullarını birlikte değerlendirerek ele alır. Her talep için gerekli bilgileri baştan toplamak operasyonun daha düzenli ilerlemesini sağlar." items={[
        {heading:'Önce doğru bilgi',body:'Sürücüden canlı konum, araç modeli, arıza veya hasar durumu ve teslim adresi istenir. Bu bilgiler yalnızca fiyat vermek için değil, doğru kapasitede çekiciyi ve gerekli yardımcı ekipmanı belirlemek için kullanılır. Belirsiz kalan noktalar yükleme başlamadan önce açıklığa kavuşturulur.'},
        {heading:'Araca uygun taşıma',body:'Binek otomobil, SUV, hafif ticari, otomatik vitesli ve elektrikli araçların taşıma gereksinimleri farklıdır. Tekerlek ve yürür aksam durumu, şasi yüksekliği ve araç ağırlığı dikkate alınır. Amaç aracı bulunduğu noktadan teslim adresine kontrollü biçimde taşımaktır.'},
        {heading:'Bölgeyi bilen operasyon',body:'TEM, Şile Otoyolu, bağlantı yolları, sanayi bölgeleri ve yoğun mahalle içi güzergâhlar farklı yaklaşım koşullarına sahiptir. Ümraniye ve Ataşehir’de konumun hangi yönde olduğu, yolun erişimi ve trafik durumu değerlendirilir; sürücüye ulaşılabilir ve gerçekçi bilgi verilir.'}
      ]}/>
      <FinalCtaBand />
    </>
  );
}
