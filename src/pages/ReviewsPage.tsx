import { useState } from 'react';
import { ExternalLink, Star, ThumbsUp, Share2, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { business } from '@/data/business';
import { customerReviews, reviewsSummary } from '@/data/reviews';
import { breadcrumbListSchema } from '@/lib/schema';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ReviewsPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Reviews' }];

  useSeo({
    title: 'Water Damage Restoration Reviews | G&OwaterDamage',
    description:
      'Read verified water damage restoration reviews for G&OwaterDamage. Explore water restoration customer reviews and restoration company reviews rated 5.0 stars on Google.',
    path: '/reviews',
    schemaNodes: [breadcrumbListSchema(breadcrumbs, '/reviews')],
  });

  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (reviewText: string, author: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Review by ${author} on G&OwaterDamage`,
          text: `"${reviewText}" - ${author}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${reviewText}" - ${author} on G&OwaterDamage`);
      alert('Review copied to clipboard!');
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Customer Reviews and Restoration Experiences"
        description="Read verified water restoration customer reviews and restoration company reviews on Google. Rated 5.0 out of 5 stars based on direct client feedback."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28">
        <div className="container-page space-y-14">
          {/* Summary Box */}
          <div className="grid gap-8 rounded-3xl border border-navy-100 bg-white p-8 shadow-xl shadow-navy-900/5 md:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800">
                <CheckCircle2 className="h-4 w-4 text-amber-600" aria-hidden="true" />
                Verified Google Business Profile
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 md:text-4xl">
                Rated {reviewsSummary.rating.toFixed(1)} out of 5 stars
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-lg font-bold text-navy-800">
                  {reviewsSummary.rating.toFixed(1)} ({reviewsSummary.totalReviews} reviews)
                </span>
              </div>
              <p className="max-w-xl leading-[1.5] text-navy-600">
                We take pride in delivering fast, dependable, and organized water damage restoration and mold remediation to our clients in Elizabeth, Elizabethport, and neighboring New Jersey towns.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl bg-navy-50/70 p-6 sm:flex-row sm:items-center sm:justify-start lg:flex-col lg:items-stretch">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
              >
                <MessageSquarePlus className="h-4 w-4" aria-hidden="true" />
                Write a review
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3.5 text-sm font-bold text-navy-800 transition duration-300 hover:bg-navy-100"
              >
                View our Google Profile
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Section Heading */}
          <SectionHeading
            eyebrow="Google Reviews"
            title="What our clients have to say"
            description="Recent reviews published by real property owners on our Google Maps profile."
          />

          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {customerReviews.map((review) => {
              const isLiked = !!likedReviews[review.id];
              const initial = review.author.charAt(0);

              return (
                <article
                  key={review.id}
                  className="flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Author & Meta */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-700 text-lg font-bold text-white shadow-sm">
                          {initial}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-navy-900">{review.author}</h3>
                          <p className="text-xs text-navy-500">
                            {review.reviewCount} &bull; {review.timeAgo}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-bold text-navy-600">
                        Google
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm leading-relaxed text-navy-700">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Actions: Like & Share */}
                  <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4 text-xs font-semibold text-navy-500">
                    <button
                      type="button"
                      onClick={() => toggleLike(review.id)}
                      className={`inline-flex items-center gap-1.5 transition ${
                        isLiked ? 'font-bold text-ocean-600' : 'hover:text-navy-900'
                      }`}
                    >
                      <ThumbsUp className={`h-3.5 w-3.5 ${isLiked ? 'fill-ocean-600' : ''}`} aria-hidden="true" />
                      <span>{isLiked ? 'Liked' : 'Like'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare(review.text, review.author)}
                      className="inline-flex items-center gap-1.5 transition hover:text-navy-900"
                    >
                      <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Share</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
