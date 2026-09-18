# Gümüş Oto Kurtarma — Canlı Yayına Alma Kontrol Listesi (launch-checklist.md)

Bu kontrol listesi, web sitesinin statik hosting ortamına yüklenip gerçek kullanıcı trafiğine açılmasından önce işletme sahibi ve teknik ekip tarafından tamamlanması gereken somut eylemleri listeler.

---

## 1. İşletme Verileri (Kritik Alanlar)

- [ ] **Telefon Numarası Doğrulaması:**
  - `src/config/business.ts` dosyasındaki `phoneDisplay` alanına `053X XXX XX XX` biçiminde ve `phoneE164` alanına `+905XXXXXXXXX` biçiminde gerçek işletme numarasını girin.
  - Bu alan güncellendiğinde sitedeki tüm "Hemen Ara" butonları, başlık ve altbilgi otomatik olarak aktif arama bağlantısına dönüşecektir.

- [ ] **WhatsApp Numarası Doğrulaması:**
  - `src/config/business.ts` dosyasındaki `whatsappNumber` alanına uluslararası biçimde (`905XXXXXXXXX`) girin.
  - Bu işlemle birlikte WhatsApp mesaj hazırlayıcı doğrudan işletme sohbet penceresini açacaktır.

- [ ] **Çalışma Saatleri & 7/24 Hizmet Teyidi:**
  - İşletme gece nöbetçi kurtarma ekibi bulunduruyorsa `is24HoursVerified` değerini `true` yapın. Böylece header'da ve içerikte "7/24 Destek" rozetleri aktifleşir.

- [ ] **Açık Adres & Hizmet Modeli Tercihi:**
  - İşletme fiziksel bir ofiste müşteri kabul ediyorsa `addressPublic: true` yapın. Yalnızca sahada mobil çekiciyle hizmet veriyorsa `false` olarak bırakılmalıdır.

---

## 2. Alan Adı ve Statik Hosting Yapılandırması

- [ ] **Alan Adı (Domain) Satın Alma & DNS Yönlendirmesi:**
  - Gerçek alan adı belirlendiğinde `src/config/business.ts` içindeki `siteUrl` adresini ve `public/sitemap.xml`, `public/robots.txt` içindeki domaini güncelleyin.
- [ ] **HTTPS ve SSL Sertifikası:**
  - Cloudflare, Vercel, Netlify veya AWS S3/CloudFront üzerinden ücretsiz SSL sertifikasını etkinleştirin.
- [ ] **Statik Dizin Yükleme:**
  - `npm run build` komutuyla oluşturulan `out/` klasörünün içeriğini statik web sunucunuzun kök dizinine (public_html, www vb.) yükleyin.
- [ ] **404 Hata Sayfası Yönlendirmesi:**
  - Statik sunucunuzun hata yapılandırmasında (Örn: `.htaccess`, `nginx.conf` veya Cloudflare Pages) 404 sayfası olarak `out/404.html` dosyasını tanımlayın. SPA fallback (her şeyi index.html'e yönlendirme) **kullanmayın**.

---

## 3. Google Arama Konsolu ve Harita Entegrasyonu

- [ ] **Google Search Console Doğrulaması:**
  - Sitenizi Search Console'a mülk olarak ekleyin (DNS TXT kaydı veya meta tag ile).
- [ ] **Sitemap Gönderimi:**
  - `https://[alan-adiniz]/sitemap.xml` adresini Google Search Console'a gönderin.
- [ ] **Google İşletme Profili (Google Business Profile) Eşleşmesi:**
  - Google Haritalar profilinizdeki web sitesi alanına bu sitenin URL'sini ekleyin.
  - İşletme profilindeki telefon numarası ile web sitesindeki telefonun birebir aynı (NAP tutarlılığı) olduğunu doğrulayın.

---

## 4. Yayın Öncesi Otomasyon Kontrolü

Yayın almadan önce terminalde aşağıdaki komutu çalıştırarak tüm sistemin yeşil yandığını doğrulayın:

```bash
npm run check:release
```
