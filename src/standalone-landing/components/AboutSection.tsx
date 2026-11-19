import { Building2, CloudRain, ShieldCheck, ThermometerSnowflake } from 'lucide-react';
import { LANDING_IDENTITY } from '../data';

export default function AboutSection() {
  const challenges = [
    {
      icon: CloudRain,
      title: 'Elizabeth River & Coastal Inundation',
      desc: 'Proximity to the Elizabeth River basin and Newark Bay creates high regional water tables during nor’easters, testing basement drainage sumps and foundation barriers.',
    },
    {
      icon: Building2,
      title: 'Historic Union County Architecture',
      desc: 'Older residences throughout Elizabeth and Elizabethport feature multi-layered lath and plaster, heart-pine framing, and masonry foundations that require controlled, specialized drying.',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Sub-Freezing Winter Pipe Stress',
      desc: 'Harsh New Jersey winter freezes frequently burst uninsulated plumbing lines within exterior wall cavities and crawl spaces, releasing hundreds of gallons under pressure.',
    },
    {
      icon: ShieldCheck,
      title: 'ANSI / IICRC S500 Standards',
      desc: 'All structural drying protocols adhere strictly to the ANSI/IICRC S500 standard of care, maintaining verifiable moisture records and scientific drying goals throughout.',
    },
  ];

  return (
    <section id="about" className="bg-navy-50/70 py-20 md:py-28 scroll-mt-20">
      <div className="container-page space-y-16">
        {/* Section Heading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-ocean-700">
              Regional Expertise &amp; Building Standards
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
              Understanding Local Water Challenges in {LANDING_IDENTITY.location}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-navy-600 sm:text-lg">
            Water mitigation is not one-size-fits-all. Successful structural recovery requires
            deep knowledge of regional weather events, soil hydrology, and the diverse residential
            and commercial construction styles found across Union County.
          </p>
        </div>

        {/* 4 Regional Challenge Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-ocean-300"
            >
              <div className="space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-extrabold text-navy-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Local Service Base Highlight */}
        <div className="rounded-3xl border border-ocean-200 bg-gradient-to-br from-white to-ocean-50/50 p-8 md:p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-700">
                Service Coordination Hub
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900">
                Direct Dispatch from {LANDING_IDENTITY.streetAddress}
              </h3>
              <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
                Centrally positioned in {LANDING_IDENTITY.neighborhood}, technicians deploy directly
                to active water emergencies throughout Elizabeth, Linden, Roselle, and surrounding
                municipalities to initiate early extraction before secondary mold growth develops.
              </p>
            </div>
            <a
              href={LANDING_IDENTITY.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition hover:bg-navy-800 shrink-0"
            >
              Call {LANDING_IDENTITY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
