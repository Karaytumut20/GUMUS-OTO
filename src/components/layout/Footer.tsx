import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';
import { footerNav } from '@/config/navigation';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand"><Image src={businessConfig.logoPath} alt="Gümüş Oto Kurtarma logosu" width={74} height={74} /><div><strong>GÜMÜŞ</strong><span>OTO KURTARMA</span><p>Ümraniye ve Ataşehir’de çekici ve oto kurtarma.</p></div></div>
        <div className="footer-column"><h3>Hizmet</h3>{footerNav.services.slice(0, 3).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="footer-column"><h3>Bölgeler</h3>{footerNav.regions.slice(0, 3).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="footer-column"><h3>Ulaşın</h3><Link href="/iletisim/">İletişim</Link><a href={businessConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">Google Haritalar ↗</a><Link href="/gizlilik/">Gizlilik</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Gümüş Oto Kurtarma</span><span>ÜMRANİYE · ATAŞEHİR · İSTANBUL</span></div>
    </footer>
  );
}
