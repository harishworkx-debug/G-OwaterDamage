import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { blogPosts } from '@/data/blogPosts';
import { business } from '@/data/business';
import { breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BlogPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Blog' }];

  useSeo({
    title: 'Water Damage Guides & Blog | G&OwaterDamage',
    description:
      'Practical water damage guides for Elizabeth and New Jersey property owners—covering emergency steps after leaks, hidden moisture signs, and structural drying.',
    path: '/blog',
    schemaNodes: [breadcrumbListSchema(breadcrumbs, '/blog')],
  });

  return (
    <>
      <PageHeader
        eyebrow="Resources & Guides"
        title="Water Damage Restoration Guides & Tips"
        description="Straightforward advice from our Elizabethport team on protecting your property during leaks, storms, and flooding—before small moisture problems turn into structural repairs."
      >
        <CallButton />
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          View Our Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page space-y-12">
          <SectionHeading
            eyebrow="Published Articles"
            title="Helpful guides for Elizabeth & Union County property owners"
            description="Each guide connects directly to the service steps involved when water enters basements, walls, or flooring."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between gap-6 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ocean-300 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-ocean-700">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-50 px-3 py-1">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-navy-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy-900">
                    <Link to={`/blog/${post.slug}`} className="transition hover:text-ocean-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="leading-[1.6] text-navy-600">{post.summary}</p>
                </div>

                <div className="flex items-center justify-between border-t border-navy-100 pt-5 text-sm">
                  <time dateTime={post.publishedDate} className="font-semibold text-navy-500">
                    {post.displayDate}
                  </time>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-extrabold text-ocean-700 transition hover:text-ocean-900 hover:underline"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">
              Have active water on your floor right now?
            </h2>
            <p className="leading-[1.6] text-navy-600">
              Skip reading and call our local team directly at {business.phoneDisplay}. Describe the leak source and rooms affected for immediate safety steps and service availability.
            </p>
          </div>
          <CallButton variant="outline" />
        </div>
      </section>

      <FinalCta />
    </>
  );
}

