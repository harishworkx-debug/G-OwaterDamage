import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { business } from '@/data/business';
import { breadcrumbListSchema, localBusinessSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Contact' }];

  useSeo({
    title: 'Contact Water Damage Restoration Elizabeth NJ',
    description:
      'Contact G&OwaterDamage for water damage restoration in Elizabeth, NJ. Call 908-677-5006 for emergency water help at 505 Elizabeth Ave, Elizabethport.',
    path: '/contact',
    schemaNodes: [localBusinessSchema(), breadcrumbListSchema(breadcrumbs, '/contact')],
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact Information"
        title="Contact Our Water Damage Restoration Team"
        description="Need emergency water damage help or ready to request water damage service? Call G&OwaterDamage at 908-677-5006 to discuss leaks, flooding, and coverage for your property."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <a
            href={business.phoneHref}
            className="group flex flex-col justify-between gap-8 rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/20 transition duration-300 hover:-translate-y-1 md:p-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-navy-950">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-200">Phone</p>
              <p className="text-3xl font-extrabold md:text-4xl">{business.phoneDisplay}</p>
              <p className="text-navy-100">Tap to call G&amp;OwaterDamage now.</p>
            </div>
          </a>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-navy-100 bg-white p-8 md:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="space-y-2">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-ocean-600">Address</p>
              <address className="text-xl font-extrabold not-italic text-navy-900">
                {business.street}
                <br />
                {business.locality}, {business.region} {business.postalCode}
                <br />
                United States
              </address>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-2 font-bold text-ocean-700 transition hover:text-ocean-900 hover:underline"
              >
                Open our Google Maps listing
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 pb-20 md:pb-28">
        <div className="container-page space-y-8">
          <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">Find us on the map</h2>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-lg shadow-navy-900/5 md:aspect-[16/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12107.549261372546!2d-74.2170501128418!3d40.654414300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24d9e399a1539%3A0xbfdf7f26fd2209db!2sG%26OwaterDamage!5e0!3m2!1sen!2sin!4v1794106929351!5m2!1sen!2sin"
              title="Map showing G&OwaterDamage at 505 Elizabeth Ave, Elizabethport, NJ"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
