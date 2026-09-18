export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  isVerified: boolean;
  idealFor: string[];
  processSummary: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'oto-cekici',
    title: 'Oto Çekici',
    slug: 'oto-cekici',
    href: '/hizmetler/oto-cekici/',
    icon: 'tow-truck',
    shortDescription: 'Arıza, kaza veya nakil ihtiyacı olan binek ve hafif araçların güvenli platformlu çekici araçlarıyla taşınması.',
    fullDescription: 'Ümraniye ve Ataşehir genelinde motor arızası, mekanik problem, yakıt tükenmesi veya muayene/servis nakli gibi durumlarda aracınızın uygun taşıma aracıyla güvenle hedef noktaya ulaştırılması hizmetidir.',
    isVerified: true,
    idealFor: [
      'Motor veya mekanik arıza nedeniyle çalışmayan araçlar',
      'Yürür aksamında arıza bulunmayan nakil araçları',
      'Servis, tamirhane veya ekspertiz merkezine taşınacak araçlar',
      'Şehir içi güvenli araç transferleri'
    ],
    processSummary: [
      'Konum ve araç modeli bilgisi alınır.',
      'Aracın tekerleklerinin dönüp dönmediği kontrol edilir.',
      'Platforma kontrollü yükleme yapılarak emniyet kemerleriyle sabitlenir.',
      'Belirlenen servis veya adrese teslim edilir.'
    ]
  },
  {
    id: 'oto-kurtarma',
    title: 'Oto Kurtarma',
    slug: 'oto-kurtarma',
    href: '/hizmetler/oto-kurtarma/',
    icon: 'crane-recovery',
    shortDescription: 'Yoldan çıkan, şarampole kayan, kilitli kalan veya özel donanım gerektiren zorlu durumlar için kurtarma desteği.',
    fullDescription: 'Standart çekici müdahalesinin yetersiz kaldığı, aracın şarampole kaydığı, tekerleklerinin kilitlendiği, dar sokakta veya otoparkta kaldığı durumlarda vinç ve özel sabitleme ekipmanları ile yapılan profesyonel kurtarma operasyonudur.',
    isVerified: true,
    idealFor: [
      'Tekerleği kilitlenen veya yürümeyen araçlar',
      'Kaza sonrası zor pozisyonda kalan araçlar',
      'Yol dışına veya çamura saplanmış araçlar',
      'Özel vinç veya aparat desteği gerektiren durumlar'
    ],
    processSummary: [
      'Olay yeri fiziksel riskleri ve aracın açısı değerlendirilir.',
      'Gereken kurtarma ekipmanı (vinç, makara, özel aparatlar) seçilir.',
      'Araca ek hasar vermeden güvenli konuma çekilir.',
      'Uygun platforma yüklenerek transfer planlanır.'
    ]
  }
];

export interface UnverifiedServiceNote {
  title: string;
  sourceNote: string;
  status: string;
}

export const unverifiedServiceNotes: UnverifiedServiceNote[] = [
  {
    title: 'Akü Takviye Hizmeti',
    sourceNote: 'Marka ambleminde "Akü Takviye - Akü Değişimi" yer almaktadır.',
    status: 'İşletme tarafından güncel nöbetçi ekip ve operasyonel teyit beklenmektedir.'
  },
  {
    title: 'Lastik Yol Yardım',
    sourceNote: 'Marka ambleminde "Lastik Yol Yardım - Lastik Değişimi" yer almaktadır.',
    status: 'Yol üzeri seyyar lastik tamiri kapsamı teyit edilene kadar bilgi amaçlı sunulur.'
  },
  {
    title: 'Motosiklet & Hafif Ticari Taşıma',
    sourceNote: 'Operasyonel ekipman uygunluğuna bağlıdır.',
    status: 'Görüşme sırasında araç boyutuna göre değerlendirilir.'
  }
];
