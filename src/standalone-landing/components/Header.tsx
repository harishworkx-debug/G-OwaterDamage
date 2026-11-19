import { useState, useEffect } from 'react';
import { Droplets, Menu, Phone, X } from 'lucide-react';
import { LANDING_IDENTITY } from '../data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Local Context', href: '#about' },
    { label: 'Service Areas', href: '#service-area' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 py-3 shadow-xl backdrop-blur-md border-b border-white/10'
          : 'bg-navy-950 py-4 border-b border-white/5'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        {/* Text-based Identity (Strictly Service + Location) */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label={`${LANDING_IDENTITY.fullTitle} Home`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-ocean-500 text-navy-950 shadow-md shadow-cyan-500/20">
            <Droplets className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              {LANDING_IDENTITY.niche}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              {LANDING_IDENTITY.location}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Landing Page Navigation" className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-navy-100 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Direct Phone CTA */}
        <div className="flex items-center gap-3">
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-extrabold text-navy-950 shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">Call</span> {LANDING_IDENTITY.phoneDisplay}
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden transition hover:bg-white/10"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-950 px-6 py-5 lg:hidden animate-fade-up">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LANDING_IDENTITY.phoneHref}
              onClick={handleNavClick}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-base font-extrabold text-navy-950"
            >
              <Phone className="h-5 w-5" />
              Call {LANDING_IDENTITY.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
