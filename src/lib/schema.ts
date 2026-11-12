import { business } from '@/data/business';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

const SITE_ROOT = `${business.siteUrl}/`;
const ORGANIZATION_ID = `${business.siteUrl}/#organization`;
const WEBSITE_ID = `${business.siteUrl}/#website`;
const LOCAL_BUSINESS_ID = `${business.siteUrl}/#localbusiness`;
const TELEPHONE_E164 = '+1-908-677-5006';

const VERIFIED_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: business.street,
  addressLocality: business.locality,
  addressRegion: business.region,
  postalCode: business.postalCode,
  addressCountry: 'US',
} as const;

const SERVED_CITIES = [
  'Elizabeth',
  'Linden',
  'Roselle',
  'Roselle Park',
  'Hillside',
  'Union',
  'Rahway',
  'Cranford',
  'Newark',
];

export function organizationSchema(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: business.name,
    url: SITE_ROOT,
    logo: `${business.siteUrl}/icon-512.png`,
    telephone: TELEPHONE_E164,
    address: VERIFIED_ADDRESS,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: TELEPHONE_E164,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [business.mapsUrl],
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_ROOT,
    name: business.name,
    description:
      'Water damage restoration company in Elizabeth, NJ providing water extraction, flood cleanup, and structural drying across Elizabeth, Elizabethport, and nearby New Jersey communities.',
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    inLanguage: 'en-US',
  };
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: business.name,
    description:
      'Water Damage Restoration Service at 505 Elizabeth Ave, Elizabethport, NJ 07206. Call 908-677-5006 for phone-confirmed water extraction, flood cleanup, and structural drying.',
    url: SITE_ROOT,
    image: `${business.siteUrl}/icon-512.png`,
    telephone: TELEPHONE_E164,
    hasMap: business.mapsUrl,
    sameAs: [business.mapsUrl],
    address: VERIFIED_ADDRESS,
    areaServed: SERVED_CITIES.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'New Jersey',
      },
    })),
  };
}

export function serviceSchema({
  name,
  serviceType,
  description,
  slug,
  image,
}: {
  name: string;
  serviceType: string;
  description: string;
  slug: string;
  image: string;
}): Record<string, unknown> {
  const url = `${business.siteUrl}/${slug}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `${name} in Elizabeth, NJ`,
    serviceType,
    description,
    url,
    image,
    provider: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: business.name,
      url: SITE_ROOT,
      telephone: TELEPHONE_E164,
    },
    areaServed: {
      '@type': 'City',
      name: 'Elizabeth',
      containedInPlace: {
        '@type': 'State',
        name: 'New Jersey',
      },
    },
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}): Record<string, unknown> {
  const url = `${business.siteUrl}/blog/${slug}`;
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: datePublished,
    image: `${business.siteUrl}/icon-512.png`,
    author: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: business.name,
      url: SITE_ROOT,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: business.name,
      url: SITE_ROOT,
      logo: {
        '@type': 'ImageObject',
        url: `${business.siteUrl}/icon-512.png`,
      },
    },
    inLanguage: 'en-US',
  };
}

export function breadcrumbListSchema(
  items: BreadcrumbItem[],
  currentPath: string,
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${business.siteUrl}${item.to ?? currentPath}`,
    })),
  };
}

