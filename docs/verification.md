# Gümüş Oto Kurtarma — İşletme Verileri Doğrulama Raporu (verification.md)

**Rapor Tarihi:** 18 Eylül 2026  
**Raporu Hazırlayan:** Antigravity Sistem Doğrulama Katmanı  
**Referans URL:** https://maps.app.goo.gl/2oK7V7KXVW2k5Baj6  

---

## 1. Doğrulanmış Bilgiler ve Kaynakları

| Bilgi Alanı | Kayıtlı / Doğrulanan Değer | Kaynak | Durum |
| :--- | :--- | :--- | :--- |
| **Kısa Marka** | Gümüş Oto Kurtarma | Kullanıcı Brifi & Orijinal Logo | Doğrulandı |
| **Resmî İşletme Adı** | Ümraniye Çekici Ataşehir Çekici Gümüş Oto Kurtarma | Google Haritalar Kaydı | Doğrulandı |
| **Koordinatlar** | Enlem: 41.0035652, Boylam: 29.1248068 | Kullanıcı Maps Bağlantısı | Doğrulandı |
| **Maps Bağlantısı** | https://maps.app.goo.gl/2oK7V7KXVW2k5Baj6 | Kullanıcı Tarafından Sağlandı | Doğrulandı |
| **Temel Hizmet Alanı** | Ümraniye ve Ataşehir İlçeleri (İstanbul) | Brif & Haritalar Kaydı | Doğrulandı |
| **Ana Hizmetler** | Oto Çekici ve Oto Kurtarma | İşletme Tanımı | Doğrulandı |
| **Mahalle Kapsamı** | 35 Ümraniye Mahallesi, 17 Ataşehir Mahallesi (52 Mahalle) | Resmî İlçe Belediyeleri Verisi | Doğrulandı |

---

## 2. Eksik ve Doğrulama Bekleyen Kritik Bilgiler

Aşağıdaki veriler brifte belirtilen dürüstlük ve teknik SEO kuralları gereği uydurulmamış veya sahte olarak girilmemiştir. `src/config/business.ts` içinde `null` olarak işaretlenmiştir:

1. **İşletme Telefon Numarası (`phoneDisplay` / `phoneE164`):**
   - **Durum:** Henüz doğrulanmadı (`null`).
   - **Gerekçe:** Rastgele `05xx` numarası uydurulması veya sahte arama bağlantısı üretilmesi yasaklanmıştır.
   - **Arayüz Davranışı:** Arama butonları kullanıcıya durumu açıklayan bir bilgilendirme modalı açar; boş `tel:` bağlantısı oluşturulmaz.
   - **Çözüm:** İşletme gerçek numarasını bildirdiğinde `src/config/business.ts` üzerinden tanımlanacaktır.

2. **İşletme WhatsApp Numarası (`whatsappNumber`):**
   - **Durum:** Henüz doğrulanmadı (`null`).
   - **Gerekçe:** WhatsApp hattının sabit telefonla aynı olduğu varsayılamaz.
   - **Arayüz Davranışı:** WhatsApp mesaj hazırlayıcı form çalışır ve kullanıcıya mesaj taslağını gösterir; doğrudan harici yönlendirme numara teyidi sonrasına saklanır.

3. **7/24 Hizmet Operasyonel Kapsamı (`is24HoursVerified`):**
   - **Durum:** Henüz doğrulanmadı (`false`).
   - **Gerekçe:** Marka ambleminde "7/24 Yol Yardım" ibaresi bulunmakla birlikte, fiilen 24 saat nöbetçi operasyonun sürdürüldüğüne dair operasyonel teyit alınmamıştır. Sitede doğrulanmamış "7/24 Kesintisiz" taahhüdü verilmemiştir.

4. **Fiziksel Açık Adres (`addressPublic`):**
   - **Durum:** Kamuya kapalı (`addressPublic: false`).
   - **Gerekçe:** Google Haritalar arama sorgusunda "Çamlık, Yatay Sokağı NO:44" ifadesi geçmekle birlikte, işletmenin fiziksel müşteri kabul eden bir ofis mi yoksa yalnızca mobil hizmet bölgesi modeliyle mi çalıştığı doğrulanmamıştır. Müşterilerin doğrulanmamış bir fiziksel noktaya gitmesini engellemek için adres public yapılmamıştır.

5. **Alan Adı (Domain):**
   - **Durum:** Örnek referans (`gumusotokurtarma.com`).
   - **Gerekçe:** Alan adının satın alındığı veya aktif olduğu iddia edilmemiştir.

---

## 3. Doğrulanmamış Ek Hizmetler

Marka ambleminde yer alan ancak operasyonel kapsamı teyit edilmemiş hizmetler:
- **Akü Takviye & Değişimi:** Seyyar nöbetçi ekip durumu teyit edilene kadar "Bilgilendirme Amaçlı" olarak sunulmuştur.
- **Lastik Yol Yardım & Değişimi:** Seyyar kompresör ve lastik ekipmanı teyidi beklenmektedir.
- **Motosiklet & Hafif Ticari Taşıma:** Görüşme sırasında araç boyutuna göre değerlendirilmektedir.
