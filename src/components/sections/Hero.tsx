import UnicornScene from 'unicornstudio-react';

import AnimatedButton from '../AnimatedButton';

const stats = [
  { label: 'Secured', value: '$1.2B+' },
  { label: 'Launch Time', value: '< 3 Weeks' },
  { label: 'DeFi & custody', value: '15+ integrations' }
];

const securityPartners = [
  { name: 'QuillAudits', src: '/images/logo-quillaudits.png', width: 124 },
  { name: 'hashlock', src: '/images/logo-hashlock.png', width: 118 },
  { name: 'Hypernative', src: '/images/logo-hypernative.png', width: 140 }
];

const heroProjectId = import.meta.env.VITE_HERO_UNICORN_PROJECT_ID?.trim() || '4pakEuw9jP3bn9LCI0sZ';

export default function Hero() {
  return (
    <section className="py-0" id="hero">
      <div className="mx-auto w-full max-w-[1376px] px-4 lg:px-0">
        <div className="relative h-[700px] overflow-hidden rounded-none border border-white/15 bg-black/70">
          <div className="pointer-events-none absolute inset-0">
            <UnicornScene
              key={heroProjectId}
              projectId={heroProjectId}
              width="100%"
              height="700px"
              lazyLoad
              scale={1}
              dpi={2}
              ariaLabel="Hero background scene"
            />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="flex flex-col items-center gap-9 pb-9 lg:flex-1 lg:justify-center lg:pb-0">
              <h1 className="text-[32px] font-medium leading-[1.08] sm:text-[40px] sm:leading-[1.05] lg:text-[48px] lg:leading-[1.03]">
                Institutional Grade AI-Driven <br /> Vault Architecture
              </h1>
              <p className="max-w-2xl text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
                NODO delivers an AI-driven Risk Curation SDK – modular APIs and infrastructure for deploying and managing
                vault strategies across Sui
              </p>
              <AnimatedButton label="Launch App" href="#contact" className="text-sm sm:text-base" />
            </div>
            <div className="flex flex-col gap-6 text-left lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="space-y-6 lg:max-w-2xl">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12 lg:gap-16">
                  {stats.map((stat) => (
                    <article key={stat.label} className="flex flex-col items-center gap-1 text-center">
                      <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[10px] font-medium uppercase tracking-[1px] text-transparent whitespace-nowrap sm:text-[12px]">
                        {stat.label}
                      </p>
                      <p className="text-[22px] font-medium leading-[1.2] tracking-[-0.84px] text-white sm:text-[24px] lg:text-[28px]">
                        {stat.value.includes('$') ? (
                          <>
                            <span className="text-white/50">$</span>
                            {stat.value.replace('$', '')}
                          </>
                        ) : (
                          stat.value
                        )}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 text-white/70 sm:items-center lg:items-center">
                <span className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-center text-[10px] font-medium uppercase tracking-[1px] text-transparent sm:text-[12px]">
                  SECURITY. AUDITED BY
                </span>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {securityPartners.map((partner) => (
                    <img
                      key={partner.name}
                      src={partner.src}
                      alt={partner.name}
                      className="h-6 w-auto opacity-80"
                      style={{ maxWidth: partner.width }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
