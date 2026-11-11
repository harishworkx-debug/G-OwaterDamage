import { useEffect } from 'react';
import { business } from '@/data/business';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  schemaNodes?: Record<string, unknown>[];
}

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

export function useSeo({ title, description, path, schemaNodes }: SeoOptions) {
  const schemaPayload =
    schemaNodes && schemaNodes.length > 0
      ? JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaNodes })
      : '';

  useEffect(() => {
    const url = `${business.siteUrl}${path}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertCanonical(url);
    upsertStructuredData(schemaPayload);

    const robotsMeta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.remove();
    }
  }, [title, description, path, schemaPayload]);
}
