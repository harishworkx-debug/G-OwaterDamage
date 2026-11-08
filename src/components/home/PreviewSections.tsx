import { ArrowRight, ExternalLink, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '@/data/business';
import { customerReviews, reviewsSummary } from '@/data/reviews';
import { serviceLocationPages } from '@/data/serviceLocationPages';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';

export function ReviewsPreview() {
  return (
    <section className="bg-navy-900 py-20 text-white md:py-24">
      <div className="container-page space-y-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-lg font-extrabold text-white">{reviewsSummary.rating.toFixed(1)}</span>
              <span className="text-sm font-semibold text-cyan-200">
                ({reviewsSummary.totalReviews} Google Reviews)
              </span>
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">What our customers say</h2>
            <p className="max-w-xl text-navy-200">
              Read real feedback from property owners who called G&amp;OwaterDamage for water damage restoration and flooding cleanup.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-navy-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Write a review
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View all reviews
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {customerReviews.map((review) => {
            const initial = review.author.charAt(0);
            return (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-base font-extrabold text-navy-950">
                        {initial}
                      </div>
                      <div>
                        <p className="font-extrabold text-white">{review.author}</p>
                        <p className="text-xs text-navy-300">
                          {review.reviewCount} &bull; {review.timeAgo}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-200">
                      Google
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-navy-100">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AreasPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving Elizabeth and Elizabethport, NJ"
          description="Our main service area is Elizabeth, including the Elizabethport neighborhood where our office is located."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Link
            to="/service-areas#elizabeth-nj"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/20 transition duration-500 hover:-translate-y-1 md:p-10"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300/15 px-4 py-2 text-sm font-bold text-cyan-100">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Main service area
              </span>
              <h3 className="text-3xl font-extrabold">Elizabeth, NJ</h3>
              <p className="max-w-md leading-[1.5] text-navy-100">
                Water damage restoration, water extraction, and structural drying for homes and businesses across Elizabeth and Elizabethport.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-extrabold text-cyan-200 transition group-hover:text-white">
              See Elizabeth service details
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
          <ul className="grid gap-4">
            {serviceLocationPages.map((page) => {
              const service = services.find((item) => item.slug === page.serviceSlug);
              return (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-white px-6 py-5 font-bold text-navy-900 transition duration-300 hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-800"
                  >
                    {service?.name} in Elizabeth, NJ
                    <ArrowRight className="h-5 w-5 shrink-0 text-ocean-600" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
