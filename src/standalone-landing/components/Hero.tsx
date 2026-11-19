import { ArrowRight, CheckCircle2, MapPin, Phone, Shield } from 'lucide-react';
import { buildPexelsSrcSet, buildPexelsWebpUrl, HIGH_PRIORITY_IMAGE_PROPS } from '@/lib/images';
import { LANDING_IDENTITY } from '../data';

const heroImage =
  'https://images.pexels.com/photos/28447774/pexels-photo-28447774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  const trustBadges = [
    'Direct Dispatch from 505 Elizabeth Ave',
    'Commercial Submersible Pumping',
    'Hospital-Grade LGR Dehumidifiers',
    'Calibrated Moisture Meter Testing',
  ];

  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-navy-950 text-white">
      {/* Background Image with Optimization */}
      <img
        src={buildPexelsWebpUrl(heroImage, 1280)}
        srcSet={buildPexelsSrcSet(heroImage, [640, 940, 1280, 1600])}
        sizes="100vw"
        width={1280}
        height={853}
        loading="eager"
        decoding="async"
        {...HIGH_PRIORITY_IMAGE_PROPS}
        alt="Residential and commercial property water mitigation response in New Jersey"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* High-Contrast Dual Gradients for Readability */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-navy-900/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-sm sm:text-sm">
            <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>Serving Elizabeth, Elizabethport &amp; Union County, NJ</span>
          </div>

          {/* Primary H1 */}
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl text-white">
            {LANDING_IDENTITY.fullTitle}
          </h1>

          {/* Natural Service Description */}
          <p className="max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
            Prompt standing water removal, structural dehumidification, and flooded basement mitigation.
            Direct phone coordination from our service base at {LANDING_IDENTITY.streetAddress} for
            homeowners and commercial facilities across Elizabeth and surrounding communities.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
            <a
              href={LANDING_IDENTITY.phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-base font-extrabold text-navy-950 shadow-lg shadow-cyan-400/20 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-base font-extrabold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
            >
              <span>Request Service Online</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-white/15 pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-200 mb-3 flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-cyan-300" />
              <span>Standard-of-Care Water Mitigation Protocols</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-navy-100">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
