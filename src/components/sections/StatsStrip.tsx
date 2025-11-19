import { CONTAINER_CLASS } from '../../constants/layout';

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

export default function StatsStrip() {
  return (
    <section className="pb-12 pt-4">
      <div className={`${CONTAINER_CLASS} mx-auto w-full max-w-5xl px-4`}>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-8 lg:gap-10">
            {stats.map((stat) => (
              <article key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">{stat.label}</p>
                <p className="text-2xl font-semibold leading-tight text-white sm:text-[28px]">
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
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">Security. Audited by</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
