import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { LANDING_IDENTITY } from '../data';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <ShieldAlert className="w-5 h-5 text-sky-600" />
            ) : (
              <FileText className="w-5 h-5 text-sky-600" />
            )}
            <h3 id="modal-title" className="text-lg font-bold text-slate-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                This Privacy Policy describes how information is collected, used, and safeguarded when you visit or submit an inquiry through this local service page for{' '}
                <strong>{LANDING_IDENTITY.fullTitle}</strong> ({LANDING_IDENTITY.fullAddress}).
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When you call us or submit our service inquiry form, we collect the contact details you provide voluntarily, including your name, telephone number, city or municipality, property type, and details regarding your water damage event.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">2. How We Use Information</h4>
              <p>
                Your information is strictly used for the operational purpose of responding to your emergency water extraction or structural drying request, dispatching restoration equipment, providing assessments, and communicating directly with you. We do not sell, rent, or trade your personal information to third-party marketing companies.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">3. Communications & Calls</h4>
              <p>
                By placing a telephone call to {LANDING_IDENTITY.phoneDisplay} or submitting an inquiry form, you consent to receive direct voice calls or SMS communications regarding your restoration assessment and scheduling.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">4. Contact & Inquiries</h4>
              <p>
                For questions regarding this privacy policy or your information, please contact our dispatch team at {LANDING_IDENTITY.fullAddress} or call {LANDING_IDENTITY.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                These Terms of Service govern your use of the web page and emergency service consultation provided by{' '}
                <strong>{LANDING_IDENTITY.fullTitle}</strong>.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">1. Emergency Service Dispatch & Estimates</h4>
              <p>
                Submitting a web inquiry does not establish an automatic contractual guarantee until direct phone confirmation occurs and on-site scope verification is authorized by the property owner or authorized representative.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">2. Safety Notice</h4>
              <p>
                Water damage situations can present electrocution hazards, structural weakening, or biohazard contamination (Category 3 water). Property occupants must exercise utmost caution and avoid entering standing water zones where electrical wiring or outlets are submerged.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">3. Insurance & Work Authorization</h4>
              <p>
                Property owners are responsible for reviewing insurance policy endorsements, deductibles, and coverages. Direct scope authorization is signed on-site prior to structural drying and equipment staging.
              </p>
              <h4 className="text-base font-semibold text-slate-900 pt-2">4. Service Area</h4>
              <p>
                Our physical dispatch base is located at {LANDING_IDENTITY.fullAddress}, primarily serving Elizabeth, Elizabethport, and adjacent Union and Essex County communities.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
