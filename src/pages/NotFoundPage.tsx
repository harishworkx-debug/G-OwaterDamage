import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | G&OwaterDamage';

    let robotsMeta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow');

    const canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.remove();
    }

    const structuredData = document.head.querySelector<HTMLScriptElement>('#structured-data');
    if (structuredData) {
      structuredData.remove();
    }
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Error 404"
        title="We could not find that page"
        description="The page may have moved or the address may be mistyped. You can head back to our services or call us directly."
      >
        <CallButton />
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Back to home
        </Link>
      </PageHeader>
      <section className="container-page py-16">
        <Link to="/services" className="font-bold text-ocean-700 transition hover:text-ocean-900 hover:underline">
          Browse water damage services
        </Link>
      </section>
      <FinalCta />
    </>
  );
}
