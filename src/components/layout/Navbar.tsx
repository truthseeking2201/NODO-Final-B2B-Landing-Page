import { useState } from 'react';

import AnimatedButton from '../AnimatedButton';
import { CONTAINER_CLASS } from '../../constants/layout';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Security', href: '#security' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Deployment', href: '#deployment' }
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 py-4 backdrop-blur-md backdrop-saturate-150">
      <div className={`${CONTAINER_CLASS} flex items-center justify-between gap-6`}>
        <a className="inline-flex items-center" href="#hero" aria-label="NODO home">
          <img src="/images/nodo-logo.png" alt="NODO" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-12 lg:flex" aria-label="Primary">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? 'page' : undefined}
              className={`text-center font-mono text-[14px] font-normal uppercase leading-[140%] tracking-[1.26px] text-white transition-opacity focus-visible:opacity-100 ${
                index === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            Explore
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className={`h-3.5 w-3.5 text-white transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="m4 6 4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <AnimatedButton label="Launch App" href="#contact" className="text-sm whitespace-nowrap" />
        </div>
      </div>
      <div
        className={`${CONTAINER_CLASS} pt-3 lg:hidden ${isMobileNavOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMobileNavOpen}
      >
        <nav
          id="mobile-menu"
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-3 shadow-xl"
          aria-label="Primary mobile"
        >
          {navLinks.map((link, index) => (
            <a
              key={`${link.label}-mobile`}
              href={link.href}
              aria-current={index === 0 ? 'page' : undefined}
              onClick={() => setIsMobileNavOpen(false)}
              className="flex-shrink-0 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
