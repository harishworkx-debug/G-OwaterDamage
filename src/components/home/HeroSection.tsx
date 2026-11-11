import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '@/data/business';
import CallButton from '@/components/ui/CallButton';

const heroImage =
  'https://images.pexels.com/photos/28447774/pexels-photo-28447774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-navy-950 text-white">
      <img
        src={heroImage}
        alt="A suburban home surrounded by floodwater after heavy rain"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" aria-hidden="true" />

      <div className="container-page py-24 md:py-32">
        <div className="max-w-2xl space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-navy-950/60 px-4 py-2 text-sm font-semibold text-cyan-100 animate-fade-up">
            Serving Elizabethport and Elizabeth, NJ
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.1] md:text-6xl animate-fade-up [animation-delay:120ms]">
            Water Damage Restoration in Elizabeth, NJ
          </h1>
          <p className="max-w-xl text-lg leading-[1.5] text-navy-100 animate-fade-up [animation-delay:240ms]">
            Looking for a dependable water damage company in Elizabeth, NJ? Call G&amp;OwaterDamage for emergency water damage restoration, standing water removal, and structural drying when leaks or flooding hit.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row animate-fade-up [animation-delay:360ms]">
            <CallButton className="animate-pulse-ring" />
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Explore Water Damage Services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-navy-200 transition hover:text-white animate-fade-up [animation-delay:480ms]"
          >
            <Phone className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            Phone {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
