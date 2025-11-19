import { CONTAINER_CLASS } from '../../constants/layout';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Security', href: '#security' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Deployment', href: '#deployment' }
];

export default function Navbar() {
  return (
    <header className="py-6">
      <div className={`${CONTAINER_CLASS} flex items-center justify-between gap-6`}>
        <a className="inline-flex items-center" href="#hero" aria-label="NODO home">
          <img src="/images/nodo-logo.png" alt="NODO" className="h-8 w-auto" />
        </a>
        <nav
          className="hidden items-center gap-12 text-xs font-semibold uppercase tracking-[0.45em] text-white/40 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition ${index === 0 ? 'text-white' : ''} hover:text-white`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
          href="#contact"
        >
          Launch App
        </a>
      </div>
    </header>
  );
}
