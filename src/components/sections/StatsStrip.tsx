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
    <section className="pb-16 pt-4">
      <div className={`${CONTAINER_CLASS} mx-auto w-full max-w-6xl px-6`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-10 lg:gap-16">
            {stats.map((stat) => (
              <article key={stat.label} className="flex flex-col gap-2 text-left sm:text-left">
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
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">Security. Audited by</span>
            <div className="flex items-center gap-4">
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
