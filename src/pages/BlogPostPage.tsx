import { AlertTriangle, ArrowLeft, ArrowRight, Check, Clock, Info } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { blogPosts, getBlogPost, type ArticleSegment, type BlogPost } from '@/data/blogPosts';
import { business } from '@/data/business';
import { getService } from '@/data/services';
import { articleSchema, breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import NotFoundPage from '@/pages/NotFoundPage';

export default function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <NotFoundPage />;
  return <BlogPostContent post={post} />;
}

function BlogPostContent({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}`;
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: post.title },
  ];

  useSeo({
    title: post.seoTitle,
    description: post.metaDescription,
    path,
    schemaNodes: [
      articleSchema({
        title: post.title,
        description: post.metaDescription,
        slug: post.slug,
        datePublished: post.publishedDate,
      }),
      breadcrumbListSchema(breadcrumbs, path),
    ],
  });

  const relatedServices = post.relatedServiceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const otherPosts = blogPosts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} description={post.summary}>
        <CallButton />
        <Link
          to="/blog"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All Guides
        </Link>
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <article className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-4 border-b border-navy-100 pb-6 text-sm font-semibold text-navy-500">
              <time dateTime={post.publishedDate}>Published {post.displayDate}</time>
              <span aria-hidden="true">&middot;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-ocean-600" aria-hidden="true" />
                {post.readTime}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span>By {business.name} ({business.locality}, {business.region})</span>
            </div>

            <div className="space-y-5">
              {post.intro.map((segments, idx) => (
                <p key={`intro-${idx}`} className="text-lg leading-[1.65] text-navy-800">
                  <ParagraphSegments segments={segments} />
                </p>
              ))}
            </div>

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-5 pt-2">
                <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((segments, idx) => (
                  <p key={`${section.heading}-p-${idx}`} className="leading-[1.7] text-navy-700">
                    <ParagraphSegments segments={segments} />
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-[1.6] text-navy-700">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <aside
                    className={`flex gap-4 rounded-2xl border p-6 ${
                      section.callout.tone === 'safety'
                        ? 'border-amber-200 bg-amber-50/60'
                        : 'border-ocean-200 bg-ocean-50/60'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                        section.callout.tone === 'safety'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-cyan-100 text-ocean-800'
                      }`}
                    >
                      {section.callout.tone === 'safety' ? (
                        <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Info className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-navy-900">{section.callout.title}</h3>
                      <p className="text-sm leading-[1.6] text-navy-700 md:text-base">{section.callout.text}</p>
                    </div>
                  </aside>
                )}
              </section>
            ))}

            <section className="rounded-3xl border border-navy-100 bg-navy-50/60 p-8">
              <h2 className="text-xl font-extrabold text-navy-900">Key Takeaways</h2>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-3 leading-[1.6] text-navy-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-6 rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/15">
              <h2 className="text-xl font-extrabold">Need water help right now?</h2>
              <p className="text-sm leading-[1.6] text-navy-100">
                Talk directly with {business.name} at {business.addressLine}. Describe where the water started and we will review next steps cleanly by phone.
              </p>
              <CallButton className="w-full" />
            </div>

            {relatedServices.length > 0 && (
              <div className="space-y-4 rounded-3xl border border-navy-100 bg-navy-50/50 p-7">
                <h2 className="text-lg font-extrabold text-navy-900">Related restoration services</h2>
                <ul className="space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={service.path}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-navy-100 bg-white px-5 py-3.5 text-sm font-extrabold text-navy-900 transition hover:border-ocean-300 hover:text-ocean-800"
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
          </aside>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="bg-navy-50/60 py-16 md:py-20">
          <div className="container-page space-y-8">
            <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">More homeowner guides</h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {otherPosts.map((other) => (
                <li key={other.slug}>
                  <Link
                    to={`/blog/${other.slug}`}
                    className="group flex h-full flex-col justify-between gap-4 rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-ocean-300 hover:shadow-lg"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-ocean-700">
                        {other.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-navy-900">{other.title}</h3>
                      <p className="text-sm leading-[1.6] text-navy-600">{other.summary}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-ocean-700">
                      Read article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}

function ParagraphSegments({ segments }: { segments: ArticleSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        typeof segment === 'string' ? (
          <span key={`txt-${index}`}>{segment}</span>
        ) : (
          <Link
            key={`lnk-${segment.to}-${index}`}
            to={segment.to}
            className="font-bold text-ocean-700 underline decoration-ocean-300 underline-offset-2 transition hover:text-ocean-900"
          >
            {segment.label}
          </Link>
        ),
      )}
    </>
  );
}

