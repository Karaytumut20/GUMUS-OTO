export interface Neighborhood {
  id: string; // Unique composite key: e.g. 'umraniye-serifali'
  name: string;
  slug: string;
  districtId: 'umraniye' | 'atasehir';
  districtName: string;
  aliases?: string[];
  notes?: string;
}

export const UMRANIYE_NEIGHBORHOODS: Neighborhood[] = [
  { id: 'umraniye-adem-yavuz', name: 'Adem Yavuz', slug: 'adem-yavuz', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-altinsehir', name: 'Altınşehir', slug: 'altinsehir', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-armaganevler', name: 'Armağanevler', slug: 'armaganevler', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-asagi-dudullu', name: 'Aşağı Dudullu', slug: 'asagi-dudullu', districtId: 'umraniye', districtName: 'Ümraniye', aliases: ['Dudullu'] },
  { id: 'umraniye-atakent', name: 'Atakent', slug: 'atakent', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-ataturk', name: 'Atatürk', slug: 'ataturk', districtId: 'umraniye', districtName: 'Ümraniye', notes: 'Ümraniye Atatürk Mahallesi' },
  { id: 'umraniye-cemil-meric', name: 'Cemil Meriç', slug: 'cemil-meric', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-cakmak', name: 'Çakmak', slug: 'cakmak', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-camlik', name: 'Çamlık', slug: 'camlik', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-dumlupinar', name: 'Dumlupınar', slug: 'dumlupinar', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-elmalikent', name: 'Elmalıkent', slug: 'elmalikent', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-esenevler', name: 'Esenevler', slug: 'esenevler', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-esenkent', name: 'Esenkent', slug: 'esenkent', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-esensehir', name: 'Esenşehir', slug: 'esensehir', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-fatih-sultan-mehmet', name: 'Fatih Sultan Mehmet', slug: 'fatih-sultan-mehmet', districtId: 'umraniye', districtName: 'Ümraniye', aliases: ['FSM'] },
  { id: 'umraniye-finanskent', name: 'Finanskent', slug: 'finanskent', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-hekimkasi', name: 'Hekimbaşı', slug: 'hekimbasi', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-huzur', name: 'Huzur', slug: 'huzur', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-ihlamurkuyu', name: 'Ihlamurkuyu', slug: 'ihlamurkuyu', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-inkilap', name: 'İnkılap', slug: 'inkilap', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-istiklal', name: 'İstiklal', slug: 'istiklal', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-kazim-karabekir', name: 'Kazım Karabekir', slug: 'kazim-karabekir', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-madenler', name: 'Madenler', slug: 'madenler', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-mehmet-akif', name: 'Mehmet Akif', slug: 'mehmet-akif', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-namik-kemal', name: 'Namık Kemal', slug: 'namik-kemal', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-necip-fazil', name: 'Necip Fazıl', slug: 'necip-fazil', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-parseller', name: 'Parseller', slug: 'parseller', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-site', name: 'Site', slug: 'site', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-serifali', name: 'Şerifali', slug: 'serifali', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-tantavi', name: 'Tantavi', slug: 'tantavi', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-tatlisu', name: 'Tatlısu', slug: 'tatlisu', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-tepeustu', name: 'Tepeüstü', slug: 'tepeustu', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-topagaci', name: 'Topağacı', slug: 'topagaci', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-yamanevler', name: 'Yamanevler', slug: 'yamanevler', districtId: 'umraniye', districtName: 'Ümraniye' },
  { id: 'umraniye-yukari-dudullu', name: 'Yukarı Dudullu', slug: 'yukari-dudullu', districtId: 'umraniye', districtName: 'Ümraniye', aliases: ['Dudullu'] }
];

export const ATASEHIR_NEIGHBORHOODS: Neighborhood[] = [
  { id: 'atasehir-asik-veysel', name: 'Aşık Veysel', slug: 'asik-veysel', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-ataturk', name: 'Atatürk', slug: 'ataturk', districtId: 'atasehir', districtName: 'Ataşehir', notes: 'Ataşehir Atatürk Mahallesi' },
  { id: 'atasehir-barbaros', name: 'Barbaros', slug: 'barbaros', districtId: 'atasehir', districtName: 'Ataşehir', notes: 'Finans Merkezi çevresi' },
  { id: 'atasehir-esatpasa', name: 'Esatpaşa', slug: 'esatpasa', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-ferhatpasa', name: 'Ferhatpaşa', slug: 'ferhatpasa', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-fetih', name: 'Fetih', slug: 'fetih', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-icerenkoy', name: 'İçerenköy', slug: 'icerenkoy', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-inonu', name: 'İnönü', slug: 'inonu', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-kayisdagi', name: 'Kayışdağı', slug: 'kayisdagi', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-kucukbakkalkoy', name: 'Küçükbakkalköy', slug: 'kucukbakkalkoy', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-mevlana', name: 'Mevlana', slug: 'mevlana', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-mimar-sinan', name: 'Mimar Sinan', slug: 'mimar-sinan', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-mustafa-kemal', name: 'Mustafa Kemal', slug: 'mustafa-kemal', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-ornek', name: 'Örnek', slug: 'ornek', districtId: 'atasehir', districtName: 'Ataşehir' },
  { id: 'atasehir-yenicamlica', name: 'Yeniçamlıca', slug: 'yenicamlica', districtId: 'atasehir', districtName: 'Ataşehir', aliases: ['Yeni Çamlıca'] },
  { id: 'atasehir-yenisahra', name: 'Yenisahra', slug: 'yenisahra', districtId: 'atasehir', districtName: 'Ataşehir', aliases: ['Yeni Sahra'] },
  { id: 'atasehir-yenisehir', name: 'Yenişehir', slug: 'yenisehir', districtId: 'atasehir', districtName: 'Ataşehir' }
];

export const ALL_NEIGHBORHOODS: Neighborhood[] = [
  ...UMRANIYE_NEIGHBORHOODS,
  ...ATASEHIR_NEIGHBORHOODS
];
