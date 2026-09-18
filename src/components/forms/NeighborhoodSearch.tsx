'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Neighborhood } from '@/data/neighborhoods';
import { matchesQuery } from '@/lib/search-normalization';

interface NeighborhoodSearchProps {
  umraniyeList: Neighborhood[];
  atasehirList: Neighborhood[];
}

export default function NeighborhoodSearch({ umraniyeList, atasehirList }: NeighborhoodSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'umraniye' | 'atasehir'>('all');

  const filteredUmraniye = useMemo(() => {
    if (!query.trim()) return umraniyeList;
    return umraniyeList.filter((n) => matchesQuery(n.name, query, n.aliases));
  }, [query, umraniyeList]);

  const filteredAtasehir = useMemo(() => {
    if (!query.trim()) return atasehirList;
    return atasehirList.filter((n) => matchesQuery(n.name, query, n.aliases));
  }, [query, atasehirList]);

  const totalResults = filteredUmraniye.length + filteredAtasehir.length;
  const isSearching = query.trim().length > 0;

  return (
    <div>
      {/* Arama ve Filtre Kontrol Paneli */}
      <div
        className="card"
        style={{
          padding: '28px',
          marginBottom: '40px',
          borderTop: '2px solid var(--color-brand-yellow)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* İlçe Filtre Sekmeleri */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setSelectedTab('all')}
              className={`scenario-chip ${selectedTab === 'all' ? 'active' : ''}`}
              style={{ fontSize: '13.5px', padding: '8px 16px' }}
            >
              Tüm Mahalleler (52)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('umraniye')}
              className={`scenario-chip ${selectedTab === 'umraniye' ? 'active' : ''}`}
              style={{ fontSize: '13.5px', padding: '8px 16px' }}
            >
              Ümraniye ({filteredUmraniye.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('atasehir')}
              className={`scenario-chip ${selectedTab === 'atasehir' ? 'active' : ''}`}
              style={{ fontSize: '13.5px', padding: '8px 16px' }}
            >
              Ataşehir ({filteredAtasehir.length})
            </button>
          </div>

          <label htmlFor="neighborhood-search-input" className="form-label" style={{ fontSize: '15px' }}>
            <span>Mahallenizi veya Semtinizi Arayın</span>
          </label>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '240px', position: 'relative' }}>
              <input
                id="neighborhood-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Örn: Şerifali, Dudullu, İçerenköy, Barbaros, Çakmak..."
                className="form-input"
                aria-describedby="search-result-count"
                style={{ paddingLeft: '44px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-muted-dark)',
                  pointerEvents: 'none'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
            {isSearching && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="btn btn-outline"
                style={{ minHeight: '48px', padding: '0 18px', fontSize: '14px' }}
              >
                Temizle
              </button>
            )}
          </div>

          <div id="search-result-count" className="text-small" style={{ color: 'var(--color-text-muted-dark)' }}>
            {isSearching ? (
              <span>
                <strong>{totalResults}</strong> mahalle bulundu (Ümraniye: {filteredUmraniye.length}, Ataşehir: {filteredAtasehir.length})
              </span>
            ) : (
              <span>
                Toplam 52 mahalle listelenmektedir (35 Ümraniye + 17 Ataşehir).
              </span>
            )}
          </div>
        </div>
      </div>

      {totalResults === 0 ? (
        <div
          className="card"
          style={{
            textAlign: 'center',
            padding: '56px 24px',
            borderTop: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: 'var(--color-text-muted-dark)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <p style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-white)', marginBottom: '8px' }}>
            Aramanızla eşleşen mahalle bulunamadı: &quot;{query}&quot;
          </p>
          <p className="text-small" style={{ maxWidth: '500px', margin: '0 auto 24px auto', color: '#94A3B8' }}>
            Mahallenizin adını tam bilmiyor olsanız bile ilçe veya ana yol üzerinden bize ulaşıp konum paylaşabilirsiniz.
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="btn btn-primary"
            style={{ minHeight: '46px', padding: '0 24px', fontSize: '14px' }}
          >
            Tüm Mahalleleri Göster
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {/* Ümraniye Mahalleleri Bölümü */}
          {(selectedTab === 'all' || selectedTab === 'umraniye') && filteredUmraniye.length > 0 && (
            <section aria-labelledby="umraniye-heading">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-border-dark)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="badge">35 Mahalle</span>
                    <h2 id="umraniye-heading" style={{ fontSize: '24px', fontWeight: 800 }}>
                      Ümraniye Mahalleleri
                    </h2>
                  </div>
                  <p className="text-small">
                    Belediye haritalarındaki 35 mahallenin {isSearching ? `eşleşen ${filteredUmraniye.length} tanesi` : 'tamamı'}
                  </p>
                </div>
                <Link href="/umraniye-cekici/" className="btn btn-outline" style={{ minHeight: '42px', padding: '0 18px', fontSize: '14px' }}>
                  Ümraniye Çekici Sayfası →
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                  gap: '12px'
                }}
              >
                {filteredUmraniye.map((item) => (
                  <div
                    key={item.id}
                    className="card-interactive"
                    style={{
                      backgroundColor: 'rgba(19, 27, 44, 0.65)',
                      border: '1px solid var(--color-border-dark)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-btn)',
                      padding: '14px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-light)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--color-brand-yellow)', fontWeight: 600 }}>
                      Ümraniye
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Ataşehir Mahalleleri Bölümü */}
          {(selectedTab === 'all' || selectedTab === 'atasehir') && filteredAtasehir.length > 0 && (
            <section aria-labelledby="atasehir-heading">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-border-dark)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="badge">17 Mahalle</span>
                    <h2 id="atasehir-heading" style={{ fontSize: '24px', fontWeight: 800 }}>
                      Ataşehir Mahalleleri
                    </h2>
                  </div>
                  <p className="text-small">
                    Muhtarlıklar listesindeki 17 mahallenin {isSearching ? `eşleşen ${filteredAtasehir.length} tanesi` : 'tamamı'}
                  </p>
                </div>
                <Link href="/atasehir-cekici/" className="btn btn-outline" style={{ minHeight: '42px', padding: '0 18px', fontSize: '14px' }}>
                  Ataşehir Çekici Sayfası →
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                  gap: '12px'
                }}
              >
                {filteredAtasehir.map((item) => (
                  <div
                    key={item.id}
                    className="card-interactive"
                    style={{
                      backgroundColor: 'rgba(19, 27, 44, 0.65)',
                      border: '1px solid var(--color-border-dark)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-btn)',
                      padding: '14px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-light)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '12px', color: '#38BDF8', fontWeight: 600 }}>
                      Ataşehir
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
