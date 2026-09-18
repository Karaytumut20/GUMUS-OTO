'use client';

import React, { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/urls';

export default function WhatsAppMessageBuilder() {
  const [districtOrNeighborhood, setDistrictOrNeighborhood] = useState('');
  const [vehicleType, setVehicleType] = useState('Binek Otomobil');
  const [issueDescription, setIssueDescription] = useState('');
  const [destination, setDestination] = useState('');
  const [locationUrl, setLocationUrl] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState<string | null>(null);

  const quickScenarios = [
    'Motor Arızası / Marş Basmıyor',
    'Kaza Durumu / Yürümüyor',
    'Akü Bitti / Takviye Lazım',
    'Tekerlek Kilitli / Lastik Yarık',
    'Tamirhane / Servise Nakil'
  ];

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Tarayıcınız konum desteği sağlamıyor. Bulunduğunuz mahalle/caddeyi yazabilirsiniz.');
      return;
    }

    setIsLocating(true);
    setLocationStatus('Konum alınıyor...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://maps.google.com/?q=${latitude.toFixed(6)},${longitude.toFixed(6)}`;
        setLocationUrl(mapsLink);
        setIsLocating(false);
        setLocationStatus('GPS konum bağlantısı başarıyla eklendi.');
      },
      (error) => {
        setIsLocating(false);
        if (error.code === error.PERMISSION_DENIED) {
          setLocationStatus('Konum izni verilmedi. Bulunduğunuz mahalleyi manuel yazabilirsiniz.');
        } else {
          setLocationStatus('Konum alınamadı. Manuel giriş yapabilirsiniz.');
        }
      },
      { enableHighAccuracy: false, timeout: 8000 }
    );
  };

  const whatsAppResult = buildWhatsAppUrl({
    districtOrNeighborhood,
    vehicleType,
    issueDescription,
    destination,
    locationUrl
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsAppResult.url) {
      window.open(whatsAppResult.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card"
      style={{
        padding: '36px',
        borderTop: '2px solid var(--color-brand-yellow)'
      }}
    >
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span className="badge">Hızlı WhatsApp Talebi</span>
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px', color: '#0b0d0e' }}>
          WhatsApp Talep ve Bilgi Mesajı Hazırlayıcı
        </h3>
        <p className="text-small" style={{ color: '#111517' }}>
          Formdaki bilgiler tarayıcınızda otomatik birleştirilir ve WhatsApp mesajı olarak açılır. Sunucuya kişisel veri kaydedilmez.
        </p>
      </div>

      {/* Konum / Mahalle */}
      <div className="form-group">
        <label htmlFor="wa-location" className="form-label" style={{ color: '#0b0d0e', fontWeight: 800 }}>
          <span>Bulunduğunuz İlçe / Mahalle / Cadde</span>
          <span style={{ color: '#d97706' }}>*</span>
        </label>
        <input
          id="wa-location"
          type="text"
          required
          value={districtOrNeighborhood}
          onChange={(e) => setDistrictOrNeighborhood(e.target.value)}
          placeholder="Örn: Ümraniye Çakmak Mah. veya TEM Dudullu çıkışı"
          className="form-input"
        />
      </div>

      {/* İsteğe Bağlı Konum Koordinatı */}
      <div className="form-group">
        <label className="form-label" style={{ color: '#0b0d0e', fontWeight: 800 }}>
          Konum Paylaşımı (İsteğe Bağlı)
        </label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleGetLocation}
            disabled={isLocating}
            className="btn btn-outline"
            style={{ minHeight: '46px', padding: '0 18px', fontSize: '14px', color: '#0b0d0e', borderColor: '#0b0d0e' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
            <span>{isLocating ? 'Alınıyor...' : 'Mevcut Konumumu Ekle'}</span>
          </button>
          {locationUrl && (
            <input
              type="text"
              readOnly
              value={locationUrl}
              aria-label="Eklenen konum linki"
              className="form-input"
              style={{ flex: 1, minWidth: '220px', fontSize: '13px' }}
            />
          )}
        </div>
        {locationStatus && (
          <p className="form-hint" style={{ marginTop: '6px', color: '#765b00', fontWeight: 700 }}>
            {locationStatus}
          </p>
        )}
      </div>

      {/* Araç Tipi */}
      <div className="form-group">
        <label htmlFor="wa-vehicle" className="form-label" style={{ color: '#0b0d0e', fontWeight: 800 }}>
          Araç Tipi
        </label>
        <select
          id="wa-vehicle"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="form-select"
        >
          <option value="Binek Otomobil (Sedan / Hatchback)">Binek Otomobil (Sedan / Hatchback)</option>
          <option value="SUV / Arazi Aracı / Crossover">SUV / Arazi Aracı / Crossover</option>
          <option value="Hafif Ticari (Minibüs / Panelvan)">Hafif Ticari (Minibüs / Panelvan)</option>
          <option value="Elektrikli / Hibrit Araç">Elektrikli / Hibrit Araç</option>
          <option value="Motosiklet">Motosiklet</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      {/* Hızlı Senaryo Seçici */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#0b0d0e', marginBottom: '8px' }}>
          Hızlı Durum Seçimi:
        </span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {quickScenarios.map((sc, i) => (
            <button
              key={i}
              type="button"
              className="scenario-chip"
              onClick={() => setIssueDescription((prev) => prev ? `${prev} | ${sc}` : sc)}
            >
              + {sc}
            </button>
          ))}
        </div>
      </div>

      {/* Araç Durumu / Sorun */}
      <div className="form-group">
        <label htmlFor="wa-issue" className="form-label" style={{ color: '#0b0d0e', fontWeight: 800 }}>
          Araç Durumu / Sorunun Kısa Açıklaması
        </label>
        <textarea
          id="wa-issue"
          rows={3}
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          placeholder="Örn: Marş basmıyor, araç viteste kaldı, kaza nedeniyle sağ ön tekerlek dönmüyor..."
          className="form-textarea"
        />
      </div>

      {/* Hedef Nokta */}
      <div className="form-group">
        <label htmlFor="wa-dest" className="form-label" style={{ color: '#0b0d0e', fontWeight: 800 }}>
          Taşınmasını İstediğiniz Yer / Servis (İsteğe Bağlı)
        </label>
        <input
          id="wa-dest"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Örn: Bostancı Sanayi, Yetkili Servis veya Adresiniz"
          className="form-input"
        />
      </div>

      {/* Önizleme Metni - WhatsApp Sohbet Balonu Teması */}
      <div
        style={{
          backgroundColor: '#f0fdf4',
          borderRadius: '8px',
          border: '1.5px solid #86efac',
          borderLeft: '5px solid #22c55e',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: '2px 2px 0 #bbf7d0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', color: '#15803d', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            💬 WhatsApp Mesaj Taslağı
          </span>
          <span style={{ fontSize: '11px', color: '#166534', fontWeight: 700 }}>Önizleme</span>
        </div>
        <pre
          style={{
            fontFamily: 'inherit',
            fontSize: '13.5px',
            color: '#0f172a',
            fontWeight: 600,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            lineHeight: 1.6
          }}
        >
          {whatsAppResult.messageText}
        </pre>
      </div>

      {/* Gönder / Aç Butonu */}
      {whatsAppResult.isReady ? (
        <button
          type="submit"
          className="btn btn-whatsapp"
          style={{ width: '100%', minHeight: '56px', fontSize: '16.5px', fontWeight: 900 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.78.813 2.796.814 3.183 0 5.769-2.587 5.77-5.767 0-3.182-2.587-5.8-5.77-5.8zm3.364 8.21c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.124-.523-1.637-.681-2.696-2.348-2.778-2.457-.082-.11-.663-.882-.663-1.682 0-.8.419-1.194.568-1.356.149-.163.325-.204.433-.204.108 0 .217.001.312.006.1.005.234-.038.366.279.136.326.462 1.127.503 1.209.041.082.069.177.014.286-.055.109-.082.177-.163.272-.082.095-.172.213-.245.286-.082.082-.167.171-.072.334.095.163.423.698.908 1.13.624.556 1.15.728 1.313.81.163.082.258.069.354-.041.095-.109.407-.475.516-.638.109-.163.217-.136.366-.082.149.054.95.448 1.113.53.163.082.272.122.312.19.041.068.041.394-.103.799z"/>
          </svg>
          <span>WhatsApp’ta Mesajı Aç</span>
        </button>
      ) : (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#fffdf5',
            border: '1px solid #e7dfc8',
            borderRadius: '4px',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#765b00', fontWeight: 900, fontSize: '15px', marginBottom: '6px' }}>
            İşletme WhatsApp Hattı Teyit Sürecindedir
          </p>
          <p className="text-small" style={{ fontSize: '13px', color: '#111517' }}>
            İşletmenin resmî WhatsApp hattı teyit edildiğinde tek tıkla mesaj açılacaktır. Bilgilerinizi kontrol edebilirsiniz.
          </p>
        </div>
      )}

      <p className="text-small" style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: '#111517' }}>
        * Mesaj WhatsApp uygulamasında taslak olarak açılır. İletmek için sohbet penceresinde gönder butonuna basınız.
      </p>
    </form>
  );
}
