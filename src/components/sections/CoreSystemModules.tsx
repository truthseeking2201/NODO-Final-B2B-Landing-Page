import UnicornScene from 'unicornstudio-react';
import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';

const modules = [
  {
    eyebrow: 'Pool Data API',
    title: 'Data Infrastructure',
    copy: 'Tick-level liquidity, swap, and price data for 100+ Sui pairs, more precise than public aggregators like Noodles Finance.',
    projectId: 'qVpEb6GZHFHF86g2rSzV'
  },
  {
    eyebrow: 'Simulation SDK',
    title: 'Execution Infrastructure',
    copy: 'Run backtesting and local stress tests while modeling LP and lending strategies across all MMT pairs.',
    projectId: 'eFyRin8jzyMMxLSCwy0Z'
  },
  {
    eyebrow: 'Vault Deployment API',
    title: 'Simulation Infrastructure',
    copy: 'Deploy Sui strategies with defined risk and fee parameters, going from model to mainnet in 24 hours.',
    projectId: 'NrZTfHmEA36YXD7rYgWY'
  },
  {
    eyebrow: 'Vault Deployment API',
    title: 'Protocol Coverage',
    copy: 'A unified schema for major LP and lending markets that simplifies multi-protocol strategy execution.',
    projectId: 'IOd61zU8aDQWTyC9gjYt'
  }
];

export default function CoreSystemModules() {
  return (
    <section className={SECTION_SPACING_CLASS} id="product">
      <div className={`${CONTAINER_CLASS} space-y-16`}>
        <div className="max-w-2xl space-y-4">
          <h2 className="text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">Core System Modules</h2>
          <p className="text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
            We engineered the model that powers NODO’s high-performance vault stack
          </p>
        </div>
        <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
          {modules.map(({ title, copy, eyebrow, projectId }) => (
            <article key={title} className="space-y-6">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[10px] uppercase tracking-[1px] text-transparent sm:text-[12px]">
                    {eyebrow}
                  </p>
                  <h3 className="font-dm text-[22px] font-medium leading-[1.2] tracking-[-0.84px] text-white sm:text-[24px] lg:text-[28px]">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-white/70 tracking-[0.16px] sm:text-base">{copy}</p>
              </div>
              <UnicornScene
                key={projectId}
                projectId={projectId}
                width="100%"
                height="330px"
                scale={1}
                dpi={2}
                ariaLabel={`${title} scene`}
                className="h-[330px] w-full rounded-none"
                lazyLoad
              />
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-6 rounded-[999px] border border-white/10 bg-white/5 px-8 py-6 text-left lg:flex-row lg:items-center lg:justify-between">
          <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[16px] uppercase tracking-[1px] text-transparent sm:text-[18px] lg:text-[20px]">
            Want to know more?
          </p>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-4 border-white/30">
              <img src="/images/alden.png" alt="Alden" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold leading-tight">Talk to Alden</p>
              <p className="text-sm text-white/60">Infrastructure specialist</p>
            </div>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            href="#contact"
          >
            Talk Now
          </a>
        </div>
      </div>
    </section>
  );
}
