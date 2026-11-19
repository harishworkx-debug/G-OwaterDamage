import { ArrowRight, Check } from 'lucide-react';
import { buildPexelsSrcSet, buildPexelsWebpUrl } from '@/lib/images';
import { LANDING_SERVICES } from '../data';
import type { LandingService } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const handleServiceClick = (service: LandingService) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
  };

  return (
    <section id="services" className="bg-white py-20 md:py-28 scroll-mt-20">
      <div className="container-page space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-ocean-700">
            Professional Restoration Solutions
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Targeted Water Damage Mitigation Services
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Every water damage scenario demands a distinct technical approach depending on whether the
            water originates from pressurized plumbing, roof storm runoff, or lower-level groundwater.
          </p>
        </div>

        {/* 6 Responsive Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-ocean-300 hover:shadow-xl hover:shadow-navy-950/10"
            >
              {/* Image with WebP & Dimensions */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
                <img
                  src={buildPexelsWebpUrl(service.image, 940)}
                  srcSet={buildPexelsSrcSet(service.image, [480, 640, 940])}
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 95vw"
                  width={940}
                  height={588}
                  loading="lazy"
                  decoding="async"
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-600">
                    {service.shortDesc}
                  </p>

                  {/* Benefit Checklist */}
                  <ul className="space-y-2 pt-2">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs font-semibold text-navy-700">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="border-t border-navy-100 pt-5">
                  <a
                    href="#contact"
                    onClick={() => handleServiceClick(service)}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-ocean-50 px-4 py-3 text-sm font-extrabold text-ocean-700 transition hover:bg-ocean-100 hover:text-ocean-900"
                  >
                    <span>Request {service.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
