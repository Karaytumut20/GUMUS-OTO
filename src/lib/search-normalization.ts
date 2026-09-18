/**
 * Türkçe karakter duyarlı ve karaktersiz yazımı destekleyen normalizasyon fonksiyonu.
 * 'Şerifali' ve 'serifali', 'Çakmak' ve 'cakmak', 'İçerenköy' ve 'icerenkoy' aramalarını eşleştirir.
 */
export function normalizeTurkish(text: string): string {
  if (!text) return '';
  
  return text
    .toLocaleLowerCase('tr-TR')
    // Türkçe özel karakterlerin düz latin karşılıklarına dönüşümü (toleranslı arama için)
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

/**
 * Verilen metin veya arama teriminin hedef dizge içinde geçip geçmediğini kontrol eder.
 */
export function matchesQuery(sourceText: string, query: string, aliases: string[] = []): boolean {
  const normQuery = normalizeTurkish(query);
  if (!normQuery) return true;

  const normSource = normalizeTurkish(sourceText);
  if (normSource.includes(normQuery)) return true;

  for (const alias of aliases) {
    if (normalizeTurkish(alias).includes(normQuery)) {
      return true;
    }
  }

  return false;
}
