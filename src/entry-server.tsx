import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '@/App';
import { SeoCollectorContext, type SeoHeadData } from '@/lib/seoContext';

export { canonicalRoutes } from '@/lib/routes';

export function render(url: string): { html: string; seo: SeoHeadData } {
  let seo: SeoHeadData = {
    title: 'Water Damage Restoration Elizabeth NJ | G&OwaterDamage',
  };

  const html = renderToString(
    <SeoCollectorContext.Provider
      value={(data) => {
        seo = data;
      }}
    >
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SeoCollectorContext.Provider>,
  );

  return { html, seo };
}
