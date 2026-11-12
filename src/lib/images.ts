import type { ImgHTMLAttributes } from 'react';

export const HIGH_PRIORITY_IMAGE_PROPS = {
  fetchpriority: 'high',
} as ImgHTMLAttributes<HTMLImageElement>;

export function buildPexelsWebpUrl(baseUrl: string, width: number): string {
  const url = new URL(baseUrl);
  url.searchParams.set('auto', 'compress');
  url.searchParams.set('cs', 'tinysrgb');
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('w', String(width));
  url.searchParams.delete('h');
  return url.toString();
}

export function buildPexelsSrcSet(baseUrl: string, widths: number[] = [640, 940, 1280]): string {
  return widths.map((width) => `${buildPexelsWebpUrl(baseUrl, width)} ${width}w`).join(', ');
}
