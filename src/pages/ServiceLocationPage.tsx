import { AlertTriangle, ArrowRight, Check, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { getService, type Service } from '@/data/services';
import {
  getServiceLocationPage,
  type ServiceContentSection,
  type ServiceLocationPage as LocationPage,
} from '@/data/serviceLocationPages';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FaqList from '@/components/ui/FaqList';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServiceLocationPage() {
  const { slug = '' } = useParams();
  const page = getServiceLocationPage(slug);
  const service = page ? getService(page.serviceSlug) : undefined;

  if (!page || !service) return <NotFoundPage />;
  return <ServiceLocationContent page={page} service={service} />;
}

function ServiceLocationContent({ page, service }: { page: LocationPage; service: Service }) {
  const path = `/${page.slug}`;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: `${service.name} in Elizabeth, NJ` },
  ];

  useSeo({
    title: page.title,
    description: page.description,
    path,
    schemaNodes: [
      serviceSchema({
        name: service.name,
        serviceType: service.name,
        description: page.description,
        slug: page.slug,
        image: service.image,
      }),
      breadcrumbListSchema(breadcrumbs, path),
    ],
  });

  const related = page.relatedSlugs.flatMap((relatedSlug) => {
    const relatedPage = getServiceLocationPage(relatedSlug);
    const relatedService = relatedPage ? getService(relatedPage.serviceSlug) : undefined;
    return relatedPage && relatedService ? [{ page: relatedPage, service: relatedService }] : [];
  });

  const faqMuted = page.sections.length % 2 === 0;
  const relatedMuted = !faqMuted;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.h1} description={page.heroDescription ?? service.summary}>
        <CallButton />
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Explore Water Damage Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="container-page pt-12">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20 md:aspect-[21/9]"
        />
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl space-y-6">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.5] text-navy-700">
              {paragraph}
            </p>
          ))}
          {page.reviewQuote && (
            <aside
              aria-label="Verified customer feedback"
              className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6 md:p-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-ocean-700">
                  5.0 Verified Google Review — {page.reviewQuote.author}
                </span>
              </div>
              <p className="mt-3 text-base italic leading-[1.5] text-navy-800">
                “{page.reviewQuote.text}”
              </p>
              <Link
                to="/reviews"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-ocean-700 hover:underline"
              >
                Read verified customer reviews
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          )}
        </div>
      </section>

      {page.sections.map((section, index) => (
        <ServiceSectionRenderer
          key={`${section.kind}-${section.eyebrow}`}
          section={section}
          isMuted={index % 2 === 0}
          callLabel={service.callLabel}
        />
      ))}

      <section className={`${faqMuted ? 'bg-navy-50/60' : 'bg-white'} py-20 md:py-24`}>
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title={page.faqHeading} />
          <FaqList items={page.faqs} />
        </div>
      </section>

      <section className={`${relatedMuted ? 'bg-navy-50/60' : 'bg-white'} py-20 md:py-24`}>
        <div className="container-page space-y-8">
          <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">Related services in Elizabeth, NJ</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.page.slug}>
                <Link
                  to={`/${item.page.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-3xl border border-navy-100 bg-white p-7 font-extrabold text-navy-900 transition duration-300 hover:-translate-y-1 hover:border-ocean-300 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  {item.service.name} in Elizabeth, NJ
                  <ArrowRight className="h-5 w-5 shrink-0 text-ocean-600 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/service-areas#elizabeth-nj"
            className="inline-flex items-center gap-2 font-bold text-ocean-700 transition hover:text-ocean-900 hover:underline"
          >
            Read about our Elizabeth, NJ service area
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function ServiceSectionRenderer({
  section,
  isMuted,
  callLabel,
}: {
  section: ServiceContentSection;
  isMuted: boolean;
  callLabel: string;
}) {
  const bgClass = isMuted ? 'bg-navy-50/60' : 'bg-white';

  switch (section.kind) {
    case 'cards':
      return <CardsSection section={section} bgClass={bgClass} />;
    case 'steps':
      return <StepsSection section={section} bgClass={bgClass} />;
    case 'comparison':
      return <ComparisonSection section={section} bgClass={bgClass} />;
    case 'checklist':
      return <ChecklistSection section={section} bgClass={bgClass} callLabel={callLabel} />;
  }
}

function CardsSection({
  section,
  bgClass,
}: {
  section: Extract<ServiceContentSection, { kind: 'cards' }>;
  bgClass: string;
}) {
  const gridCols = section.columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';
  return (
    <section className={`${bgClass} py-20 md:py-24`}>
      <div className="container-page space-y-12">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <ul className={`grid gap-6 ${gridCols}`}>
          {section.items.map((item) => (
            <li key={item.title} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-navy-900">{item.title}</h3>
              <p className="mt-3 leading-[1.5] text-navy-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StepsSection({
  section,
  bgClass,
}: {
  section: Extract<ServiceContentSection, { kind: 'steps' }>;
  bgClass: string;
}) {
  return (
    <section className={`${bgClass} py-20 md:py-24`}>
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-6 lg:sticky lg:top-32">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        </div>
        <ol className="relative space-y-6 border-l-2 border-ocean-100 pl-8">
          {section.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[3.1rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-extrabold text-cyan-200 ring-4 ring-white">
                {index + 1}
              </span>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-navy-900">{step.title}</h3>
                <p className="mt-2 leading-[1.5] text-navy-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ComparisonColumnCard({
  column,
}: {
  column: Extract<ServiceContentSection, { kind: 'comparison' }>['left'];
}) {
  const tone = column.tone ?? 'neutral';
  const cardStyle =
    tone === 'caution'
      ? 'border-amber-200 bg-amber-50/40'
      : tone === 'positive'
        ? 'border-ocean-200 bg-white'
        : 'border-navy-100 bg-white';
  const badgeStyle =
    tone === 'caution'
      ? 'bg-amber-100 text-amber-800'
      : tone === 'positive'
        ? 'bg-cyan-100 text-ocean-700'
        : 'bg-navy-100 text-navy-700';

  return (
    <article className={`rounded-3xl border p-8 shadow-sm md:p-10 ${cardStyle}`}>
      <h3 className="text-2xl font-extrabold text-navy-900">{column.heading}</h3>
      {column.summary && <p className="mt-3 leading-[1.5] text-navy-600">{column.summary}</p>}
      <ul className="mt-6 space-y-4">
        {column.items.map((item) => (
          <li key={item} className="flex gap-3.5 leading-[1.5] text-navy-700">
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${badgeStyle}`}>
              {tone === 'caution' ? (
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Check className="h-4 w-4" aria-hidden="true" />
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ComparisonSection({
  section,
  bgClass,
}: {
  section: Extract<ServiceContentSection, { kind: 'comparison' }>;
  bgClass: string;
}) {
  return (
    <section className={`${bgClass} py-20 md:py-24`}>
      <div className="container-page space-y-12">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonColumnCard column={section.left} />
          <ComparisonColumnCard column={section.right} />
        </div>
      </div>
    </section>
  );
}

function ChecklistSection({
  section,
  bgClass,
  callLabel,
}: {
  section: Extract<ServiceContentSection, { kind: 'checklist' }>;
  bgClass: string;
  callLabel: string;
}) {
  const isWarning = section.tone === 'warning';
  const iconStyle = isWarning ? 'bg-amber-100 text-amber-800' : 'bg-cyan-100 text-ocean-700';
  const Icon = isWarning ? AlertTriangle : Check;

  if (!section.panel) {
    return (
      <section className={`${bgClass} py-20 md:py-24`}>
        <div className="container-page space-y-12">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className={`flex gap-4 rounded-2xl border p-6 shadow-sm ${
                  isWarning ? 'border-amber-200 bg-amber-50/40' : 'border-navy-100 bg-white'
                }`}
              >
                <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconStyle}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="leading-[1.5] text-navy-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgClass} py-20 md:py-24`}>
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <ul className="space-y-4">
            {section.items.map((item) => (
              <li key={item} className="flex gap-4 leading-[1.5] text-navy-700">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconStyle}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-navy-900 p-8 text-white md:p-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold">{section.panel.heading}</h2>
            <ul className="space-y-4">
              {section.panel.items.map((item) => (
                <li key={item} className="flex gap-4 leading-[1.5] text-navy-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-navy-950">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {section.panel.note && (
              <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-[1.5] text-cyan-100">
                {section.panel.note}
              </p>
            )}
          </div>
          <CallButton label={callLabel} className="w-full" />
        </div>
      </div>
    </section>
  );
}
