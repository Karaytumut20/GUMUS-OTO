import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { roadsData } from '@/data/roads';

export const metadata: Metadata = {
  title: 'Yol ve Bağlantı Noktaları | Gümüş Oto Kurtarma',
  description: 'TEM (O-2), D-100 (E-5), Şile Yolu ve sanayi bölgelerinde çekici çağırma, doğru konum bildirme ve emniyet rehberi.',
  alternates: {
    canonical: '/yol-ve-baglanti-noktalari/'
  }
};

export default function YolVeBaglantiNoktalariPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Yol ve Bağlantı Noktaları', href: '/yol-ve-baglanti-noktalari/' }
            ]}
          />

          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Ulaşım & Sürücü Güvenliği
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Ana Yollar ve Bağlantı Noktaları Rehberi
            </h1>
            <p className="text-lead">
              TEM O-2, D-100 E-5, Şile Otoyolu veya sanayi sitelerinde aracınız arızalandığında çekici ekibimize konumunuzu en hızlı ve doğru şekilde bildirmeniz için hazırlanan rehber.
            </p>
          </div>

          {/* Otoyolda Kaldığınızda Bildirmeniz Gereken 6 Kritik Bilgi */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #b8b6af',
              borderRadius: '4px',
              padding: '36px',
              marginBottom: '56px',
              boxShadow: '4px 4px 0 #d8d6ce'
            }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0b0d0e', marginBottom: '16px' }}>
              ⚠️ Yolda Kaldığınızda Hangi Bilgileri İletmelisiniz?
            </h2>
            <p className="text-small" style={{ marginBottom: '24px', lineHeight: 1.6, color: '#111517' }}>
              Otoyol ve çevre yollarında ters yöne girmemek veya ters şeritte kalmamak adına çekici ekibimize şu detayları aktarınız:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>1. Yol Adı</strong>
                <span className="text-small" style={{ color: '#111517' }}>TEM (O-2), D-100 (E-5), Şile Yolu veya cadde adı.</span>
              </div>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>2. Gidiş Yönü</strong>
                <span className="text-small" style={{ color: '#111517' }}>Örn: Kadıköy yönü, Ankara istikameti veya Şile yönü.</span>
              </div>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>3. Yakın Tabela / Köprü</strong>
                <span className="text-small" style={{ color: '#111517' }}>En son geçtiğiniz kavşak veya gördüğünüz çıkış levhası.</span>
              </div>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>4. Konum Pini</strong>
                <span className="text-small" style={{ color: '#111517' }}>WhatsApp ile gönderilen harita pini en kesin koordinatı verir.</span>
              </div>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>5. Aracın Durduğu Alan</strong>
                <span className="text-small" style={{ color: '#111517' }}>Emniyet şeridi mi, yan yol mu, otoyol katılım cebi mi?</span>
              </div>
              <div style={{ backgroundColor: '#f6f5f0', padding: '16px', borderRadius: '4px', border: '1px solid #d4d2cb' }}>
                <strong style={{ color: '#765b00', display: 'block', marginBottom: '4px', fontWeight: 900 }}>6. Araç Hareket Durumu</strong>
                <span className="text-small" style={{ color: '#111517' }}>Vites boşa geçiyor mu, tekerlekler dönüyor mu?</span>
              </div>
            </div>

            <div
              style={{
                marginTop: '24px',
                padding: '16px 20px',
                borderRadius: '4px',
                backgroundColor: '#fff1f0',
                border: '1px solid #fecaca',
                color: '#991b1b',
                fontSize: '14px',
                lineHeight: 1.6
              }}
            >
              <strong>Hayati Güvenlik Uyarısı:</strong> Otoyolda araçtan inip karşı şeride asla yürüyerek geçmeyiniz. Can güvenliğiniz için çelik bariyerlerin arkasına geçip çekici ekibimizi bekleyiniz.
            </div>
          </div>

          {/* Yol ve Bölge Detay Listesi */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0b0d0e', marginBottom: '24px' }}>
              Bölgesel Yol ve Kavşak Detayları
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {roadsData.map((road, idx) => (
                <div key={idx} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e' }}>
                      {road.name}
                    </h3>
                    <span className="badge badge-info" style={{ fontSize: '11px' }}>
                      {road.category}
                    </span>
                  </div>

                  <p style={{ marginBottom: '16px', lineHeight: 1.65, color: '#111517' }}>
                    {road.description}
                  </p>

                  <div style={{ marginBottom: '16px' }}>
                    <strong style={{ fontSize: '13px', color: '#765b00', display: 'block', marginBottom: '6px', fontWeight: 900 }}>
                      Kritik Noktalar:
                    </strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {road.keyNodes.map((node, nIdx) => (
                        <span
                          key={nIdx}
                          style={{
                            fontSize: '12px',
                            padding: '3px 8px',
                            backgroundColor: '#f4f2ec',
                            borderRadius: '2px',
                            color: '#0b0d0e',
                            fontWeight: 700,
                            border: '1px solid #d4d2cb'
                          }}
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '4px',
                      backgroundColor: '#fffdf5',
                      border: '1px solid #e7dfc8',
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: '#0b0d0e'
                    }}
                  >
                    <strong style={{ color: '#765b00' }}>Tavsiye:</strong> {road.driverAdvice}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FinalCtaBand />
    </>
  );
}
