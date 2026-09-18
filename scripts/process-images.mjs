import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processImages() {
  const inputJpg = 'public/images/gumus-oto-kurtarma-logo.jpg';
  
  if (!fs.existsSync(inputJpg)) {
    console.error('Source logo not found at', inputJpg);
    return;
  }

  console.log('Converting logo to WebP...');
  // Full WebP
  await sharp(inputJpg)
    .webp({ quality: 90 })
    .toFile('public/images/gumus-oto-kurtarma-logo.webp');

  // 512px WebP
  await sharp(inputJpg)
    .resize(512, 512, { fit: 'contain', background: { r: 11, g: 13, b: 16, alpha: 1 } })
    .webp({ quality: 88 })
    .toFile('public/images/gumus-oto-kurtarma-logo-512.webp');

  // 256px WebP
  await sharp(inputJpg)
    .resize(256, 256, { fit: 'contain', background: { r: 11, g: 13, b: 16, alpha: 1 } })
    .webp({ quality: 88 })
    .toFile('public/images/gumus-oto-kurtarma-logo-256.webp');

  // 128px WebP
  await sharp(inputJpg)
    .resize(128, 128, { fit: 'contain', background: { r: 11, g: 13, b: 16, alpha: 1 } })
    .webp({ quality: 88 })
    .toFile('public/images/gumus-oto-kurtarma-logo-128.webp');

  // Create favicon 64x64 PNG
  await sharp(inputJpg)
    .resize(64, 64, { fit: 'contain', background: { r: 11, g: 13, b: 16, alpha: 1 } })
    .png()
    .toFile('public/icon.png');

  // Generate 1200x630 OG Image SVG buffer then convert to PNG
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B0D10"/>
        <stop offset="50%" stop-color="#14181E"/>
        <stop offset="100%" stop-color="#0B0D10"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFC400"/>
        <stop offset="100%" stop-color="#FFDE6A"/>
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    
    <!-- Decorative road accents -->
    <line x1="0" y1="620" x2="1200" y2="620" stroke="#FFC400" stroke-width="6"/>
    <line x1="100" y1="580" x2="250" y2="580" stroke="#323B47" stroke-width="4" stroke-dasharray="20,15"/>
    <line x1="300" y1="580" x2="900" y2="580" stroke="#323B47" stroke-width="4" stroke-dasharray="20,15"/>
    <line x1="950" y1="580" x2="1100" y2="580" stroke="#323B47" stroke-width="4" stroke-dasharray="20,15"/>

    <!-- Subtle accent glow -->
    <circle cx="200" cy="150" r="180" fill="#FFC400" opacity="0.04" />
    <circle cx="1000" cy="450" r="220" fill="#FFC400" opacity="0.04" />

    <!-- Badges -->
    <rect x="100" y="90" width="340" height="42" rx="8" fill="#1C222B" stroke="#323B47" stroke-width="1.5"/>
    <text x="120" y="117" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#FFC400" letter-spacing="2">
      ÜMRANİYE • ATAŞEHİR
    </text>

    <!-- Main Title -->
    <text x="100" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF">
      GÜMÜŞ OTO KURTARMA
    </text>

    <!-- Subtitle -->
    <text x="100" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="600" fill="#FFC400">
      Oto Çekici ve Yol Yardım Hizmetleri
    </text>

    <!-- Description Lines -->
    <text x="100" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#AEB7C4">
      Aracınız yolda kaldığında güvenilir, hızlı ve profesyonel çekici desteği.
    </text>
    <text x="100" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#AEB7C4">
      Konum ve araç durumunu paylaşın, uygun hizmeti birlikte netleştirelim.
    </text>

    <!-- Highlights -->
    <rect x="100" y="460" width="260" height="60" rx="10" fill="#1C222B" stroke="#323B47"/>
    <text x="130" y="497" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#F8FAFC">
      📍 52 Mahalle Kapsamı
    </text>

    <rect x="380" y="460" width="280" height="60" rx="10" fill="#1C222B" stroke="#323B47"/>
    <text x="410" y="497" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#F8FAFC">
      🛣️ TEM &amp; D-100 Bağlantısı
    </text>

    <rect x="680" y="460" width="260" height="60" rx="10" fill="#1C222B" stroke="#323B47"/>
    <text x="710" y="497" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#F8FAFC">
      ⚡ Hızlı İletişim &amp; WhatsApp
    </text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile('public/images/og-image.png');

  console.log('Images processed successfully!');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
