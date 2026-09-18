import Link from 'next/link';
import { buildWhatsAppUrl, getPhoneHref } from '@/lib/urls';

export default function FinalCtaBand() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye / Ataşehir' });
  return <section className="subpage-cta"><div className="container subpage-cta-inner"><div><p>YOLDA MI KALDINIZ?</p><h2>Konum ve araç bilgisiyle başlayın.</h2><span>Uygunluk, tahmini süre ve ücret görüşmede netleşir.</span></div><div className="subpage-cta-actions"><Link href={phoneHref || '/iletisim/'} className="btn btn-primary">{phoneHref ? 'Hemen Ara' : 'İletişime Geç'} <b>→</b></Link><Link href={whatsApp.url || '/iletisim/'} className="btn btn-outline">Konum Gönder</Link></div></div></section>;
}
