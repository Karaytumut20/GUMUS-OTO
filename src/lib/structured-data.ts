import { businessConfig } from '@/config/business';

export function getLocalBusinessSchema() {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${businessConfig.siteUrl}/#business`,
    name: businessConfig.businessName,
    alternateName: businessConfig.brandName,
    url: businessConfig.siteUrl,
    logo: `${businessConfig.siteUrl}${businessConfig.logoPath}`,
    image: `${businessConfig.siteUrl}/images/og-image.png`,
    areaServed: businessConfig.verifiedServiceAreas.map(area => ({
      '@type': 'AdministrativeArea',
      name: `${area}, İstanbul`
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Oto Çekici ve Kurtarma Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oto Çekici',
            description: 'Ümraniye ve Ataşehir çevresinde arızalı ve nakil araçların güvenli platformlu çekici ile taşınması.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oto Kurtarma',
            description: 'Zorlu şartlarda, kilitli kalan veya yoldan çıkan araçlar için vinç ve aparat destekli kurtarma.'
          }
        }
      ]
    }
  };

  // Yalnızca doğrulanmış veriler eklenir
  if (businessConfig.phoneE164) {
    schema.telephone = businessConfig.phoneE164;
  }

  if (businessConfig.latitude && businessConfig.longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.latitude,
      longitude: businessConfig.longitude
    };
  }

  // İşletme adresi public kabul ediliyorsa eklenir
  if (businessConfig.addressPublic && businessConfig.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address,
      addressLocality: 'Ümraniye',
      addressRegion: 'İstanbul',
      postalCode: '34774',
      addressCountry: 'TR'
    };
  }

  return schema;
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${businessConfig.siteUrl}${item.url}`
    }))
  };
}
