import { useSeo } from '@/hooks/useSeo';
import { business } from '@/data/business';
import { breadcrumbListSchema, organizationSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const principles = [
  {
    title: 'Phone-first service',
    text: 'Every conversation starts with a phone call. Describe the water, the rooms involved, and where it came from, and the team will explain what happens next.',
  },
  {
    title: 'Clear about the work',
    text: 'We explain the work involved for your property in plain terms, including what can be dried, cleaned, or replaced, before anything is decided.',
  },
  {
    title: 'Residential and commercial',
    text: 'We help homeowners, landlords, and business owners in Elizabeth respond to flooding, leaks, and other water intrusion.',
  },
];

export default function AboutPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'About Us' }];

  useSeo({
    title: 'About Our Water Damage Restoration Team',
    description:
      'Learn about G&OwaterDamage, a water damage restoration company in Elizabeth, NJ at 505 Elizabeth Ave in Elizabethport. Call our local restoration team at 908-677-5006.',
    path: '/about',
    schemaNodes: [organizationSchema(), breadcrumbListSchema(breadcrumbs, '/about')],
  });

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About G&OwaterDamage"
        description="G&OwaterDamage is a professional restoration company based in Elizabethport. Our local restoration team helps homes and businesses respond to flooding and leaks with direct phone contact and clear, practical guidance."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Who We Are"
            title="A local restoration team serving Elizabeth properties"
            description="G&OwaterDamage is a professional restoration company located at 505 Elizabeth Ave, Elizabethport, NJ 07206. We work on residential and commercial properties affected by flooding, burst pipes, leaks, and storm water."
          />
          <div className="space-y-6 leading-[1.5] text-navy-600">
            <p>
              Water damage tends to get worse with time. Materials that stay wet can warp, stain, and start to smell, and moisture that gets trapped inside walls and floors is often the hardest to fix. That is why we encourage property owners to call as soon as they notice water.
            </p>
            <p>
              Our current services cover water damage restoration, water extraction and removal, and structural drying. Each service page explains the work in more detail, so you can see what applies to your situation before you call.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-28">
        <div className="container-page space-y-12">
          <SectionHeading eyebrow="How We Work" title="What you can expect when you call" />
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy-900">{principle.title}</h3>
                <p className="mt-4 leading-[1.5] text-navy-600">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-navy-900 p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Our services</h2>
            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.path}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 font-bold transition hover:border-cyan-300/60 hover:bg-white/5"
                  >
                    {service.name} in Elizabeth, NJ
                    <ArrowRight className="h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-navy-100 p-8 md:p-12">
            <div className="space-y-4">
              <MapPin className="h-8 w-8 text-ocean-600" aria-hidden="true" />
              <h2 className="text-2xl font-extrabold text-navy-900">Find us in Elizabethport</h2>
              <p className="leading-[1.5] text-navy-600">{business.addressLine}</p>
            </div>
            <CallButton variant="outline" className="w-full" />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
