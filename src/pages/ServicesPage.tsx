import { useSeo } from '@/hooks/useSeo';
import { services } from '@/data/services';
import { breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceCard from '@/components/ui/ServiceCard';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import { business } from '@/data/business';

export default function ServicesPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Services' }];

  useSeo({
    title: 'Water Damage Restoration Services | G&OwaterDamage',
    description:
      'Explore water damage restoration services from G&OwaterDamage, including water removal, flood cleanup, and structural drying. Call 908-677-5006 today.',
    path: '/services',
    schemaNodes: [breadcrumbListSchema(breadcrumbs, '/services')],
  });

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Professional Water Damage Restoration Services"
        description="Explore our full range of water removal services, flood cleanup, and structural drying solutions. Each page below explains common causes, safety steps, and what the restoration work involves."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-16">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">Not sure which service you need?</h2>
            <p className="leading-[1.5] text-navy-600">
              Describe what happened when you call {business.phoneDisplay}. The team will explain which service fits your situation and whether it is available for your property.
            </p>
          </div>
          <CallButton variant="outline" />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
