import React from 'react';

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Bize Ulaşın',
      desc: 'Telefon arayarak veya WhatsApp üzerinden kolayca ilk iletişimi başlatın.'
    },
    {
      num: '02',
      title: 'Konum ve Araç Bilgisini Paylaşın',
      desc: 'Bulunduğunuz yer pini, aracın tipi ve karşılaştığınız arıza durumunu iletin.'
    },
    {
      num: '03',
      title: 'Hizmet Detaylarını Netleştirin',
      desc: 'Ekip uygunluğu, tahmini varış süresi ve ücret görüşmede açıkça netleşsin.'
    },
    {
      num: '04',
      title: 'Uygun İşlem Planlansın',
      desc: 'Aracınız platforma güvenle sabitlenerek istediğiniz servis veya noktaya nakledilsin.'
    }
  ];

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px auto' }}>
          <span className="badge badge-warning" style={{ marginBottom: '16px' }}>
            Hizmet Akışı
          </span>
          <h2 style={{ marginBottom: '18px' }}>
            Çekici Talebi Nasıl Oluşturulur?
          </h2>
          <p className="text-lead">
            Yolda kaldığınızda kafa karışıklığı yaşamadan 4 net adımda profesyonel çekici desteği sağlayın.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '24px'
          }}
        >
          {steps.map((item) => (
            <div
              key={item.num}
              className="card"
              style={{
                padding: '36px 26px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  fontSize: '38px',
                  fontWeight: 900,
                  background: 'var(--gradient-text-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  marginBottom: '20px',
                  fontFamily: 'monospace',
                  letterSpacing: '-0.04em'
                }}
              >
                {item.num}
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '12px' }}>
                {item.title}
              </h3>
              <p className="text-small" style={{ lineHeight: 1.65, color: '#94A3B8' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
