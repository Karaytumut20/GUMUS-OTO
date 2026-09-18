import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { businessConfig } from '@/config/business';

export const metadata: Metadata = {
  title: 'Hakkımızda | Gümüş Oto Kurtarma',
  description: 'Gümüş Oto Kurtarma’nın çalışma anlayışı, Ümraniye ve Ataşehir çevresinde sunduğu şeffaf çekici ve yol yardım hizmet ilkeleri.',
  alternates: {
    canonical: '/hakkimizda/'
  }
};

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '64px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
                Hizmet Anlayışımız
              </h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Oto çekici sektöründe en önemli kriter <strong>güven</strong> ve <strong>doğru bilgilendirmedir</strong>. Aracı arızalanan veya kaza yapan bir sürücü zaten stresli bir durumla karşı karşıyadır.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                Biz bu süreci zorlaştırmak yerine; telefon veya WhatsApp üzerinden net konum ve araç bilgisi alıyor, ulaşılabilecek gerçekçi süreyi belirtiyor ve taşıma koşullarını baştan şeffafça paylaşıyoruz.
              </p>
              <p style={{ lineHeight: 1.7 }}>
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
                  width: '320px',
                  height: '320px',
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  border: '2px solid var(--color-border-dark)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-yellow)', marginBottom: '10px' }}>
                1. Dürüstlük ve Net Bilgi
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6 }}>
                Ulaşılamayacak varış süreleri vaat etmiyoruz. Trafik ve konum durumuna göre gerçekçi bilgilendirme yapıyoruz.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-yellow)', marginBottom: '10px' }}>
                2. Uygun Ekipman Seçimi
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6 }}>
                Aracın tekerlek durumuna, şanzıman türüne ve ağırlığına göre doğru platform ve sabitleme aparatlarını kullanıyoruz.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-yellow)', marginBottom: '10px' }}>
                3. Şeffaf Ücretlendirme
              </h3>
              <p className="text-small" style={{ lineHeight: 1.6 }}>
                Mesafe ve operasyon zorluğunu baştan değerlendirip onayınız olmadan hiçbir ek maliyet çıkarmıyoruz.
              </p>
            </div>
          </div>

          {/* Google Haritalar Profili Yönlendirmesi */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '36px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '12px' }}>
              İşletme Kaydımızı İnceleyin
            </h3>
            <p className="text-small" style={{ maxWidth: '600px', margin: '0 auto 20px auto', lineHeight: 1.6 }}>
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

      <FinalCtaBand />
    </>
  );
}
