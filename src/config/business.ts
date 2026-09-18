export interface BusinessConfig {
  brandName: string;
  businessName: string;
  siteUrl: string;
  phoneDisplay: string | null;
  phoneE164: string | null;
  whatsappNumber: string | null;
  email: string | null;
  address: string | null;
  addressPublic: boolean;
  latitude: number | null;
  longitude: number | null;
  googleMapsUrl: string;
  openingHours: string | null;
  is24HoursVerified: boolean;
  verifiedServices: string[];
  unverifiedServices: string[];
  verifiedServiceAreas: string[];
  socialLinks: { platform: string; url: string }[];
  logoPath: string;
  verificationNotes: {
    lastVerifiedDate: string;
    verifiedBy: string;
    missingCriticalFields: string[];
  };
}

export const businessConfig: BusinessConfig = {
  brandName: "Gümüş Oto Kurtarma",
  businessName: "Ümraniye Çekici Ataşehir Çekici Gümüş Oto Kurtarma",
  // Örnek alan adı referansı. Satın alındığı iddia edilmez.
  siteUrl: "https://gumus-oto-kurtarma.brave-cove-9820.chatgpt.site",
  
  // KRİTİK VERİ: Telefon numarası işletme tarafından henüz teyit edilmemiştir.
  // Brief gereği sahte numara veya rastgele 05xx YAZILMAZ.
  phoneDisplay: null,
  phoneE164: null,
  
  // WhatsApp numarası telefonla aynı varsayılmaz. Doğrulama bekleniyor.
  whatsappNumber: null,
  
  email: null,
  
  // Google Haritalar arama parametresinde geçen adres; hizmet bölgesi modeli nedeniyle public adres yapılmamıştır.
  address: "Çamlık, Yatay Sokağı NO:44, 34774 Ümraniye / İstanbul",
  addressPublic: false,
  
  // Kullanıcı tarafından sağlanan doğrulanmış koordinatlar
  latitude: 41.0035652,
  longitude: 29.1248068,
  
  googleMapsUrl: "https://maps.app.goo.gl/2oK7V7KXVW2k5Baj6",
  
  // Logoda 7/24 yer alsa da operasyonel doğrulanma yapılmamıştır.
  openingHours: null,
  is24HoursVerified: false,
  
  // Temel hizmet kapsamı
  verifiedServices: ["oto-cekici", "oto-kurtarma"],
  unverifiedServices: [
    "aku-takviye",
    "lastik-yol-yardim",
    "motosiklet-tasima",
    "hafif-ticari-tasima",
    "sehirler-arasi-tasima"
  ],
  
  verifiedServiceAreas: ["Ümraniye", "Ataşehir"],
  
  // Sahte sosyal medya hesabı eklenmez
  socialLinks: [],
  
  logoPath: "/images/gumus-oto-kurtarma-logo.webp",
  
  verificationNotes: {
    lastVerifiedDate: "2026-09-18",
    verifiedBy: "Sistem Teknik İncelemesi",
    missingCriticalFields: [
      "phoneDisplay & phoneE164 (İşletme telefon numarası)",
      "whatsappNumber (İşletme WhatsApp hattı)",
      "is24HoursVerified (7/24 çalışma saatinin operasyonel teyidi)",
      "addressPublic (Fiziksel müşteri kabul noktası mı yoksa yalnızca mobil hizmet bölgesi mi olduğu teyidi)"
    ]
  }
};
