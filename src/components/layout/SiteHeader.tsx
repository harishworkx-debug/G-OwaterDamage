import { useEffect, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import Logo from '@/components/layout/Logo';
import NavDropdown from '@/components/layout/NavDropdown';
import CallButton from '@/components/ui/CallButton';

const serviceItems = services.map((service) => ({ label: service.name, to: service.path }));
const areaItems = serviceAreas.map((area) => ({ label: area.name, to: area.path }));

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
    isActive ? 'text-white' : 'text-white/85'
  }`;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 bg-navy-900 transition duration-300 ${
        scrolled ? 'shadow-lg shadow-navy-950/30' : ''
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavDropdown
            label="Services"
            items={serviceItems}
            overview={{ label: 'All water damage services', to: '/services' }}
          />
          <NavDropdown
            label="Service Areas"
            items={areaItems}
            columns={2}
            overview={{ label: 'All service areas', to: '/service-areas' }}
          />
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/reviews" className={navLinkClass}>
            Reviews
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <CallButton label={`Call ${business.phoneDisplay}`} className="hidden px-5 py-2.5 text-sm md:inline-flex" />
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-navy-900 lg:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
          <MobileLink to="/" onNavigate={() => setMenuOpen(false)}>
            Home
          </MobileLink>
          <p className="px-4 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Services</p>
          <MobileLink to="/services" onNavigate={() => setMenuOpen(false)}>
            All Services
          </MobileLink>
          {serviceItems.map((item) => (
            <MobileLink key={item.to} to={item.to} onNavigate={() => setMenuOpen(false)}>
              {item.label}
            </MobileLink>
          ))}
          <p className="px-4 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Service Areas</p>
          <MobileLink to="/service-areas" onNavigate={() => setMenuOpen(false)}>
            All Service Areas
          </MobileLink>
          {areaItems.map((item) => (
            <MobileLink key={item.to} to={item.to} onNavigate={() => setMenuOpen(false)}>
              {item.label}
            </MobileLink>
          ))}
          <MobileLink to="/about" onNavigate={() => setMenuOpen(false)}>
            About Us
          </MobileLink>
          <MobileLink to="/reviews" onNavigate={() => setMenuOpen(false)}>
            Reviews
          </MobileLink>
          <MobileLink to="/contact" onNavigate={() => setMenuOpen(false)}>
            Contact
          </MobileLink>
          <CallButton className="mt-4 w-full" />
        </nav>
      </div>
    </header>
  );
}

interface MobileLinkProps {
  to: string;
  onNavigate: () => void;
  children: ReactNode;
}

function MobileLink({ to, onNavigate, children }: MobileLinkProps) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="rounded-xl px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
