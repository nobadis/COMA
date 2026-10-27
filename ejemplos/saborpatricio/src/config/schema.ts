/**
 * Datos estructurados (schema.org) del negocio, compartidos por todos los layouts.
 */
import { site, igLink, productGroups } from './site';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const jsonLd = ({ base, canonical, title, description }: { base: URL | string; canonical: string; title: string; description: string }) => {
  const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    legalName: site.legal.company,
    taxID: site.legal.cif,
    slogan: site.tagline,
    description: 'Empanadas argentinas clásicas y gourmet elaboradas en nuestro obrador de Mallorca, postres argentinos y catering, en Cala Major, Palma de Mallorca.',
    url: site.url,
    image: new URL('/og.jpg', base).href,
    logo: new URL('/icon-512.png', base).href,
    telephone: site.phone,
    email: site.legal.email,
    servesCuisine: ['Argentina', 'Empanadas'],
    priceRange: '€',
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    sameAs: [igLink],
    knowsLanguage: ['es'],
    acceptsReservations: false,
    hasMenu: {
      '@type': 'Menu',
      '@id': `${site.url}/carta/#menu`,
      url: `${site.url}/carta/`,
      inLanguage: 'es',
      hasMenuSection: productGroups.map((group) => ({
        '@type': 'MenuSection',
        name: group.name,
        hasMenuItem: group.items.map((name) => ({ '@type': 'MenuItem', name })),
      })),
    },
    ...(site.hours.length
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `https://schema.org/${dayNames[h.day]}`,
            opens: h.open,
            closes: h.close,
          })),
        }
      : {}),
  };
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      restaurant,
      { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, inLanguage: 'es', publisher: { '@id': `${site.url}/#restaurant` } },
      { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: 'es', isPartOf: { '@id': `${site.url}/#website` }, about: { '@id': `${site.url}/#restaurant` } },
    ],
  };
  return JSON.stringify(graph).replace(/</g, '\\u003c');
};
