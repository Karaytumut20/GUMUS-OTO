export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const headerNav: NavItem[] = [
  { label: "Hizmetler", href: "/hizmetler/" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri/" },
  { label: "Yol ve Bağlantılar", href: "/yol-ve-baglanti-noktalari/" },
  { label: "Fiyat Faktörleri", href: "/cekici-ucretini-etkileyen-faktorler/" },
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "İletişim", href: "/iletisim/" }
];

export const footerNav = {
  services: [
    { label: "Tüm Hizmetler", href: "/hizmetler/" },
    { label: "Oto Çekici", href: "/hizmetler/oto-cekici/" },
    { label: "Oto Kurtarma", href: "/hizmetler/oto-kurtarma/" },
    { label: "Fiyatı Etkileyen Faktörler", href: "/cekici-ucretini-etkileyen-faktorler/" }
  ],
  regions: [
    { label: "Tüm Hizmet Bölgeleri", href: "/hizmet-bolgeleri/" },
    { label: "Ümraniye Çekici (35 Mahalle)", href: "/umraniye-cekici/" },
    { label: "Ataşehir Çekici (17 Mahalle)", href: "/atasehir-cekici/" },
    { label: "Yol ve Bağlantı Noktaları", href: "/yol-ve-baglanti-noktalari/" }
  ],
  corporate: [
    { label: "Hakkımızda", href: "/hakkimizda/" },
    { label: "İletişim & Harita", href: "/iletisim/" },
    { label: "Gizlilik Politikası", href: "/gizlilik/" }
  ]
};
