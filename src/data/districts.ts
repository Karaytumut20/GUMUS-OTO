export interface District {
  id: 'umraniye' | 'atasehir';
  name: string;
  slug: string;
  pagePath: string;
  neighborhoodCount: number;
  description: string;
  heroHighlight: string;
  keyRoads: string[];
  keyHubs: string[];
}

export const districts: District[] = [
  {
    id: 'umraniye',
    name: 'Ümraniye',
    slug: 'umraniye-cekici',
    pagePath: '/umraniye-cekici/',
    neighborhoodCount: 35,
    description: 'Anadolu Yakası’nın en yoğun nüfuslu ve kritik ulaşım akslarına sahip ilçelerinden biri olan Ümraniye’de, 35 mahalle genelinde çekici ve oto kurtarma yönlendirmesi.',
    heroHighlight: '35 Mahalle, TEM ve Şile Otoyolu Bağlantıları',
    keyRoads: ['TEM (O-2) Otoyolu', 'Şile Otoyolu', 'Dudullu Bağlantı Yolu', 'Alemdağ Caddesi'],
    keyHubs: ['İMES Sanayi Sitesi', 'MODOKO', 'DES Sanayi Sitesi', 'Tepeüstü Kavşağı']
  },
  {
    id: 'atasehir',
    name: 'Ataşehir',
    slug: 'atasehir-cekici',
    pagePath: '/atasehir-cekici/',
    neighborhoodCount: 17,
    description: 'Finans Merkezi, D-100 (E-5) ve TEM kesişiminde yer alan Ataşehir’de, 17 mahalle ve ana arterler boyunca hızlı koordinasyonlu çekici hizmeti.',
    heroHighlight: '17 Mahalle, D-100 (E-5) ve İstanbul Finans Merkezi Çevresi',
    keyRoads: ['D-100 (E-5) Karayolu', 'TEM (O-2) Çamlıca Bağlantısı', 'Kozyatağı Kavşağı', 'Barbaros Bulvarı'],
    keyHubs: ['İstanbul Finans Merkezi', 'YEDPA Ticaret Merkezi', 'Küçükbakkalköy Çevresi', 'İçerenköy Çevresi']
  }
];
