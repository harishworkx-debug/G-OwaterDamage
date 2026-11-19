import { useContext, useEffect } from 'react';
import { SeoCollectorContext } from '@/lib/seoContext';
import { LANDING_IDENTITY, LANDING_SERVICE_AREAS } from '../data';

interface LandingSeoOptions {
  isRoot?: boolean;
}

const SITE_URL = 'https://www.gowaterdamage.org';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function upsertStructuredData(payload: string) {
  let element = document.head.querySelector<HTMLScriptElement>('#structured-data');
  if (!payload) {
    if (element) element.remove();
    return;
  }
  if (!element) {
    element = document.createElement('script');
    element.id = 'structured-data';
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }
  element.textContent = payload;
}

export function useLandingSeo({ isRoot = true }: LandingSeoOptions = {}) {
  const title = `${LANDING_IDENTITY.fullTitle} | Professional Water Extraction & Cleanup`;
  const description = `Immediate water damage restoration in Elizabeth, NJ. Standing water extraction, structural drying, and basement flood cleanup. Call ${LANDING_IDENTITY.phoneDisplay}.`;
  const canonicalPath = isRoot ? '/' : '/home-page';
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const schemaGraph = [
    {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${canonicalUrl}#localbusiness`,
      name: LANDING_IDENTITY.shortTitle,
      description,
      url: canonicalUrl,
      telephone: '+1-908-677-5006',
      address: {
        '@type': 'PostalAddress',
        streetAddress: LANDING_IDENTITY.streetAddress,
        addressLocality: LANDING_IDENTITY.neighborhood,
        addressRegion: LANDING_IDENTITY.state,
        postalCode: LANDING_IDENTITY.zip,
        addressCountry: 'US',
      },
      areaServed: LANDING_SERVICE_AREAS.map((area) => ({
        '@type': 'City',
        name: area.name.split(' (')[0],
        containedInPlace: {
          '@type': 'State',
          name: 'New Jersey',
        },
      })),
    },
  ];

  const schemaPayload = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  });

  // Synchronous registration for SSR Prerendering (scripts/prerender.mjs)
  const collectSeo = useContext(SeoCollectorContext);
  if (collectSeo) {
    collectSeo({
      title,
      description,
      path: canonicalPath,
      schemaPayload,
      siteName: LANDING_IDENTITY.shortTitle,
    });
  }

  // Client-side DOM hydration and cleanup
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:site_name', LANDING_IDENTITY.shortTitle);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertCanonical(canonicalUrl);
    upsertStructuredData(schemaPayload);

    const robotsMeta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.remove();
    }
  }, [title, description, canonicalUrl, schemaPayload]);
}
