import { blogPosts } from '@/data/blogPosts';
import { serviceAreaPages } from '@/data/serviceAreas';
import { serviceLocationPages } from '@/data/serviceLocationPages';

export const canonicalRoutes: string[] = [
  '/',
  '/services',
  '/service-areas',
  '/about',
  '/reviews',
  '/contact',
  ...serviceLocationPages.map((page) => `/${page.slug}`),
  ...serviceAreaPages.map((page) => `/${page.slug}`),
  '/blog',
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

