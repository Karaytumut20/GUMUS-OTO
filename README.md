# Gümüş Oto Kurtarma — Web Sitesi (Next.js Static Export)

Bu proje, **“Ümraniye Çekici Ataşehir Çekici Gümüş Oto Kurtarma”** (Kısa Marka: **Gümüş Oto Kurtarma**) için hazırlanmış; tamamen statik dışa aktarılabilen (`output: 'export'`), sunucu ve veritabanı gerektirmeyen, hızlı, erişilebilir ve teknik SEO kurallarına tam uyumlu bir Next.js 14 web uygulamasıdır.

---

## 🚀 Temel Özellikler

- **Statik Çıktı:** `out/` dizininde 15 tam statik HTML sayfası ve optimize edilmiş varlıklar.
- **Yerel Kapsam:** Ümraniye'nin 35 ve Ataşehir'in 17 mahallesini (toplam 52 mahalle) kapsayan eksiksiz bölge rehberi.
- **İnteraktif Arama:** Türkçe karakter normalizasyonlu mahalle arama filtresi (Javascript açıkken canlı filtreleme, kapalıyken statik HTML listeleme).
- **Telefon & WhatsApp Odaklı:** Hızlı arama aksiyonları ve URL-encoded WhatsApp talep mesajı hazırlayıcı.
- **Eksik Veri Güvenliği:** İşletme telefonu teyit edilene kadar sahte numara üretilmez; kullanıcıya şeffaf bildirim sunulur.
- **Sıfır İzleyici:** Varsayılan olarak çerez ve reklam takipçisi barındırmayan hafif mimari.

---

## 🛠️ Kurulum ve Çalıştırma

### 1. Gereksinimler
- Node.js 18.17 veya üzeri (Node.js 20+ önerilir)
- npm veya pnpm / yarn

### 2. Bağımlılıkları Yükleme
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak siteyi canlı önizleyin.

---

## 🏗️ Statik Build ve Önizleme

### Statik Çıktı Üretme
```bash
npm run build
```
Bu komut projeyi derler, statik sayfaları render eder ve `out/` dizinine yerleştirir.

### Yayın Öncesi Doğrulama Testi
```bash
npm run check:release
```
İşletme yapılandırmasını, mahalle sayılarını ve varlık bütünlüğünü kontrol eder.

### Statik Çıktıyı Yerel Olarak Önizleme (Opsiyonel)
```bash
npx serve out
```

---

## ⚙️ İşletme Verilerini Güncelleme

Tüm işletme bilgileri tek merkezî yapılandırma dosyasından yönetilir:
👉 `src/config/business.ts`

- **Telefon eklemek için:** `phoneDisplay: "0532 XXX XX XX"` ve `phoneE164: "+90532XXXXXXX"`
- **WhatsApp eklemek için:** `whatsappNumber: "90532XXXXXXX"`
- **7/24 Hizmeti aktif etmek için:** `is24HoursVerified: true`
- **Alan adını değiştirmek için:** `siteUrl: "https://alanadiniz.com"`

---

## 📂 Proje Dizin Yapısı

```
├── public/                  # Statik varlıklar (WebP logolar, favicon, robots.txt, sitemap.xml)
├── src/
│   ├── app/                 # Next.js App Router sayfaları
│   ├── components/          # Reusable UI, layout, forms, sections ve SEO bileşenleri
│   ├── config/              # business.ts & navigation.ts
│   ├── data/                # Mahalleler, hizmetler, yollar ve SSS veri modelleri
│   ├── lib/                 # URL ve Türkçe arama normalizasyonu yardımcıları
│   └── styles/              # Global CSS değişkenleri ve tipografi
├── scripts/                 # Resim işleme ve release doğrulama betikleri
└── docs/                    # Doğrulama, SEO ve lansman kontrol belgeleri
```

---

## 📄 Belgeler
- [İşletme Doğrulama Raporu (verification.md)](docs/verification.md)
- [Teknik SEO ve Sayfa Haritası (seo-map.md)](docs/seo-map.md)
- [Canlı Yayına Alma Kontrol Listesi (launch-checklist.md)](docs/launch-checklist.md)
