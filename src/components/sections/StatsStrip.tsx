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
      <div className={`${CONTAINER_CLASS} space-y-8`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.label} className="space-y-2">
                <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[10px] uppercase tracking-[1px] text-transparent sm:text-[12px]">
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
          <div className="space-y-3 text-center lg:text-right">
            <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[10px] uppercase tracking-[0.2em] text-transparent sm:text-[12px]">
              SECURITY. AUDITED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-end">
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
