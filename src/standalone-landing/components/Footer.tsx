import React from 'react';
import { PhoneCall, MapPin, Droplets, ShieldCheck } from 'lucide-react';
import { LANDING_IDENTITY } from '../data';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg leading-tight tracking-tight">
                {LANDING_IDENTITY.shortTitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional emergency water extraction, structural drying, basement pumping, and moisture diagnostics serving Elizabeth, Elizabethport, and surrounding Union County communities.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ANSI/IICRC S500 Drying Protocol</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Restoration Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Extraction & Drying Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Regional Moisture Control
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white transition">
                  Union County Service Areas
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition">
                  Our Restoration Standards
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Request Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Emergency Standing Water Pumping</li>
              <li>Subfloor & Wall Cavity Drying</li>
              <li>Flooded Basement Remediation</li>
              <li>Burst Plumbing Pipe Containment</li>
              <li>Overland Storm Flood Cleanup</li>
              <li>Calibrated Moisture Pin Diagnostics</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Physical Dispatch Desk
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
              <span>{LANDING_IDENTITY.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 pt-1">
              <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="font-bold text-white hover:text-amber-400 transition"
              >
                {LANDING_IDENTITY.phoneDisplay}
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-2">
              Serving Elizabeth, Linden, Roselle, Roselle Park, Hillside, Union, Rahway, Cranford, and Newark.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; 2026 {LANDING_IDENTITY.shortTitle}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-4 transition"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white underline underline-offset-4 transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
