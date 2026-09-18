import Link from 'next/link';
import { buildWhatsAppUrl, getPhoneHref } from '@/lib/urls';

export default function MobileActionBar() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye / Ataşehir' });
  return <div className="mobile-action-bar"><Link href={phoneHref || '/iletisim/'} className="mobile-call"><span>↗</span>{phoneHref ? 'Hemen Ara' : 'İletişim'}</Link><Link href={whatsApp.url || '/iletisim/'} className="mobile-location">Konum Gönder</Link></div>;
}
