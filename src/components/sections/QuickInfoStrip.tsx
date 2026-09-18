import React from 'react';

export default function QuickInfoStrip() {
  const steps = [
    {
      step: '01',
      title: 'Konumunuzu Paylaşın',
      desc: 'Bulunduğunuz cadde, sokak veya otoyol bağlantısını WhatsApp veya telefon ile iletin.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      step: '02',
      title: 'Araç Durumunu Belirtin',
      desc: 'Aracınızın modeli, yürür aksamının durumu ve arıza/kaza bilgisini özetleyin.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    },
    {
      step: '03',
      title: 'Hizmet Detaylarını Öğrenin',
      desc: 'Tahmini ulaşım süresi, çekici uygunluğu ve ücret detaylarını operatörle netleştirin.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    }
  ];

  return (
    <section
      style={{
        paddingTop: '0px',
        paddingBottom: '56px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px'
          }}
        >
          {steps.map((item) => (
            <div
              key={item.step}
              className="card card-interactive"
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '28px 24px'
              }}
            >
              <div className="icon-podium">
                {item.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'var(--color-brand-yellow)',
                      letterSpacing: '0.08em',
                      fontFamily: 'monospace',
                      background: 'rgba(245, 158, 11, 0.1)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      border: '1px solid rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    ADIM {item.step}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--color-white)' }}>
                  {item.title}
                </h3>
                <p className="text-small" style={{ lineHeight: 1.6, color: '#94A3B8' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
