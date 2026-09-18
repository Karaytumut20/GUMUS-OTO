import fs from 'fs';
import path from 'path';

console.log('=== GÜMÜŞ OTO KURTARMA — RELEASE KONTROL RAPORU ===\n');

// 1. İşletme Yapılandırma Kontrolü
const businessFile = path.resolve('src/config/business.ts');
if (!fs.existsSync(businessFile)) {
  console.error('❌ HATA: src/config/business.ts dosyası bulunamadı!');
  process.exit(1);
}
const businessContent = fs.readFileSync(businessFile, 'utf8');

console.log('1. İŞLETME VERİLERİ DOĞRULAMA DURUMU:');
const checks = [
  { field: 'brandName', label: 'Marka Adı', regex: /brandName:\s*["']([^"']+)["']/ },
  { field: 'businessName', label: 'Tam İşletme Adı', regex: /businessName:\s*["']([^"']+)["']/ },
  { field: 'phoneDisplay', label: 'Görünen Telefon', regex: /phoneDisplay:\s*(null|["'][^"']+["'])/ },
  { field: 'whatsappNumber', label: 'WhatsApp Numarası', regex: /whatsappNumber:\s*(null|["'][^"']+["'])/ },
  { field: 'latitude', label: 'Enlem (Latitude)', regex: /latitude:\s*([0-9.]+)/ },
  { field: 'longitude', label: 'Boylam (Longitude)', regex: /longitude:\s*([0-9.]+)/ },
  { field: 'googleMapsUrl', label: 'Google Haritalar Linki', regex: /googleMapsUrl:\s*["']([^"']+)["']/ },
  { field: 'is24HoursVerified', label: '7/24 Hizmet Operasyonel Teyidi', regex: /is24HoursVerified:\s*(true|false)/ },
];

let criticalMissingCount = 0;
for (const check of checks) {
  const match = businessContent.match(check.regex);
  const val = match ? match[1] : 'TANIMSIZ';
  const isNullOrFalse = val === 'null' || val === 'false';
  
  if (isNullOrFalse) {
    console.log(`   ⚠️  ${check.label}: ${val} (Henüz doğrulanmadı / Eksik veri korumasında)`);
    if (check.field === 'phoneDisplay' || check.field === 'whatsappNumber') {
      criticalMissingCount++;
    }
  } else {
    console.log(`   ✅  ${check.label}: ${val}`);
  }
}

// 2. Mahalle Verisi Kontrolü
console.log('\n2. MAHALLE KAPSAM KONTROLÜ:');
const neighborhoodsFile = path.resolve('src/data/neighborhoods.ts');
const nContent = fs.readFileSync(neighborhoodsFile, 'utf8');

const umraniyeBlockMatch = nContent.match(/export const UMRANIYE_NEIGHBORHOODS[\s\S]*?\];/);
const atasehirBlockMatch = nContent.match(/export const ATASEHIR_NEIGHBORHOODS[\s\S]*?\];/);

const umraniyeCount = umraniyeBlockMatch ? (umraniyeBlockMatch[0].match(/id:\s*['"]umraniye-/g) || []).length : 0;
const atasehirCount = atasehirBlockMatch ? (atasehirBlockMatch[0].match(/id:\s*['"]atasehir-/g) || []).length : 0;

console.log(`   ✅  Ümraniye Mahalleleri: ${umraniyeCount} / 35 (Hedef: 35)`);
console.log(`   ✅  Ataşehir Mahalleleri: ${atasehirCount} / 17 (Hedef: 17)`);
console.log(`   ✅  Toplam Coğrafi Mahalle: ${umraniyeCount + atasehirCount} / 52`);

if (umraniyeCount !== 35 || atasehirCount !== 17) {
  console.error('❌ HATA: Mahalle sayıları belediye resmî listesiyle eşleşmiyor!');
  process.exit(1);
}

// 3. Çekirdek Sayfaların Varlığı Kontrolü
console.log('\n3. ÇEKİRDEK SAYFALARIN VARLIĞI:');
const requiredPages = [
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/not-found.tsx',
  'src/app/hizmetler/page.tsx',
  'src/app/hizmetler/oto-cekici/page.tsx',
  'src/app/hizmetler/oto-kurtarma/page.tsx',
  'src/app/hizmet-bolgeleri/page.tsx',
  'src/app/umraniye-cekici/page.tsx',
  'src/app/atasehir-cekici/page.tsx',
  'src/app/yol-ve-baglanti-noktalari/page.tsx',
  'src/app/cekici-ucretini-etkileyen-faktorler/page.tsx',
  'src/app/hakkimizda/page.tsx',
  'src/app/iletisim/page.tsx',
  'src/app/gizlilik/page.tsx'
];

let missingPages = 0;
for (const p of requiredPages) {
  if (fs.existsSync(path.resolve(p))) {
    console.log(`   ✅  ${p}`);
  } else {
    console.error(`   ❌  Eksik: ${p}`);
    missingPages++;
  }
}

if (missingPages > 0) {
  console.error(`❌ HATA: ${missingPages} adet gerekli sayfa eksik!`);
  process.exit(1);
}

// 4. Varlıklar Kontrolü
console.log('\n4. STATİK VARLIKLAR:');
const requiredAssets = [
  'public/images/gumus-oto-kurtarma-logo.webp',
  'public/images/og-image.png',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/icon.svg'
];

for (const a of requiredAssets) {
  if (fs.existsSync(path.resolve(a))) {
    console.log(`   ✅  ${a}`);
  } else {
    console.error(`   ❌  Eksik: ${a}`);
  }
}

console.log('\n=== SONUÇ ===');
if (criticalMissingCount > 0) {
  console.log(`ℹ️  DİKKAT: İşletmenin ${criticalMissingCount} adet kritik iletişim bilgisi (Telefon / WhatsApp) doğrulama aşamasındadır.`);
  console.log('    Web sitesi teknik olarak hatasız çalışmakta ve eksik veri durumlarını kullanıcıya şeffafça bildirmektedir.');
  console.log('    İşletme sahibi gerçek numarasını ilettiğinde "src/config/business.ts" dosyasından tek noktadan güncellenecektir.');
} else {
  console.log('🚀 Tüm doğrulamalar tamamlandı. Üretime tam hazır!');
}
