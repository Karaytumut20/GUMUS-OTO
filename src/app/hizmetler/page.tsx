import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import SeoTextGuide from '@/components/sections/SeoTextGuide';
import { servicesData, unverifiedServiceNotes } from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Hizmetlerimiz',
  description: 'Ümraniye ve Ataşehir çevresinde sunduğumuz profesyonel oto çekici ve kurtarma hizmetlerinin kapsamı, taşıma süreçleri ve detayları.',
  canonical: '/hizmetler/'
});

export default function ServicesPage() {
  return (
    <>
      <div className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Hizmetlerimiz', href: '/hizmetler/' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <span className="badge badge-warning" style={{ marginBottom: '12px' }}>
              Hizmet Kataloğu
            </span>
            <h1 style={{ marginBottom: '20px' }}>
              Oto Çekici ve Kurtarma Hizmetlerimiz
            </h1>
            <p className="text-lead">
              Aracınızın türüne, mevcut mekanik arızasına ve bulunduğu zemin koşullarına uygun, güvenli taşıma ve kurtarma çözümleri.
            </p>
          </div>

          {/* Hizmet Kartları */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '32px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 196, 0, 0.12)',
                        border: '1px solid rgba(255, 196, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px'
                      }}
                    >
                      {svc.id === 'oto-cekici' ? '🚛' : '🏗️'}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0b0d0e' }}>
                        {svc.title}
                      </h2>
                      <span className="badge badge-info" style={{ fontSize: '11px' }}>
                        Doğrulanmış Hizmet
                      </span>
                    </div>
                  </div>

                  <p style={{ marginBottom: '20px', lineHeight: 1.7, color: '#111517' }}>
                    {svc.fullDescription}
                  </p>

                  <Link href={svc.href} className="btn btn-primary" style={{ padding: '0 24px', minHeight: '48px' }}>
                    {svc.title} Detaylarını İncele →
                  </Link>
                </div>

                <div
                  style={{
                    backgroundColor: '#f6f5f0',
                    border: '1px solid #d4d2cb',
                    borderRadius: '4px',
                    padding: '24px'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#765b00', marginBottom: '12px' }}>
                    Süreç Nasıl İlerler?
                  </h3>
                  <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.processSummary.map((proc, idx) => (
                      <li key={idx} style={{ fontSize: '14px', color: '#111517', lineHeight: 1.55 }}>
                        {proc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          {/* İkincil / Doğrulama Aşamasındaki Hizmetler */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #b8b6af',
              borderRadius: '4px',
              padding: '32px',
              boxShadow: '4px 4px 0 #d8d6ce'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '12px' }}>
              Ek Hizmetler ve Operasyonel Kapsam
            </h3>
            <p className="text-small" style={{ marginBottom: '24px', lineHeight: 1.6, color: '#111517' }}>
              Aşağıdaki hizmetler marka ambleminde yer almakta olup, çağrı anındaki seyyar araç ve nöbetçi ekip uygunluğuna göre değerlendirilmektedir:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              {unverifiedServiceNotes.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f6f5f0',
                    border: '1px solid #d4d2cb',
                    borderRadius: '4px',
                    padding: '20px'
                  }}
                >
                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#0b0d0e', marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p className="text-small" style={{ marginBottom: '8px', color: '#111517' }}>
                    {item.sourceNote}
                  </p>
                  <span style={{ fontSize: '12px', color: '#765b00', fontWeight: 700 }}>
                    Durum: {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SeoTextGuide kicker="HİZMET SEÇİM REHBERİ" title="Aracın durumuna uygun hizmeti belirleyin" lead="Her yolda kalma olayı aynı ekipmanı gerektirmez. İlk görüşmede paylaşacağınız kısa bilgiler, standart oto çekici ile teknik kurtarma operasyonu arasındaki ayrımın doğru yapılmasını sağlar." items={[
        {heading:'Standart oto çekici ne zaman uygundur?',body:'Motor veya şanzıman arızası nedeniyle çalışmayan, servise ya da ekspertize taşınacak ve düz zeminde bulunan araçlar çoğunlukla platformlu oto çekiciyle alınabilir. Otomatik vitesli ve elektrikli araçlarda tüm tekerleklerin platform üzerinde taşınması önem taşır. Araç modelini ve vites türünü talep sırasında belirtin.'},
        {heading:'Oto kurtarma ne zaman gerekir?',body:'Araç yoldan çıkmışsa, kaldırıma veya bariyere oturmuşsa, bir ya da daha fazla tekerlek kilitliyse standart yükleme yeterli olmayabilir. Eğim, zemin, dar alan ve hasar durumu vinç, makara veya yardımcı ekipman ihtiyacını belirler. Konumu ve aracın dört tarafından çekilmiş fotoğrafları paylaşmak değerlendirmeyi kolaylaştırır.'},
        {heading:'Talep öncesinde hangi bilgiler hazırlanmalı?',body:'Canlı konum, araç marka ve modeli, alınış noktası, bırakılacak servis veya otopark, tekerlek ve direksiyon durumu ile bulunduğunuz yolun yönünü hazır edin. Ümraniye veya Ataşehir çekici talebinde bu bilgiler ekipman planını, tahmini varış değerlendirmesini ve ücret görüşmesini daha açık hale getirir.'}
      ]}/>
      <FinalCtaBand />
    </>
  );
}
