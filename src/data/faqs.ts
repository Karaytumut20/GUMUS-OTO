export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'genel' | 'ucret' | 'surec' | 'arac';
}

export const faqsData: FaqItem[] = [
  {
    id: 'ilceler',
    category: 'genel',
    question: 'Hangi ilçelerde hizmet veriyorsunuz?',
    answer: 'Ana hizmet odağımız Ümraniye ve Ataşehir ilçeleridir. Bu iki ilçenin tüm mahallelerinde, TEM, D-100 ve Şile Otoyolu bağlantı noktalarında çekici ve oto kurtarma yönlendirmesi yapılmaktadır.'
  },
  {
    id: 'umraniye-mahalleler',
    category: 'genel',
    question: 'Ümraniye’de hangi mahallelerden talep alıyorsunuz?',
    answer: 'Ümraniye Belediyesi mahalle haritalarında yer alan 35 mahallenin (Şerifali, Dudullu, Çakmak, Tepeüstü, Ihlamurkuyu, Atakent, Altınşehir dahil) tamamından talep alınabilmektedir. Konumunuza göre en uygun ekip yönlendirilir.'
  },
  {
    id: 'atasehir-mahalleler',
    category: 'genel',
    question: 'Ataşehir’de hangi mahallelerden talep alıyorsunuz?',
    answer: 'Ataşehir’in 17 mahallesinin (Barbaros, İçerenköy, Küçükbakkalköy, Yenisahra, Ferhatpaşa, Kayışdağı, Atatürk dahil) tüm noktalarından talep kabul edilmektedir.'
  },
  {
    id: 'gerekli-bilgiler',
    category: 'surec',
    question: 'Çekici çağırırken hangi bilgileri paylaşmalıyım?',
    answer: 'Bulunduğunuz tam adres veya konum pini, aracınızın marka/modeli, aracın çalışır veya yürür durumda olup olmadığı ve taşınmasını istediğiniz hedef servis/adres bilgilerini paylaşmanız yeterlidir.'
  },
  {
    id: 'whatsapp-konum',
    category: 'surec',
    question: 'Konumumu WhatsApp üzerinden gönderebilir miyim?',
    answer: 'Evet. WhatsApp üzerinden mevcut konumunuzu (canlı konum veya konum pini) iletmeniz, özellikle otoyol veya ara sokaklarda çekicinin size en kestirme yoldan ulaşmasını kolaylaştırır.'
  },
  {
    id: 'ucret-belirleme',
    category: 'ucret',
    question: 'Çekici ücreti nasıl belirleniyor?',
    answer: 'Ücret; aracın alınacağı nokta ile bırakılacağı nokta arasındaki mesafe, aracın tipi (binek, SUV, hafif ticari), yürür aksamının durumu (kilitli tekerlek, şarampol vb.) ve gereken ekipmana göre telefon görüşmesinde netleştirilir. Sürpriz ek maliyet oluşturulmaz.'
  },
  {
    id: 'tahmini-ulasim',
    category: 'surec',
    question: 'Tahmini ulaşım süresi nasıl öğrenilir?',
    answer: 'Ulaşım süresi; anlık trafik yoğunluğuna, bulunduğunuz arterin durumuna (TEM, E-5 veya mahalle içi) ve uygun çekicinin o andaki konumuna göre çağrı sırasında operatörümüz tarafından dürüstçe bildirilir. Asılsız süre vaatleri verilmez.'
  },
  {
    id: 'arac-calismiyorsa',
    category: 'arac',
    question: 'Aracım çalışmıyorsa ne yapmalıyım?',
    answer: 'Öncelikle kendi can güvenliğinizi sağlayın ve dörtlü flaşörleri açın. Aracın direksiyonunun kilitli olup olmadığını ve vitesin boşa alınıp alınamadığını bize bildirin; operatörümüz makaralı veya vinçli uygun aracı yönlendirecektir.'
  },
  {
    id: 'farkli-servise-tasima',
    category: 'surec',
    question: 'Araç farklı bir servise taşınabilir mi?',
    answer: 'Evet. Aracınızı dilediğiniz yetkili servise, özel tamirhaneye, otoparka veya kendi ikamet adresinize güvenle naklettirebilirsiniz.'
  },
  {
    id: 'otomatik-ve-elektrikli',
    category: 'arac',
    question: 'Otomatik vites veya elektrikli araç için ne bilgi vermeliyim?',
    answer: 'Otomatik vites ve elektrikli araçların çekilmesi sırasında şanzıman ve batarya güvenliği için tekerleklerin askıya alınması veya kayar kasa platforma çekilmesi gerekir. Aracınızın elektrikli veya otomatik olduğunu belirtmeniz doğru ekipman seçimi için kritiktir.'
  }
];
