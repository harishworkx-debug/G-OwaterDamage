import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { serviceAreas } from '@/data/serviceAreas';
import { serviceLocationPages } from '@/data/serviceLocationPages';
import { services } from '@/data/services';
import { breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FaqList from '@/components/ui/FaqList';
import SectionHeading from '@/components/ui/SectionHeading';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';

const localConsiderations = [
  'Heavy rain and storm flooding can affect low-lying streets and properties, leaving basements and ground floors at risk.',
  'Many homes include basements and lower levels where groundwater and drain backups tend to collect first.',
  'Multi-unit buildings can share plumbing and walls, so a leak in one unit may affect neighboring spaces.',
  'Commercial properties often need water removed quickly so the space can be put back into use.',
];

const areaFaqs = [
  {
    question: 'Do you serve Elizabethport?',
    answer:
      'Yes. Elizabethport is part of Elizabeth, and our office is located at 505 Elizabeth Ave in Elizabethport, NJ 07206.',
  },
  {
    question: 'Do you serve the other towns listed here?',
    answer:
      'Coverage is confirmed by phone for each town. Call 908-677-5006 with your address and the team will tell you whether they can help.',
  },
];

export default function ServiceAreasPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Service Areas' }];

  useSeo({
    title: 'Water Damage Restoration Service Areas in NJ',
    description:
      'Explore G&OwaterDamage water damage restoration service areas near Elizabeth, NJ. Serving Elizabethport and nearby towns—call 908-677-5006 for coverage.',
    path: '/service-areas',
    schemaNodes: [breadcrumbListSchema(breadcrumbs, '/service-areas')],
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Water Damage Restoration Areas We Serve"
        description="Based in Elizabethport, G&OwaterDamage provides water restoration near Elizabeth, NJ and nearby water damage services across surrounding communities. Call to confirm availability for your property."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section id="elizabeth-nj" className="scroll-mt-28 py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-ocean-50 px-4 py-2 text-sm font-bold text-ocean-700">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Main service area
            </span>
            <SectionHeading
              eyebrow="Elizabeth, NJ"
              title="Water damage restoration in Elizabeth and Elizabethport"
              description="Elizabethport is a neighborhood within Elizabeth, and it is where G&OwaterDamage is based at 505 Elizabeth Ave. Most of our local service pages cover Elizabeth as a whole."
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-navy-900">Local considerations for Elizabeth properties</h3>
            <ul className="space-y-4">
              {localConsiderations.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 leading-[1.5] text-navy-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-28">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Towns We Serve"
            title="Water damage restoration by town"
            description="Each town links to its water damage page. Coverage is confirmed by phone for your address."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <li key={area.name}>
                <Link
                  to={area.path}
                  className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ocean-300 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <span className="flex items-center gap-2 font-extrabold text-navy-900">
                    <MapPin className="h-4 w-4 text-ocean-600" aria-hidden="true" />
                    {area.name}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-ocean-700">
                    Water damage in {area.name}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Local Services"
            title="Service pages for Elizabeth, NJ"
            description="Each page covers a specific service in Elizabeth and Elizabethport."
          />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceLocationPages.map((page) => {
              const service = services.find((item) => item.slug === page.serviceSlug);
              return (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="group flex h-full flex-col justify-between gap-6 rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
                  >
                    <div className="space-y-3">
                      <h3 className="text-xl font-extrabold text-navy-900">{service?.name} in Elizabeth, NJ</h3>
                      <p className="leading-[1.5] text-navy-600">{service?.summary}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-extrabold text-ocean-700">
                      Explore {service?.name ?? 'service'}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-extrabold text-navy-900 md:text-4xl">Service area questions</h2>
          <FaqList items={areaFaqs} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
