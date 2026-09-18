import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from '@/components/sections/FinalCtaBand';
import { servicesData, unverifiedServiceNotes } from '@/data/services';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Gümüş Oto Kurtarma',
  description: 'Ümraniye ve Ataşehir çevresinde sunduğumuz profesyonel oto çekici ve kurtarma hizmetlerinin kapsamı, taşıma süreçleri ve detayları.',
  alternates: {
    canonical: '/hizmetler/'
  }
};

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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                      <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-white)' }}>
                        {svc.title}
                      </h2>
                      <span className="badge badge-info" style={{ fontSize: '11px' }}>
                        Doğrulanmış Hizmet
                      </span>
                    </div>
                  </div>

                  <p style={{ marginBottom: '20px', lineHeight: 1.7 }}>
                    {svc.fullDescription}
                  </p>

                  <Link href={svc.href} className="btn btn-primary" style={{ padding: '0 24px', minHeight: '48px' }}>
                    {svc.title} Detaylarını İncele →
                  </Link>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-surface-dark)',
                    border: '1px solid var(--color-border-dark)',
                    borderRadius: 'var(--radius-btn)',
                    padding: '24px'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '12px' }}>
                    Süreç Nasıl İlerler?
                  </h3>
                  <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.processSummary.map((proc, idx) => (
                      <li key={idx} style={{ fontSize: '14px', color: 'var(--color-text-muted-dark)', lineHeight: 1.55 }}>
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
              backgroundColor: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '12px' }}>
              Ek Hizmetler ve Operasyonel Kapsam
            </h3>
            <p className="text-small" style={{ marginBottom: '24px', lineHeight: 1.6 }}>
              Aşağıdaki hizmetler marka ambleminde yer almakta olup, çağrı anındaki seyyar araç ve nöbetçi ekip uygunluğuna göre değerlendirilmektedir:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {unverifiedServiceNotes.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface-dark)',
                    border: '1px solid var(--color-border-dark)',
                    borderRadius: 'var(--radius-btn)',
                    padding: '20px'
                  }}
                >
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-yellow)', marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p className="text-small" style={{ marginBottom: '8px' }}>
                    {item.sourceNote}
                  </p>
                  <span style={{ fontSize: '12px', color: 'var(--color-silver)', fontStyle: 'italic' }}>
                    Durum: {item.status}
                  </span>
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
