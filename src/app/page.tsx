import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '@/components/ui/Accordion';
import { businessConfig } from '@/config/business';
import { faqsData } from '@/data/faqs';
import { getPhoneHref, buildWhatsAppUrl } from '@/lib/urls';

export const metadata: Metadata = {
  title: 'Ümraniye ve Ataşehir Çekici | Gümüş Oto Kurtarma',
  description: 'Ümraniye ve Ataşehir’de oto çekici ve kurtarma için Gümüş Oto Kurtarma ile iletişime geçin. Konum ve araç bilgilerinize göre hizmet detaylarını öğrenin.',
  alternates: { canonical: '/' },
};

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/></svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function HomePage() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye / Ataşehir' });
  const primaryHref = phoneHref || '/iletisim/';
  const messageHref = whatsApp.url || '/iletisim/';

  return (
    <>
      <section className="home-hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span>ÜMRANİYE</span><i />ATAŞEHİR</p>
            <h1>Yolda kaldıysanız,<br/><em>konumu tarif edin.</em></h1>
            <p className="hero-lead">Aracınızın nerede ve ne durumda olduğunu söyleyin. Gümüş Oto Kurtarma, çekici ya da kurtarma ihtiyacını bu bilgiye göre netleştirsin.</p>
            <div className="hero-actions">
              <Link href={primaryHref} className="action-primary">
                <span className="action-icon"><PhoneIcon /></span>
                <span><small>{phoneHref ? 'DOĞRUDAN HAT' : 'İLETİŞİM'}</small>{businessConfig.phoneDisplay || 'Hızlı iletişime geç'}</span>
                <span className="action-arrow">→</span>
              </Link>
              <Link href={messageHref} className="action-secondary"><PinIcon /> Konum ve araç bilgisi gönder</Link>
            </div>
            <div className="hero-note"><strong>Ücret ve ulaşım süresi</strong><span>Konum, araç tipi ve yol durumuna göre görüşmede belirlenir.</span></div>
          </div>
          <div className="hero-brand-stage">
            <p className="stage-index">SAHA NO: 34 / ANADOLU YAKASI</p>
            <div className="logo-stage">
              <span className="logo-stage-ring" aria-hidden="true" />
              <Image src={businessConfig.logoPath} alt="Gümüş Oto Kurtarma logosu" width={520} height={520} priority sizes="(max-width: 900px) 78vw, 500px" />
            </div>
            <div className="stage-route"><span>41.0036° K</span><i /><span>29.1248° D</span></div>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Hizmet özeti"><div className="container ticker-inner"><span>OTO ÇEKİCİ</span><i>•</i><span>OTO KURTARMA</span><i>•</i><span>35 ÜMRANİYE MAHALLESİ</span><i>•</i><span>17 ATAŞEHİR MAHALLESİ</span></div></div>
      </section>

      <section className="incident-section" id="hizmetler">
        <div className="container">
          <div className="section-heading split-heading"><div><p className="section-kicker">01 / İHTİYACI BELİRLEYİN</p><h2>Aracın başına ne geldi?</h2></div><p>Çekici talebinde en doğru yönlendirme, kısa ve net bilgiyle başlar. Aracın durumunu seçin; hangi bilgilerin gerektiğini görün.</p></div>
          <div className="incident-list">
            <Link href="/hizmetler/oto-cekici/" className="incident-row"><span className="incident-number">01</span><div><h3>Aracım çalışmıyor</h3><p>Motor, elektrik veya mekanik arıza nedeniyle hareket etmeyen araç.</p></div><span className="incident-tag">OTO ÇEKİCİ</span><Arrow /></Link>
            <Link href="/hizmetler/oto-kurtarma/" className="incident-row"><span className="incident-number">02</span><div><h3>Araç zor konumda kaldı</h3><p>Yoldan çıkan, tekerleği kilitlenen veya özel ekipman gerektiren araç.</p></div><span className="incident-tag">KURTARMA</span><Arrow /></Link>
            <Link href="/iletisim/" className="incident-row"><span className="incident-number">03</span><div><h3>Aracı başka noktaya taşıyacağım</h3><p>Servis, otopark ya da belirttiğiniz adrese planlı araç nakli.</p></div><span className="incident-tag">ARAÇ NAKLİ</span><Arrow /></Link>
          </div>
          <p className="availability-note"><span>!</span> Akü takviyesi ve lastik yol yardım hizmetleri, ekip uygunluğu doğrulanarak görüşme sırasında netleştirilir.</p>
        </div>
      </section>

      <section className="dispatch-section"><div className="container dispatch-grid">
        <div className="dispatch-title"><p className="section-kicker light">02 / DOĞRU BİLGİ, DOĞRU ARAÇ</p><h2>Üç bilgi yeterli.</h2><p>Uzun uzun anlatmanız gerekmez. Ekibin ihtiyacı olan temel bilgiler bunlar.</p><Link href="/iletisim/" className="text-link light">Bilgileri şimdi hazırlayın <Arrow /></Link></div>
        <ol className="dispatch-steps"><li><span>01</span><div><strong>Konum</strong><p>Mahalle, yol adı ya da doğrudan konum pini.</p></div></li><li><span>02</span><div><strong>Araç</strong><p>Marka, model ve mümkünse araç tipi.</p></div></li><li><span>03</span><div><strong>Durum</strong><p>Araç çalışıyor mu, tekerlekler dönüyor mu?</p></div></li></ol>
      </div></section>

      <section className="coverage-section" id="bolgeler"><div className="container">
        <div className="section-heading"><p className="section-kicker">03 / HİZMET BÖLGESİ</p><h2>İki ilçe. 52 mahalle.<br/>Tek bir açık rota.</h2></div>
        <div className="coverage-grid">
          <Link href="/umraniye-cekici/" className="district-panel district-umraniye"><span className="district-code">ÜMR</span><div><p>35 MAHALLE</p><h3>Ümraniye</h3><span>TEM, Şile Yolu, Dudullu ve çevresi</span></div><b>→</b></Link>
          <Link href="/atasehir-cekici/" className="district-panel district-atasehir"><span className="district-code">ATA</span><div><p>17 MAHALLE</p><h3>Ataşehir</h3><span>D-100, Finans Merkezi, İçerenköy ve çevresi</span></div><b>→</b></Link>
        </div>
        <div className="road-line"><span>ANA BAĞLANTILAR</span><div>TEM (O-2)</div><i /><div>D-100 (E-5)</div><i /><div>Şile Yolu</div><i /><div>Dudullu</div><Link href="/yol-ve-baglanti-noktalari/">Yol rehberi ↗</Link></div>
      </div></section>

      <section className="price-section" id="ucret"><div className="container price-grid">
        <div className="price-copy"><p className="section-kicker">04 / ÜCRET BİLGİSİ</p><h2>Tek fiyat yok.<br/>Net hesap var.</h2><p>Çekici ücreti yalnızca kilometreye göre çıkmaz. Aracın bulunduğu yer ve nasıl yükleneceği de hesabı değiştirir.</p><Link href="/cekici-ucretini-etkileyen-faktorler/" className="text-link">Ücret hesabını ayrıntılı görün <Arrow /></Link></div>
        <div className="price-factors"><div><span>01</span><strong>Alış ve bırakış noktası</strong></div><div><span>02</span><strong>Araç tipi ve ölçüsü</strong></div><div><span>03</span><strong>Tekerlek ve yürür aksam durumu</strong></div><div><span>04</span><strong>Yükleme alanına erişim</strong></div></div>
      </div></section>

      <section className="map-record-section"><div className="container map-record-grid"><div><p className="section-kicker light">İŞLETME KAYDI</p><h2>Konumu ve işletme kaydını haritada görün.</h2><p>Güncel işletme bilgileri ve yol tarifi için doğrudan Google Haritalar kaydını açın.</p></div><a href={businessConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-record-link"><PinIcon /><span><small>GOOGLE HARİTALAR</small>İşletme kaydını aç</span><Arrow /></a></div></section>

      <section className="faq-section" id="sss"><div className="container faq-layout"><div className="faq-intro"><p className="section-kicker">05 / KISA CEVAPLAR</p><h2>Yola çıkmadan önce.</h2><p>Çekici çağırırken çoğu sürücünün ilk sorduğu konular.</p></div><Accordion items={faqsData.slice(0, 6)} /></div></section>

      <section className="closing-cta"><div className="container closing-inner"><div><p>GÜMÜŞ OTO KURTARMA</p><h2>Konumu gönderin.<br/><em>Gerisini birlikte netleştirelim.</em></h2></div><Link href={messageHref} className="closing-button"><PinIcon /><span>İletişime geç</span><b>→</b></Link></div></section>
    </>
  );
}
