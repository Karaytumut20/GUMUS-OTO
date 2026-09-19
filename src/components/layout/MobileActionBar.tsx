import Link from 'next/link';
import { buildWhatsAppUrl, getPhoneHref } from '@/lib/urls';
import { businessConfig } from '@/config/business';

export default function MobileActionBar() {
  const phoneHref = getPhoneHref();
  const whatsApp = buildWhatsAppUrl({ districtOrNeighborhood: 'Ümraniye / Ataşehir' });
  const mapsUrl = businessConfig.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.businessName + ' Ümraniye')}`;

  return (
    <nav className="mobile-action-bar" aria-label="Hızlı İletişim Menüsü">
      <Link href={phoneHref || '/iletisim/'} className="mobile-btn mobile-btn-call">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span>Ara</span>
      </Link>

      <Link href={whatsApp.url || '/iletisim/'} className="mobile-btn mobile-btn-whatsapp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.97.58 3.86 1.68 5.48L2 22l4.78-1.74c1.55.94 3.34 1.45 5.26 1.45 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.78 14.07c-.24.68-1.2 1.3-1.68 1.38-.45.08-.99.12-3.05-.73-2.35-.97-3.86-3.37-3.98-3.53-.12-.16-.95-1.26-.95-2.41 0-1.15.6-1.71.82-1.95.21-.24.47-.3.62-.3.16 0 .31.002.45.01.14.008.33-.05.52.4.2.47.67 1.63.73 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.35.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.31-.2.53-.12.21.08 1.36.64 1.59.76.24.12.39.18.45.28.06.1.06.57-.18 1.25z"/>
        </svg>
        <span>WhatsApp</span>
      </Link>

      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mobile-btn mobile-btn-map">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
        <span>Yol Tarifi</span>
      </a>
    </nav>
  );
}
