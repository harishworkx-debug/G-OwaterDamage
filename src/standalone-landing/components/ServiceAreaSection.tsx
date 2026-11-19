import { MapPin, Navigation } from 'lucide-react';
import { LANDING_IDENTITY, LANDING_SERVICE_AREAS } from '../data';

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-white py-20 md:py-28 scroll-mt-20">
      <div className="container-page space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-ocean-700">
            Local Service Coverage
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Serving Elizabeth &amp; Neighboring Union County Towns
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Based at {LANDING_IDENTITY.streetAddress} in {LANDING_IDENTITY.neighborhood}, technicians
            provide rapid dispatch and standing water extraction to residential and commercial
            properties across the following communities.
          </p>
        </div>

        {/* Primary Hub Spotlight Card + Map Embed */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-stretch">
          {/* Hub Details */}
          <div className="flex flex-col justify-between rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-950/15 md:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/15 px-4 py-2 text-xs font-bold text-cyan-200">
                <Navigation className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <span>Primary Operational Hub</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                {LANDING_IDENTITY.location}
              </h3>
              <p className="text-base leading-relaxed text-navy-200">
                Direct phone coordination for emergency water damage, flood drying, and burst pipe extraction.
                Covering Elizabeth neighborhoods from Elizabethport and Bayway to Elmora, Midtown, and the North End.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                  Service Base Address
                </p>
                <p className="text-base font-extrabold text-white">
                  {LANDING_IDENTITY.fullAddress}
                </p>
                <p className="text-xs text-navy-300">
                  Phone Consultations &amp; Dispatch: {LANDING_IDENTITY.phoneDisplay}
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-4 text-base font-extrabold text-navy-950 shadow-md transition hover:bg-cyan-200"
              >
                Call for Immediate Elizabeth Dispatch
              </a>
            </div>
          </div>

          {/* Clean Google Maps Embed (No Business Parameter) */}
          <div className="relative min-h-[350px] overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48430.0899264147!2d-74.24888285!3d40.6639893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24d4e33d288d3%3A0xbcfd69b3ee42ba2!2sElizabeth%2C%20NJ!5e0!3m2!1sen!2sus!4v1716000000000!5m2!1sen!2sus"
              title="Map centered on Elizabeth, NJ showing primary service zone"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Surrounding Communities Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-navy-900">
            Genuinely Served Surrounding Communities
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {LANDING_SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-navy-50/50 p-5 transition hover:border-ocean-300 hover:bg-white hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-ocean-600 shrink-0" aria-hidden="true" />
                    <h4 className="font-extrabold text-navy-900 text-sm">{area.name}</h4>
                  </div>
                  <p className="text-xs font-semibold text-ocean-700 pl-6">
                    ZIP: {area.zip}
                  </p>
                </div>
                <p className="text-[11px] text-navy-500 pl-6 pt-2">
                  {area.distanceNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
