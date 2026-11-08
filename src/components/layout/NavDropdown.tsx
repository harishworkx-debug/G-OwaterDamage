import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface NavItem {
  label: string;
  to: string;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  overview?: NavItem;
}

export default function NavDropdown({ label, items, overview }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    return () => document.removeEventListener('mousedown', handlePointer);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        className={`absolute left-0 top-full z-50 pt-3 transition duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="flex max-h-[calc(100vh-6rem)] w-72 flex-col rounded-2xl border border-navy-100 bg-white p-2 shadow-2xl shadow-navy-950/20">
          <div className="overflow-y-auto pr-1">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-ocean-50 hover:text-ocean-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {overview && (
            <Link
              to={overview.to}
              onClick={() => setOpen(false)}
              className="mt-1 block shrink-0 rounded-xl border-t border-navy-100 px-4 py-3 text-sm font-extrabold text-ocean-700 transition hover:bg-ocean-50"
            >
              {overview.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
