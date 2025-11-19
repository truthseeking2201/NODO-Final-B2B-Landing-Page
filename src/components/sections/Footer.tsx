import { CONTAINER_CLASS } from '../../constants/layout';

const auditPartners = [
  { name: 'QuillAudits', src: '/images/logo-quillaudits.png' },
  { name: 'hashlock', src: '/images/logo-hashlock.png' },
  { name: 'Hypernative', src: '/images/logo-hypernative.png' }
];

const quickLinks = [
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' }
];

const socialIcons = ['/images/social-1.png', '/images/social-2.png', '/images/social-3.png', '/images/social-4.png'];

export default function Footer() {
  return (
    <footer className="bg-[#161617] pt-16 text-sm text-white">
      <div className={`${CONTAINER_CLASS} space-y-16`}>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <img src="/images/nodo-logo.png" alt="NODO" className="h-8 w-auto" />
            <p className="max-w-2xl text-white/70">
              NODO is an institutional-grade vault infrastructure layer on Sui, providing an AI-driven Risk Curation SDK
              for designing, testing, and deploying on-chain strategies. By unifying simulation, execution, and
              monitoring into a single framework, NODO enables teams to launch high-performance vaults with predictable
              risk, optimized parameters, and real-time on-chain observability.
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Audited by</p>
              <div className="flex flex-wrap items-center gap-8">
                {auditPartners.map((partner) => (
                  <img key={partner.name} src={partner.src} alt={partner.name} className="h-6 w-auto opacity-80" />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Navigation</p>
            <ul className="space-y-3 text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-black/30 p-8 text-center">
            <img src="/images/icon-globe.png" alt="Globe" className="mx-auto h-12 w-12" />
            <p className="mt-6 text-xl font-semibold">Follow Us</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              {socialIcons.map((icon, index) => (
                <img key={icon} src={icon} alt={`Social ${index + 1}`} className="h-9 w-9" />
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-black/30 p-8 text-center">
            <img src="/images/icon-mail.png" alt="Mail" className="mx-auto h-12 w-12" />
            <p className="mt-6 text-xl font-semibold">For customer support queries</p>
            <a
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-2 text-sm text-white transition hover:border-white"
              href="mailto:support@nodo.build"
            >
              Contact Support
            </a>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-black/30 p-8 text-center">
            <img src="/images/icon-briefcase.png" alt="Briefcase" className="mx-auto h-12 w-12" />
            <p className="mt-6 text-xl font-semibold">For partnership queries</p>
            <a
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-2 text-sm text-white transition hover:border-white"
              href="mailto:hello@nodo.build"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10">
        <div className={`${CONTAINER_CLASS} flex flex-col items-center justify-between gap-4 py-6 text-white/60 sm:flex-row`}>
          <p>© 2025 NODO. All rights reserved.</p>
          <div className="h-8 w-20 rounded-full border border-white/30" />
        </div>
      </div>
    </footer>
  );
}
