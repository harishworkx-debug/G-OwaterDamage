import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_URL = 'https://www.gowaterdamage.org';
const distDir = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const templatePath = path.join(distDir, 'index.html');
const sitemapPath = path.resolve('public/sitemap.xml');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function replaceRequired(source, pattern, replacement, label) {
  if (!pattern.test(source)) {
    throw new Error(`Prerender template pattern failed for: ${label}`);
  }
  return source.replace(pattern, replacement);
}

function buildPageHtml(template, renderedHtml, seo) {
  const safeTitle = escapeHtml(seo.title);
  const safeDesc = escapeHtml(seo.description ?? '');
  let output = template;

  output = replaceRequired(output, /<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`, 'title');
  output = replaceRequired(
    output,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${safeDesc}" />`,
    'meta description',
  );
  output = replaceRequired(
    output,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${safeTitle}" />`,
    'og:title',
  );
  output = replaceRequired(
    output,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${safeDesc}" />`,
    'og:description',
  );

  if (seo.path) {
    const canonicalUrl = `${SITE_URL}${seo.path}`;
    output = replaceRequired(
      output,
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
      'og:url',
    );
    output = replaceRequired(
      output,
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
      'canonical',
    );
  } else {
    output = output.replace(/\s*<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, '');
    output = output.replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, '');
  }

  if (seo.schemaPayload) {
    const safeSchema = seo.schemaPayload.replaceAll('<', '\\u003c');
    output = replaceRequired(
      output,
      /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="structured-data" type="application/ld+json">${safeSchema}</script>`,
      'structured-data',
    );
  } else {
    output = output.replace(/\s*<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, '');
  }

  if (seo.robots) {
    output = replaceRequired(
      output,
      /<\/head>/,
      `  <meta name="robots" content="${escapeHtml(seo.robots)}" />\n  </head>`,
      'robots meta injection',
    );
  }

  output = replaceRequired(output, /<div id="root"><\/div>/, `<div id="root">${renderedHtml}</div>`, 'root container');

  return output;
}

function resolveOutputFile(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const trimmed = route.replace(/^\/+/, '');
  return path.join(distDir, trimmed, 'index.html');
}

function assertSitemapParity(routes) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expectedUrls = routes.map((r) => `${SITE_URL}${r}`);

  const missingInSitemap = expectedUrls.filter((u) => !sitemapUrls.includes(u));
  const extraInSitemap = sitemapUrls.filter((u) => !expectedUrls.includes(u));
  if (missingInSitemap.length > 0 || extraInSitemap.length > 0) {
    throw new Error(
      `Sitemap parity mismatch! Missing: ${missingInSitemap.join(', ')} | Extra: ${extraInSitemap.join(', ')}`,
    );
  }
}

async function main() {
  const template = fs.readFileSync(templatePath, 'utf8');
  const serverEntryUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { render, canonicalRoutes } = await import(serverEntryUrl);

  assertSitemapParity(canonicalRoutes);

  for (const route of canonicalRoutes) {
    const { html, seo } = render(route);
    if (!/<h1[\s>]/.test(html)) {
      throw new Error(`Prerendered HTML for ${route} is missing an <h1> element.`);
    }
    const finalHtml = buildPageHtml(template, html, seo);
    const outFile = resolveOutputFile(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, finalHtml, 'utf8');
  }

  const notFoundRender = render('/404-not-found-route-check');
  const notFoundHtml = buildPageHtml(template, notFoundRender.html, notFoundRender.seo);
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`Prerendered ${canonicalRoutes.length} canonical routes + 404.html successfully.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
