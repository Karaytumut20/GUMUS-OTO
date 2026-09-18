import { ALL_NEIGHBORHOODS, Neighborhood } from './neighborhoods';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';

export type LocalAreaContext = {
  roads: string[];
  referencePoints: string[];
  situation: string;
  nearby: Neighborhood[];
};

const UMR_DUDULLU = new Set(['asagi-dudullu','yukari-dudullu','parseller','huzur','ihlamurkuyu','cemil-meric','necip-fazil','madenler']);
const UMR_TEM = new Set(['serifali','tatlisu','finanskent','tepeustu','esensehir','dumlupinar']);
const UMR_CENTRAL = new Set(['atakent','ataturk','cakmak','yamanevler','inkilap','namik-kemal','istiklal','armaganevler','site','tantavi']);
const ATA_D100 = new Set(['icerenkoy','yenisahra','kayisdagi','kucukbakkalkoy']);
const ATA_CENTRAL = new Set(['ataturk','barbaros','yenisehir','mustafa-kemal','asik-veysel']);
const ATA_EAST = new Set(['ferhatpasa','mimar-sinan','mevlana','yenicamlica','inonu']);

function localProfile(area: Neighborhood) {
  if (area.districtId === 'umraniye') {
    if (UMR_DUDULLU.has(area.slug)) return {
      roads: ['Alemdağ Caddesi', 'Şile Yolu bağlantıları', 'Dudullu kavşakları'],
      referencePoints: ['İMES', 'MODOKO–KEYAP', 'Dudullu çevresi'],
      situation: 'sanayi sitesi girişleri, yoğun bağlantı yolları ve mahalle içi dar sokaklar'
    };
    if (UMR_TEM.has(area.slug)) return {
      roads: ['TEM (O-2) bağlantıları', 'Şile Yolu', 'Dudullu–Ataşehir geçişleri'],
      referencePoints: ['İstanbul Finans Merkezi çevresi', 'Tepeüstü', 'Şerifali'],
      situation: 'otoyol bağlantıları, iş merkezleri ve yoğun site girişleri'
    };
    if (UMR_CENTRAL.has(area.slug)) return {
      roads: ['Alemdağ Caddesi', 'Şile Yolu bağlantıları', 'Ümraniye merkez yolları'],
      referencePoints: ['Ümraniye Çarşı', 'Yamanevler', 'Çakmak çevresi'],
      situation: 'yoğun cadde trafiği, eğimli sokaklar ve kapalı otopark girişleri'
    };
    return {
      roads: ['TEM (O-2) çevre bağlantıları', 'Ümraniye–Çekmeköy geçişleri', 'mahalle ana caddeleri'],
      referencePoints: ['Hekimbaşı', 'Topağacı', 'Elmalıkent çevresi'],
      situation: 'mahalle yolları, eğimli ara sokaklar ve ilçe bağlantıları'
    };
  }
  if (ATA_D100.has(area.slug)) return {
    roads: ['D-100 (E-5) yan yolları', 'Kozyatağı bağlantısı', 'Kayışdağı Caddesi çevresi'],
    referencePoints: ['İçerenköy', 'Kozyatağı', 'Yenisahra'],
    situation: 'D-100 yan yolları, kavşaklar, site ve kapalı otopark girişleri'
  };
  if (ATA_CENTRAL.has(area.slug)) return {
    roads: ['Ataşehir Bulvarı', 'TEM (O-2) bağlantıları', 'Barbaros–Finans Merkezi aksı'],
    referencePoints: ['İstanbul Finans Merkezi', 'Ataşehir merkez', 'Barbaros çevresi'],
    situation: 'iş merkezi trafiği, geniş bulvarlar, rezidans ve otopark girişleri'
  };
  if (ATA_EAST.has(area.slug)) return {
    roads: ['TEM (O-2) bağlantıları', 'Ferhatpaşa yolu', 'Dudullu–Kayışdağı geçişleri'],
    referencePoints: ['Ferhatpaşa', 'Yeniçamlıca', 'Mevlana çevresi'],
    situation: 'sanayi bağlantıları, mahalle yolları ve ilçe sınırı geçişleri'
  };
  return {
    roads: ['Libadiye Caddesi', 'D-100 bağlantıları', 'Ataşehir merkez yolları'],
    referencePoints: ['Esatpaşa', 'Örnek', 'Fetih çevresi'],
    situation: 'mahalle içi yollar, ana cadde bağlantıları ve yoğun kent trafiği'
  };
}

export function getLocalAreaContext(area: Neighborhood): LocalAreaContext {
  const district = ALL_NEIGHBORHOODS.filter(n => n.districtId === area.districtId);
  const index = district.findIndex(n => n.id === area.id);
  const nearby = [...district.slice(index + 1), ...district.slice(0, index)]
    .filter(n => n.id !== area.id)
    .slice(0, 6);
  return { ...localProfile(area), nearby };
}

export function getLocalKeywords(area: Neighborhood) {
  const place = `${area.name} ${area.districtName}`;
  return [
    `${area.name} çekici`, `${place} çekici`, `${area.name} oto çekici`,
    `${area.name} oto kurtarma`, `${area.name} yol yardım`,
    `${area.name} en yakın çekici`, `${area.name} acil çekici`,
    `${area.name} araç çekici`, `${area.name} servis araç nakli`,
    `${area.districtName} çekici`, `${area.districtName} oto kurtarma`,
    'Gümüş Oto Kurtarma'
  ];
}

export function getNeighborhoodPath(area: Neighborhood) {
  return `/${area.districtId}-cekici/${area.slug}-cekici/`;
}

export function getNeighborhoodMetadata(area: Neighborhood): Metadata {
  const district = area.districtName;
  const canonical = getNeighborhoodPath(area);
  return createPageMetadata({
    title: `${area.name} Çekici | ${district} Oto Kurtarma`,
    description: `${area.name} Mahallesi ${district} çevresinde oto çekici, oto kurtarma ve araç nakli için konum ve araç bilgisiyle Gümüş Oto Kurtarma’ya ulaşın.`,
    keywords: getLocalKeywords(area),
    canonical
  });
}
