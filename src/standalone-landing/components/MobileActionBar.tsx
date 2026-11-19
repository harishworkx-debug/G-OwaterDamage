import React from 'react';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { LANDING_IDENTITY } from '../data';

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={LANDING_IDENTITY.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition"
        >
          <PhoneCall className="w-4 h-4 flex-shrink-0 animate-bounce" />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold text-sm shadow-md transition"
        >
          <CalendarCheck className="w-4 h-4 flex-shrink-0" />
          <span>Get Callback</span>
        </a>
      </div>
    </aside>
  );
};
