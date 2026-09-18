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
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '36px',
              marginBottom: '56px'
            }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '16px' }}>
              ⚠️ Yolda Kaldığınızda Hangi Bilgileri İletmelisiniz?
            </h2>
            <p className="text-small" style={{ marginBottom: '24px', lineHeight: 1.6 }}>
              Otoyol ve çevre yollarında ters yöne girmemek veya ters şeritte kalmamak adına çekici ekibimize şu detayları aktarınız:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>1. Yol Adı</strong>
                <span className="text-small">TEM (O-2), D-100 (E-5), Şile Yolu veya cadde adı.</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>2. Gidiş Yönü</strong>
                <span className="text-small">Örn: Kadıköy yönü, Ankara istikameti veya Şile yönü.</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>3. Yakın Tabela / Köprü</strong>
                <span className="text-small">En son geçtiğiniz kavşak veya gördüğünüz çıkış levhası.</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>4. Konum Pini</strong>
                <span className="text-small">WhatsApp ile gönderilen harita pini en kesin koordinatı verir.</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>5. Aracın Durduğu Alan</strong>
                <span className="text-small">Emniyet şeridi mi, yan yol mu, otoyol katılım cebi mi?</span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-dark)', padding: '16px', borderRadius: 'var(--radius-btn)' }}>
                <strong style={{ color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '4px' }}>6. Araç Hareket Durumu</strong>
                <span className="text-small">Vites boşa geçiyor mu, tekerlekler dönüyor mu?</span>
              </div>
            </div>

            <div
              style={{
                marginTop: '24px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-btn)',
                backgroundColor: 'rgba(180, 35, 24, 0.12)',
                border: '1px solid rgba(180, 35, 24, 0.3)',
                color: '#fca5a5',
                fontSize: '14px',
                lineHeight: 1.6
              }}
            >
              <strong>Hayati Güvenlik Uyarısı:</strong> Otoyolda araçtan inip karşı şeride asla yürüyerek geçmeyiniz. Can güvenliğiniz için çelik bariyerlerin arkasına geçip çekici ekibimizi bekleyiniz.
            </div>
          </div>

          {/* Yol ve Bölge Detay Listesi */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '24px' }}>
              Bölgesel Yol ve Kavşak Detayları
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {roadsData.map((road, idx) => (
                <div key={idx} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-white)' }}>
                      {road.name}
                    </h3>
                    <span className="badge badge-info" style={{ fontSize: '11px' }}>
                      {road.category}
                    </span>
                  </div>

                  <p style={{ marginBottom: '16px', lineHeight: 1.65 }}>
                    {road.description}
                  </p>

                  <div style={{ marginBottom: '16px' }}>
                    <strong style={{ fontSize: '13px', color: 'var(--color-brand-yellow)', display: 'block', marginBottom: '6px' }}>
                      Kritik Noktalar:
                    </strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {road.keyNodes.map((node, nIdx) => (
                        <span
                          key={nIdx}
                          style={{
                            fontSize: '12px',
                            padding: '3px 8px',
                            backgroundColor: 'var(--color-surface-dark)',
                            borderRadius: '4px',
                            color: 'var(--color-silver)'
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
                      borderRadius: 'var(--radius-btn)',
                      backgroundColor: 'var(--color-surface-dark)',
                      border: '1px solid var(--color-border-dark)',
                      fontSize: '13px',
                      lineHeight: 1.5
                    }}
                  >
                    <strong style={{ color: 'var(--color-brand-yellow)' }}>Tavsiye:</strong> {road.driverAdvice}
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
