import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FinalCtaBand from './FinalCtaBand';
import StructuredData from '@/components/seo/StructuredData';
import { Neighborhood } from '@/data/neighborhoods';
import { getLocalAreaContext, getLocalKeywords, getNeighborhoodPath } from '@/data/local-seo';
import { businessConfig } from '@/config/business';

export default function NeighborhoodSeoPage({ area }: { area: Neighborhood }) {
  const context = getLocalAreaContext(area);
  const keywords = getLocalKeywords(area);
  const districtPath = `/${area.districtId}-cekici/`;
  const canonical = `${businessConfig.siteUrl}${getNeighborhoodPath(area)}`;
  const districtDetail = area.districtId === 'umraniye'
    ? 'Ümraniye’de mahalle içindeki eğimli ve dar sokaklar ile TEM, Şile Yolu ve Alemdağ Caddesi gibi yoğun bağlantı yolları farklı yükleme koşulları oluşturabilir.'
    : 'Ataşehir’de D-100, TEM bağlantıları, yoğun bulvarlar, rezidans girişleri ve kapalı otoparklar çekici aracının seçiminde farklı erişim koşulları oluşturabilir.';
  const faq = [
    { q: `${area.name} Mahallesi için çekici talebi nasıl oluşturulur?`, a: 'Konum pinini, araç marka-modelini ve aracın hareket edip etmediğini iletin. Uygun araç ve operasyon ayrıntıları görüşmede belirlenir.' },
    { q: `${area.name} çevresinde oto kurtarma desteği istenebilir mi?`, a: 'Yoldan çıkan, tekerleği kilitlenen veya özel yükleme gerektiren araçlar için durum fotoğrafı ve konum bilgisiyle değerlendirme yapılabilir.' },
    { q: 'Çekici ücreti hangi bilgilere göre belirlenir?', a: 'Alış ve bırakış noktası, araç tipi, tekerleklerin durumu ve yükleme alanına erişim birlikte değerlendirilir.' }
  ];
  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: `${area.name} Çekici ve Oto Kurtarma`,
      serviceType: 'Oto çekici ve oto kurtarma',
      provider: { '@type': 'LocalBusiness', name: businessConfig.businessName, url: businessConfig.siteUrl },
      areaServed: { '@type': 'AdministrativeArea', name: `${area.name}, ${area.districtName}, İstanbul` },
      url: canonical,
      description: `${area.name}, ${area.districtName} çevresinde oto çekici, oto kurtarma ve araç nakli talebi için konum ve araç bilgisiyle iletişime geçin.`
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faq.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } }))
    }
  ];
  return <>
    <div className="local-page">
      <div className="local-page-top"><div className="container">
        <Breadcrumb items={[{ label: `${area.districtName} Çekici`, href: districtPath }, { label: `${area.name} Çekici`, href: getNeighborhoodPath(area) }]} />
        <div className="local-hero-grid"><div>
          <p className="subpage-index">{area.districtName.toLocaleUpperCase('tr-TR')} / MAHALLE ÇEKİCİ REHBERİ</p>
          <h1>{area.name}<br/><em>çekici</em></h1>
          <p>{area.name}, {area.districtName} çevresinde aracınız arızalandığında, kaza sonrası hareket etmediğinde veya servise taşınması gerektiğinde konum ve araç durumunu paylaşarak çekici talebi oluşturabilirsiniz.</p>
          <div className="local-actions"><Link href="/iletisim/">Konum ve araç bilgisi gönder <b>→</b></Link><Link href="/cekici-ucretini-etkileyen-faktorler/">Ücret faktörleri</Link></div>
        </div><aside><span>HİZMET ALANI</span><strong>{area.name}</strong><small>{area.districtName} / İstanbul</small><i>OTO ÇEKİCİ · OTO KURTARMA · ARAÇ NAKLİ</i></aside></div>
      </div></div>

      <section className="local-answer"><div className="container local-answer-grid"><div><p className="subpage-index">HIZLI CEVAP</p><h2>{area.name}’de çekici çağırırken üç bilgi yeterli.</h2></div><ol><li><b>01</b><span><strong>Konum</strong>Mahalle, yakın cadde veya doğrudan konum pini.</span></li><li><b>02</b><span><strong>Araç</strong>Marka, model ve araç tipi.</span></li><li><b>03</b><span><strong>Durum</strong>Çalışıyor mu, tekerlekleri dönüyor mu?</span></li></ol></div></section>

      <section className="local-services"><div className="container"><div className="local-section-heading"><div><p className="subpage-index">HİZMETLER</p><h2>{area.name} araç çekici ihtiyaçları</h2></div><p>{context.situation} için doğru yükleme biçimi, aracın fiziksel durumu ve bulunduğu noktaya göre seçilir.</p></div>
        <div className="local-service-grid"><article><span>01</span><h3>Oto Çekici</h3><p>Arıza, mekanik sorun veya planlı servis nakli gereken binek ve hafif araçlar için platformlu taşıma.</p></article><article><span>02</span><h3>Oto Kurtarma</h3><p>Kilitli tekerlek, yol dışına çıkma veya zor konum nedeniyle özel ekipman gerektiren durumlar.</p></article><article><span>03</span><h3>Araç Nakli</h3><p>Servis, ekspertiz, otopark veya belirlenen başka bir adrese planlı araç transferi.</p></article></div>
      </div></section>

      <section className="local-detail-copy"><div className="container"><div className="local-copy-heading"><p className="subpage-index">AYRINTILI BÖLGE REHBERİ</p><h2>{area.name} için doğru çekici nasıl belirlenir?</h2></div><div className="local-copy-columns">
        <div>
          <p>{area.name} Mahallesi’nde çekici ihtiyacı yalnızca aracın çalışıp çalışmamasına göre değerlendirilmez. Aracın bulunduğu yolun genişliği, platformun yaklaşabileceği alan, tekerleklerin dönüp dönmediği, direksiyonun kilitli olup olmadığı ve aracın bırakılacağı nokta birlikte ele alınır. {districtDetail}</p>
          <p>Aracınız motor veya elektrik arızası nedeniyle hareket etmiyorsa marka, model ve araç tipini paylaşmanız ilk adımdır. Kaza sonrası kaporta ya da yürür aksam hasarı varsa hangi tekerleğin sorunlu olduğunu belirtmek gerekir. Araç bodrum katındaki kapalı otoparkta bulunuyorsa giriş yüksekliği, kat bilgisi ve rampanın durumu da uygun ekipmanın belirlenmesine yardımcı olur.</p>
          <p>{area.name} oto çekici talebinde doğrudan konum pini göndermek, benzer isimli cadde ve sokakların karışmasını önler. Konum pinine ek olarak yolun gidiş yönünü, yakın kavşağı veya görünen işletme tabelasını yazmanız ekibin doğru yaklaşım yönünü değerlendirmesini kolaylaştırır.</p>
        </div>
        <div>
          <h3>Hangi durumlarda çekici gerekebilir?</h3>
          <ul><li>Motor, şanzıman veya elektrik arızası nedeniyle çalışmayan araç</li><li>Kaza sonrasında güvenli biçimde hareket ettirilemeyen araç</li><li>Aküsü biten ve yerinde müdahaleyle çalışmayan otomobil</li><li>Tekerleği kilitlenen, lastiği ağır hasar gören veya yürür aksamı bozulan araç</li><li>Servis, ekspertiz, otopark ya da başka adrese taşınacak araç</li><li>Dar sokakta, rampada veya kapalı otoparkta kalan araç</li></ul>
          <p className="local-copy-note"><strong>Bilgi notu:</strong> Müdahale biçimi ve ekip uygunluğu görüşmede netleştirilir. Her araç için aynı yükleme yöntemi kullanılmaz.</p>
        </div>
      </div></div></section>

      <section className="local-route"><div className="container local-route-grid"><div><p className="subpage-index">KONUM TARİFİ</p><h2>Yakın yol ve bilinen noktalar</h2><p>{area.name} Mahallesi’nde konum gönderirken yolun yönünü, son geçtiğiniz kavşağı ve aracın güvenli bir alanda olup olmadığını belirtin.</p></div><div className="local-route-list"><h3>YOLLAR</h3>{context.roads.map((x,i)=><p key={x}><b>0{i+1}</b>{x}</p>)}<h3>BİLİNEN ÇEVRELER</h3>{context.referencePoints.map((x,i)=><p key={x}><b>0{i+1}</b>{x}</p>)}</div></div></section>

      <section className="local-searches"><div className="container"><div className="local-section-heading"><div><p className="subpage-index">ARAMA REHBERİ</p><h2>Sürücülerin kullandığı ifadeler</h2></div><p>Aradığınız ifade farklı olsa da ihtiyaç aynıdır: bulunduğunuz noktaya ve aracın durumuna uygun çekici yönlendirmesi.</p></div><div className="keyword-ledger">{keywords.slice(0,9).map((x,i)=><span key={x}><b>{String(i+1).padStart(2,'0')}</b>{x}</span>)}</div></div></section>

      <section className="local-process"><div className="container"><div className="local-section-heading"><div><p className="subpage-index">TALEP SÜRECİ</p><h2>Konum paylaşımından araç teslimine</h2></div><p>{area.name} çekici talebinin daha hızlı değerlendirilmesi için ilk görüşmede eksiksiz ve kısa bilgi paylaşılması önemlidir.</p></div><div className="local-process-grid">
        <article><span>01</span><div><h3>Bulunduğunuz noktayı iletin</h3><p>WhatsApp konum pini, mahalle adı, yol yönü ve yakın bir referans noktası paylaşın. Aracın emniyet şeridinde, yan yolda, sokakta veya otoparkta bulunduğunu belirtin.</p></div></article>
        <article><span>02</span><div><h3>Aracın durumunu açıklayın</h3><p>Motorun çalışıp çalışmadığını, vitesin boşa geçip geçmediğini ve tekerleklerin dönüp dönmediğini söyleyin. Mümkünse aracın bulunduğu konumu gösteren fotoğraf ekleyin.</p></div></article>
        <article><span>03</span><div><h3>Varış noktasını belirleyin</h3><p>Aracın götürüleceği servis, otopark veya adres belliyse başlangıçta paylaşın. Mesafe ve yol koşulları ücret değerlendirmesinin önemli parçalarıdır.</p></div></article>
        <article><span>04</span><div><h3>Yükleme ve teslim</h3><p>Uygun araç belirlendikten sonra kontrollü yükleme planlanır. Araç sabitlenir ve görüşmede belirtilen teslim noktasına taşınır.</p></div></article>
      </div><div className="local-safety-copy"><h3>Yol üzerinde beklerken güvenlik</h3><p>Aracınız yoğun bir yol veya bağlantı noktasında kaldıysa öncelikle kendi güvenliğinizi sağlayın. Uygunsa dörtlü ikaz lambalarını açın, reflektör kullanımında trafik koşullarını gözetin ve araçtan çıkmanız gerekiyorsa akan trafikten uzak tarafta kalın. Aracı tehlikeli biçimde itmeye ya da teknik bilgi olmadan çekmeye çalışmayın. {area.name} çevresinde çekici talebi verirken aracın trafik akışına etkisini ve bulunduğu şeridi açıkça belirtin.</p></div></div></section>

      <section className="local-nearby"><div className="container"><div className="local-section-heading"><div><p className="subpage-index">YAKIN BÖLGELER</p><h2>{area.districtName} mahalleleri</h2></div><Link href={districtPath}>Tüm {area.districtName} bölgelerini gör →</Link></div><div className="nearby-links">{context.nearby.map(n=><Link key={n.id} href={getNeighborhoodPath(n)}><span>{n.name}</span><b>Çekici →</b></Link>)}</div></div></section>

      <section className="local-faq"><div className="container"><div><p className="subpage-index">SIK SORULANLAR</p><h2>{area.name} çekici hakkında</h2></div><div>{faq.map((x,i)=><article key={x.q}><span>0{i+1}</span><div><h3>{x.q}</h3><p>{x.a}</p></div></article>)}</div></div></section>
    </div>
    {schemas.map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />)}
    <StructuredData breadcrumbs={[{name:'Ana Sayfa',url:businessConfig.siteUrl},{name:`${area.districtName} Çekici`,url:`${businessConfig.siteUrl}${districtPath}`},{name:`${area.name} Çekici`,url:canonical}]} />
    <FinalCtaBand />
  </>;
}
