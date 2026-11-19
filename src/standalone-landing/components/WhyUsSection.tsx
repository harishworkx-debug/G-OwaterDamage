import React from 'react';
import { PhoneCall, ShieldCheck, ClipboardCheck, Gauge, CheckCircle2 } from 'lucide-react';
import { LANDING_PILLARS, LANDING_IDENTITY } from '../data';

const getPillarIcon = (name: string) => {
  switch (name) {
    case 'phone':
      return <PhoneCall className="w-7 h-7 text-sky-600" />;
    case 'shield':
      return <ShieldCheck className="w-7 h-7 text-sky-600" />;
    case 'check':
      return <ClipboardCheck className="w-7 h-7 text-sky-600" />;
    case 'gauge':
      return <Gauge className="w-7 h-7 text-sky-600" />;
    default:
      return <CheckCircle2 className="w-7 h-7 text-sky-600" />;
  }
};

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            Reliable Restoration Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Property Owners Choose Us in Elizabeth & Union County
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            When water threatens your home or business, you need direct local accountability, scientific moisture monitoring, and honest guidance—not aggressive sales tactics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {LANDING_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="relative p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                {getPillarIcon(pillar.iconName)}
              </div>
              <div>
                <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-1">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Local Commitment Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Protect Your Property Against Secondary Mold & Structural Loss?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Call our Elizabeth dispatch desk now for direct mitigation guidance or submit your details for an immediate follow-up.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href={LANDING_IDENTITY.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-lg text-base"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition text-base"
            >
              Request Service Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
