import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { LANDING_FAQS, LANDING_IDENTITY } from '../data';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Questions About Water Damage Restoration in Elizabeth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, honest answers regarding response windows, moisture verification, drying equipment, and property safety.
          </p>
        </div>

        <div className="space-y-4">
          {LANDING_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-base sm:text-lg font-semibold text-slate-900 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed border-t border-slate-100 text-sm sm:text-base"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-white rounded-xl border border-slate-200 max-w-2xl mx-auto shadow-sm">
          <p className="text-slate-700 font-medium mb-3">
            Have a specific water loss question or active flood in your building?
          </p>
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-bold hover:underline"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Speak directly with an Elizabeth specialist at {LANDING_IDENTITY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
