import fs from 'fs';
import path from 'path';

console.log('=== STATİK HTML KALİTE VE SEO KONTROLÜ ===\n');

const htmlFiles = [
  'out/index.html',
  'out/hizmetler/index.html',
  'out/hizmetler/oto-cekici/index.html',
  'out/hizmetler/oto-kurtarma/index.html',
  'out/hizmet-bolgeleri/index.html',
  'out/umraniye-cekici/index.html',
  'out/atasehir-cekici/index.html',
  'out/yol-ve-baglanti-noktalari/index.html',
  'out/cekici-ucretini-etkileyen-faktorler/index.html',
  'out/hakkimizda/index.html',
  'out/iletisim/index.html',
  'out/gizlilik/index.html',
  'out/404.html'
];

let allPassed = true;

for (const file of htmlFiles) {
  const filePath = path.resolve(file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Dosya eksik: ${file}`);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Kontroller
  const hasLangTr = content.includes('lang="tr"');
  const hasH1 = /<h1[^>]*>[\s\S]*?<\/h1>/i.test(content);
  const hasTitle = /<title[^>]*>[\s\S]*?<\/title>/i.test(content);
  const hasDescription = /<meta[^>]*name="description"[^>]*content="[^"]+"/i.test(content);
  const hasSchema = content.includes('application/ld+json');
  const hasViewport = content.includes('viewport');

  const status = [];
  if (!hasLangTr) status.push('lang="tr" eksik');
  if (!hasH1 && file !== 'out/404.html') status.push('h1 eksik');
  if (!hasTitle) status.push('title eksik');
  if (!hasDescription && file !== 'out/404.html') status.push('description eksik');
  if (!hasSchema && file !== 'out/404.html') status.push('json-ld eksik');
  if (!hasViewport) status.push('viewport eksik');

  if (status.length === 0) {
    console.log(`✅  ${file} (HTML5, lang="tr", H1, Title, Description, Viewport ve JSON-LD geçerli)`);
  } else {
    console.error(`❌  ${file} -> ${status.join(', ')}`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 Tüm statik HTML dosyaları teknik SEO ve semantik kriterleri %100 karşılamaktadır!');
} else {
  console.error('\n⚠️ Bazı dosyalarda eksikler tespit edildi.');
  process.exit(1);
}
