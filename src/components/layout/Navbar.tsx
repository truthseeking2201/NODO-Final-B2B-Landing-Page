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
