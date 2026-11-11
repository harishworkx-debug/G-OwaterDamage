import { Link } from 'react-router-dom';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import Logo from '@/components/layout/Logo';

const companyLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'About Us', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Blog & Guides', to: '/blog' },
  { label: 'Contact Information', to: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-950 pb-28 pt-16 text-navy-100 md:pb-16">
      <div className="container-page grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-sm leading-[1.5] text-navy-200">
            Water damage restoration for homes and businesses in Elizabeth and Elizabethport, NJ.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 text-lg font-extrabold text-cyan-200 transition hover:text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">Services</h2>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path} className="transition hover:text-white">
                  {service.name} in Elizabeth, NJ
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">Company</h2>
          <ul className="space-y-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">Visit</h2>
          <p className="flex gap-3 text-sm leading-[1.5]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
            <span>{business.addressLine}</span>
          </p>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            View our Google Maps listing
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container-page mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-navy-300 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 G&amp;OwaterDamage. All rights reserved.</p>
      </div>
    </footer>
  );
}
