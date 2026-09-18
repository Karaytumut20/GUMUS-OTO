export interface RoadItem {
  name: string;
  category: 'Otoyol / Çevreyolu' | 'Ana Arter' | 'Sanayi & Ticaret Bölgesi';
  districtsInvolved: string[];
  keyNodes: string[];
  description: string;
  driverAdvice: string;
}

export const roadsData: RoadItem[] = [
  {
    name: 'TEM (O-2) Otoyolu & Bağlantıları',
    category: 'Otoyol / Çevreyolu',
    districtsInvolved: ['Ümraniye', 'Ataşehir'],
    keyNodes: ['Çamlıca Gişeleri Çevresi', 'Ataşehir Kavşağı', 'Dudullu TEM Çıkışı', 'Çakmak Bağlantısı'],
    description: 'Anadolu Yakası’nın ana transit omurgası olan TEM güzergahında, özellikle iş çıkış saatlerinde ve gişe ayrımlarında yaşanan arızalarda emniyet şeridi güvenliği önceliklidir.',
    driverAdvice: 'Aracınızı mümkünse en sağ emniyet şeridine alın, dörtlü flaşörleri yakın, araçtan inerek bariyer arkasında güvenli alanda bekleyin ve konum pini paylaşın.'
  },
  {
    name: 'D-100 (E-5) Karayolu & Kozyatağı Aksı',
    category: 'Otoyol / Çevreyolu',
    districtsInvolved: ['Ataşehir'],
    keyNodes: ['Yenisahra Ayrımı', 'Kozyatağı Kavşağı', 'Bostancı Köprüsü Bağlantısı', 'İçerenköy Çıkışı'],
    description: 'Ataşehir güney sınırını oluşturan D-100 aksı, yoğun trafik akışına sahiptir. Yan yol ve ana yol ayrımlarında doğru konum vermek çekicinin size ulaşma süresini doğrudan belirler.',
    driverAdvice: 'Gidiş yönünüzü (Kadıköy yönü veya Kartal yönü) ve en yakın tabela veya üst geçit adını mutlaka iletin.'
  },
  {
    name: 'Şile Otoyolu (Ümraniye Geçişi)',
    category: 'Otoyol / Çevreyolu',
    districtsInvolved: ['Ümraniye'],
    keyNodes: ['Tepeüstü Kavşağı', 'Ihlamurkuyu Ayrımı', 'Çakmak Köprüsü', 'Madenler / Çekmeköy Sınırı'],
    description: 'Ümraniye merkezinden doğu yönüne bağlanan Şile Otoyolu boyunca köprülü kavşaklar ve tünel girişleri kritik müdahale noktalarıdır.',
    driverAdvice: 'Tünel içi veya viraj çıkışında kaldıysanız reflektörünüzü en az 100-150 metre geriye yerleştirerek diğer sürücüleri uyarın.'
  },
  {
    name: 'Dudullu Bağlantı Yolu & Alemdağ Caddesi',
    category: 'Ana Arter',
    districtsInvolved: ['Ümraniye'],
    keyNodes: ['Aşağı Dudullu Meydanı', 'Yukarı Dudullu Çevresi', 'Tavukçuyolu Caddesi', 'Necip Fazıl Bulvarı'],
    description: 'Ümraniye iç kesimlerini TEM ve metro güzergahına bağlayan en hareketli arterdir. Işıklı kavşaklar ve minibüs güzergahları üzerinde araç akışı yoğundur.',
    driverAdvice: 'Bulunduğunuz cadde numarasını veya en yakın dükkan/metro istasyonu tabelasını ek bilgi olarak paylaşın.'
  },
  {
    name: 'İstanbul Finans Merkezi & Barbaros Çevresi',
    category: 'Sanayi & Ticaret Bölgesi',
    districtsInvolved: ['Ataşehir', 'Ümraniye'],
    keyNodes: ['Finans Merkezi Ana Giriş', 'Ataşehir Bulvarı', 'Barbaros Mahallesi Plazalar Bölgesi'],
    description: 'Ataşehir ve Ümraniye sınırında yükselen finans ve iş merkezi aksında yer altı otoparkları, güvenlik geçişleri ve özel ring yolları bulunmaktadır.',
    driverAdvice: 'Aracınız kapalı otoparkta kaldıysa tavan yüksekliğini ve çekicinin girebileceği otopark katını (Örn: -2. kat) önceden bildirin.'
  },
  {
    name: 'Sanayi Siteleri: İMES, DES, MODOKO & YEDPA',
    category: 'Sanayi & Ticaret Bölgesi',
    districtsInvolved: ['Ümraniye', 'Ataşehir'],
    keyNodes: ['İMES Sanayi Sitesi', 'DES Sanayi Sitesi', 'MODOKO Mobilyacılar Çarşısı', 'YEDPA Ticaret Merkezi'],
    description: 'Bölgenin en büyük ticaret ve küçük sanayi bölgeleridir. Bu bölgeler resmî mahalle değil, organize sanayi ve ticaret siteleridir; oto tamir ve yedek parça noktalarına yakındır.',
    driverAdvice: 'Sanayi sitesi içindeki kapı numarası (Örn: İMES A Kapısı, 12. Sokak No: 8) veya ilgili blok adını detaylı iletin.'
  }
];
