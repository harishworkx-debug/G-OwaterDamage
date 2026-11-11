import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Droplets,
  ExternalLink,
  MapPin,
  Phone,
  Star,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { business } from '@/data/business';
import { customerReviews, reviewsSummary } from '@/data/reviews';
import { getService } from '@/data/services';
import {
  getServiceAreaPage,
  serviceAreas,
  type CoreServiceFocus,
  type ServiceAreaPage as AreaPage,
} from '@/data/serviceAreas';
import { breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FaqList from '@/components/ui/FaqList';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServiceAreaPage() {
  const { slug = '' } = useParams();
  const page = getServiceAreaPage(slug);

  if (!page) return <NotFoundPage />;
  return <ServiceAreaContent page={page} />;
}

function ServiceAreaContent({ page }: { page: AreaPage }) {
  const path = `/${page.slug}`;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: `${page.areaName}, NJ` },
  ];

  useSeo({
    title: page.title,
    description: page.description,
    path,
    schemaNodes: [breadcrumbListSchema(breadcrumbs, path)],
  });

  const nearbyAreas = page.nearbySlugs
    .map((slug) => serviceAreas.find((area) => area.path === `/${slug}`))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  const coreServiceCards: CoreServiceFocus[] = [
    page.coreServices.extraction,
    page.coreServices.drying,
    page.coreServices.floodAndBasement,
    page.coreServices.burstPipe,
  ];

  const additionalServices = page.additionalServiceSlugs
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const featuredReview =
    customerReviews.find((review) => review.id === page.featuredReviewId) ?? customerReviews[0];

  return (
    <>
      <PageHeader eyebrow={page.countyLabel} title={page.h1} description={page.heroDescription}>
        <CallButton />
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Explore Our Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      {/* 2. Unique Introduction & Service Availability Context */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page space-y-14">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-ocean-50 px-4 py-2 text-sm font-bold text-ocean-700">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {page.areaName}, NJ
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 md:text-4xl">{page.introHeading}</h2>
            <div className="space-y-5">
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.6] text-navy-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-navy-100 bg-navy-50/40 p-8 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-navy-900">Typical Property Context</h3>
              <p className="mt-3 leading-[1.6] text-navy-600">{page.housingProfile}</p>
            </article>
            <article className="rounded-3xl border border-navy-100 bg-navy-50/40 p-8 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                <Droplets className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-navy-900">Drainage &amp; Water Conditions</h3>
              <p className="mt-3 leading-[1.6] text-navy-600">{page.watershedAndDrainage}</p>
            </article>
            <article className="rounded-3xl border border-navy-900 bg-navy-900 p-8 text-white shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold">Coverage &amp; Dispatch Availability</h3>
              <p className="mt-3 leading-[1.6] text-navy-100">{page.coverageNote}</p>
              <p className="mt-4 text-xs font-semibold text-cyan-200">
                Dispatch Base: {business.street}, {business.locality}, {business.region} {business.postalCode}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Common Water Damage Situations Relevant to Local Audience */}
      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Local Situations"
            title={page.situationsHeading}
            description={page.situationsIntro}
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {page.localSituations.map((situation) => (
              <li key={situation.title} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy-900">{situation.title}</h3>
                <p className="mt-3 leading-[1.6] text-navy-600">{situation.text}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-xl font-extrabold text-navy-900">{page.considerationsHeading}</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {page.considerations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.6] text-navy-700 md:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4, 5, 6, 7 & 12. Dedicated Service Pillars + Direct Service Page Links */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Services Provided"
            title={page.servicesHeading}
            description={`Explore the dedicated service guides below for detailed steps, or call ${business.phoneDisplay} to confirm dispatch availability for your ${page.areaName} property.`}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {coreServiceCards.map((item) => {
              const primaryService = getService(item.serviceSlug);
              const secondaryService = item.secondaryServiceSlug
                ? getService(item.secondaryServiceSlug)
                : undefined;
              return (
                <article
                  key={item.title}
                  className="flex flex-col justify-between gap-6 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-navy-900">{item.title}</h3>
                    <p className="leading-[1.6] text-navy-600">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 border-t border-navy-100 pt-5">
                    {primaryService && (
                      <Link
                        to={primaryService.path}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-ocean-700 transition hover:text-ocean-900 hover:underline"
                      >
                        {primaryService.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    {secondaryService && (
                      <Link
                        to={secondaryService.path}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-ocean-700 transition hover:text-ocean-900 hover:underline"
                      >
                        {secondaryService.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {additionalServices.length > 0 && (
            <div className="rounded-3xl border border-navy-100 bg-navy-50/60 p-8">
              <h3 className="text-lg font-extrabold text-navy-900">
                Additional related services for {page.areaName} property owners
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {additionalServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={service.path}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-navy-100 bg-white px-5 py-4 text-sm font-extrabold text-navy-900 transition hover:border-ocean-300 hover:text-ocean-800"
                    >
                      <span>{service.name}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-ocean-600 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 8. How the Restoration Process Works */}
      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Restoration Process"
              title={page.processHeading}
              description={page.processDescription}
            />
          </div>
          <ol className="relative space-y-6 border-l-2 border-ocean-100 pl-8">
            {page.processSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[3.1rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-extrabold text-cyan-200 ring-4 ring-white">
                  {index + 1}
                </span>
                <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-navy-900">{step.title}</h3>
                  <p className="mt-2 leading-[1.6] text-navy-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. Why Choose G&OwaterDamage, Supported by Verified Evidence */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Why Choose Us"
              title={page.whyChooseHeading}
              description={`Every dispatch starts directly with our local Elizabethport team at ${business.addressLine}.`}
            />
            <ul className="space-y-5">
              {page.whyChooseReasons.map((reason) => (
                <li
                  key={reason.title}
                  className="flex gap-4 rounded-2xl border border-navy-100 bg-navy-50/40 p-6"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-extrabold text-navy-900">{reason.title}</h3>
                    <p className="leading-[1.6] text-navy-600">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside
            aria-label="Verified company reputation and reviews"
            className="flex flex-col justify-between gap-6 rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/10 md:p-10"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-cyan-200">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Verified Google Business Profile Evidence
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg font-extrabold text-white">
                  {reviewsSummary.rating.toFixed(1)} out of 5 ({reviewsSummary.totalReviews}{' '}
                  {reviewsSummary.platform})
                </p>
              </div>
              <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-base italic leading-[1.6] text-navy-100">
                  “{featuredReview.text}”
                </p>
                <footer className="mt-3 text-sm font-bold text-cyan-200">
                  — {featuredReview.author} ({featuredReview.timeAgo} on Google)
                </footer>
              </blockquote>
              <p className="text-xs leading-[1.6] text-navy-200">
                Verified Google customer reviews reflect overall restoration work across our local service area rather than city-attributed testimonials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-extrabold text-navy-950 transition hover:bg-cyan-200"
              >
                Read All Verified Reviews
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Google Maps Listing
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* 10. Local FAQs */}
      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title={page.faqHeading} />
          <FaqList items={page.faqs} />
        </div>
      </section>

      {/* 11. Local Contact CTA & Nearby Communities */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page space-y-14">
          <div className="flex flex-col gap-8 rounded-3xl border border-ocean-200 bg-ocean-50/50 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ocean-700">
                Direct Dispatch &amp; Contact — {business.phoneDisplay}
              </p>
              <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">{page.contactCtaHeading}</h2>
              <p className="leading-[1.6] text-navy-700">{page.contactCtaText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <CallButton />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-200 bg-white px-6 py-3.5 text-base font-extrabold text-navy-900 transition hover:border-ocean-400 hover:bg-ocean-50"
              >
                Contact Details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {nearbyAreas.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-900">
                Nearby New Jersey communities we also serve
              </h2>
              <ul className="grid gap-4 sm:grid-cols-3">
                {nearbyAreas.map((area) => (
                  <li key={area.path}>
                    <Link
                      to={area.path}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-4 font-bold text-navy-900 transition hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-800"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-ocean-600" aria-hidden="true" />
                        {area.name}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 text-ocean-600 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
