'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Neighborhood } from '@/data/neighborhoods';
import { matchesQuery } from '@/lib/search-normalization';
import { getNeighborhoodPath } from '@/data/local-seo';

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
    <div style={{ color: '#0b0d0e' }}>
      {/* Arama ve Filtre Kontrol Paneli */}
      <div
        className="card"
        style={{
          padding: '28px',
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          border: '1px solid #c9c7c0',
          borderTop: '4px solid #f2b705',
          borderRadius: '4px',
          boxShadow: '4px 4px 0 #d8d6ce'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* İlçe Filtre Sekmeleri */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setSelectedTab('all')}
              style={{
                fontSize: '13px',
                fontWeight: 900,
                padding: '9px 18px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: selectedTab === 'all' ? '2px solid #0b0d0e' : '1px solid #c9c7c0',
                backgroundColor: selectedTab === 'all' ? '#f2b705' : '#ffffff',
                color: '#0b0d0e',
                boxShadow: selectedTab === 'all' ? '2px 2px 0 #0b0d0e' : 'none'
              }}
            >
              Tüm Mahalleler (52)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('umraniye')}
              style={{
                fontSize: '13px',
                fontWeight: 900,
                padding: '9px 18px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: selectedTab === 'umraniye' ? '2px solid #0b0d0e' : '1px solid #c9c7c0',
                backgroundColor: selectedTab === 'umraniye' ? '#f2b705' : '#ffffff',
                color: '#0b0d0e',
                boxShadow: selectedTab === 'umraniye' ? '2px 2px 0 #0b0d0e' : 'none'
              }}
            >
              Ümraniye ({filteredUmraniye.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('atasehir')}
              style={{
                fontSize: '13px',
                fontWeight: 900,
                padding: '9px 18px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: selectedTab === 'atasehir' ? '2px solid #0b0d0e' : '1px solid #c9c7c0',
                backgroundColor: selectedTab === 'atasehir' ? '#f2b705' : '#ffffff',
                color: '#0b0d0e',
                boxShadow: selectedTab === 'atasehir' ? '2px 2px 0 #0b0d0e' : 'none'
              }}
            >
              Ataşehir ({filteredAtasehir.length})
            </button>
          </div>

          <label htmlFor="neighborhood-search-input" style={{ fontSize: '15px', fontWeight: 900, color: '#0b0d0e' }}>
            Mahallenizi veya Semtinizi Arayın
          </label>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '240px', position: 'relative' }}>
              <input
                id="neighborhood-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Örn: Şerifali, Dudullu, İçerenköy, Barbaros, Çakmak..."
                aria-describedby="search-result-count"
                style={{
                  width: '100%',
                  minHeight: '50px',
                  padding: '12px 14px 12px 46px',
                  border: '2px solid #8f9495',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  color: '#0b0d0e',
                  fontSize: '15px',
                  fontWeight: 600
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#0b0d0e',
                  pointerEvents: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
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
                style={{ minHeight: '50px', padding: '0 20px', fontSize: '14px', fontWeight: 900, color: '#0b0d0e', borderColor: '#0b0d0e' }}
              >
                Aramayı Temizle
              </button>
            )}
          </div>

          <div id="search-result-count" style={{ fontSize: '14px', fontWeight: 700, color: '#4a5255' }}>
            {isSearching ? (
              <span>
                <strong style={{ color: '#0b0d0e' }}>{totalResults}</strong> mahalle bulundu (Ümraniye: {filteredUmraniye.length}, Ataşehir: {filteredAtasehir.length})
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
            backgroundColor: '#ffffff',
            border: '2px solid #0b0d0e',
            borderRadius: '4px',
            boxShadow: '4px 4px 0 #0b0d0e'
          }}
        >
          <p style={{ fontSize: '20px', fontWeight: 900, color: '#0b0d0e', marginBottom: '8px' }}>
            Aramanızla eşleşen mahalle bulunamadı: &quot;{query}&quot;
          </p>
          <p style={{ maxWidth: '500px', margin: '0 auto 24px auto', color: '#565f63', fontSize: '14.5px' }}>
            Mahallenizin adını tam bilmiyor olsanız bile ilçe veya ana yol üzerinden bize ulaşıp konum paylaşabilirsiniz.
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="btn btn-primary"
            style={{ minHeight: '48px', padding: '0 26px', fontSize: '14px', fontWeight: 900 }}
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
                  borderBottom: '2px solid #0b0d0e'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        padding: '4px 10px',
                        backgroundColor: '#f2b705',
                        color: '#0b0d0e',
                        fontWeight: 900,
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                        borderRadius: '2px'
                      }}
                    >
                      35 MAHALLE
                    </span>
                    <h2 id="umraniye-heading" style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e' }}>
                      Ümraniye Mahalleleri
                    </h2>
                  </div>
                  <p style={{ fontSize: '14px', color: '#111517', fontWeight: 600 }}>
                    Belediye haritalarındaki 35 mahallenin {isSearching ? `eşleşen ${filteredUmraniye.length} tanesi` : 'tamamı'}
                  </p>
                </div>
                <Link
                  href="/umraniye-cekici/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '44px',
                    padding: '0 20px',
                    fontSize: '14px',
                    fontWeight: 900,
                    color: '#0b0d0e',
                    border: '2px solid #0b0d0e',
                    backgroundColor: '#ffffff',
                    textDecoration: 'none',
                    boxShadow: '2px 2px 0 #0b0d0e'
                  }}
                >
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
                  <Link
                    key={item.id}
                    href={getNeighborhoodPath(item)}
                    className="neighborhood-link-card"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #0b0d0e',
                      borderLeft: '5px solid #f2b705',
                      borderRadius: '4px',
                      padding: '14px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                      boxShadow: '3px 3px 0 #0b0d0e',
                      transition: 'all 150ms ease',
                      textDecoration: 'none',
                      position: 'relative'
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#0b0d0e', letterSpacing: '-0.01em' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '11px', color: '#0b0d0e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Ümraniye
                    </span>
                    <span aria-hidden="true" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', fontWeight: 900 }}>→</span>
                  </Link>
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
                  borderBottom: '2px solid #0b0d0e'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        padding: '4px 10px',
                        backgroundColor: '#f2b705',
                        color: '#0b0d0e',
                        fontWeight: 900,
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                        borderRadius: '2px'
                      }}
                    >
                      17 MAHALLE
                    </span>
                    <h2 id="atasehir-heading" style={{ fontSize: '24px', fontWeight: 900, color: '#0b0d0e' }}>
                      Ataşehir Mahalleleri
                    </h2>
                  </div>
                  <p style={{ fontSize: '14px', color: '#111517', fontWeight: 600 }}>
                    Muhtarlıklar listesindeki 17 mahallenin {isSearching ? `eşleşen ${filteredAtasehir.length} tanesi` : 'tamamı'}
                  </p>
                </div>
                <Link
                  href="/atasehir-cekici/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '44px',
                    padding: '0 20px',
                    fontSize: '14px',
                    fontWeight: 900,
                    color: '#0b0d0e',
                    border: '2px solid #0b0d0e',
                    backgroundColor: '#ffffff',
                    textDecoration: 'none',
                    boxShadow: '2px 2px 0 #0b0d0e'
                  }}
                >
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
                  <Link
                    key={item.id}
                    href={getNeighborhoodPath(item)}
                    className="neighborhood-link-card"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #0b0d0e',
                      borderLeft: '5px solid #0b0d0e',
                      borderRadius: '4px',
                      padding: '14px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '4px',
                      boxShadow: '3px 3px 0 #0b0d0e',
                      transition: 'all 150ms ease',
                      textDecoration: 'none',
                      position: 'relative'
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 900, color: '#0b0d0e', letterSpacing: '-0.01em' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '11px', color: '#0b0d0e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Ataşehir
                    </span>
                    <span aria-hidden="true" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', fontWeight: 900 }}>→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
