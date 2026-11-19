import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import {
  LANDING_IDENTITY,
  LANDING_SERVICES,
  LANDING_SERVICE_AREAS,
} from '../data';
import type { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialSelectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSelectedService,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    city: 'Elizabeth',
    serviceNeeded: initialSelectedService || LANDING_SERVICES[0].title,
    urgency: 'Immediate Dispatch Needed',
    notes: '',
  });

  useEffect(() => {
    if (initialSelectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: initialSelectedService,
      }));
    }
  }, [initialSelectedService]);

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.city.trim()) {
      errs.city = 'Please specify your municipality';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local processing without requiring an external backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      city: 'Elizabeth',
      serviceNeeded: LANDING_SERVICES[0].title,
      urgency: 'Immediate Dispatch Needed',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            Direct Local Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request Rapid Water Damage Assistance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            For active water leaks and standing water, call our dispatch line immediately for priority response. You may also submit our service form below for a rapid callback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Box */}
            <div className="rounded-2xl bg-gradient-to-br from-sky-900 via-slate-900 to-sky-950 text-white p-7 sm:p-8 shadow-xl border border-sky-800/40">
              <div className="flex items-center gap-3 text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Dispatch Line
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Direct Emergency Phone
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Connect with our local mitigation coordinators for immediate phone triage and crew dispatch.
              </p>

              <a
                href={LANDING_IDENTITY.phoneHref}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xl sm:text-2xl transition shadow-lg mb-4"
              >
                <PhoneCall className="w-6 h-6 flex-shrink-0" />
                <span>{LANDING_IDENTITY.phoneDisplay}</span>
              </a>

              <p className="text-center text-xs text-slate-400">
                Direct dial &bull; No automated switchboard &bull; Elizabeth-based
              </p>
            </div>

            {/* Address & Hours Box */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 text-sky-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Physical Location</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    {LANDING_IDENTITY.fullAddress}
                  </p>
                  <p className="text-xs text-sky-700 font-medium mt-1">
                    Serving Union County & Southern Essex County
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 text-sky-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Service Availability</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Emergency phone consultations and rapid moisture triage dispatched locally.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 text-sky-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Professional Standards</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    ANSI/IICRC S500 Standard of Care compliance for water extraction and structural drying.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Service Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-7 sm:p-9">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Service Inquiry Received
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.serviceNeeded}</strong> in <strong>{formData.city}</strong> has been logged.
                  </p>
                  <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 max-w-md mx-auto text-sm text-sky-900">
                    <p className="font-semibold mb-1">Need Immediate Water Extraction?</p>
                    <p className="text-xs text-sky-700 mb-3">
                      If active water is spreading across flooring or ceilings, please call us directly for instantaneous dispatch.
                    </p>
                    <a
                      href={LANDING_IDENTITY.phoneHref}
                      className="inline-flex items-center gap-2 font-bold text-sky-800 hover:text-sky-950 underline"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call {LANDING_IDENTITY.phoneDisplay} Now
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-block mt-4 text-sm text-slate-500 hover:text-slate-800 font-medium underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Service Request & Callback Form
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Fill out the details below and our Elizabeth team will follow up promptly.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-300 focus:ring-sky-500/30 focus:border-sky-600'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(908) 555-0123"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-300 focus:ring-sky-500/30 focus:border-sky-600'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* City and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Municipality *
                      </label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600 bg-white"
                      >
                        {LANDING_SERVICE_AREAS.map((area) => (
                          <option key={area.name} value={area.name}>
                            {area.name} ({area.zip})
                          </option>
                        ))}
                        <option value="Other Union County">Other Union County</option>
                        <option value="Other Essex County">Other Essex County</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600 bg-white"
                      >
                        {LANDING_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label htmlFor="urgency" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600 bg-white"
                    >
                      <option value="Immediate Dispatch Needed">Immediate Dispatch Needed (Active Water / Flood)</option>
                      <option value="Same Day Assessment">Same Day Assessment (Within Next Few Hours)</option>
                      <option value="Next 24 Hours">Next 24 Hours</option>
                      <option value="General Inspection / Inquiry">General Inspection / Non-Emergency Question</option>
                    </select>
                  </div>

                  {/* Notes / Description */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Damage Description (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., Burst pipe under sink flooded kitchen subfloor, water leaking into basement ceiling..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-sky-700 hover:bg-sky-800 disabled:bg-slate-400 text-white font-bold text-base transition shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Restoration Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 pt-1">
                    We respect your privacy. Contact information is used solely to respond to your restoration request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
