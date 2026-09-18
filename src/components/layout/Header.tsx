'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { businessConfig } from '@/config/business';
import { headerNav } from '@/config/navigation';
import { getPhoneHref } from '@/lib/urls';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const phoneHref = getPhoneHref();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Gümüş Oto Kurtarma ana sayfa">
          <Image src={businessConfig.logoPath} alt="" width={50} height={50} priority />
          <span><strong>GÜMÜŞ</strong><small>OTO KURTARMA</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Ana menü">
          {headerNav.slice(0, 5).map((item) => <Link key={item.href} className={pathname === item.href ? 'active' : ''} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="header-contact" href={phoneHref || '/iletisim/'}><span>{phoneHref ? 'HEMEN ARA' : 'İLETİŞİM'}</span><b>{businessConfig.phoneDisplay || 'Konum gönder'}</b></Link>
          <button ref={buttonRef} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}><span/><span/></button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobil menü">
          <nav>{headerNav.map((item, index) => <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}</Link>)}</nav>
          <Link href="/iletisim/" className="mobile-menu-contact">Konum ve araç bilgisi gönder <b>→</b></Link>
        </div>
      )}
    </header>
  );
}
